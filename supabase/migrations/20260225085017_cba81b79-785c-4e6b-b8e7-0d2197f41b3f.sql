
-- Create enum for user roles
CREATE TYPE public.app_role AS ENUM ('admin', 'user');

-- Create enum for module types
CREATE TYPE public.module_type AS ENUM ('listening', 'reading', 'writing', 'speaking');

-- Create enum for question types
CREATE TYPE public.question_type AS ENUM ('mcq', 'fill_blank', 'true_false_not_given', 'matching', 'sentence_completion', 'map_labeling', 'matching_headings', 'short_answer');

-- Create enum for test status
CREATE TYPE public.test_status AS ENUM ('not_started', 'in_progress', 'completed');

-- Profiles table
CREATE TABLE public.profiles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL UNIQUE,
  display_name TEXT,
  avatar_url TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- User roles table
CREATE TABLE public.user_roles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  role app_role NOT NULL DEFAULT 'user',
  UNIQUE (user_id, role)
);

-- Test books
CREATE TABLE public.test_books (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  book_number INTEGER NOT NULL UNIQUE,
  title TEXT NOT NULL,
  description TEXT,
  cover_image_url TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Tests
CREATE TABLE public.tests (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  book_id UUID REFERENCES public.test_books(id) ON DELETE CASCADE NOT NULL,
  test_number INTEGER NOT NULL,
  title TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE (book_id, test_number)
);

-- Test modules
CREATE TABLE public.test_modules (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  test_id UUID REFERENCES public.tests(id) ON DELETE CASCADE NOT NULL,
  module_type module_type NOT NULL,
  time_limit_minutes INTEGER NOT NULL DEFAULT 60,
  total_questions INTEGER NOT NULL DEFAULT 40,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE (test_id, module_type)
);

-- Questions
CREATE TABLE public.questions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  module_id UUID REFERENCES public.test_modules(id) ON DELETE CASCADE NOT NULL,
  question_type question_type NOT NULL,
  question_number INTEGER NOT NULL,
  content JSONB NOT NULL DEFAULT '{}',
  options JSONB,
  correct_answer TEXT NOT NULL,
  explanation TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Audio files
CREATE TABLE public.audio_files (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  module_id UUID REFERENCES public.test_modules(id) ON DELETE CASCADE NOT NULL,
  file_url TEXT NOT NULL,
  section_number INTEGER,
  title TEXT,
  duration_seconds INTEGER,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Test results
CREATE TABLE public.test_results (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  module_id UUID REFERENCES public.test_modules(id) ON DELETE CASCADE NOT NULL,
  raw_score INTEGER NOT NULL DEFAULT 0,
  total_questions INTEGER NOT NULL DEFAULT 40,
  band_score NUMERIC(2,1) NOT NULL DEFAULT 0,
  answers JSONB,
  time_taken_seconds INTEGER,
  completed_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Writing submissions
CREATE TABLE public.writing_submissions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  module_id UUID REFERENCES public.test_modules(id) ON DELETE CASCADE NOT NULL,
  task1_response TEXT,
  task2_response TEXT,
  word_count_task1 INTEGER DEFAULT 0,
  word_count_task2 INTEGER DEFAULT 0,
  band_score NUMERIC(2,1),
  task_response_score NUMERIC(2,1),
  coherence_score NUMERIC(2,1),
  lexical_score NUMERIC(2,1),
  grammar_score NUMERIC(2,1),
  ai_feedback TEXT,
  completed_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Speaking recordings
CREATE TABLE public.speaking_recordings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  module_id UUID REFERENCES public.test_modules(id) ON DELETE CASCADE NOT NULL,
  recording_url TEXT,
  part_number INTEGER NOT NULL,
  band_score NUMERIC(2,1),
  fluency_score NUMERIC(2,1),
  vocabulary_score NUMERIC(2,1),
  grammar_score NUMERIC(2,1),
  pronunciation_score NUMERIC(2,1),
  ai_feedback TEXT,
  completed_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Band conversions
CREATE TABLE public.band_conversions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  module_type module_type NOT NULL,
  raw_score INTEGER NOT NULL,
  band_score NUMERIC(2,1) NOT NULL,
  UNIQUE (module_type, raw_score)
);

-- Daily streaks
CREATE TABLE public.daily_streaks (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL UNIQUE,
  current_streak INTEGER NOT NULL DEFAULT 0,
  longest_streak INTEGER NOT NULL DEFAULT 0,
  last_practice_date DATE,
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Security definer function for role checking
CREATE OR REPLACE FUNCTION public.has_role(_user_id UUID, _role app_role)
RETURNS BOOLEAN
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.user_roles
    WHERE user_id = _user_id AND role = _role
  )
$$;

-- Auto-create profile and default role on signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  INSERT INTO public.profiles (user_id, display_name)
  VALUES (NEW.id, COALESCE(NEW.raw_user_meta_data->>'full_name', NEW.email));
  INSERT INTO public.user_roles (user_id, role)
  VALUES (NEW.id, 'user');
  INSERT INTO public.daily_streaks (user_id)
  VALUES (NEW.id);
  RETURN NEW;
END;
$$;

CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Update timestamp function
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

CREATE TRIGGER update_profiles_updated_at
  BEFORE UPDATE ON public.profiles
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_daily_streaks_updated_at
  BEFORE UPDATE ON public.daily_streaks
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- RLS
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can view own profile" ON public.profiles FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can update own profile" ON public.profiles FOR UPDATE USING (auth.uid() = user_id);
CREATE POLICY "Admins can view all profiles" ON public.profiles FOR SELECT USING (public.has_role(auth.uid(), 'admin'));

ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can view own roles" ON public.user_roles FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Admins can manage roles" ON public.user_roles FOR ALL USING (public.has_role(auth.uid(), 'admin'));

ALTER TABLE public.test_books ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can view test books" ON public.test_books FOR SELECT TO authenticated USING (true);
CREATE POLICY "Admins can manage test books" ON public.test_books FOR ALL USING (public.has_role(auth.uid(), 'admin'));

ALTER TABLE public.tests ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can view tests" ON public.tests FOR SELECT TO authenticated USING (true);
CREATE POLICY "Admins can manage tests" ON public.tests FOR ALL USING (public.has_role(auth.uid(), 'admin'));

ALTER TABLE public.test_modules ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can view test modules" ON public.test_modules FOR SELECT TO authenticated USING (true);
CREATE POLICY "Admins can manage test modules" ON public.test_modules FOR ALL USING (public.has_role(auth.uid(), 'admin'));

ALTER TABLE public.questions ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can view questions" ON public.questions FOR SELECT TO authenticated USING (true);
CREATE POLICY "Admins can manage questions" ON public.questions FOR ALL USING (public.has_role(auth.uid(), 'admin'));

ALTER TABLE public.audio_files ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can view audio files" ON public.audio_files FOR SELECT TO authenticated USING (true);
CREATE POLICY "Admins can manage audio files" ON public.audio_files FOR ALL USING (public.has_role(auth.uid(), 'admin'));

ALTER TABLE public.test_results ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can view own results" ON public.test_results FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can insert own results" ON public.test_results FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Admins can view all results" ON public.test_results FOR SELECT USING (public.has_role(auth.uid(), 'admin'));

ALTER TABLE public.writing_submissions ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can view own submissions" ON public.writing_submissions FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can insert own submissions" ON public.writing_submissions FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update own submissions" ON public.writing_submissions FOR UPDATE USING (auth.uid() = user_id);
CREATE POLICY "Admins can view all submissions" ON public.writing_submissions FOR SELECT USING (public.has_role(auth.uid(), 'admin'));

ALTER TABLE public.speaking_recordings ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can view own recordings" ON public.speaking_recordings FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can insert own recordings" ON public.speaking_recordings FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update own recordings" ON public.speaking_recordings FOR UPDATE USING (auth.uid() = user_id);
CREATE POLICY "Admins can view all recordings" ON public.speaking_recordings FOR SELECT USING (public.has_role(auth.uid(), 'admin'));

ALTER TABLE public.band_conversions ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can view band conversions" ON public.band_conversions FOR SELECT TO authenticated USING (true);
CREATE POLICY "Admins can manage band conversions" ON public.band_conversions FOR ALL USING (public.has_role(auth.uid(), 'admin'));

ALTER TABLE public.daily_streaks ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can view own streaks" ON public.daily_streaks FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can update own streaks" ON public.daily_streaks FOR UPDATE USING (auth.uid() = user_id);
