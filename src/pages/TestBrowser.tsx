import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen } from "lucide-react";

export default function TestBrowser() {
  const [books, setBooks] = useState<any[]>([]);

  useEffect(() => {
    supabase.from("test_books").select("*").order("book_number")
      .then(({ data }) => { if (data) setBooks(data); });
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container py-8">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl">Cambridge Practice Tests</h1>
          <p className="mt-2 text-muted-foreground">Select a book to start practicing.</p>
        </div>

        {books.length === 0 ? (
          <div className="py-20 text-center">
            <BookOpen className="mx-auto mb-4 h-12 w-12 text-muted-foreground/50" />
            <h3 className="mb-2 font-sans text-lg font-semibold">No Tests Available Yet</h3>
            <p className="text-muted-foreground">Tests will appear here once an admin uploads them.</p>
          </div>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {books.map((book) => (
              <Link key={book.id} to={`/tests/${book.id}`}>
                <Card className="group cursor-pointer transition-all hover:shadow-lg hover:border-primary/30">
                  <CardContent className="p-6">
                    <div className="mb-4 flex h-20 w-full items-center justify-center rounded-xl bg-primary/5">
                      <span className="font-serif text-4xl font-bold text-primary">{book.book_number}</span>
                    </div>
                    <h3 className="mb-1 font-sans font-semibold">{book.title}</h3>
                    <p className="text-sm text-muted-foreground">{book.description || "4 Tests • 4 Modules each"}</p>
                    <Badge variant="secondary" className="mt-3">Cambridge {book.book_number}</Badge>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
