import * as Notifications from 'expo-notifications';

import { getContent } from '@/content';
import { getWeeklyRead, getWrap } from '@/content/program';
import { DEFAULT_SETTINGS, type PeriodEvent, type Profile } from '@/domain/types';

import { syncNotifications } from './index';

const schedule = Notifications.scheduleNotificationAsync as jest.Mock;
const cancelAll = Notifications.cancelAllScheduledNotificationsAsync as jest.Mock;

const profile = (role: Profile['role'], programStartDate: string): Profile =>
  ({ role, language: 'da', partnerName: 'Anna', programStartDate }) as Profile;

const period = (startDate: string): PeriodEvent => ({
  id: `p-${startDate}`,
  startDate,
  updatedAt: 1,
});

const scheduled = () =>
  schedule.mock.calls.map(([req]: [{ identifier: string; trigger: Record<string, unknown> }]) => ({
    id: req.identifier,
    trigger: req.trigger,
  }));

const local = (iso: string, hour: number, minute = 0) => {
  const d = new Date(`${iso}T00:00:00`);
  d.setHours(hour, minute, 0, 0);
  return d;
};

describe('syncNotifications', () => {
  beforeEach(() => {
    jest.useFakeTimers({ now: new Date('2026-10-20T06:25:00') });
    schedule.mockClear();
    cancelAll.mockClear();
  });
  afterEach(() => jest.useRealTimers());

  it('schedules the daily card, the next articles, the wrap and the cycle reminders for the partner', async () => {
    // Programme day 22 (week 4 of month 1 starts today); period on 1 Oct, 25-day cycle.
    await syncNotifications(
      profile('tracker', '2026-09-29'),
      { ...DEFAULT_SETTINGS, defaultCycleLength: 25 },
      [period('2026-10-01')],
      'free',
    );
    expect(cancelAll).toHaveBeenCalledTimes(1);
    const content = getContent('da');
    const byId = new Map(scheduled().map((s) => [s.id, s.trigger]));

    expect(byId.get('daily-card')).toEqual({ type: 'daily', hour: 8, minute: 30 });
    // Day 8 onwards is Plus, so neither the week 4 article (day 22) nor the wrap (day 30) is
    // announced on the free plan.
    expect(byId.has(`weekly:${getWeeklyRead(content, 1, 4)!.id}`)).toBe(false);
    expect(byId.has(`wrap:${getWrap(content, 1)!.id}`)).toBe(false);
    // Next period 26 Oct: the reminder is two days before, PMS five days before, both at 09:00.
    expect(byId.get('period-soon')).toEqual({ type: 'date', date: local('2026-10-24', 9) });
    expect(byId.get('pms-window')).toEqual({ type: 'date', date: local('2026-10-21', 9) });
    expect(scheduled()).toHaveLength(3);
  });

  it('keeps a cycle reminder for today while its time is still ahead', async () => {
    // PMS window starts 21 Oct; at 06:25 the 09:00 reminder is still due.
    jest.setSystemTime(new Date('2026-10-21T06:25:00'));
    await syncNotifications(
      profile('tracker', '2026-09-29'),
      { ...DEFAULT_SETTINGS, defaultCycleLength: 25 },
      [period('2026-10-01')],
      'free',
    );
    let byId = new Map(scheduled().map((s) => [s.id, s.trigger]));
    expect(byId.get('pms-window')).toEqual({ type: 'date', date: local('2026-10-21', 9) });

    // After 09:00 it has fired; rebuilding the schedule must not plan it again.
    schedule.mockClear();
    jest.setSystemTime(new Date('2026-10-21T10:00:00'));
    await syncNotifications(
      profile('tracker', '2026-09-29'),
      { ...DEFAULT_SETTINGS, defaultCycleLength: 25 },
      [period('2026-10-01')],
      'free',
    );
    byId = new Map(scheduled().map((s) => [s.id, s.trigger]));
    expect(byId.has('pms-window')).toBe(false);
    expect(byId.get('period-soon')).toEqual({ type: 'date', date: local('2026-10-24', 9) });
  });

  it('announces the articles and the wrap on Plus', async () => {
    await syncNotifications(
      profile('tracker', '2026-09-29'),
      DEFAULT_SETTINGS,
      [period('2026-10-01')],
      'plus',
    );
    const content = getContent('da');
    const byId = new Map(scheduled().map((s) => [s.id, s.trigger]));
    const ids = [...byId.keys()];
    // Week 4 unlocks today at 19:00, which is still ahead at 06:25.
    expect(byId.get(`weekly:${getWeeklyRead(content, 1, 4)!.id}`)).toEqual({
      type: 'date',
      date: local('2026-10-20', 19),
    });
    expect(byId.get(`wrap:${getWrap(content, 1)!.id}`)).toEqual({
      type: 'date',
      date: local('2026-10-28', 19),
    });
    expect(ids).toContain(`weekly:${getWeeklyRead(content, 2, 1)!.id}`);
  });

  it('does not announce articles to the cycle owner, and honours the switches', async () => {
    await syncNotifications(
      profile('user', '2026-09-29'),
      {
        ...DEFAULT_SETTINGS,
        reminders: { ...DEFAULT_SETTINGS.reminders, periodSoon: false, pmsWindow: false },
      },
      [period('2026-10-01')],
      'plus',
    );
    expect(scheduled().map((s) => s.id)).toEqual(['daily-card']);
  });

  it('schedules nothing without permission, and only cancels without a profile', async () => {
    (Notifications.getPermissionsAsync as jest.Mock).mockResolvedValueOnce({ granted: false });
    await syncNotifications(profile('tracker', '2026-09-29'), DEFAULT_SETTINGS, [], 'free');
    expect(scheduled()).toHaveLength(0);
    await syncNotifications(undefined, DEFAULT_SETTINGS, [], 'free');
    expect(cancelAll).toHaveBeenCalledTimes(2);
    expect(scheduled()).toHaveLength(0);
  });
});
