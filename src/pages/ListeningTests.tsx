import { Link } from "react-router-dom";
import { LISTENING_TESTS } from "@/lib/listening-tests-data";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Headphones, Clock, ArrowRight, Volume2 } from "lucide-react";

export default function ListeningTests() {
  const tests = LISTENING_TESTS;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container py-8">
        <div className="mb-8">
          <Badge variant="secondary" className="mb-3">
            <Headphones className="mr-1.5 h-3 w-3" />
            Listening Module
          </Badge>
          <h1 className="text-3xl md:text-4xl">IELTS Listening Practice Tests</h1>
          <p className="mt-2 text-muted-foreground">
            Practice with timed listening tests featuring 4 sections and 40 questions each. AI-generated British voices simulate real exam conditions.
          </p>
        </div>

        <div className="mb-6 rounded-lg border border-chart-1/20 bg-chart-1/5 p-4">
          <h3 className="flex items-center gap-2 font-semibold">
            <Volume2 className="h-5 w-5 text-chart-1" />
            How it works
          </h3>
          <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
            <li>• 4 sections with increasing difficulty</li>
            <li>• 40 questions in ~30 minutes of audio</li>
            <li>• 10 minutes transfer time to check answers</li>
            <li>• AI-generated British-accented voices</li>
            <li>• Auto-scored with band conversion</li>
            <li>• Practice mode: pause, replay & view transcripts</li>
          </ul>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {tests.map((test) => (
            <Link key={test.id} to={`/listening-test/${test.id}`}>
              <Card className="group h-full cursor-pointer transition-all hover:shadow-lg hover:border-chart-1/30">
                <CardContent className="flex h-full flex-col p-6">
                  <div className="mb-4 flex h-16 w-full items-center justify-center rounded-xl bg-chart-1/10">
                    <span className="font-serif text-3xl font-bold text-chart-1">
                      {test.id}
                    </span>
                  </div>
                  <h3 className="mb-1 font-sans font-semibold">{test.title}</h3>
                  <p className="mb-3 text-xs text-muted-foreground">
                    {test.totalQuestions} Questions • 4 Sections
                  </p>
                  <div className="mt-auto flex items-center gap-2 text-xs text-muted-foreground">
                    <Clock className="h-3 w-3" />
                    <span>{test.timeLimit} min</span>
                    <ArrowRight className="ml-auto h-3.5 w-3.5 text-chart-1 opacity-0 transition-opacity group-hover:opacity-100" />
                  </div>
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
