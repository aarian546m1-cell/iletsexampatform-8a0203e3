import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { READING_TESTS, ReadingQuestion } from "@/lib/reading-tests-data";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
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
import QuestionGroup from "@/components/reading/QuestionGroup";
import QuestionNavigator from "@/components/reading/QuestionNavigator";

const TOTAL_SECONDS = 60 * 60;
const WARNING_SECONDS = 5 * 60;

/** Group consecutive questions by type */
function groupQuestionsByType(questions: ReadingQuestion[]) {
  const groups: { type: string; questions: ReadingQuestion[] }[] = [];
  for (const q of questions) {
    const last = groups[groups.length - 1];
    if (last && last.type === q.type) {
      last.questions.push(q);
    } else {
      groups.push({ type: q.type, questions: [q] });
    }
  }
  return groups;
}

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
  const questionGroups = groupQuestionsByType(passage.questions);

  return (
    <div className="flex h-screen flex-col bg-background">
      {/* ─── Top bar ─── */}
      <header className="flex flex-wrap items-center justify-between gap-2 border-b bg-card px-4 py-2 shadow-sm">
        <div className="flex items-center gap-3">
          <span className="font-serif text-lg font-bold text-foreground">
            IELTS Academic Reading
          </span>
          <Badge variant="secondary" className="text-xs font-medium">Test {test.id}</Badge>
        </div>

        {/* Section tabs */}
        <div className="flex gap-1">
          {test.passages.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveSection(i)}
              className={`rounded-md px-3 py-1.5 text-xs font-semibold transition-colors ${
                activeSection === i
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              Passage {i + 1}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3">
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
      </header>

      {/* ─── Progress & Navigator ─── */}
      <div className="border-b bg-card/50 px-4 py-2 space-y-2">
        <div className="flex items-center gap-3 text-xs text-muted-foreground">
          <span className="font-medium">{answeredCount}/{totalQuestions} answered</span>
          <Progress value={(answeredCount / totalQuestions) * 100} className="h-1.5 flex-1" />
          <span>{Math.round((secondsLeft / TOTAL_SECONDS) * 100)}% time</span>
        </div>
        <QuestionNavigator
          totalQuestions={totalQuestions}
          answers={answers}
          sections={test.passages.map((p) => ({
            start: p.questions[0].number,
            end: p.questions[p.questions.length - 1].number,
          }))}
          activeSection={activeSection}
          onSectionChange={setActiveSection}
        />
      </div>

      {/* ─── Warning ─── */}
      {showWarning && secondsLeft > 0 && (
        <div className="flex items-center gap-2 bg-destructive/10 px-4 py-2 text-sm text-destructive">
          <AlertTriangle className="h-4 w-4" />
          <span className="font-semibold">5 minutes remaining!</span>
          <Button variant="ghost" size="sm" className="ml-auto h-6 text-xs" onClick={() => setShowWarning(false)}>
            Dismiss
          </Button>
        </div>
      )}

      {/* ─── Main split pane ─── */}
      <div className="flex flex-1 overflow-hidden">
        {/* LEFT — Reading Passage */}
        <ScrollArea className="w-1/2 border-r">
          <div className="p-6 max-w-2xl">
            <div className="mb-6">
              <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">
                Reading Passage {activeSection + 1}
              </p>
              <h2 className="font-serif text-2xl font-bold text-foreground leading-tight">
                {passage.title}
              </h2>
            </div>
            <article className="prose prose-sm max-w-none">
              <div className="whitespace-pre-line text-sm leading-[1.9] text-foreground/90">
                {passage.text}
              </div>
            </article>
          </div>
        </ScrollArea>

        {/* RIGHT — Questions (Cambridge Style) */}
        <ScrollArea className="w-1/2 bg-card/30">
          <div className="p-6 max-w-2xl">
            <div className="mb-6 pb-4 border-b border-border">
              <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">
                Questions {passage.questions[0].number}–{passage.questions[passage.questions.length - 1].number}
              </p>
              <p className="text-sm text-muted-foreground">
                Answer the questions based on Reading Passage {activeSection + 1}.
              </p>
            </div>

            {questionGroups.map((group, i) => (
              <div key={`${group.type}-${i}`} id={`question-${group.questions[0].number}`}>
                <QuestionGroup
                  questions={group.questions}
                  type={group.type}
                  answers={answers}
                  onAnswer={setAnswer}
                />
              </div>
            ))}

            {/* Section navigation */}
            <div className="flex justify-between pt-4 border-t border-border">
              <Button
                variant="outline"
                size="sm"
                disabled={activeSection === 0}
                onClick={() => setActiveSection((p) => p - 1)}
              >
                ← Previous Passage
              </Button>
              <Button
                variant="outline"
                size="sm"
                disabled={activeSection === 2}
                onClick={() => setActiveSection((p) => p + 1)}
              >
                Next Passage →
              </Button>
            </div>
          </div>
        </ScrollArea>
      </div>

      {/* ─── Confirm dialog ─── */}
      <AlertDialog open={confirmSubmit} onOpenChange={setConfirmSubmit}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Submit your reading test?</AlertDialogTitle>
            <AlertDialogDescription>
              You have answered {answeredCount} out of {totalQuestions} questions.
              {answeredCount < totalQuestions && (
                <span className="block mt-1 text-destructive font-medium">
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
