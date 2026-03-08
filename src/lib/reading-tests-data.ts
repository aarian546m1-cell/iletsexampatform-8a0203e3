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
import { READING_TEST_26 } from "./reading-test-26";
import { READING_TEST_27 } from "./reading-test-27";
import { READING_TEST_28 } from "./reading-test-28";
import { READING_TEST_29 } from "./reading-test-29";
import { READING_TEST_30 } from "./reading-test-30";
import { READING_TEST_31 } from "./reading-test-31";
import { READING_TEST_32 } from "./reading-test-32";
import { READING_TEST_33 } from "./reading-test-33";
import { READING_TEST_34 } from "./reading-test-34";
import { READING_TEST_35 } from "./reading-test-35";
import { READING_TEST_36 } from "./reading-test-36";
import { READING_TEST_37 } from "./reading-test-37";
import { READING_TEST_38 } from "./reading-test-38";
import { READING_TEST_39 } from "./reading-test-39";
import { READING_TEST_40 } from "./reading-test-40";
import { READING_TEST_41 } from "./reading-test-41";
import { READING_TEST_42 } from "./reading-test-42";
import { READING_TEST_43 } from "./reading-test-43";
import { READING_TEST_44 } from "./reading-test-44";
import { READING_TEST_45 } from "./reading-test-45";
import { READING_TEST_46 } from "./reading-test-46";
import { READING_TEST_47 } from "./reading-test-47";
import { READING_TEST_48 } from "./reading-test-48";
import { READING_TEST_49 } from "./reading-test-49";
import { READING_TEST_50 } from "./reading-test-50";
import { READING_TEST_51 } from "./reading-test-51";
import { READING_TEST_52 } from "./reading-test-52";
import { READING_TEST_53 } from "./reading-test-53";
import { READING_TEST_54 } from "./reading-test-54";
import { READING_TEST_55 } from "./reading-test-55";

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
  READING_TEST_26,
  READING_TEST_27,
  READING_TEST_28,
  READING_TEST_29,
  READING_TEST_30,
  READING_TEST_31,
  READING_TEST_32,
  READING_TEST_33,
  READING_TEST_34,
  READING_TEST_35,
  READING_TEST_36,
  READING_TEST_37,
  READING_TEST_38,
  READING_TEST_39,
  READING_TEST_40,
  READING_TEST_41,
  READING_TEST_42,
  READING_TEST_43,
  READING_TEST_44,
  READING_TEST_45,
];
