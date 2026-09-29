import * as Notifications from 'expo-notifications';

import { getContent } from '@/content';
import { DEFAULT_SETTINGS, type PeriodEvent, type Profile } from '@/domain/types';

import { syncNotifications } from './index';

const profile: Profile = {
  id: 'me',
  role: 'tracker',
  language: 'da',
  partnerName: 'Anna',
  programStartDate: '2026-05-01',
  plan: 'free',
  onboardedAt: 1,
};

const periods: PeriodEvent[] = [{ id: 'p', startDate: '2026-05-07', updatedAt: 1 }];
const scheduled = () =>
  (Notifications.scheduleNotificationAsync as jest.Mock).mock.calls.map(
    ([req]) => req as { identifier: string; content: { body: string }; trigger: { date: Date } },
  );

beforeEach(() => {
  jest.useFakeTimers();
  jest.setSystemTime(new Date('2026-05-10T12:00:00'));
  (Notifications.scheduleNotificationAsync as jest.Mock).mockClear();
});

afterEach(() => jest.useRealTimers());

describe('cycle week reminders', () => {
  it('schedules the remaining week starts of this cycle and week 1 of the next at 08:30', async () => {
    await syncNotifications(profile, DEFAULT_SETTINGS, periods);
    const weeks = scheduled().filter((n) => n.identifier.startsWith('cycle-week'));
    expect(weeks.map((n) => n.identifier)).toEqual([
      'cycle-week-2',
      'cycle-week-3',
      'cycle-week-4',
      'cycle-week-next-1',
    ]);
    expect(weeks.map((n) => n.trigger.date.toISOString().slice(0, 10))).toEqual([
      '2026-05-14',
      '2026-05-21',
      '2026-05-28',
      '2026-06-04',
    ]);
    expect(weeks[0].trigger.date.getHours()).toBe(8);
    expect(weeks[0].trigger.date.getMinutes()).toBe(30);
    expect(weeks[0].content.body).toBe(`Cyklusuge 2: ${getContent('da').cycleWeeks[1].title}`);
  });

  it('skips week starts already passed and uses the partner focus for the user role', async () => {
    jest.setSystemTime(new Date('2026-05-22T12:00:00')); // cycle day 16: weeks 2 and 3 are past
    await syncNotifications({ ...profile, role: 'user' }, DEFAULT_SETTINGS, periods);
    const weeks = scheduled().filter((n) => n.identifier.startsWith('cycle-week'));
    expect(weeks.map((n) => n.identifier)).toEqual(['cycle-week-4', 'cycle-week-next-1']);
    expect(weeks[1].content.body).toBe(
      `Cyklusuge 1: ${getContent('da').cycleWeeks[0].partnerFocus}`,
    );
  });

  it('schedules nothing for cycle weeks when the reminder is off', async () => {
    const settings = {
      ...DEFAULT_SETTINGS,
      reminders: { ...DEFAULT_SETTINGS.reminders, cycleWeek: false },
    };
    await syncNotifications(profile, settings, periods);
    expect(scheduled().some((n) => n.identifier.startsWith('cycle-week'))).toBe(false);
  });
});
