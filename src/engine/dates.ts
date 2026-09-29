import {
  addDays,
  differenceInCalendarDays,
  format,
  getISOWeek,
  parseISO,
  startOfDay,
} from 'date-fns';

import type { ISODate } from '@/domain/types';

export function toISODate(date: Date): ISODate {
  return format(date, 'yyyy-MM-dd');
}

export function fromISODate(iso: ISODate): Date {
  return startOfDay(parseISO(iso));
}

export function todayISO(now: Date = new Date()): ISODate {
  return toISODate(now);
}

export function addDaysISO(iso: ISODate, days: number): ISODate {
  return toISODate(addDays(fromISODate(iso), days));
}

/** b - a in whole calendar days. */
export function daysBetween(a: ISODate, b: ISODate): number {
  return differenceInCalendarDays(fromISODate(b), fromISODate(a));
}

export function compareISO(a: ISODate, b: ISODate): number {
  return a < b ? -1 : a > b ? 1 : 0;
}

/** ISO 8601 calendar week number (1-53) of the given date. */
export function isoWeekOf(iso: ISODate): number {
  return getISOWeek(fromISODate(iso));
}

export function isValidISODate(iso: string): boolean {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(iso)) return false;
  const d = parseISO(iso);
  return !Number.isNaN(d.getTime()) && toISODate(d) === iso;
}
