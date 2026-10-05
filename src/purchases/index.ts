/**
 * Cycle Tracker Plus through RevenueCat on top of Apple's StoreKit. No server: RevenueCat keeps
 * receipts, renewals and restores, and the app only mirrors the "plus" entitlement into the
 * store (see `src/entitlements`). Everything here is best-effort and never throws into the UI.
 */
import Constants, { ExecutionEnvironment } from 'expo-constants';
import { Linking, Platform } from 'react-native';
import Purchases, {
  LOG_LEVEL,
  PACKAGE_TYPE,
  type CustomerInfo,
  type PurchasesPackage,
} from 'react-native-purchases';

import { FREE_ENTITLEMENT, type Entitlement } from '@/domain/types';
import { useStore } from '@/store/store';

/** The entitlement identifier configured in RevenueCat (see SETUP.md). */
export const PLUS_ENTITLEMENT = 'plus';

const apiKey: string | undefined = Constants.expoConfig?.extra?.revenueCatIosKey;

/** Purchases need a real build with the RevenueCat key; Expo Go and Jest never have them. */
export const purchasesAvailable =
  Platform.OS === 'ios' &&
  !!apiKey &&
  Constants.executionEnvironment !== ExecutionEnvironment.StoreClient;

let configured = false;

export function entitlementFromCustomerInfo(info: CustomerInfo): Entitlement {
  const plus = info.entitlements.active[PLUS_ENTITLEMENT];
  const appUserId = info.originalAppUserId;
  if (!plus) {
    return { ...FREE_ENTITLEMENT, appUserId, managementUrl: info.managementURL ?? undefined };
  }
  const granted = plus.store === 'PROMOTIONAL';
  return {
    plan: 'plus',
    source: granted ? 'granted' : 'store',
    expiresAt: plus.expirationDateMillis ?? undefined,
    willRenew: plus.willRenew,
    periodType: plus.periodType,
    productId: plus.productIdentifier,
    managementUrl: info.managementURL ?? undefined,
    appUserId,
  };
}

function apply(info: CustomerInfo) {
  useStore.getState().setEntitlement(entitlementFromCustomerInfo(info));
}

/** Configures the SDK once and keeps the cached entitlement in step with the store. */
export async function configurePurchases(): Promise<void> {
  if (configured || !purchasesAvailable || !apiKey) return;
  configured = true;
  try {
    await Purchases.setLogLevel(__DEV__ ? LOG_LEVEL.DEBUG : LOG_LEVEL.ERROR);
    Purchases.configure({ apiKey });
    Purchases.addCustomerInfoUpdateListener(apply);
    apply(await Purchases.getCustomerInfo());
  } catch {
    // Offline or store trouble: the cached entitlement from the last run stays in effect.
  }
}

export async function refreshEntitlement(): Promise<void> {
  if (!purchasesAvailable) return;
  try {
    apply(await Purchases.getCustomerInfo());
  } catch {
    // Keep the cached value.
  }
}

/** The packages of the current offering, annual first. */
export async function loadPackages(): Promise<PurchasesPackage[]> {
  if (!purchasesAvailable) return [];
  const offerings = await Purchases.getOfferings();
  const packages = offerings.current?.availablePackages ?? [];
  const order = (p: PurchasesPackage) =>
    p.packageType === PACKAGE_TYPE.ANNUAL ? 0 : p.packageType === PACKAGE_TYPE.MONTHLY ? 1 : 2;
  return [...packages].sort((a, b) => order(a) - order(b));
}

export type PurchaseOutcome = 'purchased' | 'cancelled' | 'failed';

export async function purchase(pkg: PurchasesPackage): Promise<PurchaseOutcome> {
  try {
    const result = await Purchases.purchasePackage(pkg);
    apply(result.customerInfo);
    return 'purchased';
  } catch (e) {
    const err = e as { userCancelled?: boolean; code?: string };
    if (err.userCancelled || err.code === Purchases.PURCHASES_ERROR_CODE.PURCHASE_CANCELLED_ERROR) {
      return 'cancelled';
    }
    return 'failed';
  }
}

/** Restores earlier purchases on this Apple ID; true when Plus came back. */
export async function restore(): Promise<boolean> {
  if (!purchasesAvailable) return false;
  const info = await Purchases.restorePurchases();
  apply(info);
  return !!info.entitlements.active[PLUS_ENTITLEMENT];
}

/** Opens Apple's sheet for App Store offer codes (free periods handed out by the developer). */
export async function redeemOfferCode(): Promise<void> {
  if (!purchasesAvailable) return;
  await Purchases.presentCodeRedemptionSheet();
}

/** Apple's subscription management page, where the subscription is changed or cancelled. */
export async function openManageSubscriptions(managementUrl?: string): Promise<void> {
  await Linking.openURL(managementUrl ?? 'https://apps.apple.com/account/subscriptions');
}
