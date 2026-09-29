import { content, programPosition } from '@/content';
import {
  DEFAULT_SETTINGS,
  type DayLog,
  type LessonProgress,
  type PeriodEvent,
} from '@/domain/types';

import {
  catchUpItems,
  phaseInsights,
  programSummary,
  readingStreak,
  searchIndex,
  searchItems,
} from './insights';

const da = content.da;
const ts = (iso: string) => new Date(`${iso}T12:00:00`).getTime();

describe('readingStreak', () => {
  it('counts consecutive days ending today', () => {
    const progress: Record<string, LessonProgress> = {
      a: { lessonId: 'a', readAt: ts('2026-03-10') },
      b: { lessonId: 'b', readAt: ts('2026-03-09') },
      c: { lessonId: 'c', readAt: ts('2026-03-08') },
      d: { lessonId: 'd', readAt: ts('2026-03-05') },
    };
    expect(readingStreak(progress, '2026-03-10')).toBe(3);
  });
  it('keeps the streak alive when today is not read yet', () => {
    const progress: Record<string, LessonProgress> = {
      a: { lessonId: 'a', readAt: ts('2026-03-09') },
      b: { lessonId: 'b', readAt: ts('2026-03-08') },
    };
    expect(readingStreak(progress, '2026-03-10')).toBe(2);
    expect(readingStreak(progress, '2026-03-12')).toBe(0);
  });
});

describe('catchUpItems', () => {
  it('lists unlocked unread items oldest first', () => {
    const pos = programPosition('2026-03-01', '2026-03-09'); // day 9, week 2
    const progress: Record<string, LessonProgress> = {
      'm01-d01': { lessonId: 'm01-d01', readAt: 1 },
    };
    const items = catchUpItems(da, pos, progress);
    expect(items[0].id).toBe('m01-w1');
    expect(items[1].id).toBe('m01-d02');
    expect(items.filter((i) => i.kind === 'weekly').map((i) => i.id)).toEqual(['m01-w1', 'm01-w2']);
    expect(items.some((i) => i.id === 'm01-d10')).toBe(false);
  });
});

describe('search', () => {
  it('finds unlocked cards by words in title or text', () => {
    const pos = programPosition('2026-03-01', '2026-03-30');
    const index = searchIndex(da, pos, {});
    const hits = searchItems(index, 'varme');
    expect(hits.length).toBeGreaterThan(0);
    expect(hits.every((h) => h.unlocked)).toBe(true);
    expect(searchItems(index, 'zzzzqqq')).toEqual([]);
  });
  it('hides locked items', () => {
    const pos = programPosition('2026-03-01', '2026-03-02');
    const index = searchIndex(da, pos, {});
    expect(searchItems(index, '').some((i) => i.id === 'm01-d05')).toBe(false);
  });
});

describe('phaseInsights', () => {
  it('groups symptoms and done actions by phase', () => {
    const periods: PeriodEvent[] = [{ id: 'p', startDate: '2026-03-01', updatedAt: 1 }];
    const logs: DayLog[] = [
      { id: 'a', date: '2026-03-02', symptoms: ['cramps', 'fatigue'], mood: 'low', updatedAt: 1 },
      { id: 'b', date: '2026-03-03', symptoms: ['cramps'], energy: 'low', updatedAt: 1 },
      { id: 'c', date: '2026-03-25', symptoms: ['irritability'], updatedAt: 1 },
    ];
    const progress: Record<string, LessonProgress> = {
      'm01-d05': { lessonId: 'm01-d05', actionDoneAt: 1 },
    };
    const r = phaseInsights(da, logs, periods, DEFAULT_SETTINGS, progress);
    expect(r.menstrual.days).toBe(2);
    expect(r.menstrual.topSymptoms[0]).toEqual({ symptom: 'cramps', count: 2 });
    expect(r.menstrual.moods.low).toBe(1);
    expect(r.luteal.topSymptoms[0].symptom).toBe('irritability');
    expect(r.menstrual.actionsDone.map((c) => c.id)).toEqual(['m01-d05']);
  });
});

describe('programSummary', () => {
  it('counts reads, actions and passed quizzes', () => {
    const progress: Record<string, LessonProgress> = {
      'm01-d01': { lessonId: 'm01-d01', readAt: 1, actionDoneAt: 1 },
      'm01-wrap': { lessonId: 'm01-wrap', quizScore: 5, quizTotal: 7 },
    };
    const s = programSummary(da, progress);
    expect(s.cardsRead).toBe(1);
    expect(s.actionsDone).toBe(1);
    expect(s.quizzesPassed).toBe(1);
    expect(s.cardsTotal).toBeGreaterThanOrEqual(30);
  });
});
