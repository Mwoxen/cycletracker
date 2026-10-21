/**
 * Entitlement layer: screens ask "do I have access to this?" and never look at the store or
 * the subscription directly. The plan comes from the cached entitlement in the store, which
 * `src/purchases` keeps in step with the App Store through RevenueCat.
 *
 * What is free: the first 7 days of the program, the phase pages, the calendar, logging, backup
 * and sharing between the two phones. Cycle Tracker Plus unlocks the rest of the year (day 8
 * onwards) and the personal overview. The user role (she) always has full access: she does not
 * pay to be understood.
 */
import type { Entitlement, Profile } from '@/domain/types';
import { useStore } from '@/store/store';

export type Feature = 'fullProgram' | 'cloudBackup' | 'sync' | 'personalOverview';

export type Plan = 'free' | 'plus';

/** Program days anyone can read; from the next day on the program needs Plus. */
export const FREE_DAYS = 7;

const PLUS_FEATURES: Feature[] = ['fullProgram', 'personalOverview'];

export function resolvePlan(
  profile: Profile | undefined,
  entitlement: Entitlement,
  previewFree = false,
): Plan {
  if (profile?.role === 'user') return 'plus';
  // A test switch for the partner side: look at the app as a free user without touching the
  // purchase. It can only take access away from the person holding the phone, never add any.
  if (previewFree) return 'free';
  return entitlement.plan;
}

export function hasAccess(feature: Feature, plan: Plan): boolean {
  if (plan === 'plus') return true;
  return !PLUS_FEATURES.includes(feature);
}

/** Whether a program day is readable on the plan (unlock-by-date still applies on top). */
export function hasDayAccess(programDay: number, plan: Plan): boolean {
  return plan === 'plus' || programDay <= FREE_DAYS;
}

export function usePlan(): Plan {
  const profile = useStore((s) => s.profile);
  const entitlement = useStore((s) => s.entitlement);
  const previewFree = useStore((s) => s.previewFree);
  return resolvePlan(profile, entitlement, previewFree);
}

export function useHasAccess(feature: Feature): boolean {
  return hasAccess(feature, usePlan());
}

export function useDayAccess(programDay: number): boolean {
  return hasDayAccess(programDay, usePlan());
}
