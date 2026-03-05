import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import { ProtectedRoute, AdminRoute } from "@/components/ProtectedRoute";
import Index from "./pages/Index";
import Auth from "./pages/Auth";
import ResetPassword from "./pages/ResetPassword";
import Dashboard from "./pages/Dashboard";
import TestBrowser from "./pages/TestBrowser";
import BookDetail from "./pages/BookDetail";
import BandScores from "./pages/BandScores";
import WritingTests from "./pages/WritingTests";
import WritingExam from "./pages/WritingExam";
import WritingResult from "./pages/WritingResult";
import ReadingTests from "./pages/ReadingTests";
import ListeningTests from "./pages/ListeningTests";
import ListeningExam from "./pages/ListeningExam";
import ListeningResult from "./pages/ListeningResult";
import ReadingExam from "./pages/ReadingExam";
import ReadingResult from "./pages/ReadingResult";
import SpeakingTests from "./pages/SpeakingTests";
import SpeakingTest from "./pages/SpeakingTest";
import SpeakingResult from "./pages/SpeakingResult";
import AdminPanel from "./pages/AdminPanel";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/band-scores" element={<BandScores />} />
            <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
            <Route path="/tests" element={<ProtectedRoute><TestBrowser /></ProtectedRoute>} />
            <Route path="/tests/:bookId" element={<ProtectedRoute><BookDetail /></ProtectedRoute>} />
            <Route path="/writing-tests" element={<ProtectedRoute><WritingTests /></ProtectedRoute>} />
            <Route path="/writing-test/:testId" element={<ProtectedRoute><WritingExam /></ProtectedRoute>} />
            <Route path="/writing-result/:testId" element={<ProtectedRoute><WritingResult /></ProtectedRoute>} />
            <Route path="/reading-tests" element={<ProtectedRoute><ReadingTests /></ProtectedRoute>} />
            <Route path="/listening-tests" element={<ProtectedRoute><ListeningTests /></ProtectedRoute>} />
            <Route path="/listening-test/:testId" element={<ProtectedRoute><ListeningExam /></ProtectedRoute>} />
            <Route path="/listening-result/:testId" element={<ProtectedRoute><ListeningResult /></ProtectedRoute>} />
            <Route path="/reading-test/:testId" element={<ProtectedRoute><ReadingExam /></ProtectedRoute>} />
            <Route path="/reading-result/:testId" element={<ProtectedRoute><ReadingResult /></ProtectedRoute>} />
            <Route path="/speaking-tests" element={<ProtectedRoute><SpeakingTests /></ProtectedRoute>} />
            <Route path="/speaking-test/:testId" element={<ProtectedRoute><SpeakingTest /></ProtectedRoute>} />
            <Route path="/speaking-result/:testId" element={<ProtectedRoute><SpeakingResult /></ProtectedRoute>} />
            <Route path="/admin" element={<AdminRoute><AdminPanel /></AdminRoute>} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
