export type QuestionType =
  | "true_false_not_given"
  | "yes_no_not_given"
  | "multiple_choice"
  | "matching_headings"
  | "sentence_completion"
  | "summary_completion";

export interface ReadingQuestion {
  number: number;
  type: QuestionType;
  text: string;
  options?: string[];
  correctAnswer: string;
  explanation?: string;
}

export interface ReadingPassage {
  title: string;
  text: string;
  questions: ReadingQuestion[];
}

export interface ReadingTest {
  id: number;
  passages: [ReadingPassage, ReadingPassage, ReadingPassage];
}

import { READING_TESTS_2 } from "./reading-tests-data-2";

export const READING_TESTS: ReadingTest[] = [
  ...READING_TESTS_2,
];
