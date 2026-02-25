import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { MODULE_CONFIG } from "@/lib/ielts-config";

export default function BookDetail() {
  const { bookId } = useParams();
  const [book, setBook] = useState<any>(null);
  const [tests, setTests] = useState<any[]>([]);

  useEffect(() => {
    if (!bookId) return;
    supabase.from("test_books").select("*").eq("id", bookId).single()
      .then(({ data }) => { if (data) setBook(data); });
    supabase.from("tests").select("*, test_modules(*)").eq("book_id", bookId).order("test_number")
      .then(({ data }) => { if (data) setTests(data); });
  }, [bookId]);

  if (!book) return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container py-8">
        <div className="flex items-center justify-center py-20">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container py-8">
        <Link to="/tests">
          <Button variant="ghost" size="sm" className="mb-4"><ArrowLeft className="mr-1.5 h-4 w-4" />Back to Tests</Button>
        </Link>
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl">{book.title}</h1>
          <p className="mt-2 text-muted-foreground">{book.description || `Cambridge Book ${book.book_number} — 4 Practice Tests`}</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {tests.map((test) => (
            <Card key={test.id} className="transition-all hover:shadow-lg">
              <CardContent className="p-6">
                <h3 className="mb-4 font-sans text-xl font-semibold">{test.title}</h3>
                <div className="grid grid-cols-2 gap-3">
                  {(["listening", "reading", "writing", "speaking"] as const).map((mod) => {
                    const config = MODULE_CONFIG[mod];
                    const module = test.test_modules?.find((m: any) => m.module_type === mod);
                    return (
                      <div key={mod} className="flex items-center gap-2 rounded-lg border p-3">
                        <config.icon className={`h-4 w-4 ${config.color}`} />
                        <div>
                          <p className="text-sm font-medium">{config.label}</p>
                          <p className="text-xs text-muted-foreground">{config.time} min</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          ))}

          {tests.length === 0 && (
            <div className="col-span-full py-12 text-center">
              <p className="text-muted-foreground">No tests have been added to this book yet.</p>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
