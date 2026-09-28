import type { Phase } from '@/domain/types';

/** A source the content leans on; shown as a short reference. */
export interface Source {
  label: string;
  url?: string;
}

/**
 * One daily card: 80-150 words of insight plus one concrete action the partner can take today.
 * Ids are language-independent so progress is shared across languages: "m01-d05".
 */
export interface DailyCard {
  id: string;
  month: number;
  day: number;
  title: string;
  /** What is typically happening for her right now. */
  insight: string;
  /** The one thing the partner can do today. */
  action: string;
  /** Phases where this card is especially relevant; empty means any. */
  phaseTags: Phase[];
  sources?: Source[];
}

/** One weekly read: under five minutes, ends with a question to talk about together. */
export interface WeeklyRead {
  id: string;
  month: number;
  week: number;
  title: string;
  /** Paragraphs. */
  body: string[];
  conversationQuestion: string;
  sources?: Source[];
}

export interface QuizQuestion {
  question: string;
  options: string[];
  /** Index into options. */
  correctIndex: number;
  /** Shown after answering: why the correct answer helps most. */
  explanation: string;
}

export interface MonthlyWrap {
  id: string;
  month: number;
  title: string;
  /** Paragraphs. */
  summary: string[];
  /** Short bullet list of the actions worth keeping. */
  keepDoing: string[];
  quiz: QuizQuestion[];
}

export interface MonthContent {
  month: number;
  theme: string;
  /** Partner focus of the month in one sentence. */
  focus: string;
  daily: DailyCard[];
  weekly: WeeklyRead[];
  wrap: MonthlyWrap;
}

export interface PhaseInfo {
  phase: Phase;
  name: string;
  /** Typical timing, e.g. "Day 1-5". */
  timing: string;
  /** What is happening hormonally and physically. */
  whatHappens: string[];
  /** What she may feel. */
  howSheMayFeel: string[];
  /** Concrete things the partner can do. */
  whatYouCanDo: string[];
  /** Things to avoid. */
  avoid: string[];
}

export interface LanguageContent {
  phases: Record<Phase, PhaseInfo>;
  months: MonthContent[];
}

export const DAYS_PER_MONTH = 30;
export const WEEKS_PER_MONTH = 4;
export const MONTHS_IN_PROGRAM = 12;
export const PROGRAM_DAYS = DAYS_PER_MONTH * MONTHS_IN_PROGRAM;

export const dailyId = (month: number, day: number) =>
  `m${String(month).padStart(2, '0')}-d${String(day).padStart(2, '0')}`;
export const weeklyId = (month: number, week: number) =>
  `m${String(month).padStart(2, '0')}-w${week}`;
export const wrapId = (month: number) => `m${String(month).padStart(2, '0')}-wrap`;

export const PHASE_ORDER: Phase[] = ['menstrual', 'follicular', 'ovulation', 'luteal'];
