import { useEffect, useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";
import { useTheme } from "@/hooks/use-theme";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  Headphones, Book, PenLine, Mic, Flame, TrendingUp, Clock, Target,
  ArrowLeft, Sun, Moon, ChevronRight, Trophy, BarChart3, Activity, Calendar,
  Goal, Pencil, Check, X
} from "lucide-react";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer,
  LineChart, Line, CartesianGrid, RadarChart, PolarGrid,
  PolarAngleAxis, PolarRadiusAxis, Radar, Legend
} from "recharts";

type ModuleKey = "listening" | "reading" | "writing" | "speaking";

const MODULE_META: Record<ModuleKey, { icon: typeof Headphones; label: string; color: string; gradient: string; to: string }> = {
  listening: { icon: Headphones, label: "Listening", color: "text-chart-1", gradient: "from-[hsl(215,90%,42%)] to-[hsl(215,85%,55%)]", to: "/listening-tests" },
  reading: { icon: Book, label: "Reading", color: "text-chart-2", gradient: "from-[hsl(152,60%,40%)] to-[hsl(152,50%,50%)]", to: "/reading-tests" },
  writing: { icon: PenLine, label: "Writing", color: "text-chart-3", gradient: "from-[hsl(350,80%,55%)] to-[hsl(350,70%,65%)]", to: "/writing-tests" },
  speaking: { icon: Mic, label: "Speaking", color: "text-chart-5", gradient: "from-[hsl(270,60%,55%)] to-[hsl(270,50%,65%)]", to: "/speaking-tests" },
};

export default function Dashboard() {
  const { user, profile } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const [results, setResults] = useState<any[]>([]);
  const [writingResults, setWritingResults] = useState<any[]>([]);
  const [speakingResults, setSpeakingResults] = useState<any[]>([]);
  const [streak, setStreak] = useState({ current_streak: 0, longest_streak: 0 });
  const [targetBand, setTargetBand] = useState<number | null>(null);
  const [editingTarget, setEditingTarget] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!user) return;
    Promise.all([
      supabase.from("test_results").select("*, test_modules(module_type)").eq("user_id", user.id).order("completed_at", { ascending: false }).limit(50),
      supabase.from("writing_submissions").select("*").eq("user_id", user.id).not("band_score", "is", null).order("completed_at", { ascending: false }).limit(50),
      supabase.from("speaking_recordings").select("*").eq("user_id", user.id).not("band_score", "is", null).order("completed_at", { ascending: false }).limit(50),
      supabase.from("daily_streaks").select("*").eq("user_id", user.id).maybeSingle(),
      supabase.from("profiles").select("target_band").eq("user_id", user.id).maybeSingle(),
    ]).then(([r1, r2, r3, r4, r5]) => {
      if (r1.data) setResults(r1.data);
      if (r2.data) setWritingResults(r2.data);
      if (r3.data) setSpeakingResults(r3.data);
      if (r4.data) setStreak(r4.data);
      if (r5.data?.target_band) setTargetBand(Number(r5.data.target_band));
      setLoaded(true);
    });
  }, [user]);

  // Per-module latest scores
  const moduleScores: Record<ModuleKey, number | null> = useMemo(() => {
    const scores: Record<ModuleKey, number | null> = { listening: null, reading: null, writing: null, speaking: null };
    for (const r of results) {
      const mod = r.test_modules?.module_type as ModuleKey | undefined;
      if (mod && mod !== "writing" && mod !== "speaking" && scores[mod] === null) scores[mod] = Number(r.band_score);
    }
    if (writingResults.length > 0) scores.writing = Number(writingResults[0].band_score);
    if (speakingResults.length > 0) scores.speaking = Number(speakingResults[0].band_score);
    return scores;
  }, [results, writingResults, speakingResults]);

  // Per-module attempt counts
  const moduleCounts: Record<ModuleKey, number> = useMemo(() => {
    const counts: Record<ModuleKey, number> = { listening: 0, reading: 0, writing: 0, speaking: 0 };
    for (const r of results) {
      const mod = r.test_modules?.module_type as ModuleKey | undefined;
      if (mod && mod in counts) counts[mod]++;
    }
    counts.writing = writingResults.length;
    counts.speaking = speakingResults.length;
    return counts;
  }, [results, writingResults, speakingResults]);

  // Per-module best scores
  const moduleBest: Record<ModuleKey, number | null> = useMemo(() => {
    const best: Record<ModuleKey, number | null> = { listening: null, reading: null, writing: null, speaking: null };
    for (const r of results) {
      const mod = r.test_modules?.module_type as ModuleKey | undefined;
      if (mod && mod in best) {
        const s = Number(r.band_score);
        if (best[mod] === null || s > best[mod]!) best[mod] = s;
      }
    }
    for (const r of writingResults) { const s = Number(r.band_score); if (best.writing === null || s > best.writing!) best.writing = s; }
    for (const r of speakingResults) { const s = Number(r.band_score); if (best.speaking === null || s > best.speaking!) best.speaking = s; }
    return best;
  }, [results, writingResults, speakingResults]);

  const completedModules = (Object.entries(moduleScores) as [ModuleKey, number | null][]).filter(([, v]) => v !== null);
  const overallScore = completedModules.length >= 2
    ? Math.round(completedModules.reduce((a, [, v]) => a + v!, 0) / completedModules.length * 2) / 2
    : null;

  const totalTests = moduleCounts.listening + moduleCounts.reading + moduleCounts.writing + moduleCounts.speaking;

  // Trend data (last scores over time per module)
  const trendData = useMemo(() => {
    const all = [
      ...results.map(r => ({ date: r.completed_at, mod: r.test_modules?.module_type as string, score: Number(r.band_score) })),
      ...writingResults.map(r => ({ date: r.completed_at, mod: "writing", score: Number(r.band_score) })),
      ...speakingResults.map(r => ({ date: r.completed_at, mod: "speaking", score: Number(r.band_score) })),
    ].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

    const grouped: Record<string, any> = {};
    for (const item of all) {
      const key = new Date(item.date).toLocaleDateString("en-US", { month: "short", day: "numeric" });
      if (!grouped[key]) grouped[key] = { date: key };
      grouped[key][item.mod] = item.score;
    }
    return Object.values(grouped).slice(-10);
  }, [results, writingResults, speakingResults]);

  // Weekly practice data (last 7 days)
  const weeklyData = useMemo(() => {
    const days: { date: Date; label: string; dayLabel: string; listening: number; reading: number; writing: number; speaking: number; total: number }[] = [];
    const now = new Date();
    for (let i = 6; i >= 0; i--) {
      const d = new Date(now);
      d.setDate(d.getDate() - i);
      d.setHours(0, 0, 0, 0);
      days.push({
        date: d,
        label: d.toLocaleDateString("en-US", { month: "short", day: "numeric" }),
        dayLabel: d.toLocaleDateString("en-US", { weekday: "short" }),
        listening: 0, reading: 0, writing: 0, speaking: 0, total: 0,
      });
    }
    const addToDay = (dateStr: string, mod: ModuleKey) => {
      const d = new Date(dateStr);
      d.setHours(0, 0, 0, 0);
      const day = days.find(dd => dd.date.getTime() === d.getTime());
      if (day) { day[mod]++; day.total++; }
    };
    for (const r of results) {
      const mod = r.test_modules?.module_type as ModuleKey | undefined;
      if (mod && mod !== "writing" && mod !== "speaking") addToDay(r.completed_at, mod);
    }
    for (const r of writingResults) addToDay(r.completed_at, "writing");
    for (const r of speakingResults) addToDay(r.completed_at, "speaking");
    return days;
  }, [results, writingResults, speakingResults]);

  const weekTotal = weeklyData.reduce((a, d) => a + d.total, 0);
  const activeDays = weeklyData.filter(d => d.total > 0).length;

  // Radar data
  const radarData = (["listening", "reading", "writing", "speaking"] as ModuleKey[]).map(mod => ({
    module: MODULE_META[mod].label,
    score: moduleScores[mod] ?? 0,
    best: moduleBest[mod] ?? 0,
  }));

  // Bar chart data
  const barData = (["listening", "reading", "writing", "speaking"] as ModuleKey[]).map(mod => ({
    module: MODULE_META[mod].label,
    latest: moduleScores[mod] ?? 0,
    best: moduleBest[mod] ?? 0,
  }));

  // Recent results
  const recentResults = useMemo(() => [
    ...results.map(r => ({ id: r.id, band: Number(r.band_score), detail: `${r.raw_score}/${r.total_questions} correct`, date: r.completed_at, type: r.test_modules?.module_type as string })),
    ...writingResults.map(r => ({ id: r.id, band: Number(r.band_score), detail: `Task 1: ${r.word_count_task1 || 0}w • Task 2: ${r.word_count_task2 || 0}w`, date: r.completed_at, type: "writing" })),
    ...speakingResults.map(r => ({ id: r.id, band: Number(r.band_score), detail: `F:${Number(r.fluency_score || 0).toFixed(1)} V:${Number(r.vocabulary_score || 0).toFixed(1)} G:${Number(r.grammar_score || 0).toFixed(1)} P:${Number(r.pronunciation_score || 0).toFixed(1)}`, date: r.completed_at, type: "speaking" })),
  ].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, 8), [results, writingResults, speakingResults]);

  const getBandColor = (band: number) => {
    if (band >= 7) return "text-chart-2";
    if (band >= 5.5) return "text-chart-1";
    if (band >= 4) return "text-warning";
    return "text-destructive";
  };

  const BAND_OPTIONS = [4.0, 4.5, 5.0, 5.5, 6.0, 6.5, 7.0, 7.5, 8.0, 8.5, 9.0];

  const saveTargetBand = async (band: number) => {
    if (!user) return;
    setTargetBand(band);
    setEditingTarget(false);
    await supabase.from("profiles").update({ target_band: band } as any).eq("user_id", user.id);
  };

  const clearTargetBand = async () => {
    if (!user) return;
    setTargetBand(null);
    setEditingTarget(false);
    await supabase.from("profiles").update({ target_band: null } as any).eq("user_id", user.id);
  };

  const progressToTarget = targetBand && overallScore !== null
    ? Math.min(100, Math.round((overallScore / targetBand) * 100))
    : null;

  const gapToTarget = targetBand && overallScore !== null
    ? Math.max(0, targetBand - overallScore)
    : null;

  return (
    <div className="min-h-screen bg-background">
      {/* Custom Dashboard Header */}
      <header className="sticky top-0 z-50 border-b bg-card/80 backdrop-blur-lg">
        <div className="container flex h-16 items-center justify-between">
          <Link to="/" className="group flex items-center gap-2.5 transition-all duration-200 hover:opacity-80">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary transition-transform duration-200 group-hover:-translate-x-0.5">
              <ArrowLeft className="h-4 w-4 text-primary-foreground" />
            </div>
            <span className="font-serif text-xl font-bold">IELTS Pro</span>
          </Link>
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" onClick={toggleTheme} className="h-9 w-9 transition-transform duration-200 hover:scale-110">
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
          </div>
        </div>
      </header>

      <div className="container py-8">
        {/* Welcome + Overall Band Hero */}
        <div className="mb-8 animate-fade-in">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/10 via-card to-chart-5/5 border p-6 md:p-8">
            <div className="absolute -right-8 -top-8 h-40 w-40 rounded-full bg-primary/5 blur-3xl" />
            <div className="absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-chart-5/5 blur-3xl" />
            <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Welcome back</p>
                <h1 className="mt-1 font-serif text-3xl font-bold md:text-4xl">{profile?.display_name || "Student"}</h1>
                <p className="mt-2 text-muted-foreground">
                  {totalTests > 0
                    ? `You've completed ${totalTests} test${totalTests > 1 ? "s" : ""} so far. Keep going!`
                    : "Start practicing to see your progress here."}
                </p>
              </div>

              {/* Overall Band Score Circle */}
              <div className="flex flex-col items-center">
                <div className="relative flex h-32 w-32 items-center justify-center rounded-full border-4 border-primary/20 bg-card shadow-lg transition-transform duration-300 hover:scale-105">
                  <div className="absolute inset-1 rounded-full border-2 border-dashed border-primary/10" />
                  {overallScore !== null ? (
                    <div className="text-center">
                      <p className={`font-serif text-4xl font-bold ${getBandColor(overallScore)}`}>{overallScore.toFixed(1)}</p>
                      <p className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">Overall</p>
                    </div>
                  ) : (
                    <div className="text-center px-3">
                      <Target className="mx-auto h-6 w-6 text-muted-foreground/50" />
                      <p className="mt-1 text-[10px] text-muted-foreground">Take tests to see score</p>
                    </div>
                  )}
                </div>
                {completedModules.length > 0 && completedModules.length < 4 && (
                  <p className="mt-2 text-xs text-muted-foreground">
                    Based on {completedModules.length}/4 modules
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Stats Strip */}
        <div className="mb-8 grid grid-cols-2 gap-3 sm:grid-cols-4 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          {[
            { icon: Activity, label: "Tests Taken", value: totalTests, color: "text-chart-1" },
            { icon: Flame, label: "Day Streak", value: streak.current_streak, color: "text-accent" },
            { icon: Trophy, label: "Best Streak", value: streak.longest_streak, color: "text-warning" },
            { icon: TrendingUp, label: "Modules Done", value: completedModules.length, color: "text-chart-2" },
          ].map((stat) => (
            <Card key={stat.label} className="transition-all duration-200 hover:shadow-md hover:-translate-y-0.5">
              <CardContent className="flex items-center gap-3 p-4">
                <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-muted ${stat.color}`}>
                  <stat.icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                  <p className="text-xl font-bold">{stat.value}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Module Score Cards */}
        <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 animate-fade-in" style={{ animationDelay: "0.15s" }}>
          {(["listening", "reading", "writing", "speaking"] as ModuleKey[]).map((mod, i) => {
            const meta = MODULE_META[mod];
            const Icon = meta.icon;
            const score = moduleScores[mod];
            const best = moduleBest[mod];
            const count = moduleCounts[mod];
            return (
              <Link key={mod} to={meta.to}>
                <Card className="group relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer">
                  <div className={`absolute inset-0 bg-gradient-to-br ${meta.gradient} opacity-0 transition-opacity duration-300 group-hover:opacity-5`} />
                  <CardContent className="relative p-5">
                    <div className="flex items-center justify-between mb-3">
                      <div className={`flex h-11 w-11 items-center justify-center rounded-xl bg-muted ${meta.color} transition-transform duration-200 group-hover:scale-110`}>
                        <Icon className="h-5 w-5" />
                      </div>
                      <ChevronRight className="h-4 w-4 text-muted-foreground opacity-0 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0.5" />
                    </div>
                    <p className="text-sm font-medium text-muted-foreground">{meta.label}</p>
                    <p className={`mt-1 text-3xl font-bold ${score !== null ? getBandColor(score) : "text-muted-foreground/30"}`}>
                      {score !== null ? score.toFixed(1) : "—"}
                    </p>
                    <div className="mt-3 flex items-center justify-between text-xs text-muted-foreground">
                      <span>{count} attempt{count !== 1 ? "s" : ""}</span>
                      {best !== null && <span>Best: {best.toFixed(1)}</span>}
                    </div>
                    {count > 0 && (
                      <Progress value={(score ?? 0) / 9 * 100} className="mt-2 h-1.5" />
                    )}
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>

        {/* Charts Row */}
        <div className="mb-8 grid gap-6 lg:grid-cols-3 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          {/* Bar Chart */}
          <Card className="lg:col-span-2 transition-shadow duration-200 hover:shadow-md">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 font-sans text-base">
                <BarChart3 className="h-4 w-4 text-primary" />
                Module Scores
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={260}>
                <BarChart data={barData} barGap={4}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="module" tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }} />
                  <YAxis domain={[0, 9]} tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }} />
                  <Tooltip
                    contentStyle={{ background: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: "8px", fontSize: 12 }}
                  />
                  <Bar dataKey="latest" name="Latest" fill="hsl(var(--primary))" radius={[6, 6, 0, 0]} />
                  <Bar dataKey="best" name="Best" fill="hsl(var(--chart-2))" radius={[6, 6, 0, 0]} opacity={0.6} />
                  <Legend wrapperStyle={{ fontSize: 12 }} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Radar Chart */}
          <Card className="transition-shadow duration-200 hover:shadow-md">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 font-sans text-base">
                <Target className="h-4 w-4 text-chart-5" />
                Skills Overview
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={260}>
                <RadarChart data={radarData}>
                  <PolarGrid stroke="hsl(var(--border))" />
                  <PolarAngleAxis dataKey="module" tick={{ fontSize: 11, fill: "hsl(var(--muted-foreground))" }} />
                  <PolarRadiusAxis domain={[0, 9]} tick={{ fontSize: 10, fill: "hsl(var(--muted-foreground))" }} />
                  <Radar name="Latest" dataKey="score" stroke="hsl(var(--primary))" fill="hsl(var(--primary))" fillOpacity={0.2} />
                  <Radar name="Best" dataKey="best" stroke="hsl(var(--chart-2))" fill="hsl(var(--chart-2))" fillOpacity={0.1} />
                </RadarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Trend Line Chart */}
        {trendData.length > 1 && (
          <Card className="mb-8 animate-fade-in" style={{ animationDelay: "0.25s" }}>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 font-sans text-base">
                <TrendingUp className="h-4 w-4 text-chart-2" />
                Score Trend Over Time
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={220}>
                <LineChart data={trendData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="date" tick={{ fontSize: 11, fill: "hsl(var(--muted-foreground))" }} />
                  <YAxis domain={[0, 9]} tick={{ fontSize: 11, fill: "hsl(var(--muted-foreground))" }} />
                  <Tooltip contentStyle={{ background: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: "8px", fontSize: 12 }} />
                  <Line type="monotone" dataKey="listening" stroke="hsl(var(--chart-1))" strokeWidth={2} dot={{ r: 3 }} connectNulls />
                  <Line type="monotone" dataKey="reading" stroke="hsl(var(--chart-2))" strokeWidth={2} dot={{ r: 3 }} connectNulls />
                  <Line type="monotone" dataKey="writing" stroke="hsl(var(--chart-3))" strokeWidth={2} dot={{ r: 3 }} connectNulls />
                  <Line type="monotone" dataKey="speaking" stroke="hsl(var(--chart-5))" strokeWidth={2} dot={{ r: 3 }} connectNulls />
                  <Legend wrapperStyle={{ fontSize: 12 }} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        )}

        {/* Weekly Practice Summary */}
        <Card className="mb-8 animate-fade-in" style={{ animationDelay: "0.28s" }}>
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-2 font-sans text-base">
                <Calendar className="h-4 w-4 text-chart-4" />
                Weekly Practice Summary
              </CardTitle>
              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                <span>{weekTotal} test{weekTotal !== 1 ? "s" : ""} this week</span>
                <span>{activeDays}/7 active days</span>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-7 gap-2">
              {weeklyData.map((day) => {
                const maxBar = Math.max(...weeklyData.map(d => d.total), 1);
                const height = day.total > 0 ? Math.max(20, (day.total / maxBar) * 100) : 8;
                const isToday = day.date.toDateString() === new Date().toDateString();
                return (
                  <div key={day.label} className="flex flex-col items-center gap-1.5">
                    <div className="relative flex h-28 w-full items-end justify-center rounded-lg bg-muted/50 p-1">
                      {day.total > 0 ? (
                        <div className="flex w-full flex-col items-center gap-0.5" style={{ height: `${height}%` }}>
                          {day.listening > 0 && <div className="w-full rounded-sm bg-chart-1 transition-all duration-500" style={{ flex: day.listening }} />}
                          {day.reading > 0 && <div className="w-full rounded-sm bg-chart-2 transition-all duration-500" style={{ flex: day.reading }} />}
                          {day.writing > 0 && <div className="w-full rounded-sm bg-chart-3 transition-all duration-500" style={{ flex: day.writing }} />}
                          {day.speaking > 0 && <div className="w-full rounded-sm bg-chart-5 transition-all duration-500" style={{ flex: day.speaking }} />}
                        </div>
                      ) : (
                        <div className="h-1.5 w-6 rounded-full bg-muted" />
                      )}
                      {day.total > 0 && (
                        <span className="absolute top-1 text-[10px] font-bold text-foreground/70">{day.total}</span>
                      )}
                    </div>
                    <span className={`text-[11px] font-medium ${isToday ? "text-primary font-bold" : "text-muted-foreground"}`}>
                      {day.dayLabel}
                    </span>
                  </div>
                );
              })}
            </div>
            <div className="mt-3 flex flex-wrap items-center gap-4 text-[11px] text-muted-foreground">
              <span className="flex items-center gap-1.5"><span className="h-2.5 w-2.5 rounded-sm bg-chart-1" />Listening</span>
              <span className="flex items-center gap-1.5"><span className="h-2.5 w-2.5 rounded-sm bg-chart-2" />Reading</span>
              <span className="flex items-center gap-1.5"><span className="h-2.5 w-2.5 rounded-sm bg-chart-3" />Writing</span>
              <span className="flex items-center gap-1.5"><span className="h-2.5 w-2.5 rounded-sm bg-chart-5" />Speaking</span>
            </div>
          </CardContent>
        </Card>

        {/* Quick Start + Recent Results */}
        <div className="grid gap-6 lg:grid-cols-3 animate-fade-in" style={{ animationDelay: "0.3s" }}>
          {/* Quick Start */}
          <Card className="transition-shadow duration-200 hover:shadow-md">
            <CardHeader className="pb-3">
              <CardTitle className="font-sans text-base">Quick Start</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2.5">
              {(["listening", "reading", "writing", "speaking"] as ModuleKey[]).map((mod) => {
                const meta = MODULE_META[mod];
                const Icon = meta.icon;
                return (
                  <Link key={mod} to={meta.to}>
                    <Button variant="outline" className="w-full justify-start gap-3 transition-all duration-200 hover:translate-x-1 hover:shadow-sm">
                      <div className={`flex h-8 w-8 items-center justify-center rounded-lg bg-muted ${meta.color}`}>
                        <Icon className="h-4 w-4" />
                      </div>
                      Practice {meta.label}
                      <ChevronRight className="ml-auto h-4 w-4 text-muted-foreground" />
                    </Button>
                  </Link>
                );
              })}
            </CardContent>
          </Card>

          {/* Recent Results */}
          <Card className="lg:col-span-2 transition-shadow duration-200 hover:shadow-md">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 font-sans text-base">
                <Clock className="h-4 w-4 text-muted-foreground" />
                Recent Practice
              </CardTitle>
            </CardHeader>
            <CardContent>
              {recentResults.length === 0 ? (
                <p className="py-8 text-center text-sm text-muted-foreground">No results yet. Start a practice test!</p>
              ) : (
                <div className="space-y-2">
                  {recentResults.map((r) => {
                    const mod = r.type as ModuleKey;
                    const meta = MODULE_META[mod] || MODULE_META.listening;
                    const Icon = meta?.icon || Activity;
                    return (
                      <div key={r.id} className="flex items-center gap-3 rounded-lg border p-3 transition-all duration-200 hover:bg-muted/50 hover:shadow-sm">
                        <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-muted ${meta?.color || ""}`}>
                          <Icon className="h-4 w-4" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <p className="text-sm font-medium">{meta?.label || "Test"}</p>
                            <span className={`text-sm font-bold ${getBandColor(r.band)}`}>{r.band.toFixed(1)}</span>
                          </div>
                          <p className="text-xs text-muted-foreground truncate">{r.detail}</p>
                        </div>
                        <p className="text-xs text-muted-foreground whitespace-nowrap">
                          {new Date(r.date).toLocaleDateString("en-US", { month: "short", day: "numeric" })}
                        </p>
                      </div>
                    );
                  })}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
}
