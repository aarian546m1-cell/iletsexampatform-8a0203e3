INSERT INTO public.test_books (id, book_number, title, description)
VALUES ('00000000-0000-0000-0000-000000000001', 0, 'Speaking Practice', 'AI-powered speaking practice tests')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.tests (id, book_id, test_number, title)
VALUES ('00000000-0000-0000-0000-000000000002', '00000000-0000-0000-0000-000000000001', 0, 'Speaking Practice')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.test_modules (id, test_id, module_type, time_limit_minutes, total_questions)
VALUES ('00000000-0000-0000-0000-000000000003', '00000000-0000-0000-0000-000000000002', 'speaking', 15, 0)
ON CONFLICT (id) DO NOTHING;