import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { LISTENING_TESTS } from "@/lib/listening-tests-data";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Switch } from "@/components/ui/switch";
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
import {
  Clock,
  AlertTriangle,
  Send,
  Headphones,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Loader2,
  FileText,
  RotateCcw,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const AUDIO_SECONDS = 30 * 60; // 30 min audio
const TRANSFER_SECONDS = 10 * 60; // 10 min transfer
const TOTAL_SECONDS = AUDIO_SECONDS + TRANSFER_SECONDS;
const WARNING_SECONDS = 5 * 60;
const PREP_SECONDS = 30; // 30 second preparation time per section

const SECTION_INSTRUCTIONS = [
  {
    title: "Section 1",
    description: "You will hear a conversation between two people in an everyday social situation.",
    prompt: "First, you have some time to look at Questions 1 to 10.",
  },
  {
    title: "Section 2",
    description: "You will hear a monologue about a general topic.",
    prompt: "First, you have some time to look at Questions 11 to 20.",
  },
  {
    title: "Section 3",
    description: "You will hear a conversation between up to four people in an educational or training context.",
    prompt: "First, you have some time to look at Questions 21 to 30.",
  },
  {
    title: "Section 4",
    description: "You will hear a lecture or talk on an academic subject.",
    prompt: "First, you have some time to look at Questions 31 to 40.",
  },
];

type ExamPhase = "instructions" | "section_prep" | "playing" | "transfer" | "finished";

export default function ListeningExam() {
  const { testId } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const test = LISTENING_TESTS.find((t) => t.id === Number(testId));

  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [activeSection, setActiveSection] = useState(0);
  const [phase, setPhase] = useState<ExamPhase>("instructions");
  const [secondsLeft, setSecondsLeft] = useState(TOTAL_SECONDS);
  const [showWarning, setShowWarning] = useState(false);
  const [confirmSubmit, setConfirmSubmit] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [prepCountdown, setPrepCountdown] = useState(PREP_SECONDS);
  const prepTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Audio state
  const [audioLoading, setAudioLoading] = useState(false);
  const [audioSegments, setAudioSegments] = useState<string[][]>([]); // per section
  const [currentSegmentIndex, setCurrentSegmentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioProgress, setAudioProgress] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Practice mode
  const [practiceMode, setPracticeMode] = useState(false);
  const [showTranscript, setShowTranscript] = useState(false);
  const [ambientEnabled, setAmbientEnabled] = useState(false);

  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const startTimeRef = useRef(0);

  const setAnswer = (qNum: number, value: string) => {
    setAnswers((prev) => ({ ...prev, [qNum]: value }));
  };

  // Generate audio for a section
  const generateSectionAudio = useCallback(
    async (sectionIndex: number) => {
      if (!test) return;
      const section = test.sections[sectionIndex];
      const lines = section.dialogue.map((d) => ({
        text: d.text,
        voiceId: d.voiceId,
      }));

      try {
        const response = await fetch(
          `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/generate-listening-audio`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              apikey: import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY,
              Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
            },
            body: JSON.stringify({ lines }),
          }
        );

        if (!response.ok) {
          const err = await response.json();
          throw new Error(err.error || "Audio generation failed");
        }

        const data = await response.json();
        return data.segments as string[];
      } catch (error) {
        console.error("Audio generation error:", error);
        toast({
          variant: "destructive",
          title: "Audio Error",
          description: error instanceof Error ? error.message : "Failed to generate audio",
        });
        return null;
      }
    },
    [test, toast]
  );

  // Start test: generate audio for all sections
  const startTest = useCallback(async () => {
    if (!test) return;
    setAudioLoading(true);

    const allSegments: string[][] = [];
    for (let i = 0; i < test.sections.length; i++) {
      toast({ title: `Generating audio for Section ${i + 1}...`, description: "Please wait while AI voices are created." });
      const segments = await generateSectionAudio(i);
      if (segments) {
        allSegments.push(segments);
      } else {
        allSegments.push([]);
      }
    }

    setAudioSegments(allSegments);
    setAudioLoading(false);
    setActiveSection(0);
    setCurrentSegmentIndex(0);
    startTimeRef.current = Date.now();

    // Start section prep countdown
    setPhase("section_prep");
    setPrepCountdown(PREP_SECONDS);
    startTimeRef.current = Date.now();

    // Start timer
    timerRef.current = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timerRef.current!);
          return 0;
        }
        if (prev === WARNING_SECONDS + 1) setShowWarning(true);
        return prev - 1;
      });
    }, 1000);
  }, [test, generateSectionAudio, toast]);

  // Play audio segment
  const playSegment = useCallback(
    (sectionIdx: number, segIdx: number) => {
      if (!audioSegments[sectionIdx] || !audioSegments[sectionIdx][segIdx]) return;

      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }

      const base64 = audioSegments[sectionIdx][segIdx];
      const audioUrl = `data:audio/mpeg;base64,${base64}`;
      const audio = new Audio(audioUrl);

      audio.onended = () => {
        const nextSeg = segIdx + 1;
        if (nextSeg < audioSegments[sectionIdx].length) {
          setCurrentSegmentIndex(nextSeg);
          playSegment(sectionIdx, nextSeg);
        } else {
          // Section complete
          const nextSection = sectionIdx + 1;
          if (nextSection < (test?.sections.length || 0)) {
            setActiveSection(nextSection);
            setCurrentSegmentIndex(0);
            setIsPlaying(false);
            // Show prep countdown for next section
            setPhase("section_prep");
            setPrepCountdown(PREP_SECONDS);
          } else {
            // All sections done - enter transfer time
            setIsPlaying(false);
            if (!practiceMode) {
              setPhase("transfer");
              toast({ title: "Audio Complete", description: "You now have 10 minutes to check and transfer your answers." });
            }
          }
        }
      };

      audio.ontimeupdate = () => {
        if (audio.duration) {
          setAudioProgress((audio.currentTime / audio.duration) * 100);
        }
      };

      audioRef.current = audio;
      audio.play();
      setIsPlaying(true);
    },
    [audioSegments, test, practiceMode, toast]
  );

  // Auto-play when phase changes to playing
  useEffect(() => {
    if (phase === "playing" && audioSegments.length > 0 && !isPlaying) {
      playSegment(0, 0);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase, audioSegments]);

  // Pause/resume
  const togglePlayPause = useCallback(() => {
    if (!audioRef.current) return;
    if (practiceMode) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play();
        setIsPlaying(true);
      }
    }
  }, [isPlaying, practiceMode]);

  // Replay section (practice mode only)
  const replaySection = useCallback(
    (sectionIdx: number) => {
      if (!practiceMode) return;
      setCurrentSegmentIndex(0);
      playSegment(sectionIdx, 0);
    },
    [practiceMode, playSegment]
  );

  // Submit
  const handleSubmit = useCallback(() => {
    if (submitted) return;
    setSubmitted(true);
    if (timerRef.current) clearInterval(timerRef.current);
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current = null;
    }

    const timeTaken = TOTAL_SECONDS - secondsLeft;
    sessionStorage.setItem(
      "listening-result-pending",
      JSON.stringify({ testId: Number(testId), answers, timeTaken })
    );
    navigate(`/listening-result/${testId}`);
  }, [submitted, answers, secondsLeft, testId, navigate]);

  // Auto-submit on timer end
  useEffect(() => {
    if (secondsLeft <= 0 && !submitted && phase !== "instructions") {
      handleSubmit();
    }
  }, [secondsLeft, submitted, phase, handleSubmit]);

  // Cleanup
  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  if (!test) {
    return (
      <div className="flex h-screen items-center justify-center bg-background">
        <p className="text-muted-foreground">Test not found.</p>
      </div>
    );
  }

  const section = test.sections[activeSection];
  const totalQuestions = test.totalQuestions;
  const answeredCount = Object.keys(answers).length;
  const minutes = Math.floor(secondsLeft / 60);
  const seconds = secondsLeft % 60;
  const isLowTime = secondsLeft <= WARNING_SECONDS;

  // ─── Instructions Screen ───
  if (phase === "instructions") {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-background px-4">
        <div className="w-full max-w-2xl space-y-6">
          <div className="text-center">
            <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-2xl bg-chart-1/10">
              <Headphones className="h-10 w-10 text-chart-1" />
            </div>
            <h1 className="text-3xl font-bold">IELTS Listening Test {test.id}</h1>
            <p className="mt-2 text-muted-foreground">Cambridge-style Mock Test</p>
          </div>

          <div className="rounded-lg border bg-card p-6 space-y-4">
            <h3 className="font-semibold text-lg">Test Information</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• <strong>4 sections</strong> with increasing difficulty</li>
              <li>• <strong>40 questions</strong> total</li>
              <li>• <strong>30 minutes</strong> of audio + <strong>10 minutes</strong> transfer time</li>
              <li>• Audio will play automatically once started</li>
              <li>• In exam mode, audio plays <strong>once only</strong></li>
            </ul>

            <div className="border-t pt-4 space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <Label className="font-medium">Practice Mode</Label>
                  <p className="text-xs text-muted-foreground">Pause, replay, and view transcripts</p>
                </div>
                <Switch checked={practiceMode} onCheckedChange={setPracticeMode} />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <Label className="font-medium">Ambient Sound</Label>
                  <p className="text-xs text-muted-foreground">Background exam hall atmosphere</p>
                </div>
                <Switch checked={ambientEnabled} onCheckedChange={setAmbientEnabled} />
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-3">
            <Button variant="outline" onClick={() => navigate("/listening-tests")}>
              Cancel
            </Button>
            <Button size="lg" onClick={startTest} disabled={audioLoading}>
              {audioLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Generating Audio...
                </>
              ) : (
                <>
                  <Play className="mr-2 h-4 w-4" />
                  Start Test
                </>
              )}
            </Button>
          </div>
        </div>
      </div>
    );
  }

  // ─── Exam Screen ───
  return (
    <div className="flex h-screen flex-col bg-background">
      {/* Top bar */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b bg-card px-4 py-2">
        <div className="flex items-center gap-3">
          <Headphones className="h-5 w-5 text-chart-1" />
          <span className="font-serif text-lg font-bold">
            IELTS Listening — Test {test.id}
          </span>
          <Badge variant="secondary" className="text-xs">
            {phase === "transfer" ? "Transfer Time" : `Section ${activeSection + 1}`}
          </Badge>
          {practiceMode && (
            <Badge variant="outline" className="text-xs text-chart-1 border-chart-1/30">
              Practice
            </Badge>
          )}
        </div>

        {/* Section tabs */}
        <div className="flex gap-1">
          {test.sections.map((s, i) => (
            <button
              key={i}
              onClick={() => setActiveSection(i)}
              className={`rounded-md px-3 py-1.5 text-xs font-medium transition-colors ${
                activeSection === i
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              S{i + 1}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-4">
          {/* Audio controls */}
          <div className="flex items-center gap-2">
            {isPlaying ? (
              <Volume2 className="h-4 w-4 text-chart-1 animate-pulse" />
            ) : (
              <VolumeX className="h-4 w-4 text-muted-foreground" />
            )}
            {practiceMode && (
              <>
                <Button variant="ghost" size="icon" className="h-7 w-7" onClick={togglePlayPause}>
                  {isPlaying ? <Pause className="h-3.5 w-3.5" /> : <Play className="h-3.5 w-3.5" />}
                </Button>
                <Button variant="ghost" size="icon" className="h-7 w-7" onClick={() => replaySection(activeSection)}>
                  <RotateCcw className="h-3.5 w-3.5" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-7 w-7"
                  onClick={() => setShowTranscript(!showTranscript)}
                >
                  <FileText className="h-3.5 w-3.5" />
                </Button>
              </>
            )}
          </div>

          {/* Timer */}
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

      {/* Audio progress bar */}
      <div className="h-1 bg-muted">
        <div
          className="h-full bg-chart-1 transition-all duration-200"
          style={{ width: `${audioProgress}%` }}
        />
      </div>

      {/* Progress */}
      <div className="border-b bg-muted/30 px-4 py-1.5">
        <div className="flex items-center gap-3 text-xs text-muted-foreground">
          <span>{answeredCount}/{totalQuestions} answered</span>
          <Progress value={(answeredCount / totalQuestions) * 100} className="h-1.5 flex-1" />
          <span>{Math.round((secondsLeft / TOTAL_SECONDS) * 100)}% time</span>
        </div>
      </div>

      {/* Warning */}
      {showWarning && secondsLeft > 0 && (
        <div className="flex items-center gap-2 bg-destructive/5 px-4 py-2 text-sm text-destructive">
          <AlertTriangle className="h-4 w-4" />
          <span className="font-medium">5 minutes remaining!</span>
          <Button variant="ghost" size="sm" className="ml-auto h-6 text-xs" onClick={() => setShowWarning(false)}>
            Dismiss
          </Button>
        </div>
      )}

      {/* Main content */}
      <div className="flex flex-1 overflow-hidden">
        {/* LEFT — Context / Transcript */}
        <ScrollArea className="w-2/5 border-r">
          <div className="p-6 space-y-4">
            <div className="rounded-lg border border-chart-1/20 bg-chart-1/5 p-4">
              <h3 className="mb-2 flex items-center gap-2 font-semibold">
                <Headphones className="h-4 w-4 text-chart-1" />
                Section {section.sectionNumber}: {section.title}
              </h3>
              <p className="text-sm text-muted-foreground">{section.description}</p>
              <p className="mt-2 text-xs italic text-muted-foreground">{section.context}</p>
            </div>

            {/* Transcript (practice mode or after submission) */}
            {(showTranscript && practiceMode) && (
              <div className="rounded-lg border bg-card p-4 space-y-3">
                <h4 className="font-semibold text-sm flex items-center gap-2">
                  <FileText className="h-4 w-4" />
                  Transcript
                </h4>
                {section.dialogue.map((line, i) => (
                  <div
                    key={i}
                    className={`text-sm ${
                      currentSegmentIndex === i && isPlaying
                        ? "bg-chart-1/10 rounded p-2 border-l-2 border-chart-1"
                        : "pl-2"
                    }`}
                  >
                    <span className="font-medium text-primary">{line.speaker}:</span>{" "}
                    <span className="text-muted-foreground">{line.text}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Question navigation map */}
            <div className="rounded-lg border bg-card p-4">
              <h4 className="mb-3 font-semibold text-sm">Answer Sheet</h4>
              <div className="grid grid-cols-10 gap-1.5">
                {test.sections.flatMap((s) => s.questions).map((q) => {
                  const isAnswered = !!answers[q.number];
                  const isCurrentSection = q.number >= section.questions[0].number &&
                    q.number <= section.questions[section.questions.length - 1].number;
                  return (
                    <button
                      key={q.number}
                      onClick={() => {
                        // Find which section this question belongs to
                        const sIdx = test.sections.findIndex(
                          (s) => s.questions[0].number <= q.number && s.questions[s.questions.length - 1].number >= q.number
                        );
                        if (sIdx >= 0) setActiveSection(sIdx);
                      }}
                      className={`flex h-7 w-7 items-center justify-center rounded text-xs font-medium transition-colors ${
                        isAnswered
                          ? "bg-chart-1 text-white"
                          : isCurrentSection
                          ? "bg-primary/10 text-primary border border-primary/20"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {q.number}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </ScrollArea>

        {/* RIGHT — Questions */}
        <ScrollArea className="w-3/5">
          <div className="p-6 space-y-5">
            <h3 className="font-serif text-lg font-semibold text-muted-foreground">
              Questions {section.questions[0].number}–
              {section.questions[section.questions.length - 1].number}
            </h3>

            {section.questions.map((q) => (
              <div key={q.number} className="rounded-lg border bg-card p-4">
                <p className="mb-3 text-sm font-medium">
                  <span className="mr-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-chart-1/10 text-xs font-bold text-chart-1">
                    {q.number}
                  </span>
                  {q.text}
                </p>

                {/* MCQ */}
                {q.type === "mcq" && q.options && (
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

                {/* Map labeling */}
                {q.type === "map_labeling" && q.options && (
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

                {/* Matching */}
                {q.type === "matching" && q.matchOptions && (
                  <RadioGroup
                    value={answers[q.number] || ""}
                    onValueChange={(v) => setAnswer(q.number, v)}
                    className="space-y-2"
                  >
                    {q.matchOptions.map((opt) => {
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

                {/* Fill blank / short answer / sentence completion / summary completion */}
                {(q.type === "fill_blank" ||
                  q.type === "short_answer" ||
                  q.type === "sentence_completion" ||
                  q.type === "summary_completion") && (
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
                disabled={activeSection === 3}
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
            <AlertDialogTitle>Submit your listening test?</AlertDialogTitle>
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
