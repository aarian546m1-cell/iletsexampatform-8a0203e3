import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Headphones, Clock, ArrowRight, Volume2 } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

interface ListeningTest {
  moduleId: string;
  testId: string;
  testNumber: number;
  bookNumber: number;
  bookTitle: string;
  totalQuestions: number;
  timeLimit: number;
}

export default function ListeningTests() {
  const [tests, setTests] = useState<ListeningTest[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchTests() {
      const { data } = await supabase
        .from("test_modules")
        .select("id, total_questions, time_limit_minutes, test_id, tests!inner(id, test_number, title, book_id, test_books!inner(id, book_number, title))")
        .eq("module_type", "listening")
        .order("test_id");

      if (data) {
        const mapped = data.map((tm: any) => ({
          moduleId: tm.id,
          testId: tm.test_id,
          testNumber: tm.tests.test_number,
          bookNumber: tm.tests.test_books.book_number,
          bookTitle: tm.tests.test_books.title,
          totalQuestions: tm.total_questions,
          timeLimit: tm.time_limit_minutes,
        }));
        // Sort by book number then test number
        mapped.sort((a, b) => a.bookNumber - b.bookNumber || a.testNumber - b.testNumber);
        setTests(mapped);
      }
      setLoading(false);
    }
    fetchTests();
  }, []);

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
            Practice with timed listening tests featuring 4 sections and 40 questions each. Audio auto-plays to simulate real exam conditions.
          </p>
        </div>

        <div className="mb-6 rounded-lg border border-chart-1/20 bg-chart-1/5 p-4">
          <h3 className="flex items-center gap-2 font-semibold">
            <Volume2 className="h-5 w-5 text-chart-1" />
            How it works
          </h3>
          <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
            <li>• 4 sections with increasing difficulty</li>
            <li>• 40 questions in 30 minutes of audio</li>
            <li>• 10 minutes transfer time to check answers</li>
            <li>• Auto-scored with band conversion</li>
          </ul>
        </div>

        {loading ? (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {Array.from({ length: 10 }).map((_, i) => (
              <Card key={i}>
                <CardContent className="p-6">
                  <Skeleton className="mb-4 h-16 w-full rounded-xl" />
                  <Skeleton className="mb-2 h-5 w-24" />
                  <Skeleton className="h-4 w-32" />
                </CardContent>
              </Card>
            ))}
          </div>
        ) : tests.length > 0 ? (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {tests.map((test) => (
              <Link key={test.moduleId} to={`/tests/${test.testId}`}>
                <Card className="group h-full cursor-pointer transition-all hover:shadow-lg hover:border-chart-1/30">
                  <CardContent className="flex h-full flex-col p-6">
                    <div className="mb-4 flex h-16 w-full items-center justify-center rounded-xl bg-chart-1/10">
                      <span className="font-serif text-3xl font-bold text-chart-1">
                        {test.testNumber}
                      </span>
                    </div>
                    <h3 className="mb-1 font-sans font-semibold">
                      Book {test.bookNumber} — Test {test.testNumber}
                    </h3>
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
        ) : (
          <Card>
            <CardContent className="flex flex-col items-center py-16 text-center">
              <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-2xl bg-chart-1/10">
                <Headphones className="h-10 w-10 text-chart-1" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Coming Soon</h3>
              <p className="max-w-md text-muted-foreground">
                Listening practice tests with audio playback are being prepared. Check back soon for full Cambridge-style listening exams with auto-scoring.
              </p>
            </CardContent>
          </Card>
        )}
      </div>
      <Footer />
    </div>
  );
}
