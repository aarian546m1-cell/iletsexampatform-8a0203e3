import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { LISTENING_TESTS } from "@/lib/listening-tests-data";
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
  CheckCircle,
  XCircle,
  Headphones,
  FileText,
} from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

function rawToBand(raw: number): number {
  if (raw >= 39) return 9;
  if (raw >= 37) return 8.5;
  if (raw >= 35) return 8;
  if (raw >= 33) return 7.5;
  if (raw >= 30) return 7;
  if (raw >= 27) return 6.5;
  if (raw >= 23) return 6;
  if (raw >= 19) return 5.5;
  if (raw >= 15) return 5;
  if (raw >= 13) return 4.5;
  if (raw >= 10) return 4;
  if (raw >= 8) return 3.5;
  if (raw >= 6) return 3;
  if (raw >= 4) return 2.5;
  return 2;
}

export default function ListeningResult() {
  const { testId } = useParams();
  const { user } = useAuth();
  const test = LISTENING_TESTS.find((t) => t.id === Number(testId));
  const nextTest = LISTENING_TESTS.find((t) => t.id === Number(testId)! + 1);

  const [data, setData] = useState<{
    answers: Record<number, string>;
    timeTaken: number;
  } | null>(null);
  const [showTranscripts, setShowTranscripts] = useState<Record<number, boolean>>({});

  useEffect(() => {
    const raw = sessionStorage.getItem("listening-result-pending");
    if (raw) {
      const parsed = JSON.parse(raw);
      setData(parsed);
      sessionStorage.removeItem("listening-result-pending");
    }
  }, []);

  // Save result to DB
  useEffect(() => {
    if (!data || !test || !user) return;

    const allQuestions = test.sections.flatMap((s) => s.questions);
    let correctCount = 0;
    allQuestions.forEach((q) => {
      const userAnswer = (data.answers[q.number] || "").trim().toLowerCase();
      const correct = q.correctAnswer.trim().toLowerCase();
      if (userAnswer === correct) correctCount++;
    });

    const band = rawToBand(correctCount);

    // Save to test_results via the placeholder listening module
    const saveResult = async () => {
      try {
        // Find listening module
        const { data: modules } = await supabase
          .from("test_modules")
          .select("id")
          .eq("module_type", "listening")
          .limit(1);

        if (modules && modules.length > 0) {
          await supabase.from("test_results").insert({
            user_id: user.id,
            module_id: modules[0].id,
            raw_score: correctCount,
            total_questions: 40,
            band_score: band,
            time_taken_seconds: data.timeTaken,
            answers: data.answers as any,
          });
        }
      } catch (err) {
        console.error("Failed to save listening result:", err);
      }
    };

    saveResult();
  }, [data, test, user]);

  if (!test || !data) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container py-20 text-center">
          <p className="text-muted-foreground">No result data found.</p>
          <Link to="/listening-tests">
            <Button className="mt-4">Back to Listening Tests</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const allQuestions = test.sections.flatMap((s) => s.questions);
  let correctCount = 0;
  allQuestions.forEach((q) => {
    const userAnswer = (data.answers[q.number] || "").trim().toLowerCase();
    const correct = q.correctAnswer.trim().toLowerCase();
    if (userAnswer === correct) correctCount++;
  });

  const band = rawToBand(correctCount);
  const timeMins = Math.floor(data.timeTaken / 60);
  const timeSecs = data.timeTaken % 60;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container max-w-4xl py-8">
        <Link to="/listening-tests">
          <Button variant="ghost" size="sm" className="mb-4">
            <ArrowLeft className="mr-1.5 h-4 w-4" />
            Back to Listening Tests
          </Button>
        </Link>

        <div className="mb-6 flex items-center gap-3">
          <Headphones className="h-8 w-8 text-chart-1" />
          <div>
            <h1 className="text-3xl md:text-4xl">Test {testId} — Listening Results</h1>
            <p className="text-muted-foreground">Your IELTS Listening score</p>
          </div>
        </div>

        {/* Band Score */}
        <Card className="mb-6 border-chart-1/20">
          <CardContent className="flex flex-col items-center py-8">
            <p className="mb-2 text-sm font-medium text-muted-foreground">
              Estimated Band Score
            </p>
            <div className="flex h-24 w-24 items-center justify-center rounded-full border-4 border-chart-1 bg-chart-1/5">
              <span className="font-serif text-4xl font-bold text-chart-1">
                {band.toFixed(1)}
              </span>
            </div>
          </CardContent>
        </Card>

        {/* Stats */}
        <div className="mb-6 grid grid-cols-3 gap-4">
          <Card>
            <CardContent className="flex items-center gap-3 p-4">
              <CheckCircle className="h-5 w-5 text-chart-1" />
              <div>
                <p className="text-xs text-muted-foreground">Correct</p>
                <p className="font-semibold">
                  {correctCount} / {allQuestions.length}
                </p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex items-center gap-3 p-4">
              <XCircle className="h-5 w-5 text-destructive" />
              <div>
                <p className="text-xs text-muted-foreground">Incorrect</p>
                <p className="font-semibold">{allQuestions.length - correctCount}</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex items-center gap-3 p-4">
              <Clock className="h-5 w-5 text-muted-foreground" />
              <div>
                <p className="text-xs text-muted-foreground">Time</p>
                <p className="font-semibold">
                  {timeMins}m {timeSecs}s
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Section Breakdown */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-lg">Section Breakdown</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {test.sections.map((section, i) => {
              const sectionCorrect = section.questions.filter((q) => {
                const ua = (data.answers[q.number] || "").trim().toLowerCase();
                return ua === q.correctAnswer.trim().toLowerCase();
              }).length;
              return (
                <div key={i}>
                  <div className="mb-1 flex justify-between text-sm">
                    <span>
                      Section {i + 1}: {section.title}
                    </span>
                    <span className="font-semibold">
                      {sectionCorrect}/{section.questions.length}
                    </span>
                  </div>
                  <Progress
                    value={(sectionCorrect / section.questions.length) * 100}
                    className="h-2"
                  />
                </div>
              );
            })}
          </CardContent>
        </Card>

        {/* Answer Review */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-lg">Answer Review</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {test.sections.map((section, pi) => (
                <div key={pi}>
                  <div className="mb-3 flex items-center justify-between">
                    <h4 className="font-semibold text-sm text-muted-foreground">
                      Section {pi + 1}: {section.title}
                    </h4>
                    <Collapsible
                      open={showTranscripts[pi]}
                      onOpenChange={(open) =>
                        setShowTranscripts((prev) => ({ ...prev, [pi]: open }))
                      }
                    >
                      <CollapsibleTrigger asChild>
                        <Button variant="ghost" size="sm" className="h-7 text-xs">
                          <FileText className="mr-1 h-3 w-3" />
                          {showTranscripts[pi] ? "Hide" : "Show"} Transcript
                        </Button>
                      </CollapsibleTrigger>
                      <CollapsibleContent className="mt-2 rounded-lg border bg-muted/30 p-4 text-sm space-y-2">
                        {section.dialogue.map((line, li) => (
                          <p key={li}>
                            <span className="font-medium text-primary">{line.speaker}:</span>{" "}
                            <span className="text-muted-foreground">{line.text}</span>
                          </p>
                        ))}
                      </CollapsibleContent>
                    </Collapsible>
                  </div>

                  <div className="space-y-2">
                    {section.questions.map((q) => {
                      const userAnswer = data.answers[q.number] || "—";
                      const isCorrect =
                        userAnswer.trim().toLowerCase() ===
                        q.correctAnswer.trim().toLowerCase();
                      return (
                        <div
                          key={q.number}
                          className={`flex items-start gap-3 rounded-lg p-3 text-sm ${
                            isCorrect ? "bg-chart-1/5" : "bg-destructive/5"
                          }`}
                        >
                          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-bold bg-card border">
                            {q.number}
                          </span>
                          <div className="flex-1">
                            <p className="mb-1 text-xs text-muted-foreground">{q.text}</p>
                            <div className="flex flex-wrap gap-3 text-xs">
                              <span>
                                Your answer:{" "}
                                <strong
                                  className={
                                    isCorrect ? "text-chart-1" : "text-destructive"
                                  }
                                >
                                  {userAnswer}
                                </strong>
                              </span>
                              {!isCorrect && (
                                <span>
                                  Correct:{" "}
                                  <strong className="text-chart-1">
                                    {q.correctAnswer}
                                  </strong>
                                </span>
                              )}
                            </div>
                            {q.explanation && !isCorrect && (
                              <p className="mt-1 text-xs text-muted-foreground italic">
                                {q.explanation}
                              </p>
                            )}
                          </div>
                          {isCorrect ? (
                            <CheckCircle className="h-4 w-4 shrink-0 text-chart-1" />
                          ) : (
                            <XCircle className="h-4 w-4 shrink-0 text-destructive" />
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Actions */}
        <div className="flex flex-wrap gap-3">
          <Link to={`/listening-test/${testId}`}>
            <Button variant="outline">
              <RotateCcw className="mr-1.5 h-4 w-4" />
              Retake Test
            </Button>
          </Link>
          {nextTest && (
            <Link to={`/listening-test/${nextTest.id}`}>
              <Button>
                Next Test <ArrowRight className="ml-1.5 h-4 w-4" />
              </Button>
            </Link>
          )}
          <Link to="/listening-tests">
            <Button variant="ghost">All Listening Tests</Button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
