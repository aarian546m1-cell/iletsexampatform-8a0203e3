import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Headphones, Book, PenLine, Mic, Flame, TrendingUp, Clock, Target, AlertCircle } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

type ModuleKey = "listening" | "reading" | "writing" | "speaking";

const MODULE_META: Record<ModuleKey, { icon: typeof Headphones; color: string }> = {
  listening: { icon: Headphones, color: "bg-chart-1/10 text-chart-1" },
  reading: { icon: Book, color: "bg-chart-2/10 text-chart-2" },
  writing: { icon: PenLine, color: "bg-chart-3/10 text-chart-3" },
  speaking: { icon: Mic, color: "bg-chart-5/10 text-chart-5" },
};

export default function Dashboard() {
  const { user, profile } = useAuth();
  const [results, setResults] = useState<any[]>([]);
  const [writingResults, setWritingResults] = useState<any[]>([]);
  const [speakingResults, setSpeakingResults] = useState<any[]>([]);
  const [streak, setStreak] = useState({ current_streak: 0, longest_streak: 0 });

  useEffect(() => {
    if (!user) return;
    supabase.from("test_results").select("*, test_modules(module_type)").eq("user_id", user.id).order("completed_at", { ascending: false }).limit(20)
      .then(({ data }) => { if (data) setResults(data); });
    supabase.from("writing_submissions").select("*").eq("user_id", user.id).not("band_score", "is", null).order("completed_at", { ascending: false }).limit(20)
      .then(({ data }) => { if (data) setWritingResults(data); });
    supabase.from("speaking_recordings").select("*").eq("user_id", user.id).not("band_score", "is", null).order("completed_at", { ascending: false }).limit(20)
      .then(({ data }) => { if (data) setSpeakingResults(data); });
    supabase.from("daily_streaks").select("*").eq("user_id", user.id).maybeSingle()
      .then(({ data }) => { if (data) setStreak(data); });
  }, [user]);

  // Calculate per-module best/latest scores
  const moduleScores: Record<ModuleKey, number | null> = {
    listening: null,
    reading: null,
    writing: null,
    speaking: null,
  };

  // From test_results (listening, reading, speaking)
  for (const r of results) {
    const modType = r.test_modules?.module_type as ModuleKey | undefined;
    if (modType && modType !== "writing" && moduleScores[modType] === null) {
      moduleScores[modType] = Number(r.band_score);
    }
  }

  // From writing_submissions
  if (writingResults.length > 0) {
    moduleScores.writing = Number(writingResults[0].band_score);
  }

  // From speaking_recordings
  if (speakingResults.length > 0) {
    moduleScores.speaking = Number(speakingResults[0].band_score);
  }

  const completedModules = (Object.entries(moduleScores) as [ModuleKey, number | null][]).filter(([, v]) => v !== null);
  const completedCount = completedModules.length;

  let overallLabel = "";
  let overallScore: number | null = null;
  let overallMessage = "";

  if (completedCount === 4) {
    overallScore = Math.round(completedModules.reduce((a, [, v]) => a + v!, 0) / 4 * 2) / 2;
    overallLabel = "Overall Band Score";
  } else if (completedCount >= 2) {
    overallScore = Math.round(completedModules.reduce((a, [, v]) => a + v!, 0) / completedCount * 2) / 2;
    overallLabel = "Current Average Band (Based on Completed Modules)";
  } else if (completedCount === 1) {
    overallMessage = "Complete all four modules to generate overall band score.";
  } else {
    overallMessage = "No scores yet. Start practicing to see your band scores.";
  }

  const chartData = (["listening", "reading", "writing", "speaking"] as ModuleKey[]).map((mod) => ({
    module: mod.charAt(0).toUpperCase() + mod.slice(1),
    score: moduleScores[mod] ?? 0,
  }));

  const allResults = [
    ...results.map((r) => ({ id: r.id, band: Number(r.band_score), detail: `${r.raw_score}/${r.total_questions} correct`, date: r.completed_at, type: r.test_modules?.module_type })),
    ...writingResults.map((r) => ({ id: r.id, band: Number(r.band_score), detail: `Task 1: ${r.word_count_task1 || 0}w • Task 2: ${r.word_count_task2 || 0}w`, date: r.completed_at, type: "writing" })),
    ...speakingResults.map((r) => ({ id: r.id, band: Number(r.band_score), detail: `F:${Number(r.fluency_score || 0).toFixed(1)} V:${Number(r.vocabulary_score || 0).toFixed(1)} G:${Number(r.grammar_score || 0).toFixed(1)} P:${Number(r.pronunciation_score || 0).toFixed(1)}`, date: r.completed_at, type: "speaking" })),
  ].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, 10);

  const quickStart = [
    { icon: Headphones, label: "Listening", to: "/tests/listening", color: "bg-chart-1/10 text-chart-1" },
    { icon: Book, label: "Reading", to: "/tests/reading", color: "bg-chart-2/10 text-chart-2" },
    { icon: PenLine, label: "Writing", to: "/writing-tests", color: "bg-chart-3/10 text-chart-3" },
    { icon: Mic, label: "Speaking", to: "/tests/speaking", color: "bg-chart-5/10 text-chart-5" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container py-8">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl">Welcome back, {profile?.display_name || "Student"}!</h1>
          <p className="mt-2 text-muted-foreground">Track your progress and continue practicing.</p>
        </div>

        {/* Band Score Summary */}
        <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {(["listening", "reading", "writing", "speaking"] as ModuleKey[]).map((mod) => {
            const Icon = MODULE_META[mod].icon;
            const score = moduleScores[mod];
            return (
              <Card key={mod}>
                <CardContent className="flex items-center gap-4 p-5">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${MODULE_META[mod].color}`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{mod.charAt(0).toUpperCase() + mod.slice(1)}</p>
                    <p className="text-2xl font-bold">{score !== null ? score.toFixed(1) : "—"}</p>
                    {score === null && <p className="text-xs text-muted-foreground">Not Attempted</p>}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Overall Band */}
        <Card className="mb-8">
          <CardContent className="p-6">
            {overallScore !== null ? (
              <div className="flex items-center gap-6">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{overallLabel}</p>
                  <p className="font-serif text-4xl font-bold text-primary">{overallScore.toFixed(1)}</p>
                </div>
              </div>
            ) : (
              <div className="flex items-center gap-4">
                <AlertCircle className="h-5 w-5 text-muted-foreground" />
                <p className="text-muted-foreground">{overallMessage}</p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Stats Row */}
        <div className="mb-8 grid gap-4 sm:grid-cols-3">
          <Card>
            <CardContent className="flex items-center gap-4 p-5">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent"><Flame className="h-6 w-6" /></div>
              <div><p className="text-sm text-muted-foreground">Day Streak</p><p className="text-2xl font-bold">{streak.current_streak}</p></div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex items-center gap-4 p-5">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-success/10 text-success"><TrendingUp className="h-6 w-6" /></div>
              <div><p className="text-sm text-muted-foreground">Tests Taken</p><p className="text-2xl font-bold">{results.length + writingResults.length + speakingResults.length}</p></div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex items-center gap-4 p-5">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-warning/10 text-warning"><Clock className="h-6 w-6" /></div>
              <div><p className="text-sm text-muted-foreground">Best Streak</p><p className="text-2xl font-bold">{streak.longest_streak}</p></div>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Chart */}
          <Card className="lg:col-span-2">
            <CardHeader><CardTitle className="font-sans text-lg">Module Scores</CardTitle></CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={chartData}>
                  <XAxis dataKey="module" tick={{ fontSize: 12 }} />
                  <YAxis domain={[0, 9]} tick={{ fontSize: 12 }} />
                  <Tooltip />
                  <Bar dataKey="score" fill="hsl(var(--primary))" radius={[6, 6, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Quick Start */}
          <Card>
            <CardHeader><CardTitle className="font-sans text-lg">Quick Start</CardTitle></CardHeader>
            <CardContent className="space-y-3">
              {quickStart.map((q) => (
                <Link key={q.label} to={q.to}>
                  <Button variant="outline" className="w-full justify-start gap-3">
                    <div className={`flex h-8 w-8 items-center justify-center rounded-lg ${q.color}`}>
                      <q.icon className="h-4 w-4" />
                    </div>
                    Practice {q.label}
                  </Button>
                </Link>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Recent Results */}
        {allResults.length > 0 && (
          <Card className="mt-6">
            <CardHeader><CardTitle className="font-sans text-lg">Recent Practice</CardTitle></CardHeader>
            <CardContent>
              <div className="space-y-3">
                {allResults.map((r) => (
                  <div key={r.id} className="flex items-center justify-between rounded-lg border p-3">
                    <div>
                      <p className="font-medium">
                        {r.type ? r.type.charAt(0).toUpperCase() + r.type.slice(1) : "Test"} — Band: {r.band.toFixed(1)}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {r.detail} • {new Date(r.date).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}
      </div>
      <Footer />
    </div>
  );
}
