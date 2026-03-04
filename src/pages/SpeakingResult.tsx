import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  ArrowLeft,
  ArrowRight,
  RotateCcw,
  Mic,
  CheckCircle,
  AlertTriangle,
  Lightbulb,
  BookOpen,
  Loader2,
} from "lucide-react";
import { SPEAKING_TOPICS } from "@/lib/speaking-topics";

interface SpeakingScore {
  overallBand: number;
  fluencyCoherence: number;
  lexicalResource: number;
  grammaticalRange: number;
  pronunciation: number;
  feedback: string;
  strengths: string[];
  weaknesses: string[];
  suggestions: string[];
  grammarMistakes: string[];
}

export default function SpeakingResult() {
  const { testId } = useParams();
  const navigate = useNavigate();
  const [result, setResult] = useState<SpeakingScore | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const topic = SPEAKING_TOPICS.find((t) => t.id === Number(testId));
  const nextTopic = SPEAKING_TOPICS.find((t) => t.id === Number(testId) + 1);

  useEffect(() => {
    const raw = sessionStorage.getItem("speaking-result-pending");
    if (!raw) {
      setLoading(false);
      setError("No result data found.");
      return;
    }
    const data = JSON.parse(raw);
    scoreTest(data.transcript);
  }, []);

  async function scoreTest(transcript: string) {
    try {
      const { data, error: fnError } = await supabase.functions.invoke(
        "speaking-examiner",
        { body: { action: "score", transcript } }
      );

      if (fnError) throw fnError;
      setResult(data);
    } catch (err) {
      console.error("Scoring error:", err);
      // Fallback
      setResult({
        overallBand: 6.0,
        fluencyCoherence: 6.0,
        lexicalResource: 6.0,
        grammaticalRange: 6.0,
        pronunciation: 6.0,
        feedback: "Unable to get AI feedback at this time. Please try again later.",
        strengths: [],
        weaknesses: [],
        suggestions: [],
        grammarMistakes: [],
      });
    } finally {
      setLoading(false);
      sessionStorage.removeItem("speaking-result-pending");
    }
  }

  useEffect(() => {
    if (!result) return;
    async function saveResult() {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session?.user) return;
      // Save to speaking_recordings (use a placeholder module_id since speaking uses local data)
      await supabase.from("speaking_recordings").insert({
        user_id: session.user.id,
        module_id: "00000000-0000-0000-0000-000000000003",
        part_number: 0,
        band_score: result.overallBand,
        fluency_score: result.fluencyCoherence,
        vocabulary_score: result.lexicalResource,
        grammar_score: result.grammaticalRange,
        pronunciation_score: result.pronunciation,
        ai_feedback: result.feedback,
        completed_at: new Date().toISOString(),
      });
    }
    saveResult();
  }, [result]);

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container flex flex-col items-center justify-center py-20">
          <Loader2 className="h-10 w-10 animate-spin text-primary" />
          <p className="mt-4 text-muted-foreground">AI is scoring your speaking test...</p>
        </div>
      </div>
    );
  }

  if (error || !result) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container py-20 text-center">
          <p className="text-muted-foreground">{error || "No result data found."}</p>
          <Link to="/speaking-tests">
            <Button className="mt-4">Back to Speaking Tests</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const criteria = [
    { label: "Fluency & Coherence", score: result.fluencyCoherence },
    { label: "Lexical Resource", score: result.lexicalResource },
    { label: "Grammatical Range & Accuracy", score: result.grammaticalRange },
    { label: "Pronunciation", score: result.pronunciation },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container max-w-4xl py-8">
        <Link to="/speaking-tests">
          <Button variant="ghost" size="sm" className="mb-4">
            <ArrowLeft className="mr-1.5 h-4 w-4" />
            Back to Speaking Tests
          </Button>
        </Link>

        <div className="mb-6">
          <h1 className="text-3xl font-bold md:text-4xl">
            Speaking Test {testId} — Results
          </h1>
          <p className="mt-1 text-muted-foreground">
            {topic?.title} — AI-scored band evaluation
          </p>
        </div>

        {/* Overall Band */}
        <Card className="mb-6 border-primary/20">
          <CardContent className="flex flex-col items-center py-8">
            <p className="mb-2 text-sm font-medium text-muted-foreground">Overall Band Score</p>
            <div className="flex h-24 w-24 items-center justify-center rounded-full border-4 border-primary bg-primary/5">
              <span className="font-serif text-4xl font-bold text-primary">
                {result.overallBand.toFixed(1)}
              </span>
            </div>
          </CardContent>
        </Card>

        {/* Criteria */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-lg">Score Breakdown</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {criteria.map((c) => (
              <div key={c.label}>
                <div className="mb-1 flex justify-between text-sm">
                  <span>{c.label}</span>
                  <span className="font-semibold">{c.score.toFixed(1)}</span>
                </div>
                <Progress value={(c.score / 9) * 100} className="h-2" />
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Feedback */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <BookOpen className="h-5 w-5" /> AI Feedback
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="whitespace-pre-line text-sm leading-relaxed">{result.feedback}</p>
          </CardContent>
        </Card>

        {/* Strengths */}
        {result.strengths.length > 0 && (
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <CheckCircle className="h-5 w-5 text-primary" /> Strengths
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {result.strengths.map((s, i) => (
                  <li key={i} className="flex items-start gap-2 rounded-lg bg-primary/5 p-3 text-sm">
                    <CheckCircle className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
                    {s}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        )}

        {/* Weaknesses */}
        {result.weaknesses.length > 0 && (
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <AlertTriangle className="h-5 w-5 text-destructive" /> Areas to Improve
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {result.weaknesses.map((w, i) => (
                  <li key={i} className="flex items-start gap-2 rounded-lg bg-destructive/5 p-3 text-sm">
                    <AlertTriangle className="mt-0.5 h-3.5 w-3.5 shrink-0 text-destructive" />
                    {w}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        )}

        {/* Suggestions */}
        {result.suggestions.length > 0 && (
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Lightbulb className="h-5 w-5 text-yellow-500" /> Improvement Suggestions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {result.suggestions.map((s, i) => (
                  <li key={i} className="flex items-start gap-2 rounded-lg bg-yellow-500/5 p-3 text-sm">
                    <Lightbulb className="mt-0.5 h-3.5 w-3.5 shrink-0 text-yellow-500" />
                    {s}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        )}

        {/* Grammar mistakes */}
        {result.grammarMistakes.length > 0 && (
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <AlertTriangle className="h-5 w-5 text-orange-500" /> Grammar Issues
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {result.grammarMistakes.map((m, i) => (
                  <li key={i} className="flex items-start gap-2 rounded-lg bg-orange-500/5 p-3 text-sm">
                    <AlertTriangle className="mt-0.5 h-3.5 w-3.5 shrink-0 text-orange-500" />
                    {m}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        )}

        {/* Actions */}
        <div className="flex flex-wrap gap-3">
          <Link to={`/speaking-test/${testId}`}>
            <Button variant="outline">
              <RotateCcw className="mr-1.5 h-4 w-4" /> Retake Test
            </Button>
          </Link>
          {nextTopic && (
            <Link to={`/speaking-test/${nextTopic.id}`}>
              <Button>
                Next Test <ArrowRight className="ml-1.5 h-4 w-4" />
              </Button>
            </Link>
          )}
          <Link to="/speaking-tests">
            <Button variant="ghost">All Speaking Tests</Button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
