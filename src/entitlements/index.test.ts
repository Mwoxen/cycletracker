import { FREE_ENTITLEMENT, type Entitlement, type Profile } from '@/domain/types';

import { FREE_MONTHS, hasAccess, hasMonthAccess, resolvePlan } from './index';

const tracker: Profile = {
  id: 'p',
  role: 'tracker',
  language: 'da',
  partnerName: 'Anna',
  programStartDate: '2026-05-01',
  plan: 'free',
  onboardedAt: 1,
};

const plus: Entitlement = { plan: 'plus', source: 'store', expiresAt: 1, willRenew: true };

describe('entitlements', () => {
  it('keeps the partner on the free plan until the store says otherwise', () => {
    expect(resolvePlan(tracker, FREE_ENTITLEMENT)).toBe('free');
    expect(resolvePlan(tracker, plus)).toBe('plus');
    expect(resolvePlan(undefined, FREE_ENTITLEMENT)).toBe('free');
  });

  it('gives the user role everything: she does not pay to be understood', () => {
    expect(resolvePlan({ ...tracker, role: 'user' }, FREE_ENTITLEMENT)).toBe('plus');
  });

  it('leaves backup and sync free and puts the program and overview behind Plus', () => {
    expect(hasAccess('cloudBackup', 'free')).toBe(true);
    expect(hasAccess('sync', 'free')).toBe(true);
    expect(hasAccess('fullProgram', 'free')).toBe(false);
    expect(hasAccess('personalOverview', 'free')).toBe(false);
    expect(hasAccess('fullProgram', 'plus')).toBe(true);
  });

  it('opens the first month for everyone and the rest for Plus', () => {
    expect(FREE_MONTHS).toBe(1);
    expect(hasMonthAccess(1, 'free')).toBe(true);
    expect(hasMonthAccess(2, 'free')).toBe(false);
    expect(hasMonthAccess(12, 'plus')).toBe(true);
  });
});
