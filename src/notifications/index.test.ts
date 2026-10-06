import { dailyId } from '@/content';
import type { Profile } from '@/domain/types';

import { routeForNotification } from './index';

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
