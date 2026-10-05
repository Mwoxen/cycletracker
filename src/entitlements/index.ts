/**
 * Entitlement layer: screens ask "do I have access to this?" and never look at the store or
 * the subscription directly. The plan comes from the cached entitlement in the store, which
 * `src/purchases` keeps in step with the App Store through RevenueCat.
 *
 * What is free: month 1 of the program, the phase pages, the calendar, logging, backup and
 * sharing between the two phones. Cycle Tracker Plus unlocks months 2-12 and the personal
 * overview. The user role (she) always has full access: she does not pay to be understood.
 */
import type { Entitlement, Profile } from '@/domain/types';
import { useStore } from '@/store/store';

export type Feature = 'fullProgram' | 'cloudBackup' | 'sync' | 'personalOverview';

export type Plan = 'free' | 'plus';

/** Program months anyone can read; later months need Plus. */
export const FREE_MONTHS = 1;

const PLUS_FEATURES: Feature[] = ['fullProgram', 'personalOverview'];

export function resolvePlan(profile: Profile | undefined, entitlement: Entitlement): Plan {
  if (profile?.role === 'user') return 'plus';
  return entitlement.plan;
}

export function hasAccess(feature: Feature, plan: Plan): boolean {
  if (plan === 'plus') return true;
  return !PLUS_FEATURES.includes(feature);
}

/** Whether a program month is readable on the plan (unlock-by-day still applies on top). */
export function hasMonthAccess(month: number, plan: Plan): boolean {
  return plan === 'plus' || month <= FREE_MONTHS;
}

export function usePlan(): Plan {
  const profile = useStore((s) => s.profile);
  const entitlement = useStore((s) => s.entitlement);
  return resolvePlan(profile, entitlement);
}

export function useHasAccess(feature: Feature): boolean {
  return hasAccess(feature, usePlan());
}

export function useMonthAccess(month: number): boolean {
  return hasMonthAccess(month, usePlan());
}
