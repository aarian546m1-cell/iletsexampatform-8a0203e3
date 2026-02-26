import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

serve(async (req) => {
  if (req.method === "OPTIONS")
    return new Response(null, { headers: corsHeaders });

  try {
    const { task1Text, task2Text, task1Prompt, task2Prompt } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY)
      throw new Error("LOVABLE_API_KEY is not configured");

    const systemPrompt = `You are an expert IELTS examiner with 20+ years of experience. Score the following IELTS Academic Writing test using the official IELTS 9-band scale.

You MUST respond with a valid JSON object using this exact structure (no markdown, no code fences):
{
  "overallBand": <number 0-9 in 0.5 increments>,
  "taskAchievement": <number 0-9 in 0.5 increments>,
  "coherenceCohesion": <number 0-9 in 0.5 increments>,
  "lexicalResource": <number 0-9 in 0.5 increments>,
  "grammaticalRange": <number 0-9 in 0.5 increments>,
  "aiFeedback": "<detailed paragraph feedback covering strengths and weaknesses>",
  "grammarMistakes": ["<specific grammar error 1>", "<specific grammar error 2>", ...],
  "vocabularySuggestions": ["<suggestion 1>", "<suggestion 2>", ...],
  "weakAreas": ["<area to improve 1>", "<area to improve 2>", ...]
}

Scoring guidelines:
- The overall band is the average of the four criteria, rounded to nearest 0.5
- Task 1 contributes 1/3 and Task 2 contributes 2/3 of the overall score
- Be realistic and strict — most students score between 5.0 and 7.5
- If the response is very short or off-topic, score accordingly (4.0 or below)
- Provide at least 3 grammar mistakes, 3 vocabulary suggestions, and 3 weak areas
- Feedback should be constructive and specific`;

    const userPrompt = `## Task 1 Question:
${task1Prompt}

## Task 1 Response (${task1Text.trim().split(/\s+/).length} words):
${task1Text || "(No response provided)"}

## Task 2 Question:
${task2Prompt}

## Task 2 Response (${task2Text.trim().split(/\s+/).length} words):
${task2Text || "(No response provided)"}`;

    const response = await fetch(
      "https://ai.gateway.lovable.dev/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${LOVABLE_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "google/gemini-2.5-flash",
          messages: [
            { role: "system", content: systemPrompt },
            { role: "user", content: userPrompt },
          ],
          stream: false,
        }),
      }
    );

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: "Rate limit exceeded. Please try again in a moment." }),
          { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: "AI credits exhausted. Please add credits." }),
          { status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      const errText = await response.text();
      console.error("AI gateway error:", response.status, errText);
      throw new Error("AI gateway error");
    }

    const aiResponse = await response.json();
    let content = aiResponse.choices?.[0]?.message?.content || "";

    // Strip markdown code fences if present
    content = content.replace(/```json\s*/g, "").replace(/```\s*/g, "").trim();

    const scored = JSON.parse(content);

    return new Response(JSON.stringify(scored), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (e) {
    console.error("score-writing error:", e);
    return new Response(
      JSON.stringify({
        error: e instanceof Error ? e.message : "Unknown error",
      }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});
