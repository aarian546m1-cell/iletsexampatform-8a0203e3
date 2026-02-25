import { Book, Headphones, PenLine, Mic, type LucideIcon } from "lucide-react";

export const MODULE_CONFIG: Record<string, { label: string; icon: LucideIcon; color: string; time: number; questions: number }> = {
  listening: { label: "Listening", icon: Headphones, color: "text-chart-1", time: 30, questions: 40 },
  reading: { label: "Reading", icon: Book, color: "text-chart-2", time: 60, questions: 40 },
  writing: { label: "Writing", icon: PenLine, color: "text-chart-3", time: 60, questions: 2 },
  speaking: { label: "Speaking", icon: Mic, color: "text-chart-5", time: 14, questions: 3 },
};

// IELTS Official Listening Band Conversion (Academic)
export const LISTENING_BAND_TABLE: Record<number, number> = {
  39: 9, 40: 9, 37: 8.5, 38: 8.5, 35: 8, 36: 8, 33: 7.5, 34: 7.5,
  30: 7, 31: 7, 32: 7, 27: 6.5, 28: 6.5, 29: 6.5,
  23: 6, 24: 6, 25: 6, 26: 6, 20: 5.5, 21: 5.5, 22: 5.5,
  16: 5, 17: 5, 18: 5, 19: 5, 13: 4.5, 14: 4.5, 15: 4.5,
  10: 4, 11: 4, 12: 4, 8: 3.5, 9: 3.5, 6: 3, 7: 3,
  4: 2.5, 5: 2.5, 3: 2, 2: 1.5, 1: 1, 0: 0,
};

// IELTS Official Reading Band Conversion (Academic)
export const READING_BAND_TABLE: Record<number, number> = {
  39: 9, 40: 9, 37: 8.5, 38: 8.5, 35: 8, 36: 8, 33: 7.5, 34: 7.5,
  30: 7, 31: 7, 32: 7, 27: 6.5, 28: 6.5, 29: 6.5,
  23: 6, 24: 6, 25: 6, 26: 6, 20: 5.5, 21: 5.5, 22: 5.5,
  15: 5, 16: 5, 17: 5, 18: 5, 19: 5, 13: 4.5, 14: 4.5,
  10: 4, 11: 4, 12: 4, 8: 3.5, 9: 3.5, 6: 3, 7: 3,
  4: 2.5, 5: 2.5, 3: 2, 2: 1.5, 1: 1, 0: 0,
};

export function getBandScore(rawScore: number, moduleType: "listening" | "reading"): number {
  const table = moduleType === "listening" ? LISTENING_BAND_TABLE : READING_BAND_TABLE;
  return table[Math.min(rawScore, 40)] ?? 0;
}

export function calculateOverallBand(scores: number[]): number {
  const avg = scores.reduce((a, b) => a + b, 0) / scores.length;
  return Math.round(avg * 2) / 2;
}

export const BAND_DESCRIPTORS: Record<number, string> = {
  9: "Expert User — Full command of the language with complete understanding.",
  8.5: "Very Good User — Very minor inaccuracies. Handles complex language well.",
  8: "Very Good User — Occasional unsystematic inaccuracies. Handles complex arguments well.",
  7.5: "Good User — Handles complex language well with occasional inaccuracies.",
  7: "Good User — Operational command with occasional inaccuracies and misunderstandings.",
  6.5: "Competent User — Generally effective despite some inaccuracies.",
  6: "Competent User — Effective command despite inaccuracies and misunderstandings.",
  5.5: "Modest User — Partial command, likely to make many mistakes.",
  5: "Modest User — Partial command, copes with overall meaning in most situations.",
  4.5: "Limited User — Basic competence in familiar situations.",
  4: "Limited User — Restricted to familiar situations, frequent problems in understanding.",
  3.5: "Extremely Limited User — Conveys general meaning in very familiar situations.",
  3: "Extremely Limited User — Conveys and understands only general meaning.",
  2: "Intermittent User — No real communication possible except basic information.",
  1: "Non User — Essentially no ability to use the language.",
  0: "Did not attempt the test.",
};
