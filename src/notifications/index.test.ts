import { dailyId, getContent } from '@/content';
import type { Profile } from '@/domain/types';

import { findWeekly, findWrap, getWeeklyRead, getWrap } from '@/content/program';

import { routeForNotification, upcomingProgramNotifications } from './index';

const profile = (role: Profile['role'], programStartDate = '2026-03-01'): Profile =>
  ({ role, language: 'da', partnerName: 'Anna', programStartDate }) as Profile;

describe('routeForNotification', () => {
  it("opens today's card for the partner", () => {
    expect(routeForNotification('daily-card', profile('tracker'), '2026-03-05')).toBe(
      `/(tabs)/home/daily/${dailyId(1, 5)}`,
    );
  });

  it('follows the programme day, also on the bonus days', () => {
    expect(routeForNotification('daily-card', profile('tracker'), '2026-03-31')).toBe(
      `/(tabs)/home/daily/${dailyId(2, 1)}`,
    );
    expect(routeForNotification('daily-card', profile('tracker'), '2027-02-26')).toBe(
      `/(tabs)/home/daily/${dailyId(12, 33)}`,
    );
  });

  it('opens the log sheet for the cycle owner', () => {
    expect(routeForNotification('daily-card', profile('user'), '2026-03-05')).toBe(
      '/log/2026-03-05',
    );
  });

  it('just opens the app before the programme starts, after it ends and for other reminders', () => {
    expect(routeForNotification('daily-card', profile('tracker'), '2026-02-20')).toBeUndefined();
    expect(routeForNotification('daily-card', profile('tracker'), '2027-06-01')).toBeUndefined();
    expect(routeForNotification('period-soon', profile('tracker'), '2026-03-05')).toBeUndefined();
    expect(routeForNotification('daily-card', undefined, '2026-03-05')).toBeUndefined();
  });
});

describe('routeForNotification for articles and wraps', () => {
  const content = getContent('da');
  const weekly = getWeeklyRead(content, 2, 3)!;
  const wrap = getWrap(content, 2)!;

  it('opens the weekly article and the wrap for the partner', () => {
    expect(routeForNotification(`weekly:${weekly.id}`, profile('tracker'), '2026-03-05')).toBe(
      `/(tabs)/home/weekly/${weekly.id}`,
    );
    expect(routeForNotification(`wrap:${wrap.id}`, profile('tracker'), '2026-03-05')).toBe(
      `/(tabs)/learn/wrap/${wrap.id}`,
    );
  });

  it('ignores them for the cycle owner and for ids that do not exist', () => {
    expect(
      routeForNotification(`weekly:${weekly.id}`, profile('user'), '2026-03-05'),
    ).toBeUndefined();
    expect(routeForNotification('weekly:nope', profile('tracker'), '2026-03-05')).toBeUndefined();
    expect(routeForNotification('wrap:nope', profile('tracker'), '2026-03-05')).toBeUndefined();
    expect(findWeekly(content, weekly.id)).toBeDefined();
    expect(findWrap(content, wrap.id)).toBeDefined();
  });
});

describe('upcomingProgramNotifications', () => {
  // Programme day 1 is 2026-03-01 (a Sunday); local time, so the 19:00 comparison is stable.
  const start = '2026-03-01';
  const morning = (iso: string) => new Date(`${iso}T08:00:00`);

  it('unlocks a weekly article on the first day of its week and a wrap on the last day of the month', () => {
    const plus = upcomingProgramNotifications(start, 'da', 'plus', morning('2026-03-01'), 100);
    const byId = new Map(plus.map((i) => [i.identifier, i]));
    const content = getContent('da');
    expect(byId.get(`weekly:${getWeeklyRead(content, 1, 1)!.id}`)?.date).toBe('2026-03-01');
    expect(byId.get(`weekly:${getWeeklyRead(content, 1, 2)!.id}`)?.date).toBe('2026-03-08');
    expect(byId.get(`weekly:${getWeeklyRead(content, 1, 4)!.id}`)?.date).toBe('2026-03-22');
    expect(byId.get(`wrap:${getWrap(content, 1)!.id}`)?.date).toBe('2026-03-30');
    expect(byId.get(`weekly:${getWeeklyRead(content, 2, 1)!.id}`)?.date).toBe('2026-03-31');
    expect(plus).toHaveLength(12 * 5);
  });

  it('is sorted by date and skips what has already been announced', () => {
    const items = upcomingProgramNotifications(start, 'da', 'plus', morning('2026-03-09'), 100);
    expect(items.map((i) => i.date)).toEqual([...items.map((i) => i.date)].sort());
    expect(items[0]!.date >= '2026-03-09').toBe(true);
    // Day 8 (2026-03-08) is over by the evening of the 9th, and the 9th's own 19:00 is still ahead.
    const evening = upcomingProgramNotifications(
      start,
      'da',
      'plus',
      new Date('2026-03-22T20:00:00'),
      100,
    );
    expect(evening.every((i) => i.date > '2026-03-22')).toBe(true);
  });

  it('only covers the free month on the free plan', () => {
    const free = upcomingProgramNotifications(start, 'da', 'free', morning('2026-03-01'), 100);
    expect(free).toHaveLength(5);
    expect(free.every((i) => i.date <= '2026-03-30')).toBe(true);
  });

  it('keeps to the limit so the 64-notification cap is never reached', () => {
    expect(upcomingProgramNotifications(start, 'da', 'plus', morning('2026-03-01'))).toHaveLength(
      16,
    );
  });

  it('uses the language of the profile for the titles', () => {
    const en = upcomingProgramNotifications(start, 'en', 'free', morning('2026-03-01'), 1);
    expect(en[0]!.title).toBe(getWeeklyRead(getContent('en'), 1, 1)!.title);
  });
});
