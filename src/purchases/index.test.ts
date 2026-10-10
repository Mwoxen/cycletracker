import type { CustomerInfo } from 'react-native-purchases';

import { entitlementFromCustomerInfo } from './index';

function info(active: Record<string, unknown>): CustomerInfo {
  return {
    entitlements: { active },
    originalAppUserId: '$RCAnonymousID:abc',
    managementURL: 'https://apps.apple.com/account/subscriptions',
  } as unknown as CustomerInfo;
}

describe('entitlementFromCustomerInfo', () => {
  it('is free without an active plus entitlement, but keeps the account id', () => {
    const e = entitlementFromCustomerInfo(info({}));
    expect(e.plan).toBe('free');
    expect(e.source).toBe('none');
    expect(e.appUserId).toBe('$RCAnonymousID:abc');
  });

  it('mirrors an App Store subscription with its renewal details', () => {
    const e = entitlementFromCustomerInfo(
      info({
        plus: {
          store: 'APP_STORE',
          expirationDateMillis: 1_800_000_000_000,
          willRenew: true,
          periodType: 'TRIAL',
          productIdentifier: 'plus_yearly',
        },
      }),
    );
    expect(e).toMatchObject({
      plan: 'plus',
      source: 'store',
      expiresAt: 1_800_000_000_000,
      willRenew: true,
      periodType: 'trial',
      productId: 'plus_yearly',
    });
  });

  it('marks access granted by hand in RevenueCat as granted', () => {
    const e = entitlementFromCustomerInfo(
      info({ plus: { store: 'PROMOTIONAL', expirationDateMillis: null, willRenew: false } }),
    );
    expect(e.plan).toBe('plus');
    expect(e.source).toBe('granted');
    expect(e.expiresAt).toBeUndefined();
  });
});
