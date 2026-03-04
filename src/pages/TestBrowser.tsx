import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Headphones, Book, PenLine, Mic, ArrowRight } from "lucide-react";

const modules = [
  {
    icon: Headphones,
    title: "Listening",
    desc: "30-minute audio practice with auto-scoring across Cambridge tests",
    to: "/tests",
    color: "bg-chart-1/10 text-chart-1",
    borderColor: "hover:border-chart-1/40",
  },
  {
    icon: Book,
    title: "Reading",
    desc: "60-minute CBT-style reading passages with timed exam simulation",
    to: "/reading-tests",
    color: "bg-chart-2/10 text-chart-2",
    borderColor: "hover:border-chart-2/40",
  },
  {
    icon: PenLine,
    title: "Writing",
    desc: "Task 1 & 2 with AI-powered band scoring and detailed feedback",
    to: "/writing-tests",
    color: "bg-chart-3/10 text-chart-3",
    borderColor: "hover:border-chart-3/40",
  },
  {
    icon: Mic,
    title: "Speaking",
    desc: "Record your responses and get AI band estimation with feedback",
    to: "/speaking-tests",
    color: "bg-chart-5/10 text-chart-5",
    borderColor: "hover:border-chart-5/40",
  },
];

export default function TestBrowser() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container py-8">
        <div className="mb-10 text-center">
          <h1 className="text-3xl md:text-4xl">IELTS Practice Modules</h1>
          <p className="mt-2 text-muted-foreground">Select a module to start practicing.</p>
        </div>

        <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-2">
          {modules.map((m) => (
            <Link key={m.title} to={m.to}>
              <Card className={`group cursor-pointer border-2 border-transparent transition-all hover:shadow-xl ${m.borderColor}`}>
                <CardContent className="flex flex-col items-center p-8 text-center">
                  <div className={`mb-5 flex h-16 w-16 items-center justify-center rounded-2xl ${m.color}`}>
                    <m.icon className="h-8 w-8" />
                  </div>
                  <h3 className="mb-2 font-sans text-xl font-semibold">{m.title}</h3>
                  <p className="mb-4 text-sm text-muted-foreground">{m.desc}</p>
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
                    Start Practice <ArrowRight className="h-4 w-4" />
                  </span>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
