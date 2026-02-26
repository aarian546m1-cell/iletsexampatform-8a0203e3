import { useCallback, useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { WRITING_TESTS } from "@/lib/writing-tests-data";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { ScrollArea } from "@/components/ui/scroll-area";
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
import { Badge } from "@/components/ui/badge";
import { Clock, AlertTriangle, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";

const TOTAL_SECONDS = 60 * 60; // 60 minutes
const WARNING_SECONDS = 5 * 60; // 5 minutes
const AUTOSAVE_INTERVAL = 10_000; // 10 seconds

function countWords(text: string) {
  return text
    .trim()
    .split(/\s+/)
    .filter((w) => w.length > 0).length;
}

export default function WritingExam() {
  const { testId } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const { user } = useAuth();

  const test = WRITING_TESTS.find((t) => t.id === Number(testId));

  const [task1Text, setTask1Text] = useState("");
  const [task2Text, setTask2Text] = useState("");
  const [secondsLeft, setSecondsLeft] = useState(TOTAL_SECONDS);
  const [showWarning, setShowWarning] = useState(false);
  const [confirmSubmit, setConfirmSubmit] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [activeTab, setActiveTab] = useState("task1");

  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const autosaveRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const startTimeRef = useRef(Date.now());

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

  // Auto-save
  useEffect(() => {
    autosaveRef.current = setInterval(() => {
      localStorage.setItem(
        `writing-exam-${testId}`,
        JSON.stringify({ task1Text, task2Text, secondsLeft })
      );
    }, AUTOSAVE_INTERVAL);
    return () => {
      if (autosaveRef.current) clearInterval(autosaveRef.current);
    };
  }, [task1Text, task2Text, secondsLeft, testId]);

  // Restore auto-save
  useEffect(() => {
    const saved = localStorage.getItem(`writing-exam-${testId}`);
    if (saved) {
      try {
        const data = JSON.parse(saved);
        if (data.task1Text) setTask1Text(data.task1Text);
        if (data.task2Text) setTask2Text(data.task2Text);
        if (data.secondsLeft) setSecondsLeft(data.secondsLeft);
      } catch {
        // ignore
      }
    }
  }, [testId]);

  const handleSubmit = useCallback(async () => {
    if (submitted) return;
    setSubmitted(true);
    if (timerRef.current) clearInterval(timerRef.current);
    if (autosaveRef.current) clearInterval(autosaveRef.current);
    localStorage.removeItem(`writing-exam-${testId}`);

    const timeTaken = TOTAL_SECONDS - secondsLeft;

    // Save and navigate to result
    const resultData = {
      testId: Number(testId),
      task1Text,
      task2Text,
      wordCountTask1: countWords(task1Text),
      wordCountTask2: countWords(task2Text),
      timeTaken,
    };

    // Store in session for result page
    sessionStorage.setItem("writing-result-pending", JSON.stringify(resultData));
    navigate(`/writing-result/${testId}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [submitted, task1Text, task2Text, secondsLeft, testId, navigate]);

  if (!test) {
    return (
      <div className="flex h-screen items-center justify-center bg-background">
        <p className="text-muted-foreground">Test not found.</p>
      </div>
    );
  }

  const minutes = Math.floor(secondsLeft / 60);
  const seconds = secondsLeft % 60;
  const isLowTime = secondsLeft <= WARNING_SECONDS;
  const task1Words = countWords(task1Text);
  const task2Words = countWords(task2Text);

  return (
    <div className="flex h-screen flex-col bg-background">
      {/* Top bar */}
      <div className="flex items-center justify-between border-b bg-card px-4 py-2">
        <div className="flex items-center gap-3">
          <span className="font-serif text-lg font-bold">
            IELTS Writing — Test {test.id}
          </span>
          <Badge variant="secondary" className="font-sans text-xs">
            Academic
          </Badge>
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
          <Button
            size="sm"
            onClick={() => setConfirmSubmit(true)}
            disabled={submitted}
          >
            <Send className="mr-1.5 h-4 w-4" />
            Submit
          </Button>
        </div>
      </div>

      {/* Warning banner */}
      {showWarning && secondsLeft > 0 && (
        <div className="flex items-center gap-2 bg-warning/10 px-4 py-2 text-sm text-warning">
          <AlertTriangle className="h-4 w-4" />
          <span className="font-medium">
            5 minutes remaining! Please review your answers.
          </span>
          <Button
            variant="ghost"
            size="sm"
            className="ml-auto h-6 text-xs"
            onClick={() => setShowWarning(false)}
          >
            Dismiss
          </Button>
        </div>
      )}

      {/* Main content — split pane */}
      <div className="flex flex-1 overflow-hidden">
        {/* LEFT — Questions */}
        <ScrollArea className="w-1/2 border-r">
          <div className="p-6">
            <Tabs
              value={activeTab}
              onValueChange={setActiveTab}
              className="w-full"
            >
              <TabsList className="mb-6 w-full">
                <TabsTrigger value="task1" className="flex-1">
                  Task 1
                </TabsTrigger>
                <TabsTrigger value="task2" className="flex-1">
                  Task 2
                </TabsTrigger>
              </TabsList>

              <TabsContent value="task1" className="space-y-4">
                <h2 className="font-serif text-2xl">Writing Task 1</h2>
                <div className="whitespace-pre-line text-sm leading-relaxed text-foreground">
                  {test.task1.prompt}
                </div>
                <div className="overflow-hidden rounded-lg border">
                  <img
                    src={test.task1.image}
                    alt={`Task 1 visual for Test ${test.id}`}
                    className="w-full object-contain"
                    loading="eager"
                  />
                </div>
              </TabsContent>

              <TabsContent value="task2" className="space-y-4">
                <h2 className="font-serif text-2xl">Writing Task 2</h2>
                <div className="whitespace-pre-line text-sm leading-relaxed text-foreground">
                  {test.task2.prompt}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </ScrollArea>

        {/* RIGHT — Answer area */}
        <div className="flex w-1/2 flex-col">
          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="flex flex-1 flex-col"
          >
            <div className="border-b px-4 pt-3">
              <TabsList className="w-full">
                <TabsTrigger value="task1" className="flex-1">
                  Task 1 Answer
                </TabsTrigger>
                <TabsTrigger value="task2" className="flex-1">
                  Task 2 Answer
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="task1" className="flex flex-1 flex-col p-4">
              <Textarea
                value={task1Text}
                onChange={(e) => setTask1Text(e.target.value)}
                placeholder="Write your Task 1 answer here..."
                className="flex-1 resize-none font-sans text-sm leading-relaxed"
                disabled={submitted}
              />
              <div className="mt-2 flex items-center justify-between text-xs">
                <span
                  className={
                    task1Words < 150
                      ? "font-medium text-destructive"
                      : "text-muted-foreground"
                  }
                >
                  {task1Words} / 150 words {task1Words < 150 && "(below minimum)"}
                </span>
              </div>
            </TabsContent>

            <TabsContent value="task2" className="flex flex-1 flex-col p-4">
              <Textarea
                value={task2Text}
                onChange={(e) => setTask2Text(e.target.value)}
                placeholder="Write your Task 2 answer here..."
                className="flex-1 resize-none font-sans text-sm leading-relaxed"
                disabled={submitted}
              />
              <div className="mt-2 flex items-center justify-between text-xs">
                <span
                  className={
                    task2Words < 250
                      ? "font-medium text-destructive"
                      : "text-muted-foreground"
                  }
                >
                  {task2Words} / 250 words {task2Words < 250 && "(below minimum)"}
                </span>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      {/* Confirm submit dialog */}
      <AlertDialog open={confirmSubmit} onOpenChange={setConfirmSubmit}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Submit your writing test?</AlertDialogTitle>
            <AlertDialogDescription>
              Task 1: {task1Words} words
              {task1Words < 150 && " (below 150 minimum)"}
              <br />
              Task 2: {task2Words} words
              {task2Words < 250 && " (below 250 minimum)"}
              <br />
              <br />
              Once submitted, you cannot make further changes. Your responses
              will be scored by AI.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Continue Writing</AlertDialogCancel>
            <AlertDialogAction onClick={handleSubmit}>
              Submit Test
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
