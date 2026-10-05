/**
 * Content rules shared by the test suites. Throws with a readable message on violation.
 */
import { PHASES } from '@/domain/types';

import {
  BONUS_DAYS,
  DAYS_PER_MONTH,
  MONTHS_IN_PROGRAM,
  WEEKS_PER_MONTH,
  dailyId,
  weeklyId,
  wrapId,
  type DailyCard,
  type MonthContent,
} from './types';

export const words = (s: string) => s.trim().split(/\s+/).length;

function assert(condition: unknown, message: string): asserts condition {
  if (!condition) throw new Error(message);
}

export function validateMonth(month: MonthContent, n: number, lang: string): void {
  const where = `${lang} month ${n}`;
  assert(month.month === n, `${where}: month number is ${month.month}`);
  assert(month.theme.length > 2, `${where}: missing theme`);
  assert(month.focus.length > 10, `${where}: missing focus`);
  assert(
    month.daily.length === DAYS_PER_MONTH,
    `${where}: ${month.daily.length} daily cards, expected ${DAYS_PER_MONTH}`,
  );
  assert(
    month.weekly.length === WEEKS_PER_MONTH,
    `${where}: ${month.weekly.length} weekly reads, expected ${WEEKS_PER_MONTH}`,
  );
  month.daily.forEach((card, i) => {
    const day = i + 1;
    const w = `${where} day ${day}`;
    assert(card.day === day, `${w}: day field is ${card.day}`);
    assert(card.id === dailyId(n, day), `${w}: id is ${card.id}`);
    assert(card.month === n, `${w}: month field is ${card.month}`);
    assert(card.title.length > 3, `${w}: missing title`);
    const len = words(card.insight);
    assert(len >= 60 && len <= 170, `${w}: insight is ${len} words (60-170)`);
    assert(words(card.action) >= 6, `${w}: action is too short`);
    assert(card.phaseTags.length <= 2, `${w}: more than two phase tags`);
    for (const tag of card.phaseTags)
      assert(PHASES.includes(tag), `${w}: unknown phase tag ${tag}`);
  });
  month.weekly.forEach((read, i) => {
    const week = i + 1;
    const w = `${where} week ${week}`;
    assert(read.week === week, `${w}: week field is ${read.week}`);
    assert(read.id === weeklyId(n, week), `${w}: id is ${read.id}`);
    const total = read.body.reduce((sum, p) => sum + words(p), 0);
    assert(total >= 350 && total <= 1000, `${w}: body is ${total} words (350-1000)`);
    assert(
      read.conversationQuestion.trim().endsWith('?'),
      `${w}: conversation question must end with ?`,
    );
  });
  assert(month.wrap.id === wrapId(n), `${where}: wrap id is ${month.wrap.id}`);
  assert(month.wrap.summary.length > 0, `${where}: wrap summary missing`);
  assert(month.wrap.keepDoing.length >= 3, `${where}: wrap needs at least 3 keepDoing items`);
  assert(
    month.wrap.quiz.length >= 5 && month.wrap.quiz.length <= 7,
    `${where}: quiz has ${month.wrap.quiz.length} questions (5-7)`,
  );
  month.wrap.quiz.forEach((q, i) => {
    const w = `${where} quiz ${i + 1}`;
    assert(
      q.options.length >= 3 && q.options.length <= 4,
      `${w}: ${q.options.length} options (3-4)`,
    );
    assert(
      q.correctIndex >= 0 && q.correctIndex < q.options.length,
      `${w}: correctIndex out of range`,
    );
    assert(q.explanation.length > 10, `${w}: explanation missing`);
  });
  const ids = [...month.daily.map((c) => c.id), ...month.weekly.map((x) => x.id), month.wrap.id];
  assert(new Set(ids).size === ids.length, `${where}: duplicate ids`);
}

export function validateBonus(bonus: DailyCard[], lang: string): void {
  const where = `${lang} bonus`;
  assert(bonus.length === BONUS_DAYS, `${where}: ${bonus.length} cards, expected ${BONUS_DAYS}`);
  bonus.forEach((card, i) => {
    const day = DAYS_PER_MONTH + 1 + i;
    const w = `${where} day ${day}`;
    assert(card.day === day, `${w}: day field is ${card.day}`);
    assert(card.month === MONTHS_IN_PROGRAM, `${w}: month field is ${card.month}`);
    assert(card.id === dailyId(MONTHS_IN_PROGRAM, day), `${w}: id is ${card.id}`);
    assert(card.title.length > 3, `${w}: missing title`);
    const len = words(card.insight);
    assert(len >= 60 && len <= 170, `${w}: insight is ${len} words (60-170)`);
    assert(words(card.action) >= 6, `${w}: action is too short`);
  });
}

export function validateParity(a: MonthContent, b: MonthContent, n: number): void {
  const where = `month ${n} parity`;
  assert(a.daily.length === b.daily.length, `${where}: different number of daily cards`);
  a.daily.forEach((c, i) => {
    assert(
      JSON.stringify(c.phaseTags) === JSON.stringify(b.daily[i].phaseTags),
      `${where}: day ${i + 1} phaseTags differ (${c.phaseTags.join(',')} vs ${b.daily[i].phaseTags.join(',')})`,
    );
  });
  assert(a.weekly.length === b.weekly.length, `${where}: different number of weekly reads`);
  assert(a.wrap.quiz.length === b.wrap.quiz.length, `${where}: different number of quiz questions`);
  a.wrap.quiz.forEach((q, i) => {
    assert(
      q.options.length === b.wrap.quiz[i].options.length,
      `${where}: quiz ${i + 1} option count differs`,
    );
    assert(
      q.correctIndex === b.wrap.quiz[i].correctIndex,
      `${where}: quiz ${i + 1} correctIndex differs`,
    );
  });
}
