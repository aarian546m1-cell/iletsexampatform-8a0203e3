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
    const { messages, action, transcript } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY)
      throw new Error("LOVABLE_API_KEY is not configured");

    // Action: "score" = final scoring, default = conversation
    if (action === "score") {
      return await handleScoring(LOVABLE_API_KEY, transcript);
    }

    // Conversational examiner mode
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
          messages,
          stream: false,
        }),
      }
    );

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: "Rate limit exceeded. Please try again." }),
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
    const content = aiResponse.choices?.[0]?.message?.content || "";

    return new Response(JSON.stringify({ response: content }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (e) {
    console.error("speaking-examiner error:", e);
    return new Response(
      JSON.stringify({ error: e instanceof Error ? e.message : "Unknown error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});

async function handleScoring(apiKey: string, transcript: string) {
  const systemPrompt = `You are an expert IELTS examiner scoring a Speaking test. Analyze the full conversation transcript and provide scores.

You MUST respond with a valid JSON object (no markdown, no code fences):
{
  "overallBand": <number 0-9 in 0.5 increments>,
  "fluencyCoherence": <number 0-9 in 0.5 increments>,
  "lexicalResource": <number 0-9 in 0.5 increments>,
  "grammaticalRange": <number 0-9 in 0.5 increments>,
  "pronunciation": <number 0-9 in 0.5 increments>,
  "feedback": "<detailed paragraph about performance>",
  "strengths": ["<strength 1>", "<strength 2>", "<strength 3>"],
  "weaknesses": ["<weakness 1>", "<weakness 2>", "<weakness 3>"],
  "suggestions": ["<suggestion 1>", "<suggestion 2>", "<suggestion 3>"],
  "grammarMistakes": ["<mistake 1>", "<mistake 2>"]
}

Scoring guidelines:
- Overall band = average of 4 criteria rounded to nearest 0.5
- Be realistic: most students score 5.0–7.5
- Evaluate based on: fluency, vocabulary range, grammar accuracy, pronunciation clarity
- Note hesitations, self-corrections, repetitions
- Provide at least 3 each of strengths, weaknesses, suggestions`;

  const response = await fetch(
    "https://ai.gateway.lovable.dev/v1/chat/completions",
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: `Here is the full IELTS Speaking test transcript:\n\n${transcript}` },
        ],
        stream: false,
      }),
    }
  );

  if (!response.ok) {
    const errText = await response.text();
    console.error("Scoring error:", response.status, errText);
    throw new Error("AI scoring failed");
  }

  const aiResponse = await response.json();
  let content = aiResponse.choices?.[0]?.message?.content || "";
  content = content.replace(/```json\s*/g, "").replace(/```\s*/g, "").trim();
  const scored = JSON.parse(content);

  return new Response(JSON.stringify(scored), {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
      "Content-Type": "application/json",
    },
  });
}
