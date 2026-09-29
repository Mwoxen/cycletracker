/**
 * Snapshot: one versioned, serializable object holding everything worth keeping.
 * The same format is used for iCloud backup, manual export/import and partner sync.
 */
import type {
  DayLog,
  LessonProgress,
  PairingInfo,
  PeriodEvent,
  Profile,
  Settings,
  Syncable,
} from '@/domain/types';
import { DEFAULT_SETTINGS } from '@/domain/types';

export const SNAPSHOT_VERSION = 1;

export interface Snapshot {
  version: number;
  exportedAt: number;
  /** Device that produced the snapshot. */
  deviceId: string;
  profile?: Profile;
  settings?: Settings;
  periods: PeriodEvent[];
  logs: DayLog[];
  progress: LessonProgress[];
  pairing?: PairingInfo;
}

export interface SnapshotData {
  profile?: Profile;
  settings: Settings;
  periods: Record<string, PeriodEvent>;
  logs: Record<string, DayLog>;
  progress: Record<string, LessonProgress>;
  pairing: PairingInfo;
}

export interface MergeOptions {
  /** Also take profile, settings and pairing from the snapshot (backup restore). */
  includeProfile: boolean;
  /** Also merge lesson progress (backup restore, not partner sync). */
  includeProgress: boolean;
}

export function createSnapshot(data: SnapshotData, deviceId: string, now = Date.now()): Snapshot {
  return {
    version: SNAPSHOT_VERSION,
    exportedAt: now,
    deviceId,
    profile: data.profile,
    settings: data.settings,
    periods: Object.values(data.periods),
    logs: Object.values(data.logs),
    progress: Object.values(data.progress),
    pairing: data.pairing,
  };
}

/** Partner sync payload: cycle data only, nothing about the sender's own app state. */
export function createSyncSnapshot(
  data: SnapshotData,
  deviceId: string,
  since = 0,
  now = Date.now(),
): Snapshot {
  return {
    version: SNAPSHOT_VERSION,
    exportedAt: now,
    deviceId,
    periods: Object.values(data.periods).filter((p) => p.updatedAt > since),
    logs: Object.values(data.logs).filter((l) => l.updatedAt > since),
    progress: [],
  };
}

function mergeSyncable<T extends Syncable>(
  current: Record<string, T>,
  incoming: T[],
): { result: Record<string, T>; changed: number } {
  const result = { ...current };
  let changed = 0;
  for (const item of incoming) {
    const existing = result[item.id];
    if (!existing || item.updatedAt > existing.updatedAt) {
      result[item.id] = item;
      changed += 1;
    }
  }
  return { result, changed };
}

function mergeProgress(
  current: Record<string, LessonProgress>,
  incoming: LessonProgress[],
): Record<string, LessonProgress> {
  const result = { ...current };
  for (const item of incoming) {
    const existing = result[item.lessonId];
    if (!existing) {
      result[item.lessonId] = item;
      continue;
    }
    const best = (a?: number, b?: number) =>
      a === undefined ? b : b === undefined ? a : Math.min(a, b);
    const quizWins =
      (item.quizScore ?? -1) > (existing.quizScore ?? -1)
        ? { quizScore: item.quizScore, quizTotal: item.quizTotal }
        : { quizScore: existing.quizScore, quizTotal: existing.quizTotal };
    result[item.lessonId] = {
      lessonId: item.lessonId,
      readAt: best(existing.readAt, item.readAt),
      actionDoneAt: best(existing.actionDoneAt, item.actionDoneAt),
      ...quizWins,
    };
  }
  return result;
}

export interface MergeResult {
  data: SnapshotData;
  periodsChanged: number;
  logsChanged: number;
}

export function mergeSnapshot(
  current: SnapshotData,
  snapshot: Snapshot,
  options: MergeOptions,
): MergeResult {
  const periods = mergeSyncable(current.periods, snapshot.periods);
  const logs = mergeSyncable(current.logs, snapshot.logs);
  const progress = options.includeProgress
    ? mergeProgress(current.progress, snapshot.progress)
    : current.progress;
  const data: SnapshotData = {
    profile: options.includeProfile && snapshot.profile ? snapshot.profile : current.profile,
    settings:
      options.includeProfile && snapshot.settings
        ? { ...DEFAULT_SETTINGS, ...snapshot.settings }
        : current.settings,
    periods: periods.result,
    logs: logs.result,
    progress,
    pairing: options.includeProfile && snapshot.pairing ? snapshot.pairing : current.pairing,
  };
  return { data, periodsChanged: periods.changed, logsChanged: logs.changed };
}

export function serializeSnapshot(snapshot: Snapshot): string {
  return JSON.stringify(snapshot);
}

export class SnapshotParseError extends Error {}

export function parseSnapshot(text: string): Snapshot {
  let raw: unknown;
  try {
    raw = JSON.parse(text);
  } catch {
    throw new SnapshotParseError('invalid-json');
  }
  if (!raw || typeof raw !== 'object') throw new SnapshotParseError('not-an-object');
  const obj = raw as Record<string, unknown>;
  if (typeof obj.version !== 'number' || obj.version > SNAPSHOT_VERSION) {
    throw new SnapshotParseError('unsupported-version');
  }
  const arr = (v: unknown) => (Array.isArray(v) ? v : []);
  return {
    version: obj.version,
    exportedAt: typeof obj.exportedAt === 'number' ? obj.exportedAt : 0,
    deviceId: typeof obj.deviceId === 'string' ? obj.deviceId : 'unknown',
    profile: obj.profile as Profile | undefined,
    settings: obj.settings as Settings | undefined,
    periods: arr(obj.periods).filter(isSyncable) as PeriodEvent[],
    logs: arr(obj.logs).filter(isSyncable) as DayLog[],
    progress: arr(obj.progress).filter(
      (p) => p && typeof p === 'object' && typeof (p as LessonProgress).lessonId === 'string',
    ) as LessonProgress[],
    pairing: obj.pairing as PairingInfo | undefined,
  };
}

function isSyncable(v: unknown): v is Syncable {
  return (
    !!v &&
    typeof v === 'object' &&
    typeof (v as Syncable).id === 'string' &&
    typeof (v as Syncable).updatedAt === 'number'
  );
}

export interface MergePreview {
  newPeriods: number;
  updatedPeriods: number;
  newLogs: number;
  updatedLogs: number;
  /** Earliest and latest period start in the incoming snapshot. */
  periodRange?: { from: string; to: string };
}

/** What would change if the snapshot were merged; never writes. */
export function previewMerge(current: SnapshotData, snapshot: Snapshot): MergePreview {
  const count = <T extends Syncable>(existing: Record<string, T>, incoming: T[]) => {
    let added = 0;
    let updated = 0;
    for (const item of incoming) {
      const cur = existing[item.id];
      if (!cur) added += 1;
      else if (item.updatedAt > cur.updatedAt) updated += 1;
    }
    return { added, updated };
  };
  const p = count(current.periods, snapshot.periods);
  const l = count(current.logs, snapshot.logs);
  const starts = snapshot.periods
    .filter((x) => !x.deleted)
    .map((x) => x.startDate)
    .sort();
  return {
    newPeriods: p.added,
    updatedPeriods: p.updated,
    newLogs: l.added,
    updatedLogs: l.updated,
    periodRange: starts.length ? { from: starts[0], to: starts[starts.length - 1] } : undefined,
  };
}
