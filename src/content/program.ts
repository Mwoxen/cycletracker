/**
 * Program delivery: which card, read and wrap are "today's", given the program start date.
 * Pure functions; content lookups take a LanguageContent so they work in tests without i18n.
 */
import type { ISODate, Phase } from '@/domain/types';
import { daysBetween } from '@/engine/dates';

import {
  DAYS_PER_MONTH,
  MONTHS_IN_PROGRAM,
  PROGRAM_DAYS,
  REGULAR_DAYS,
  WEEKS_PER_MONTH,
  type DailyCard,
  type LanguageContent,
  type MonthContent,
  type MonthlyWrap,
  type WeeklyRead,
} from './types';

export interface ProgramPosition {
  /** 1-based day in the program, clamped to 1..PROGRAM_DAYS. */
  programDay: number;
  /** True when today is after the last program day. */
  completed: boolean;
  /** True when today is before the program start date. */
  notStarted: boolean;
  month: number;
  /** 1..DAYS_PER_MONTH, or 31..35 on the bonus days. */
  dayInMonth: number;
  /** 1..WEEKS_PER_MONTH, the week the current day belongs to. */
  weekInMonth: number;
  /** Day inside the year without clamping, may be < 1 or > PROGRAM_DAYS. */
  rawDay: number;
}

export function programPosition(programStartDate: ISODate, today: ISODate): ProgramPosition {
  const rawDay = daysBetween(programStartDate, today) + 1;
  const programDay = Math.min(Math.max(rawDay, 1), PROGRAM_DAYS);
  // The bonus days (361-365) belong to month 12 as its days 31-35.
  const month = Math.min(Math.floor((programDay - 1) / DAYS_PER_MONTH) + 1, MONTHS_IN_PROGRAM);
  const dayInMonth =
    programDay > REGULAR_DAYS
      ? programDay - (MONTHS_IN_PROGRAM - 1) * DAYS_PER_MONTH
      : ((programDay - 1) % DAYS_PER_MONTH) + 1;
  const weekInMonth = Math.min(Math.floor((dayInMonth - 1) / 7) + 1, WEEKS_PER_MONTH);
  return {
    programDay,
    completed: rawDay > PROGRAM_DAYS,
    notStarted: rawDay < 1,
    month,
    dayInMonth,
    weekInMonth,
    rawDay,
  };
}

export function getMonth(content: LanguageContent, month: number): MonthContent | undefined {
  return content.months.find((m) => m.month === month);
}

/** True when content for the month exists (months are authored incrementally). */
export function isMonthAvailable(content: LanguageContent, month: number): boolean {
  return month >= 1 && month <= MONTHS_IN_PROGRAM && !!getMonth(content, month);
}

export function getDailyCard(
  content: LanguageContent,
  month: number,
  day: number,
): DailyCard | undefined {
  if (month === MONTHS_IN_PROGRAM && day > DAYS_PER_MONTH) {
    return content.bonus.find((c) => c.day === day);
  }
  return getMonth(content, month)?.daily.find((c) => c.day === day);
}

/** The daily cards of a month; month 12 also carries the five bonus cards. */
export function dailyOf(content: LanguageContent, month: MonthContent): DailyCard[] {
  return month.month === MONTHS_IN_PROGRAM ? [...month.daily, ...content.bonus] : month.daily;
}

/** Every daily card in programme order: the twelve months, then the bonus cards. */
export function allDaily(content: LanguageContent): DailyCard[] {
  return [...content.months.flatMap((m) => m.daily), ...content.bonus];
}

export function getWeeklyRead(
  content: LanguageContent,
  month: number,
  week: number,
): WeeklyRead | undefined {
  return getMonth(content, month)?.weekly.find((w) => w.week === week);
}

export function getWrap(content: LanguageContent, month: number): MonthlyWrap | undefined {
  return getMonth(content, month)?.wrap;
}

export function findDaily(content: LanguageContent, id: string): DailyCard | undefined {
  return allDaily(content).find((c) => c.id === id);
}

export function findWeekly(content: LanguageContent, id: string): WeeklyRead | undefined {
  for (const m of content.months) {
    const w = m.weekly.find((x) => x.id === id);
    if (w) return w;
  }
  return undefined;
}

export function findWrap(content: LanguageContent, id: string): MonthlyWrap | undefined {
  return content.months.find((m) => m.wrap.id === id)?.wrap;
}

/** The weekly read for the position, unlocked from the first day of its week. */
export function currentWeekly(content: LanguageContent, pos: ProgramPosition) {
  return getWeeklyRead(content, pos.month, pos.weekInMonth);
}

/** The monthly wrap is unlocked on the last day of the month. */
export function isWrapUnlocked(pos: ProgramPosition): boolean {
  return pos.completed || pos.dayInMonth >= DAYS_PER_MONTH;
}

/** Whether a given program item is unlocked at the position (drip schedule). */
export function isDailyUnlocked(pos: ProgramPosition, month: number, day: number): boolean {
  const itemDay = (month - 1) * DAYS_PER_MONTH + day;
  return itemDay <= pos.programDay;
}

export function isWeeklyUnlocked(pos: ProgramPosition, month: number, week: number): boolean {
  const itemDay = (month - 1) * DAYS_PER_MONTH + (week - 1) * 7 + 1;
  return itemDay <= pos.programDay;
}

export function isMonthWrapUnlocked(pos: ProgramPosition, month: number): boolean {
  const itemDay = month * DAYS_PER_MONTH;
  return itemDay <= pos.programDay;
}

/**
 * Pick today's card. The scheduled card wins; if the scheduled card is not tagged
 * for her current phase but another unread card in the same month is, we still
 * show the scheduled card so the program stays linear, but return the best phase
 * match as `phaseMatch` for the "right now" section.
 */
export function pickTodaysCard(
  content: LanguageContent,
  pos: ProgramPosition,
  phase: Phase | undefined,
): { scheduled: DailyCard | undefined; phaseMatch: DailyCard | undefined } {
  const scheduled = getDailyCard(content, pos.month, pos.dayInMonth);
  if (!phase) return { scheduled, phaseMatch: undefined };
  const month = getMonth(content, pos.month);
  const phaseMatch =
    scheduled?.phaseTags.includes(phase) || !month
      ? undefined
      : month.daily.find((c) => c.day < pos.dayInMonth && c.phaseTags.includes(phase));
  return { scheduled, phaseMatch };
}
