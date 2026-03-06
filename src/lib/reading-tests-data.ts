export type QuestionType =
  | "true_false_not_given"
  | "yes_no_not_given"
  | "multiple_choice"
  | "matching_headings"
  | "matching_information"
  | "matching_features"
  | "sentence_completion"
  | "summary_completion"
  | "table_completion"
  | "diagram_completion"
  | "short_answer"
  | "flow_chart_completion";

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
import { READING_TEST_1 } from "./reading-test-1";
import { READING_TEST_2 } from "./reading-test-2";
import { READING_TEST_3 } from "./reading-test-3";
import { READING_TEST_4 } from "./reading-test-4";
import { READING_TEST_5 } from "./reading-test-5";

export const READING_TESTS: ReadingTest[] = [
  READING_TEST_1,
  READING_TEST_2,
  READING_TEST_3,
  READING_TEST_4,
  READING_TEST_5,
  ...READING_TESTS_2,
];
