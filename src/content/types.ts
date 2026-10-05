import type { CycleWeek, Phase, Symptom } from '@/domain/types';

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
  /** Concrete things she can do for herself in this phase. */
  selfCare: string[];
  /** Things to avoid. */
  avoid: string[];
}

export interface SymptomTip {
  /** One sentence on what is going on. */
  what: string;
  /** One concrete thing the partner can do today. */
  doThis: string;
}

/** The partner's focus for one of the four cycle weeks. */
export interface CycleWeekFocus {
  week: CycleWeek;
  title: string;
  /** Why this focus fits the week, hormonally and practically. */
  why: string;
  /** Exactly three concrete things the partner can do this week. */
  actions: string[];
  /** One sentence for the user role: what her partner focuses on this week. */
  partnerFocus: string;
}

export const CYCLE_WEEK_ACTIONS = 3;

export interface LanguageContent {
  phases: Record<Phase, PhaseInfo>;
  symptomTips: Record<Symptom, SymptomTip>;
  months: MonthContent[];
  /** Five bonus cards after the 360-day programme: month 12, days 31-35 (programme days 361-365). */
  bonus: DailyCard[];
  cycleWeeks: CycleWeekFocus[];
}

export const DAYS_PER_MONTH = 30;
export const WEEKS_PER_MONTH = 4;
export const MONTHS_IN_PROGRAM = 12;
/** The twelve 30-day months. */
export const REGULAR_DAYS = DAYS_PER_MONTH * MONTHS_IN_PROGRAM;
/** Bonus cards that close the year, after the last month. */
export const BONUS_DAYS = 5;
export const PROGRAM_DAYS = REGULAR_DAYS + BONUS_DAYS;

export const dailyId = (month: number, day: number) =>
  `m${String(month).padStart(2, '0')}-d${String(day).padStart(2, '0')}`;
export const weeklyId = (month: number, week: number) =>
  `m${String(month).padStart(2, '0')}-w${week}`;
export const wrapId = (month: number) => `m${String(month).padStart(2, '0')}-wrap`;

export const PHASE_ORDER: Phase[] = ['menstrual', 'follicular', 'ovulation', 'luteal'];
