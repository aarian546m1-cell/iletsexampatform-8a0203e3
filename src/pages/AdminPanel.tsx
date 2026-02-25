import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import Header from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { Plus, Trash2, Users, BookOpen, FileText } from "lucide-react";

export default function AdminPanel() {
  const [books, setBooks] = useState<any[]>([]);
  const [newBookNumber, setNewBookNumber] = useState("");
  const [newBookTitle, setNewBookTitle] = useState("");
  const [stats, setStats] = useState({ users: 0, tests: 0, results: 0 });

  const fetchBooks = () => {
    supabase.from("test_books").select("*, tests(*, test_modules(*))").order("book_number")
      .then(({ data }) => { if (data) setBooks(data); });
  };

  const fetchStats = async () => {
    const [usersRes, testsRes, resultsRes] = await Promise.all([
      supabase.from("profiles").select("id", { count: "exact", head: true }),
      supabase.from("tests").select("id", { count: "exact", head: true }),
      supabase.from("test_results").select("id", { count: "exact", head: true }),
    ]);
    setStats({
      users: usersRes.count || 0,
      tests: testsRes.count || 0,
      results: resultsRes.count || 0,
    });
  };

  useEffect(() => { fetchBooks(); fetchStats(); }, []);

  const addBook = async () => {
    if (!newBookNumber || !newBookTitle) { toast.error("Fill in all fields"); return; }
    const { error } = await supabase.from("test_books").insert({
      book_number: parseInt(newBookNumber),
      title: newBookTitle,
    });
    if (error) { toast.error(error.message); return; }
    toast.success("Book added!");
    setNewBookNumber("");
    setNewBookTitle("");
    fetchBooks();
  };

  const addTestToBook = async (bookId: string, testNumber: number) => {
    const { data: test, error } = await supabase.from("tests").insert({
      book_id: bookId,
      test_number: testNumber,
      title: `Test ${testNumber}`,
    }).select().single();

    if (error) { toast.error(error.message); return; }

    // Auto-create 4 modules
    const modules = [
      { test_id: test.id, module_type: "listening" as const, time_limit_minutes: 30, total_questions: 40 },
      { test_id: test.id, module_type: "reading" as const, time_limit_minutes: 60, total_questions: 40 },
      { test_id: test.id, module_type: "writing" as const, time_limit_minutes: 60, total_questions: 2 },
      { test_id: test.id, module_type: "speaking" as const, time_limit_minutes: 14, total_questions: 3 },
    ];
    await supabase.from("test_modules").insert(modules);
    toast.success(`Test ${testNumber} added with all modules!`);
    fetchBooks();
  };

  const deleteBook = async (id: string) => {
    const { error } = await supabase.from("test_books").delete().eq("id", id);
    if (error) { toast.error(error.message); return; }
    toast.success("Book deleted");
    fetchBooks();
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container py-8">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl">Admin Panel</h1>
          <p className="mt-2 text-muted-foreground">Manage tests, questions, and platform settings.</p>
        </div>

        {/* Stats */}
        <div className="mb-8 grid gap-4 sm:grid-cols-3">
          <Card>
            <CardContent className="flex items-center gap-4 p-5">
              <Users className="h-8 w-8 text-primary" />
              <div>
                <p className="text-sm text-muted-foreground">Total Users</p>
                <p className="text-2xl font-bold">{stats.users}</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex items-center gap-4 p-5">
              <BookOpen className="h-8 w-8 text-chart-2" />
              <div>
                <p className="text-sm text-muted-foreground">Total Tests</p>
                <p className="text-2xl font-bold">{stats.tests}</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex items-center gap-4 p-5">
              <FileText className="h-8 w-8 text-chart-3" />
              <div>
                <p className="text-sm text-muted-foreground">Results Submitted</p>
                <p className="text-2xl font-bold">{stats.results}</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="books">
          <TabsList>
            <TabsTrigger value="books">Test Books</TabsTrigger>
            <TabsTrigger value="questions">Questions</TabsTrigger>
          </TabsList>

          <TabsContent value="books" className="mt-6">
            {/* Add Book */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="font-sans text-lg">Add New Book</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-3">
                  <div className="space-y-1">
                    <Label>Book Number</Label>
                    <Input type="number" value={newBookNumber} onChange={(e) => setNewBookNumber(e.target.value)} placeholder="e.g. 1" className="w-24" />
                  </div>
                  <div className="flex-1 space-y-1">
                    <Label>Title</Label>
                    <Input value={newBookTitle} onChange={(e) => setNewBookTitle(e.target.value)} placeholder="e.g. Cambridge IELTS 1" />
                  </div>
                  <div className="flex items-end">
                    <Button onClick={addBook}><Plus className="mr-1.5 h-4 w-4" />Add Book</Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Book List */}
            <div className="space-y-4">
              {books.map((book) => (
                <Card key={book.id}>
                  <CardContent className="p-5">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-sans font-semibold">{book.title}</h3>
                        <p className="text-sm text-muted-foreground">
                          {book.tests?.length || 0} tests
                        </p>
                      </div>
                      <div className="flex gap-2">
                        {[1, 2, 3, 4].map((n) => {
                          const exists = book.tests?.some((t: any) => t.test_number === n);
                          return exists ? (
                            <Badge key={n} variant="secondary">Test {n}</Badge>
                          ) : (
                            <Button key={n} variant="outline" size="sm" onClick={() => addTestToBook(book.id, n)}>
                              <Plus className="mr-1 h-3 w-3" />Test {n}
                            </Button>
                          );
                        })}
                        <Button variant="ghost" size="icon" onClick={() => deleteBook(book.id)}>
                          <Trash2 className="h-4 w-4 text-destructive" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="questions" className="mt-6">
            <Card>
              <CardContent className="py-12 text-center">
                <FileText className="mx-auto mb-4 h-12 w-12 text-muted-foreground/50" />
                <h3 className="mb-2 font-sans text-lg font-semibold">Question Editor</h3>
                <p className="text-muted-foreground">
                  Select a test module from the Books tab to add questions. The full question editor with MCQ, fill-in-blank, True/False/Not Given, and more will be available in Phase 2.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
