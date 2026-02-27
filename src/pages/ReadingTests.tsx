import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Book, Clock, ArrowRight } from "lucide-react";
import { READING_TESTS } from "@/lib/reading-tests-data";

export default function ReadingTests() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container py-8">
        <div className="mb-8">
          <Badge variant="secondary" className="mb-3">
            <Book className="mr-1.5 h-3 w-3" />
            Reading Module
          </Badge>
          <h1 className="text-3xl md:text-4xl">IELTS Academic Reading Tests</h1>
          <p className="mt-2 text-muted-foreground">
            Complete {READING_TESTS.length} full reading tests with 3 passages and 40 questions each.
            Timed at 60 minutes.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {READING_TESTS.map((test) => (
            <Link key={test.id} to={`/reading-test/${test.id}`}>
              <Card className="group h-full cursor-pointer transition-all hover:shadow-lg hover:border-primary/30">
                <CardContent className="flex h-full flex-col p-6">
                  <div className="mb-4 flex h-16 w-full items-center justify-center rounded-xl bg-chart-2/10">
                    <span className="font-serif text-3xl font-bold text-chart-2">
                      {test.id}
                    </span>
                  </div>
                  <h3 className="mb-1 font-sans font-semibold">Test {test.id}</h3>
                  <p className="mb-3 text-xs text-muted-foreground">
                    3 Passages • 40 Questions
                  </p>
                  <div className="mt-auto flex items-center gap-2 text-xs text-muted-foreground">
                    <Clock className="h-3 w-3" />
                    <span>60 min</span>
                    <ArrowRight className="ml-auto h-3.5 w-3.5 text-primary opacity-0 transition-opacity group-hover:opacity-100" />
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
