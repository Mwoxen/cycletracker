import { CYCLE_WEEKS, PHASES, SYMPTOMS } from '@/domain/types';

import { content } from './index';
import {
  CYCLE_WEEK_ACTIONS,
  DAYS_PER_MONTH,
  WEEKS_PER_MONTH,
  dailyId,
  weeklyId,
  wrapId,
} from './types';

const words = (s: string) => s.trim().split(/\s+/).length;

describe.each(Object.entries(content))('%s content', (lang, data) => {
  it('has all four phases with actionable advice', () => {
    for (const phase of PHASES) {
      const info = data.phases[phase];
      expect(info.phase).toBe(phase);
      expect(info.whatHappens.length).toBeGreaterThan(0);
      expect(info.howSheMayFeel.length).toBeGreaterThan(0);
      expect(info.whatYouCanDo.length).toBeGreaterThanOrEqual(3);
      expect(info.selfCare.length).toBeGreaterThanOrEqual(4);
      expect(info.selfCare.length).toBeLessThanOrEqual(6);
      expect(info.avoid.length).toBeGreaterThan(0);
    }
  });

  it('has a tip for every symptom', () => {
    for (const s of SYMPTOMS) {
      expect(data.symptomTips[s].what.length).toBeGreaterThan(10);
      expect(data.symptomTips[s].doThis.length).toBeGreaterThan(10);
    }
  });

  it('has a focus for each of the four cycle weeks with exactly three actions', () => {
    expect(data.cycleWeeks.map((w) => w.week)).toEqual(CYCLE_WEEKS);
    for (const w of data.cycleWeeks) {
      expect(w.title.trim().length).toBeGreaterThan(3);
      expect(w.why.trim().length).toBeGreaterThan(20);
      expect(w.partnerFocus.trim().length).toBeGreaterThan(20);
      expect(w.actions).toHaveLength(CYCLE_WEEK_ACTIONS);
      for (const a of w.actions) expect(a.trim().length).toBeGreaterThan(10);
    }
  });

  describe.each(data.months.map((m) => [m.month, m] as const))('month %i', (n, month) => {
    it('is complete: 30 daily cards, 4 weekly reads, one wrap', () => {
      expect(month.month).toBe(n);
      expect(month.daily).toHaveLength(DAYS_PER_MONTH);
      expect(month.weekly).toHaveLength(WEEKS_PER_MONTH);
      expect(month.daily.map((c) => c.day)).toEqual(
        Array.from({ length: DAYS_PER_MONTH }, (_, i) => i + 1),
      );
      expect(month.weekly.map((w) => w.week)).toEqual([1, 2, 3, 4]);
      expect(month.wrap.id).toBe(wrapId(n));
    });

    it.each(month.daily.map((c) => [c.day, c] as const))(
      'daily card %i has id, insight length and an action',
      (day, card) => {
        expect(card.id).toBe(dailyId(n, day));
        expect(card.month).toBe(n);
        expect(card.title.length).toBeGreaterThan(3);
        const n1 = words(card.insight);
        expect(n1).toBeGreaterThanOrEqual(60);
        expect(n1).toBeLessThanOrEqual(170);
        expect(words(card.action)).toBeGreaterThanOrEqual(6);
        for (const tag of card.phaseTags) expect(PHASES).toContain(tag);
      },
    );

    it.each(month.weekly.map((w) => [w.week, w] as const))(
      'weekly read %i is under five minutes and ends with a question',
      (week, read) => {
        expect(read.id).toBe(weeklyId(n, week));
        const total = read.body.reduce((sum, p) => sum + words(p), 0);
        expect(total).toBeGreaterThanOrEqual(350);
        expect(total).toBeLessThanOrEqual(1000);
        expect(read.conversationQuestion.trim().endsWith('?')).toBe(true);
      },
    );

    it('wrap has summary, keep-doing list and a 5-7 question quiz with valid answers', () => {
      expect(month.wrap.summary.length).toBeGreaterThan(0);
      expect(month.wrap.keepDoing.length).toBeGreaterThanOrEqual(3);
      expect(month.wrap.quiz.length).toBeGreaterThanOrEqual(5);
      expect(month.wrap.quiz.length).toBeLessThanOrEqual(7);
      for (const q of month.wrap.quiz) {
        expect(q.options.length).toBeGreaterThanOrEqual(3);
        expect(q.correctIndex).toBeGreaterThanOrEqual(0);
        expect(q.correctIndex).toBeLessThan(q.options.length);
        expect(q.explanation.length).toBeGreaterThan(10);
      }
    });
  });

  it(`${lang} has unique ids`, () => {
    const ids = data.months.flatMap((m) => [
      ...m.daily.map((c) => c.id),
      ...m.weekly.map((w) => w.id),
      m.wrap.id,
    ]);
    expect(new Set(ids).size).toBe(ids.length);
  });
});

describe('language parity', () => {
  it('has the same months and item ids in every language', () => {
    const langs = Object.values(content);
    const idsOf = (d: (typeof langs)[number]) =>
      d.months
        .flatMap((m) => [...m.daily.map((c) => c.id), ...m.weekly.map((w) => w.id), m.wrap.id])
        .sort();
    const reference = idsOf(langs[0]);
    for (const d of langs.slice(1)) expect(idsOf(d)).toEqual(reference);
  });

  it('has the same phase tags and quiz answers in every language', () => {
    const [a, b] = [content.da, content.en];
    for (const m of a.months) {
      const other = b.months.find((x) => x.month === m.month);
      expect(other).toBeDefined();
      m.daily.forEach((c, i) => expect(other?.daily[i].phaseTags).toEqual(c.phaseTags));
      m.wrap.quiz.forEach((q, i) => {
        expect(other?.wrap.quiz[i].correctIndex).toBe(q.correctIndex);
        expect(other?.wrap.quiz[i].options).toHaveLength(q.options.length);
      });
    }
  });
});
