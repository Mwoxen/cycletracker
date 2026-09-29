/**
 * Writes a small JSON state to the shared App Group so the home-screen widget can
 * render without the app running. Degrades silently where the native module is missing
 * (Expo Go, simulator without the extension).
 */
import { Platform } from 'react-native';

import type { Profile, Settings } from '@/domain/types';
import type { CycleSnapshot } from '@/engine/cycle';

export const APP_GROUP = 'group.com.mwoxen.cycletracker';
export const WIDGET_STATE_KEY = 'widgetState';
export const WIDGET_KIND = 'CycleWidget';

export interface WidgetState {
  name: string;
  isTracker: boolean;
  lang: string;
  date: string;
  cycleDay: number;
  cycleLength: number;
  periodLength: number;
  lutealLength: number;
  daysUntilPeriod: number;
  hasData: boolean;
}

type Targets = typeof import('@bacons/apple-targets');

let mod: Targets | null | undefined;
function load(): Targets | null {
  if (mod !== undefined) return mod;
  if (Platform.OS !== 'ios') {
    mod = null;
    return mod;
  }
  try {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    mod = require('@bacons/apple-targets') as Targets;
  } catch {
    mod = null;
  }
  return mod;
}

export function buildWidgetState(
  profile: Profile,
  settings: Settings,
  snapshot: CycleSnapshot,
  today: string,
): WidgetState {
  return {
    name: profile.partnerName,
    isTracker: profile.role === 'tracker',
    lang: profile.language,
    date: today,
    cycleDay: snapshot.today?.cycleDay ?? 0,
    cycleLength: snapshot.today?.cycleLength ?? settings.defaultCycleLength,
    periodLength: snapshot.stats.averagePeriodLength,
    lutealLength: settings.lutealLength,
    daysUntilPeriod: snapshot.prediction?.daysUntilNextPeriod ?? 0,
    hasData: snapshot.hasData,
  };
}

export function writeWidgetState(state: WidgetState): boolean {
  const targets = load();
  if (!targets) return false;
  try {
    const storage = new targets.ExtensionStorage(APP_GROUP);
    storage.set(WIDGET_STATE_KEY, JSON.stringify(state));
    targets.ExtensionStorage.reloadWidget(WIDGET_KIND);
    return true;
  } catch {
    return false;
  }
}
