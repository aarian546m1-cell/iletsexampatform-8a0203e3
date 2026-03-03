import { useEffect, useState, useRef, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/hooks/use-toast";
import { Mic, MicOff, Volume2, Clock, ArrowLeft, Play, Square, Loader2 } from "lucide-react";
import { SPEAKING_TOPICS, type SpeakingTopic } from "@/lib/speaking-topics";

type TestPart = "intro" | "part1" | "part2-prep" | "part2-speak" | "part3" | "scoring";

interface Message {
  role: "examiner" | "candidate";
  text: string;
}

// Simple speech synthesis wrapper
function speak(text: string, onEnd?: () => void) {
  if (!("speechSynthesis" in window)) {
    onEnd?.();
    return;
  }
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.rate = 0.92;
  utterance.pitch = 1.0;
  // Try to pick a British English voice
  const voices = window.speechSynthesis.getVoices();
  const britishVoice = voices.find(
    (v) => v.lang === "en-GB" && v.name.toLowerCase().includes("female")
  ) || voices.find((v) => v.lang === "en-GB") || voices.find((v) => v.lang.startsWith("en"));
  if (britishVoice) utterance.voice = britishVoice;
  utterance.onend = () => onEnd?.();
  window.speechSynthesis.speak(utterance);
}

export default function SpeakingTest() {
  const { testId } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const topic = SPEAKING_TOPICS.find((t) => t.id === Number(testId));

  const [started, setStarted] = useState(false);
  const [part, setPart] = useState<TestPart>("intro");
  const [messages, setMessages] = useState<Message[]>([]);
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [timer, setTimer] = useState(0);
  const [timerActive, setTimerActive] = useState(false);
  const [transcript, setTranscript] = useState("");

  const recognitionRef = useRef<any>(null);
  const timerRef = useRef<ReturnType<typeof setInterval>>();
  const conversationRef = useRef<{ role: string; content: string }[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const fullTranscriptRef = useRef<string>("");

  // Scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Timer
  useEffect(() => {
    if (timerActive && timer > 0) {
      timerRef.current = setInterval(() => {
        setTimer((t) => {
          if (t <= 1) {
            clearInterval(timerRef.current);
            setTimerActive(false);
            handleTimerEnd();
            return 0;
          }
          return t - 1;
        });
      }, 1000);
      return () => clearInterval(timerRef.current);
    }
  }, [timerActive]);

  // Load voices
  useEffect(() => {
    if ("speechSynthesis" in window) {
      window.speechSynthesis.getVoices();
      window.speechSynthesis.onvoiceschanged = () => window.speechSynthesis.getVoices();
    }
  }, []);

  const handleTimerEnd = useCallback(() => {
    if (part === "part2-prep") {
      stopListening();
      setPart("part2-speak");
      setTimer(120);
      setTimerActive(true);
      const msg = "Your preparation time is over. Please begin speaking about the topic on your cue card. You have two minutes.";
      addExaminerMessage(msg);
      speak(msg, () => startListening());
    } else if (part === "part2-speak") {
      stopListening();
      const msg = "Thank you! Now let's move on to the follow-up questions of Part 3.";
      addExaminerMessage(msg);
      speak(msg, () => {
        setPart("part3");
        setQuestionIndex(0);
        askPart3Question(0);
      });
    }
  }, [part, topic]);

  function addExaminerMessage(text: string) {
    setMessages((prev) => [...prev, { role: "examiner", text }]);
    fullTranscriptRef.current += `\nExaminer: ${text}`;
    conversationRef.current.push({ role: "assistant", content: text });
  }

  function addCandidateMessage(text: string) {
    setMessages((prev) => [...prev, { role: "candidate", text }]);
    fullTranscriptRef.current += `\nCandidate: ${text}`;
    conversationRef.current.push({ role: "user", content: text });
  }

  function startListening() {
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SpeechRecognition) {
      toast({ title: "Speech recognition not supported", description: "Please use Chrome or Edge.", variant: "destructive" });
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = "en-US";

    let finalText = "";

    recognition.onresult = (event: any) => {
      let interim = "";
      for (let i = event.resultIndex; i < event.results.length; i++) {
        if (event.results[i].isFinal) {
          finalText += event.results[i][0].transcript + " ";
        } else {
          interim += event.results[i][0].transcript;
        }
      }
      setTranscript(finalText + interim);
    };

    recognition.onerror = (event: any) => {
      if (event.error !== "aborted") {
        console.error("Speech recognition error:", event.error);
      }
    };

    recognition.onend = () => {
      // If still listening, restart
      if (isListening) {
        try { recognition.start(); } catch {}
      }
    };

    try {
      recognition.start();
      recognitionRef.current = recognition;
      setIsListening(true);
      setTranscript("");
    } catch (err) {
      console.error("Failed to start recognition:", err);
    }
  }

  function stopListening(): string {
    setIsListening(false);
    if (recognitionRef.current) {
      recognitionRef.current.onend = null;
      recognitionRef.current.stop();
      recognitionRef.current = null;
    }
    const captured = transcript.trim();
    setTranscript("");
    return captured;
  }

  function handleDoneSpeaking() {
    const captured = stopListening();
    if (captured) {
      addCandidateMessage(captured);
    }

    if (part === "part1") {
      const nextQ = questionIndex + 1;
      if (nextQ < (topic?.part1Questions.length ?? 0) && nextQ < 6) {
        setQuestionIndex(nextQ);
        askPart1Question(nextQ);
      } else {
        // Move to Part 2
        startPart2();
      }
    } else if (part === "part2-speak") {
      // Early finish - stop timer and move to Part 3
      clearInterval(timerRef.current);
      setTimerActive(false);
      setTimer(0);
      const msg = "Thank you! Now let's move on to the follow-up questions of Part 3.";
      addExaminerMessage(msg);
      speak(msg, () => {
        setPart("part3");
        setQuestionIndex(0);
        askPart3Question(0);
      });
    } else if (part === "part3") {
      const nextQ = questionIndex + 1;
      if (nextQ < (topic?.part3Questions.length ?? 0) && nextQ < 5) {
        setQuestionIndex(nextQ);
        askPart3Question(nextQ);
      } else {
        endTest();
      }
    }
  }

  async function startTest() {
    try {
      await navigator.mediaDevices.getUserMedia({ audio: true });
    } catch {
      toast({ title: "Microphone access required", description: "Please allow microphone access.", variant: "destructive" });
      return;
    }
    setStarted(true);

    const systemPrompt = {
      role: "system",
      content: `You are a professional IELTS Speaking examiner. You are calm, neutral, and professional with a British English style. You are conducting an official IELTS Speaking test. Do NOT correct the candidate, give hints, or provide feedback during the test. Only ask questions naturally and give brief acknowledgements like "Thank you", "All right", "Let's move on". Keep your responses very short (1-2 sentences max). The topic for this test is: ${topic?.title}.`
    };
    conversationRef.current = [systemPrompt as any];

    setPart("part1");
    setQuestionIndex(0);
    const introMsg = "Good morning. My name is Sarah, and I'll be your examiner today. This is the IELTS Speaking test. Could you tell me your full name, please?";
    addExaminerMessage(introMsg);
    speak(introMsg, () => startListening());
  }

  function askPart1Question(idx: number) {
    if (!topic) return;
    const q = topic.part1Questions[idx];
    setIsSpeaking(true);
    // Small acknowledgement before next question
    const ack = idx > 0 ? "Thank you. " : "";
    const msg = ack + q;
    addExaminerMessage(msg);
    speak(msg, () => {
      setIsSpeaking(false);
      startListening();
    });
  }

  function startPart2() {
    setPart("part2-prep");
    const cue = topic?.cueCard;
    const msg = `Thank you. That is the end of Part 1. Now I'm going to give you a topic and I'd like you to talk about it for one to two minutes. Before you talk, you'll have one minute to think about what you're going to say. Here is your topic: ${cue?.topic} You should say: ${cue?.points.join(", ")}. And explain ${cue?.followUp}. You have one minute to prepare.`;
    addExaminerMessage(msg);
    speak(msg, () => {
      setTimer(60);
      setTimerActive(true);
    });
  }

  const part3AckPhrases = useRef([
    "Good point.", "I see.", "Absolutely.", "Makes sense.",
    "Interesting perspective.", "Thanks for sharing.", "I understand.",
    "Noted.", "Right.", "Got it."
  ]);
  const lastAckIndex = useRef(-1);

  function getRandomAck(): string {
    const phrases = part3AckPhrases.current;
    let idx: number;
    do {
      idx = Math.floor(Math.random() * phrases.length);
    } while (idx === lastAckIndex.current && phrases.length > 1);
    lastAckIndex.current = idx;
    return phrases[idx];
  }

  function askPart3Question(idx: number) {
    if (!topic) return;
    const q = topic.part3Questions[idx];
    const ack = idx > 0 ? `${getRandomAck()} ` : "";
    const msg = ack + q;
    setIsSpeaking(true);
    addExaminerMessage(msg);
    speak(msg, () => {
      setIsSpeaking(false);
      startListening();
    });
  }

  async function endTest() {
    setPart("scoring");
    const endMsg = "Thank you very much. That is the end of the Speaking test. Please wait while I calculate your score.";
    addExaminerMessage(endMsg);
    speak(endMsg);

    // Store the transcript and navigate to results
    sessionStorage.setItem(
      "speaking-result-pending",
      JSON.stringify({
        testId: Number(testId),
        transcript: fullTranscriptRef.current,
        topicTitle: topic?.title,
      })
    );
    navigate(`/speaking-result/${testId}`);
  }

  if (!topic) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container py-20 text-center">
          <p>Speaking test not found.</p>
          <Button className="mt-4" onClick={() => navigate("/speaking-tests")}>Back</Button>
        </div>
      </div>
    );
  }

  if (!started) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container max-w-2xl py-12">
          <Button variant="ghost" size="sm" className="mb-4" onClick={() => navigate("/speaking-tests")}>
            <ArrowLeft className="mr-1.5 h-4 w-4" />
            Back
          </Button>
          <Card>
            <CardContent className="space-y-6 p-8 text-center">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                <Mic className="h-10 w-10 text-primary" />
              </div>
              <h1 className="text-2xl font-bold">Speaking Test {topic.id}</h1>
              <p className="text-lg text-muted-foreground">{topic.title}</p>
              <div className="space-y-2 text-left text-sm text-muted-foreground">
                <p>• Part 1: Introduction & interview (4–5 min)</p>
                <p>• Part 2: Cue card — 1 min prep + 2 min talk</p>
                <p>• Part 3: Discussion (4–5 min)</p>
                <p>• Estimated total: ~14 minutes</p>
              </div>
              <div className="rounded-lg border border-destructive/20 bg-destructive/5 p-3 text-sm text-destructive">
                <strong>Important:</strong> Allow microphone access. Use Chrome or Edge for best results. Speak clearly.
              </div>
              <Button size="lg" className="w-full text-lg" onClick={startTest}>
                <Play className="mr-2 h-5 w-5" />
                Start Speaking Test
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  const partLabel = {
    intro: "Introduction",
    part1: "Part 1 — Interview",
    "part2-prep": "Part 2 — Preparation",
    "part2-speak": "Part 2 — Long Turn",
    part3: "Part 3 — Discussion",
    scoring: "Scoring...",
  }[part];

  const partProgress = {
    intro: 5,
    part1: 25,
    "part2-prep": 45,
    "part2-speak": 60,
    part3: 80,
    scoring: 100,
  }[part];

  const formatTime = (s: number) => `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;

  return (
    <div className="flex min-h-screen flex-col bg-background">
      {/* Top bar */}
      <div className="sticky top-0 z-20 border-b bg-background/95 backdrop-blur">
        <div className="container flex items-center gap-4 py-3">
          <Badge variant="secondary" className="text-xs">{partLabel}</Badge>
          <Progress value={partProgress} className="h-2 flex-1" />
          {timerActive && (
            <Badge variant={timer <= 15 ? "destructive" : "outline"} className="tabular-nums">
              <Clock className="mr-1 h-3 w-3" />
              {formatTime(timer)}
            </Badge>
          )}
        </div>
      </div>

      {/* Chat area */}
      <div className="flex-1 overflow-y-auto">
        <div className="container max-w-2xl space-y-4 py-6">
          {/* Part 2 cue card */}
          {(part === "part2-prep" || part === "part2-speak") && (
            <Card className="border-primary/30 bg-primary/5">
              <CardContent className="p-4">
                <p className="mb-2 text-xs font-semibold uppercase text-primary">Cue Card</p>
                <p className="mb-2 font-medium">{topic.cueCard.topic}</p>
                <p className="text-sm text-muted-foreground">You should say:</p>
                <ul className="mt-1 space-y-1 text-sm text-muted-foreground">
                  {topic.cueCard.points.map((p, i) => (
                    <li key={i}>• {p}</li>
                  ))}
                </ul>
                <p className="mt-2 text-sm text-muted-foreground">
                  And explain {topic.cueCard.followUp.toLowerCase()}
                </p>
              </CardContent>
            </Card>
          )}

          {messages.map((msg, i) => (
            <div
              key={i}
              className={`flex ${msg.role === "candidate" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm ${
                  msg.role === "candidate"
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-foreground"
                }`}
              >
                <p className="mb-1 text-[10px] font-semibold uppercase opacity-70">
                  {msg.role === "candidate" ? "You" : "Examiner"}
                </p>
                {msg.text}
              </div>
            </div>
          ))}

          {/* Live transcript */}
          {isListening && transcript && (
            <div className="flex justify-end">
              <div className="max-w-[85%] rounded-2xl border border-primary/30 bg-primary/10 px-4 py-3 text-sm italic text-muted-foreground">
                {transcript}
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Bottom controls */}
      <div className="sticky bottom-0 border-t bg-background/95 backdrop-blur">
        <div className="container flex items-center justify-center gap-4 py-4">
          {part === "scoring" ? (
            <div className="flex items-center gap-2 text-muted-foreground">
              <Loader2 className="h-5 w-5 animate-spin" />
              Calculating your score...
            </div>
          ) : (
            <>
              {isListening ? (
                <>
                  <div className="flex items-center gap-2 text-sm text-destructive">
                    <span className="h-2 w-2 animate-pulse rounded-full bg-destructive" />
                    Listening...
                  </div>
                  <Button
                    size="lg"
                    variant="outline"
                    onClick={handleDoneSpeaking}
                    disabled={isSpeaking || isProcessing}
                  >
                    <Square className="mr-2 h-4 w-4" />
                    Done Speaking
                  </Button>
                </>
              ) : isSpeaking ? (
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Volume2 className="h-4 w-4 animate-pulse" />
                  Examiner is speaking...
                </div>
              ) : (
                <Button size="lg" onClick={startListening} disabled={part === "part2-prep"}>
                  <Mic className="mr-2 h-4 w-4" />
                  Start Speaking
                </Button>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
