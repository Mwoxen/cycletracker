/**
 * Entitlement layer. The app is free today, so every feature resolves to "available".
 * When a subscription is introduced, only `resolvePlan` and `hasAccess` change:
 * screens already ask through `useHasAccess` and never look at the plan directly.
 */
import type { Profile } from '@/domain/types';
import { useStore } from '@/store/store';

export type Feature = 'fullProgram' | 'cloudBackup' | 'sync' | 'personalOverview';

export type Plan = 'free' | 'plus';

export function resolvePlan(profile: Profile | undefined): Plan {
  void profile;
  return 'free';
}

export function hasAccess(feature: Feature, plan: Plan): boolean {
  void feature;
  void plan;
  // All gate points are open while the app is free.
  return true;
}

export function useHasAccess(feature: Feature): boolean {
  const profile = useStore((s) => s.profile);
  return hasAccess(feature, resolvePlan(profile));
}
