import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { READING_TESTS } from "@/lib/reading-tests-data";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, ArrowRight, RotateCcw, Clock, CheckCircle, XCircle } from "lucide-react";

// IELTS Academic Reading band conversion (approximate)
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

export default function ReadingResult() {
  const { testId } = useParams();
  const test = READING_TESTS.find((t) => t.id === Number(testId));
  const nextTest = READING_TESTS.find((t) => t.id === Number(testId) + 1);

  const [data, setData] = useState<{ answers: Record<number, string>; timeTaken: number } | null>(null);

  useEffect(() => {
    const raw = sessionStorage.getItem("reading-result-pending");
    if (raw) {
      setData(JSON.parse(raw));
      sessionStorage.removeItem("reading-result-pending");
    }
  }, []);

  if (!test || !data) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container py-20 text-center">
          <p className="text-muted-foreground">No result data found.</p>
          <Link to="/reading-tests">
            <Button className="mt-4">Back to Reading Tests</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const allQuestions = test.passages.flatMap((p) => p.questions);
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
        <Link to="/reading-tests">
          <Button variant="ghost" size="sm" className="mb-4">
            <ArrowLeft className="mr-1.5 h-4 w-4" />
            Back to Reading Tests
          </Button>
        </Link>

        <h1 className="text-3xl md:text-4xl">Test {testId} — Results</h1>
        <p className="mt-1 mb-6 text-muted-foreground">Your IELTS Academic Reading score</p>

        {/* Overall Band */}
        <Card className="mb-6 border-primary/20">
          <CardContent className="flex flex-col items-center py-8">
            <p className="mb-2 text-sm font-medium text-muted-foreground">Estimated Band Score</p>
            <div className="flex h-24 w-24 items-center justify-center rounded-full border-4 border-primary bg-primary/5">
              <span className="font-serif text-4xl font-bold text-primary">{band.toFixed(1)}</span>
            </div>
          </CardContent>
        </Card>

        {/* Stats */}
        <div className="mb-6 grid grid-cols-3 gap-4">
          <Card>
            <CardContent className="flex items-center gap-3 p-4">
              <CheckCircle className="h-5 w-5 text-success" />
              <div>
                <p className="text-xs text-muted-foreground">Correct</p>
                <p className="font-semibold">{correctCount} / {allQuestions.length}</p>
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
                <p className="font-semibold">{timeMins}m {timeSecs}s</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Per-section breakdown */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-lg">Section Breakdown</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {test.passages.map((passage, i) => {
              const sectionCorrect = passage.questions.filter((q) => {
                const ua = (data.answers[q.number] || "").trim().toLowerCase();
                return ua === q.correctAnswer.trim().toLowerCase();
              }).length;
              return (
                <div key={i}>
                  <div className="mb-1 flex justify-between text-sm">
                    <span>Section {i + 1}: {passage.title}</span>
                    <span className="font-semibold">{sectionCorrect}/{passage.questions.length}</span>
                  </div>
                  <Progress value={(sectionCorrect / passage.questions.length) * 100} className="h-2" />
                </div>
              );
            })}
          </CardContent>
        </Card>

        {/* Detailed answers */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-lg">Answer Review</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {test.passages.map((passage, pi) => (
                <div key={pi}>
                  <h4 className="mb-3 font-semibold text-sm text-muted-foreground">
                    Section {pi + 1}: {passage.title}
                  </h4>
                  <div className="space-y-2">
                    {passage.questions.map((q) => {
                      const userAnswer = data.answers[q.number] || "—";
                      const isCorrect = userAnswer.trim().toLowerCase() === q.correctAnswer.trim().toLowerCase();
                      return (
                        <div
                          key={q.number}
                          className={`flex items-start gap-3 rounded-lg p-3 text-sm ${
                            isCorrect ? "bg-success/5" : "bg-destructive/5"
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
                                <strong className={isCorrect ? "text-success" : "text-destructive"}>
                                  {userAnswer}
                                </strong>
                              </span>
                              {!isCorrect && (
                                <span>
                                  Correct: <strong className="text-success">{q.correctAnswer}</strong>
                                </span>
                              )}
                            </div>
                            {q.explanation && !isCorrect && (
                              <p className="mt-1 text-xs text-muted-foreground italic">{q.explanation}</p>
                            )}
                          </div>
                          {isCorrect ? (
                            <CheckCircle className="h-4 w-4 shrink-0 text-success" />
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
          <Link to={`/reading-test/${testId}`}>
            <Button variant="outline">
              <RotateCcw className="mr-1.5 h-4 w-4" />
              Retake Test
            </Button>
          </Link>
          {nextTest && (
            <Link to={`/reading-test/${nextTest.id}`}>
              <Button>
                Next Test <ArrowRight className="ml-1.5 h-4 w-4" />
              </Button>
            </Link>
          )}
          <Link to="/reading-tests">
            <Button variant="ghost">All Reading Tests</Button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
