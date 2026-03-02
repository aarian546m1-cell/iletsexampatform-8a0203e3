import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mic, Clock, ArrowRight } from "lucide-react";
import { SPEAKING_TOPICS } from "@/lib/speaking-topics";

export default function SpeakingTests() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container max-w-5xl py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold md:text-4xl">
            IELTS Speaking Practice
          </h1>
          <p className="mt-2 text-muted-foreground">
            AI-powered speaking tests with real-time voice interaction. Practice
            all 3 parts of the IELTS Speaking exam with an AI examiner.
          </p>
        </div>

        <div className="mb-6 rounded-lg border border-primary/20 bg-primary/5 p-4">
          <h3 className="flex items-center gap-2 font-semibold">
            <Mic className="h-5 w-5 text-primary" />
            How it works
          </h3>
          <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
            <li>• Part 1: Introduction & general questions (4–5 mins)</li>
            <li>• Part 2: Cue card topic — 1 min prep + 2 mins speaking</li>
            <li>• Part 3: Discussion — abstract & analytical questions (4–5 mins)</li>
            <li>• AI scores your performance on the official IELTS band scale</li>
          </ul>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {SPEAKING_TOPICS.map((topic) => (
            <Card key={topic.id} className="transition-shadow hover:shadow-md">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <CardTitle className="text-lg">
                    Test {topic.id}: {topic.title}
                  </CardTitle>
                  <Badge variant="outline">
                    <Clock className="mr-1 h-3 w-3" />
                    ~14 min
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-sm text-muted-foreground line-clamp-2">
                  Part 2: {topic.cueCard.topic}
                </p>
                <Link to={`/speaking-test/${topic.id}`}>
                  <Button className="w-full" size="sm">
                    Start Test
                    <ArrowRight className="ml-1.5 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
