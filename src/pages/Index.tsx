import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useAuth } from "@/contexts/AuthContext";
import { Headphones, Book, PenLine, Mic, ArrowRight, CheckCircle, TrendingUp, Clock } from "lucide-react";

const modules = [
  { icon: Headphones, title: "Listening", desc: "30-minute audio practice with auto-scoring", color: "bg-chart-1/10 text-chart-1", to: "/tests" },
  { icon: Book, title: "Reading", desc: "60-minute CBT-style reading passages", color: "bg-chart-2/10 text-chart-2", to: "/reading-tests" },
  { icon: PenLine, title: "Writing", desc: "Task 1 & 2 with AI-powered feedback", color: "bg-chart-3/10 text-chart-3", to: "/writing-tests" },
  { icon: Mic, title: "Speaking", desc: "AI-powered voice speaking test", color: "bg-chart-5/10 text-chart-5", to: "/speaking-tests" },
];

const features = [
  { icon: CheckCircle, title: "Cambridge Style Test", desc: "Full test library with 80 practice tests across all modules." },
  { icon: TrendingUp, title: "Band Score Tracking", desc: "Track your progress with detailed analytics and performance charts." },
  { icon: Clock, title: "Real Exam Simulation", desc: "Timed tests that mirror the actual IELTS exam environment." },
];

const Index = () => {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="container relative py-20 md:py-32">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center rounded-full border bg-card px-4 py-1.5 text-sm text-muted-foreground">
              <span className="mr-2 inline-block h-2 w-2 rounded-full bg-success" />
              Cambridge-style Mock Tests
            </div>
            <h1 className="mb-6 text-5xl leading-tight tracking-tight md:text-7xl">
              Master Your <span className="text-primary">IELTS</span> Score
            </h1>
            <p className="mb-10 text-lg text-muted-foreground md:text-xl">
              Practice with real exam-style tests, get AI-powered feedback, and track your band score progress — all in one platform.
            </p>
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link to={user ? "/tests" : "/auth?tab=signup"}>
                <Button size="lg" className="gap-2 px-8 text-base">
                  Start Practicing <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link to="/band-scores">
                <Button variant="outline" size="lg" className="text-base">
                  Band Score Guide
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Modules */}
      <section className="border-t bg-card/30 py-20">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-3 text-3xl md:text-4xl">Four Modules, One Goal</h2>
            <p className="text-muted-foreground">Practice each IELTS module with realistic exam conditions.</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {modules.map((m) => (
              <Link key={m.title} to={m.to}>
                <Card className="group cursor-pointer border-transparent bg-card transition-all hover:border-border hover:shadow-lg">
                  <CardContent className="p-6">
                    <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl ${m.color}`}>
                      <m.icon className="h-6 w-6" />
                    </div>
                    <h3 className="mb-2 font-sans text-lg font-semibold">{m.title}</h3>
                    <p className="text-sm text-muted-foreground">{m.desc}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="container">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl md:text-4xl">Everything You Need to Score Higher</h2>
              <div className="space-y-6">
                {features.map((f) => (
                  <div key={f.title} className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <f.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="mb-1 font-sans font-semibold">{f.title}</h3>
                      <p className="text-sm text-muted-foreground">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl border bg-card p-8 shadow-xl">
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-sm font-medium text-muted-foreground">Overall Band Score</span>
                  <span className="rounded-full bg-success/10 px-3 py-1 text-sm font-bold text-success">↑ 0.5</span>
                </div>
                <div className="mb-6 text-6xl font-bold text-primary font-serif">?</div>
                <p className="mb-4 text-sm text-muted-foreground">Your score appears here after completing modules</p>
                <div className="grid grid-cols-2 gap-3">
                  {["Listening: —", "Reading: —", "Writing: —", "Speaking: —"].map((s) => (
                    <div key={s} className="rounded-lg bg-muted px-3 py-2 text-center text-sm font-medium">{s}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t bg-primary/5 py-20">
        <div className="container text-center">
          <h2 className="mb-4 text-3xl md:text-4xl">Ready to Ace Your IELTS?</h2>
          <p className="mb-8 text-muted-foreground">Join thousands of students improving their band scores every day.</p>
          <Link to={user ? "/dashboard" : "/auth?tab=signup"}>
            <Button size="lg" className="gap-2 px-8 text-base">
              {user ? "Go to Dashboard" : "Create Free Account"} <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
