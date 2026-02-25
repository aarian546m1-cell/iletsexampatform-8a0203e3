

# IELTS Practice Web Application — Phase 1

## Overview
Build a professional IELTS exam practice platform with authentication, test management, admin panel, and a Cambridge 1–20 test navigation system — using Supabase for backend, auth, and storage.

---

## 1. Authentication System
- Email/password signup & login
- Google OAuth login
- Password reset flow with email
- Protected routes for authenticated users
- Auth pages with clean, professional IELTS-branded design

## 2. Database Schema (Supabase)
- **profiles** — user display name, avatar, created_at
- **user_roles** — admin/user roles (separate table for security)
- **test_books** — Cambridge book entries (1–20)
- **tests** — individual tests within each book (Test 1–4)
- **test_modules** — modules per test (Listening, Reading, Writing, Speaking)
- **questions** — question data (type, content, options, correct answers, order)
- **audio_files** — references to uploaded listening audio in Supabase Storage
- **test_results** — user scores per module attempt (raw score, band score, breakdown)
- **writing_submissions** — saved essays with AI feedback and band breakdown
- **speaking_recordings** — audio recording references with AI evaluation
- RLS policies on all tables for secure access

## 3. Homepage & Navigation
- Professional landing page inspired by British Council/IDP style
- Hero section with "Start Practice" CTA
- Navigation to: Modules, Dashboard, Band Score Guide, Daily Practice
- Login/Register buttons in header
- Dark mode toggle
- Fully mobile-responsive layout

## 4. Student Dashboard
- Welcome message with user's name
- Overall average band score display
- Recent practice history (last 10 attempts)
- Band progress chart over time (using Recharts)
- Per-module score breakdown cards (Listening, Reading, Writing, Speaking)
- Daily streak tracker
- Quick-start buttons for each module

## 5. Cambridge 1–20 Test Browser
- Grid/list view of Cambridge Books 1–20
- Click into a book → see Tests 1–4
- Click into a test → see 4 modules (Listening, Reading, Writing, Speaking)
- Status indicators: Not Started, In Progress, Completed
- Band score shown for completed modules

## 6. Admin Panel
- Admin-only route protected by role check
- **Test Management**: Create/edit books, tests, and modules
- **Question Editor**: Add questions with type selector (MCQ, fill-in-blank, True/False/Not Given, matching, etc.), set correct answers
- **Audio Upload**: Upload listening audio files to Supabase Storage
- **Answer Key Management**: Edit answer keys per module
- **User Analytics**: Total users, active users, average scores
- **Band Conversion Editor**: Customize raw-score-to-band conversion tables

## 7. Band Score System
- Official IELTS band conversion chart logic (raw score 0–40 → Band 0–9)
- Separate conversion tables for Listening and Reading (Academic)
- Band Score Explanation page with detailed descriptors for each band level
- Overall band calculation: average of 4 modules, rounded to nearest 0.5

## 8. Supabase Storage Setup
- Storage buckets for: listening audio files, writing submission PDFs, speaking recordings
- Proper RLS policies for file access

## 9. Daily Practice Mode (Placeholder)
- Daily challenge section on dashboard
- Random question set from available tests
- Streak counter and progress tracking

---

## What's Next (Phase 2)
After Phase 1 is implemented, we'll add:
- Listening Module with real-time audio player, timer, and auto-scoring
- Reading Module with split-pane CBT layout and timer
- Writing Module with AI scoring via Lovable AI
- Speaking Module with audio recording and AI evaluation
- Leaderboard and mock test simulation mode

