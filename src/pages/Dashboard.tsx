import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Headphones, Book, PenLine, Mic, Flame, TrendingUp, Clock, Target } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

export default function Dashboard() {
  const { user, profile } = useAuth();
  const [results, setResults] = useState<any[]>([]);
  const [streak, setStreak] = useState({ current_streak: 0, longest_streak: 0 });

  useEffect(() => {
    if (!user) return;
    supabase.from("test_results").select("*").eq("user_id", user.id).order("completed_at", { ascending: false }).limit(10)
      .then(({ data }) => { if (data) setResults(data); });
    supabase.from("daily_streaks").select("*").eq("user_id", user.id).single()
      .then(({ data }) => { if (data) setStreak(data); });
  }, [user]);

  const moduleScores = ["listening", "reading", "writing", "speaking"].map((mod) => {
    const modResults = results.filter((r) => r.module_id); // simplified
    const avg = modResults.length ? modResults.reduce((a, b) => a + Number(b.band_score), 0) / modResults.length : 0;
    return { module: mod.charAt(0).toUpperCase() + mod.slice(1), score: Number(avg.toFixed(1)) };
  });

  const overallAvg = moduleScores.reduce((a, b) => a + b.score, 0) / 4;

  const quickStart = [
    { icon: Headphones, label: "Listening", to: "/tests", color: "bg-chart-1/10 text-chart-1" },
    { icon: Book, label: "Reading", to: "/tests", color: "bg-chart-2/10 text-chart-2" },
    { icon: PenLine, label: "Writing", to: "/tests", color: "bg-chart-3/10 text-chart-3" },
    { icon: Mic, label: "Speaking", to: "/tests", color: "bg-chart-5/10 text-chart-5" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container py-8">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl">Welcome back, {profile?.display_name || "Student"}!</h1>
          <p className="mt-2 text-muted-foreground">Track your progress and continue practicing.</p>
        </div>

        {/* Stats Row */}
        <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardContent className="flex items-center gap-4 p-5">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Target className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Overall Band</p>
                <p className="text-2xl font-bold">{overallAvg.toFixed(1)}</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex items-center gap-4 p-5">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <Flame className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Day Streak</p>
                <p className="text-2xl font-bold">{streak.current_streak}</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex items-center gap-4 p-5">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-success/10 text-success">
                <TrendingUp className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Tests Taken</p>
                <p className="text-2xl font-bold">{results.length}</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex items-center gap-4 p-5">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-warning/10 text-warning">
                <Clock className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Best Streak</p>
                <p className="text-2xl font-bold">{streak.longest_streak}</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Chart */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="font-sans text-lg">Module Scores</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={moduleScores}>
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
            <CardHeader>
              <CardTitle className="font-sans text-lg">Quick Start</CardTitle>
            </CardHeader>
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
        {results.length > 0 && (
          <Card className="mt-6">
            <CardHeader>
              <CardTitle className="font-sans text-lg">Recent Practice</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {results.map((r) => (
                  <div key={r.id} className="flex items-center justify-between rounded-lg border p-3">
                    <div>
                      <p className="font-medium">Band Score: {Number(r.band_score).toFixed(1)}</p>
                      <p className="text-sm text-muted-foreground">
                        {r.raw_score}/{r.total_questions} correct • {new Date(r.completed_at).toLocaleDateString()}
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
