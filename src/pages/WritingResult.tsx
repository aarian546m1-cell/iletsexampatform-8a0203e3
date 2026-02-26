import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  ArrowLeft,
  ArrowRight,
  RotateCcw,
  Clock,
  FileText,
  AlertTriangle,
  CheckCircle,
  Lightbulb,
  BookOpen,
} from "lucide-react";
import { WRITING_TESTS } from "@/lib/writing-tests-data";

interface ScoreResult {
  overallBand: number;
  taskAchievement: number;
  coherenceCohesion: number;
  lexicalResource: number;
  grammaticalRange: number;
  aiFeedback: string;
  grammarMistakes: string[];
  vocabularySuggestions: string[];
  weakAreas: string[];
}

export default function WritingResult() {
  const { testId } = useParams();
  const { user } = useAuth();
  const [result, setResult] = useState<ScoreResult | null>(null);
  const [loading, setLoading] = useState(true);
  const [pendingData, setPendingData] = useState<any>(null);

  const test = WRITING_TESTS.find((t) => t.id === Number(testId));
  const nextTest = WRITING_TESTS.find((t) => t.id === Number(testId) + 1);

  useEffect(() => {
    const raw = sessionStorage.getItem("writing-result-pending");
    if (!raw) {
      setLoading(false);
      return;
    }
    const data = JSON.parse(raw);
    setPendingData(data);
    scoreWriting(data);
  }, []);

  async function scoreWriting(data: any) {
    try {
      const { data: fnData, error } = await supabase.functions.invoke(
        "score-writing",
        {
          body: {
            task1Text: data.task1Text,
            task2Text: data.task2Text,
            task1Prompt:
              test?.task1.prompt || "",
            task2Prompt:
              test?.task2.prompt || "",
          },
        }
      );

      if (error) throw error;

      const scored: ScoreResult = fnData;
      setResult(scored);

      // Save to database if user is logged in
      if (user) {
        // We don't have a module_id for static tests, so we skip DB save for now
        // Could be extended later
      }
    } catch (err) {
      console.error("Scoring error:", err);
      // Fallback mock score
      setResult({
        overallBand: 6.0,
        taskAchievement: 6.0,
        coherenceCohesion: 6.0,
        lexicalResource: 6.0,
        grammaticalRange: 6.0,
        aiFeedback:
          "Unable to get AI feedback at this time. Please try again later.",
        grammarMistakes: [],
        vocabularySuggestions: [],
        weakAreas: [],
      });
    } finally {
      setLoading(false);
      sessionStorage.removeItem("writing-result-pending");
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container flex flex-col items-center justify-center py-20">
          <div className="h-10 w-10 animate-spin rounded-full border-4 border-primary border-t-transparent" />
          <p className="mt-4 text-muted-foreground">
            AI is scoring your writing...
          </p>
        </div>
      </div>
    );
  }

  if (!result || !pendingData) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container py-20 text-center">
          <p className="text-muted-foreground">No result data found.</p>
          <Link to="/writing-tests">
            <Button className="mt-4">Back to Writing Tests</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const timeMins = Math.floor(pendingData.timeTaken / 60);
  const timeSecs = pendingData.timeTaken % 60;

  const criteria = [
    { label: "Task Achievement", score: result.taskAchievement },
    { label: "Coherence & Cohesion", score: result.coherenceCohesion },
    { label: "Lexical Resource", score: result.lexicalResource },
    { label: "Grammatical Range", score: result.grammaticalRange },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container max-w-4xl py-8">
        <Link to="/writing-tests">
          <Button variant="ghost" size="sm" className="mb-4">
            <ArrowLeft className="mr-1.5 h-4 w-4" />
            Back to Writing Tests
          </Button>
        </Link>

        <div className="mb-6">
          <h1 className="text-3xl md:text-4xl">
            Test {testId} — Results
          </h1>
          <p className="mt-1 text-muted-foreground">
            AI-scored band evaluation of your writing
          </p>
        </div>

        {/* Overall Band */}
        <Card className="mb-6 border-primary/20">
          <CardContent className="flex flex-col items-center py-8">
            <p className="mb-2 text-sm font-medium text-muted-foreground">
              Overall Band Score
            </p>
            <div className="flex h-24 w-24 items-center justify-center rounded-full border-4 border-primary bg-primary/5">
              <span className="font-serif text-4xl font-bold text-primary">
                {result.overallBand.toFixed(1)}
              </span>
            </div>
          </CardContent>
        </Card>

        {/* Stats row */}
        <div className="mb-6 grid grid-cols-3 gap-4">
          <Card>
            <CardContent className="flex items-center gap-3 p-4">
              <FileText className="h-5 w-5 text-muted-foreground" />
              <div>
                <p className="text-xs text-muted-foreground">Task 1</p>
                <p className="font-semibold">{pendingData.wordCountTask1} words</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex items-center gap-3 p-4">
              <FileText className="h-5 w-5 text-muted-foreground" />
              <div>
                <p className="text-xs text-muted-foreground">Task 2</p>
                <p className="font-semibold">{pendingData.wordCountTask2} words</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex items-center gap-3 p-4">
              <Clock className="h-5 w-5 text-muted-foreground" />
              <div>
                <p className="text-xs text-muted-foreground">Time Spent</p>
                <p className="font-semibold">
                  {timeMins}m {timeSecs}s
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Criteria scores */}
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

        {/* AI Feedback */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <BookOpen className="h-5 w-5" />
              AI Feedback
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="whitespace-pre-line text-sm leading-relaxed text-foreground">
              {result.aiFeedback}
            </p>
          </CardContent>
        </Card>

        {/* Grammar mistakes */}
        {result.grammarMistakes.length > 0 && (
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <AlertTriangle className="h-5 w-5 text-destructive" />
                Grammar Issues
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {result.grammarMistakes.map((m, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 rounded-lg bg-destructive/5 p-3 text-sm"
                  >
                    <AlertTriangle className="mt-0.5 h-3.5 w-3.5 shrink-0 text-destructive" />
                    {m}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        )}

        {/* Vocabulary */}
        {result.vocabularySuggestions.length > 0 && (
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Lightbulb className="h-5 w-5 text-warning" />
                Vocabulary Suggestions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {result.vocabularySuggestions.map((v, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 rounded-lg bg-warning/5 p-3 text-sm"
                  >
                    <Lightbulb className="mt-0.5 h-3.5 w-3.5 shrink-0 text-warning" />
                    {v}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        )}

        {/* Weak Areas */}
        {result.weakAreas.length > 0 && (
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <CheckCircle className="h-5 w-5 text-primary" />
                Areas to Improve
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {result.weakAreas.map((w, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 rounded-lg bg-primary/5 p-3 text-sm"
                  >
                    <CheckCircle className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
                    {w}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        )}

        {/* Action buttons */}
        <div className="flex flex-wrap gap-3">
          <Link to={`/writing-test/${testId}`}>
            <Button variant="outline">
              <RotateCcw className="mr-1.5 h-4 w-4" />
              Retake Test
            </Button>
          </Link>
          {nextTest && (
            <Link to={`/writing-test/${nextTest.id}`}>
              <Button>
                Next Test
                <ArrowRight className="ml-1.5 h-4 w-4" />
              </Button>
            </Link>
          )}
          <Link to="/writing-tests">
            <Button variant="ghost">All Writing Tests</Button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
