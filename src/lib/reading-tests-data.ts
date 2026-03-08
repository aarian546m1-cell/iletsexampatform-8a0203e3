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
import { READING_TEST_6 } from "./reading-test-6";
import { READING_TEST_7 } from "./reading-test-7";
import { READING_TEST_8 } from "./reading-test-8";
import { READING_TEST_9 } from "./reading-test-9";
import { READING_TEST_10 } from "./reading-test-10";
import { READING_TEST_21 } from "./reading-test-21";
import { READING_TEST_22 } from "./reading-test-22";
import { READING_TEST_23 } from "./reading-test-23";
import { READING_TEST_24 } from "./reading-test-24";
import { READING_TEST_25 } from "./reading-test-25";

export const READING_TESTS: ReadingTest[] = [
  READING_TEST_1,
  READING_TEST_2,
  READING_TEST_3,
  READING_TEST_4,
  READING_TEST_5,
  READING_TEST_6,
  READING_TEST_7,
  READING_TEST_8,
  READING_TEST_9,
  READING_TEST_10,
  ...READING_TESTS_2,
  READING_TEST_21,
  READING_TEST_22,
  READING_TEST_23,
  READING_TEST_24,
  READING_TEST_25,
];
