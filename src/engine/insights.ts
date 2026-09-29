/**
 * Derived insights for the year overview and progress: pure functions over store data.
 */
import type { ProgramPosition } from '@/content/program';
import type { DailyCard, LanguageContent } from '@/content/types';
import { isDailyUnlocked, isMonthWrapUnlocked, isWeeklyUnlocked } from '@/content/program';
import { DAYS_PER_MONTH, MONTHS_IN_PROGRAM } from '@/content/types';
import type {
  DayLog,
  Energy,
  ISODate,
  LessonProgress,
  Mood,
  PeriodEvent,
  Phase,
  Settings,
  Symptom,
} from '@/domain/types';

import { dayStatus } from './cycle';
import { addDaysISO, toISODate } from './dates';

const dayKey = (ts: number) => toISODate(new Date(ts));

/** Consecutive days (ending today or yesterday) with at least one card read. */
export function readingStreak(progress: Record<string, LessonProgress>, today: ISODate): number {
  const days = new Set(
    Object.values(progress)
      .filter((p) => p.readAt)
      .map((p) => dayKey(p.readAt as number)),
  );
  let cursor = days.has(today) ? today : addDaysISO(today, -1);
  let streak = 0;
  while (days.has(cursor)) {
    streak += 1;
    cursor = addDaysISO(cursor, -1);
  }
  return streak;
}

export interface CatchUpItem {
  kind: 'daily' | 'weekly' | 'wrap';
  id: string;
  title: string;
  month: number;
  order: number;
}

/** Unlocked but unread items, oldest first. */
export function catchUpItems(
  content: LanguageContent,
  position: ProgramPosition,
  progress: Record<string, LessonProgress>,
): CatchUpItem[] {
  const out: CatchUpItem[] = [];
  for (const m of content.months) {
    for (const c of m.daily) {
      if (isDailyUnlocked(position, m.month, c.day) && !progress[c.id]?.readAt) {
        out.push({
          kind: 'daily',
          id: c.id,
          title: c.title,
          month: m.month,
          order: (m.month - 1) * DAYS_PER_MONTH + c.day,
        });
      }
    }
    for (const w of m.weekly) {
      if (isWeeklyUnlocked(position, m.month, w.week) && !progress[w.id]?.readAt) {
        out.push({
          kind: 'weekly',
          id: w.id,
          title: w.title,
          month: m.month,
          order: (m.month - 1) * DAYS_PER_MONTH + (w.week - 1) * 7 + 0.5,
        });
      }
    }
    if (isMonthWrapUnlocked(position, m.month) && !progress[m.wrap.id]?.quizTotal) {
      out.push({
        kind: 'wrap',
        id: m.wrap.id,
        title: m.wrap.title,
        month: m.month,
        order: m.month * DAYS_PER_MONTH + 0.5,
      });
    }
  }
  return out.sort((a, b) => a.order - b.order);
}

export interface SearchItem {
  kind: 'daily' | 'weekly' | 'wrap' | 'phase';
  id: string;
  title: string;
  subtitle: string;
  text: string;
  unlocked: boolean;
  read: boolean;
}

export function searchIndex(
  content: LanguageContent,
  position: ProgramPosition,
  progress: Record<string, LessonProgress>,
): SearchItem[] {
  const out: SearchItem[] = [];
  for (const phase of Object.values(content.phases)) {
    out.push({
      kind: 'phase',
      id: phase.phase,
      title: phase.name,
      subtitle: phase.timing,
      text: [
        ...phase.whatHappens,
        ...phase.howSheMayFeel,
        ...phase.whatYouCanDo,
        ...phase.avoid,
      ].join(' '),
      unlocked: true,
      read: true,
    });
  }
  for (const m of content.months) {
    for (const c of m.daily) {
      out.push({
        kind: 'daily',
        id: c.id,
        title: c.title,
        subtitle: `${m.theme} · ${c.day}`,
        text: `${c.insight} ${c.action}`,
        unlocked: isDailyUnlocked(position, m.month, c.day),
        read: !!progress[c.id]?.readAt,
      });
    }
    for (const w of m.weekly) {
      out.push({
        kind: 'weekly',
        id: w.id,
        title: w.title,
        subtitle: m.theme,
        text: `${w.body.join(' ')} ${w.conversationQuestion}`,
        unlocked: isWeeklyUnlocked(position, m.month, w.week),
        read: !!progress[w.id]?.readAt,
      });
    }
    out.push({
      kind: 'wrap',
      id: m.wrap.id,
      title: m.wrap.title,
      subtitle: m.theme,
      text: `${m.wrap.summary.join(' ')} ${m.wrap.keepDoing.join(' ')}`,
      unlocked: isMonthWrapUnlocked(position, m.month),
      read: !!progress[m.wrap.id]?.readAt,
    });
  }
  return out;
}

export function searchItems(index: SearchItem[], query: string): SearchItem[] {
  const q = query.trim().toLowerCase();
  if (!q) return index.filter((i) => i.unlocked);
  const terms = q.split(/\s+/);
  return index
    .filter((i) => i.unlocked)
    .map((i) => {
      const title = i.title.toLowerCase();
      const text = i.text.toLowerCase();
      let score = 0;
      for (const term of terms) {
        if (title.includes(term)) score += 3;
        else if (text.includes(term)) score += 1;
        else return { i, score: 0 };
      }
      return { i, score };
    })
    .filter((x) => x.score > 0)
    .sort((a, b) => b.score - a.score)
    .map((x) => x.i);
}

export interface PhaseInsight {
  phase: Phase;
  /** Number of logged days that fell in this phase. */
  days: number;
  topSymptoms: { symptom: Symptom; count: number }[];
  moods: Partial<Record<Mood, number>>;
  energies: Partial<Record<Energy, number>>;
  /** Actions the partner marked as done on cards tagged with this phase. */
  actionsDone: DailyCard[];
}

export function phaseInsights(
  content: LanguageContent,
  logs: DayLog[],
  periods: PeriodEvent[],
  settings: Settings,
  progress: Record<string, LessonProgress>,
): Record<Phase, PhaseInsight> {
  const phases: Phase[] = ['menstrual', 'follicular', 'ovulation', 'luteal'];
  const result = Object.fromEntries(
    phases.map((phase) => [
      phase,
      { phase, days: 0, topSymptoms: [], moods: {}, energies: {}, actionsDone: [] } as PhaseInsight,
    ]),
  ) as Record<Phase, PhaseInsight>;
  const symptomCounts: Record<Phase, Partial<Record<Symptom, number>>> = {
    menstrual: {},
    follicular: {},
    ovulation: {},
    luteal: {},
  };
  for (const log of logs) {
    const status = dayStatus(periods, settings, log.date);
    if (!status) continue;
    const r = result[status.phase];
    r.days += 1;
    for (const s of log.symptoms)
      symptomCounts[status.phase][s] = (symptomCounts[status.phase][s] ?? 0) + 1;
    if (log.mood) r.moods[log.mood] = (r.moods[log.mood] ?? 0) + 1;
    if (log.energy) r.energies[log.energy] = (r.energies[log.energy] ?? 0) + 1;
  }
  for (const phase of phases) {
    result[phase].topSymptoms = (Object.entries(symptomCounts[phase]) as [Symptom, number][])
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5)
      .map(([symptom, count]) => ({ symptom, count }));
  }
  for (const m of content.months) {
    for (const c of m.daily) {
      if (!progress[c.id]?.actionDoneAt) continue;
      for (const tag of c.phaseTags) result[tag].actionsDone.push(c);
    }
  }
  return result;
}

export function programSummary(
  content: LanguageContent,
  progress: Record<string, LessonProgress>,
): {
  cardsRead: number;
  cardsTotal: number;
  actionsDone: number;
  quizzesPassed: number;
  monthsAvailable: number;
} {
  let cardsRead = 0;
  let cardsTotal = 0;
  let actionsDone = 0;
  let quizzesPassed = 0;
  for (const m of content.months) {
    for (const c of m.daily) {
      cardsTotal += 1;
      if (progress[c.id]?.readAt) cardsRead += 1;
      if (progress[c.id]?.actionDoneAt) actionsDone += 1;
    }
    const q = progress[m.wrap.id];
    if (q?.quizTotal && (q.quizScore ?? 0) >= Math.ceil(q.quizTotal * 0.6)) quizzesPassed += 1;
  }
  return {
    cardsRead,
    cardsTotal,
    actionsDone,
    quizzesPassed,
    monthsAvailable: Math.min(content.months.length, MONTHS_IN_PROGRAM),
  };
}
