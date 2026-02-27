import { useCallback, useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { READING_TESTS } from "@/lib/reading-tests-data";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Clock, AlertTriangle, Send } from "lucide-react";

const TOTAL_SECONDS = 60 * 60;
const WARNING_SECONDS = 5 * 60;

export default function ReadingExam() {
  const { testId } = useParams();
  const navigate = useNavigate();
  const test = READING_TESTS.find((t) => t.id === Number(testId));

  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [activeSection, setActiveSection] = useState(0);
  const [secondsLeft, setSecondsLeft] = useState(TOTAL_SECONDS);
  const [showWarning, setShowWarning] = useState(false);
  const [confirmSubmit, setConfirmSubmit] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const startTimeRef = useRef(Date.now());

  // Restore saved state
  useEffect(() => {
    const saved = localStorage.getItem(`reading-exam-${testId}`);
    if (saved) {
      try {
        const d = JSON.parse(saved);
        if (d.answers) setAnswers(d.answers);
        if (d.secondsLeft) setSecondsLeft(d.secondsLeft);
        if (d.activeSection !== undefined) setActiveSection(d.activeSection);
      } catch { /* ignore */ }
    }
  }, [testId]);

  // Auto-save
  useEffect(() => {
    const id = setInterval(() => {
      localStorage.setItem(
        `reading-exam-${testId}`,
        JSON.stringify({ answers, secondsLeft, activeSection })
      );
    }, 5000);
    return () => clearInterval(id);
  }, [answers, secondsLeft, activeSection, testId]);

  // Timer
  useEffect(() => {
    timerRef.current = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timerRef.current!);
          handleSubmit();
          return 0;
        }
        if (prev === WARNING_SECONDS + 1) setShowWarning(true);
        return prev - 1;
      });
    }, 1000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = useCallback(() => {
    if (submitted) return;
    setSubmitted(true);
    if (timerRef.current) clearInterval(timerRef.current);
    localStorage.removeItem(`reading-exam-${testId}`);

    const timeTaken = TOTAL_SECONDS - secondsLeft;
    sessionStorage.setItem(
      "reading-result-pending",
      JSON.stringify({ testId: Number(testId), answers, timeTaken })
    );
    navigate(`/reading-result/${testId}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [submitted, answers, secondsLeft, testId, navigate]);

  const setAnswer = (qNum: number, value: string) => {
    setAnswers((prev) => ({ ...prev, [qNum]: value }));
  };

  if (!test) {
    return (
      <div className="flex h-screen items-center justify-center bg-background">
        <p className="text-muted-foreground">Test not found.</p>
      </div>
    );
  }

  const passage = test.passages[activeSection];
  const totalQuestions = test.passages.reduce((s, p) => s + p.questions.length, 0);
  const answeredCount = Object.keys(answers).length;
  const minutes = Math.floor(secondsLeft / 60);
  const seconds = secondsLeft % 60;
  const isLowTime = secondsLeft <= WARNING_SECONDS;

  return (
    <div className="flex h-screen flex-col bg-background">
      {/* Top bar */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b bg-card px-4 py-2">
        <div className="flex items-center gap-3">
          <span className="font-serif text-lg font-bold">
            IELTS Reading — Test {test.id}
          </span>
          <Badge variant="secondary" className="text-xs">Academic</Badge>
        </div>

        {/* Section tabs */}
        <div className="flex gap-1">
          {test.passages.map((p, i) => (
            <button
              key={i}
              onClick={() => setActiveSection(i)}
              className={`rounded-md px-3 py-1.5 text-xs font-medium transition-colors ${
                activeSection === i
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              Section {i + 1}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <div
            className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 font-mono text-sm font-semibold ${
              isLowTime
                ? "bg-destructive/10 text-destructive animate-pulse"
                : "bg-muted text-foreground"
            }`}
          >
            <Clock className="h-4 w-4" />
            {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
          </div>
          <Button size="sm" onClick={() => setConfirmSubmit(true)} disabled={submitted}>
            <Send className="mr-1.5 h-4 w-4" />
            Submit
          </Button>
        </div>
      </div>

      {/* Progress */}
      <div className="border-b bg-muted/30 px-4 py-1.5">
        <div className="flex items-center gap-3 text-xs text-muted-foreground">
          <span>{answeredCount}/{totalQuestions} answered</span>
          <Progress value={(answeredCount / totalQuestions) * 100} className="h-1.5 flex-1" />
          <span>{Math.round((secondsLeft / TOTAL_SECONDS) * 100)}% time remaining</span>
        </div>
      </div>

      {/* Warning */}
      {showWarning && secondsLeft > 0 && (
        <div className="flex items-center gap-2 bg-warning/10 px-4 py-2 text-sm text-warning">
          <AlertTriangle className="h-4 w-4" />
          <span className="font-medium">5 minutes remaining!</span>
          <Button variant="ghost" size="sm" className="ml-auto h-6 text-xs" onClick={() => setShowWarning(false)}>
            Dismiss
          </Button>
        </div>
      )}

      {/* Main split */}
      <div className="flex flex-1 overflow-hidden">
        {/* LEFT — Passage */}
        <ScrollArea className="w-1/2 border-r">
          <div className="p-6">
            <h2 className="mb-4 font-serif text-2xl font-bold">{passage.title}</h2>
            <div className="whitespace-pre-line text-sm leading-[1.8] text-foreground">
              {passage.text}
            </div>
          </div>
        </ScrollArea>

        {/* RIGHT — Questions */}
        <ScrollArea className="w-1/2">
          <div className="p-6 space-y-6">
            <h3 className="font-serif text-lg font-semibold text-muted-foreground">
              Questions {passage.questions[0].number}–{passage.questions[passage.questions.length - 1].number}
            </h3>

            {passage.questions.map((q) => (
              <div key={q.number} className="rounded-lg border bg-card p-4">
                <p className="mb-3 text-sm font-medium">
                  <span className="mr-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                    {q.number}
                  </span>
                  {q.text}
                </p>

                {/* T/F/NG or Y/N/NG */}
                {(q.type === "true_false_not_given" || q.type === "yes_no_not_given") && (
                  <RadioGroup
                    value={answers[q.number] || ""}
                    onValueChange={(v) => setAnswer(q.number, v)}
                    className="flex flex-wrap gap-3"
                  >
                    {(q.type === "true_false_not_given"
                      ? ["True", "False", "Not Given"]
                      : ["Yes", "No", "Not Given"]
                    ).map((opt) => (
                      <div key={opt} className="flex items-center gap-1.5">
                        <RadioGroupItem value={opt} id={`q${q.number}-${opt}`} />
                        <Label htmlFor={`q${q.number}-${opt}`} className="cursor-pointer text-sm">
                          {opt}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                )}

                {/* Multiple choice / Matching headings */}
                {(q.type === "multiple_choice" || q.type === "matching_headings") && q.options && (
                  <RadioGroup
                    value={answers[q.number] || ""}
                    onValueChange={(v) => setAnswer(q.number, v)}
                    className="space-y-2"
                  >
                    {q.options.map((opt) => {
                      const val = opt.charAt(0);
                      return (
                        <div key={opt} className="flex items-center gap-2">
                          <RadioGroupItem value={val} id={`q${q.number}-${val}`} />
                          <Label htmlFor={`q${q.number}-${val}`} className="cursor-pointer text-sm">
                            {opt}
                          </Label>
                        </div>
                      );
                    })}
                  </RadioGroup>
                )}

                {/* Sentence / Summary completion */}
                {(q.type === "sentence_completion" || q.type === "summary_completion") && (
                  <Input
                    value={answers[q.number] || ""}
                    onChange={(e) => setAnswer(q.number, e.target.value)}
                    placeholder="Type your answer..."
                    className="mt-1"
                  />
                )}
              </div>
            ))}

            {/* Section navigation */}
            <div className="flex justify-between pt-4">
              <Button
                variant="outline"
                size="sm"
                disabled={activeSection === 0}
                onClick={() => setActiveSection((p) => p - 1)}
              >
                ← Previous Section
              </Button>
              <Button
                variant="outline"
                size="sm"
                disabled={activeSection === 2}
                onClick={() => setActiveSection((p) => p + 1)}
              >
                Next Section →
              </Button>
            </div>
          </div>
        </ScrollArea>
      </div>

      {/* Confirm dialog */}
      <AlertDialog open={confirmSubmit} onOpenChange={setConfirmSubmit}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Submit your reading test?</AlertDialogTitle>
            <AlertDialogDescription>
              You have answered {answeredCount} out of {totalQuestions} questions.
              {answeredCount < totalQuestions && (
                <span className="block mt-1 text-destructive">
                  {totalQuestions - answeredCount} questions are unanswered.
                </span>
              )}
              <br />
              Once submitted, you cannot make further changes.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Continue Test</AlertDialogCancel>
            <AlertDialogAction onClick={handleSubmit}>Submit Test</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
