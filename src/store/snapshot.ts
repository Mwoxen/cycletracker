/**
 * Snapshot: one versioned, serializable object holding everything worth keeping.
 * The same format is used for iCloud backup, manual export/import and partner sync.
 */
import {
  APPEARANCES,
  CYCLE_WEEKS,
  DEFAULT_SETTINGS,
  SYMPTOMS,
  WEEK_FOCUS_MAX_LENGTH,
  type Appearance,
  type CycleWeek,
  type DayLog,
  type ISODate,
  type LessonProgress,
  type PairingInfo,
  type PeriodEvent,
  type Profile,
  type Settings,
  type Symptom,
  type Syncable,
  PHASES,
  type PhaseActionsDone,
  type WeekActionsDone,
  type WeekFocus,
} from '@/domain/types';
import { CYCLE_WEEK_ACTIONS } from '@/content/types';
import { isValidISODate } from '@/engine/dates';

export const SNAPSHOT_VERSION = 1;

export interface Snapshot {
  version: number;
  exportedAt: number;
  /** Device that produced the snapshot. */
  deviceId: string;
  /** Display name of the person who shared a sync payload, when known. */
  senderName?: string;
  profile?: Profile;
  settings?: Settings;
  periods: PeriodEvent[];
  logs: DayLog[];
  progress: LessonProgress[];
  pairing?: PairingInfo;
  /** The couple's own focus per cycle week; shared with the partner like cycle data. */
  weekFocus: WeekFocus[];
  /** Ticked week actions; personal like lesson progress, so only restored from a backup. */
  weekActionsDone: WeekActionsDone;
  /** Ticked phase actions on Home; personal, so only restored from a backup. */
  phaseActionsDone: PhaseActionsDone;
}

export interface SnapshotData {
  profile?: Profile;
  settings: Settings;
  periods: Record<string, PeriodEvent>;
  logs: Record<string, DayLog>;
  progress: Record<string, LessonProgress>;
  pairing: PairingInfo;
  /** Keyed by `String(week)`. */
  weekFocus: Record<string, WeekFocus>;
  weekActionsDone: WeekActionsDone;
  phaseActionsDone: PhaseActionsDone;
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
    weekFocus: Object.values(data.weekFocus),
    weekActionsDone: data.weekActionsDone,
    phaseActionsDone: data.phaseActionsDone,
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
    // A user's partnerName is their own name; a tracker's is the user's, so only the user signs.
    senderName: data.profile?.role === 'user' ? data.profile.partnerName : undefined,
    periods: Object.values(data.periods).filter((p) => p.updatedAt > since),
    logs: Object.values(data.logs).filter((l) => l.updatedAt > since),
    progress: [],
    weekFocus: Object.values(data.weekFocus).filter((f) => f.updatedAt > since),
    weekActionsDone: {},
    phaseActionsDone: {},
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

/** Newer focus text wins per week, like any other syncable record. */
function mergeWeekFocus(
  current: Record<string, WeekFocus>,
  incoming: WeekFocus[],
): Record<string, WeekFocus> {
  const result = { ...current };
  for (const item of incoming) {
    const key = String(item.week);
    const existing = result[key];
    if (!existing || item.updatedAt > existing.updatedAt) result[key] = item;
  }
  return result;
}

/** Union of ticked actions per cycle and key (week or phase); a tick on either device stays. */
function mergeActionsDone<T extends Record<string, Record<string, number[]>>>(
  current: T,
  incoming: T,
): T {
  const result: Record<string, Record<string, number[]>> = { ...current };
  for (const [cycleStart, byKey] of Object.entries(incoming)) {
    const merged = { ...result[cycleStart] };
    for (const [key, indexes] of Object.entries(byKey)) {
      merged[key] = [...new Set([...(merged[key] ?? []), ...indexes])].sort((a, b) => a - b);
    }
    result[cycleStart] = merged;
  }
  return result as T;
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
    weekFocus: mergeWeekFocus(current.weekFocus, snapshot.weekFocus),
    weekActionsDone: options.includeProgress
      ? mergeActionsDone(current.weekActionsDone, snapshot.weekActionsDone)
      : current.weekActionsDone,
    phaseActionsDone: options.includeProgress
      ? mergeActionsDone(current.phaseActionsDone, snapshot.phaseActionsDone ?? {})
      : current.phaseActionsDone,
  };
  return { data, periodsChanged: periods.changed, logsChanged: logs.changed };
}

export function serializeSnapshot(snapshot: Snapshot): string {
  return JSON.stringify(snapshot);
}

export class SnapshotParseError extends Error {
  override name = 'SnapshotParseError';
}

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
    exportedAt:
      typeof obj.exportedAt === 'number' && Number.isFinite(obj.exportedAt) ? obj.exportedAt : 0,
    deviceId: typeof obj.deviceId === 'string' ? obj.deviceId : 'unknown',
    senderName: typeof obj.senderName === 'string' ? obj.senderName.slice(0, 60) : undefined,
    profile: sanitizeProfile(obj.profile),
    settings: sanitizeSettings(obj.settings),
    periods: arr(obj.periods).filter(isPeriod),
    logs: arr(obj.logs)
      .filter(isSyncable)
      .flatMap((l) => sanitizeLog(l)),
    progress: arr(obj.progress).filter(
      (p) => p && typeof p === 'object' && typeof (p as LessonProgress).lessonId === 'string',
    ) as LessonProgress[],
    pairing: sanitizePairing(obj.pairing),
    weekFocus: arr(obj.weekFocus).flatMap((f) => sanitizeWeekFocus(f)),
    weekActionsDone: sanitizeActionsDone(
      obj.weekActionsDone,
      (k) => isCycleWeek(Number(k)),
      CYCLE_WEEK_ACTIONS,
    ),
    phaseActionsDone: sanitizeActionsDone(
      obj.phaseActionsDone,
      (k) => (PHASES as string[]).includes(k),
      PHASE_ACTIONS_MAX,
    ),
  };
}

/*
 * Imported data comes from another phone, a file or iCloud, possibly written by a newer or
 * corrupted version. Anything a screen dereferences is checked here so a bad payload is
 * skipped or clamped rather than crashing the app.
 */

const isDate = (v: unknown): v is ISODate => typeof v === 'string' && isValidISODate(v);

function isPeriod(v: unknown): v is PeriodEvent {
  if (!isSyncable(v)) return false;
  const p = v as Partial<PeriodEvent>;
  return isDate(p.startDate) && (p.endDate === undefined || isDate(p.endDate));
}

function sanitizeLog(v: Syncable): DayLog[] {
  const l = v as Partial<DayLog> & Syncable;
  if (!isDate(l.date)) return [];
  const symptoms = (Array.isArray(l.symptoms) ? l.symptoms : []).filter((x): x is Symptom =>
    (SYMPTOMS as string[]).includes(x as string),
  );
  return [{ ...l, date: l.date, symptoms } as DayLog];
}

const isCycleWeek = (v: unknown): v is CycleWeek => (CYCLE_WEEKS as unknown[]).includes(v);

function sanitizeWeekFocus(v: unknown): WeekFocus[] {
  if (!v || typeof v !== 'object') return [];
  const f = v as Partial<WeekFocus>;
  if (!isCycleWeek(f.week) || typeof f.text !== 'string') return [];
  if (typeof f.updatedAt !== 'number' || !Number.isFinite(f.updatedAt)) return [];
  return [{ week: f.week, text: f.text.slice(0, WEEK_FOCUS_MAX_LENGTH), updatedAt: f.updatedAt }];
}

/** Upper bound on "what you can do" items per phase that a tick index may point at. */
const PHASE_ACTIONS_MAX = 12;

/** Keeps only valid cycle start dates, accepted keys and integer action indexes below `max`. */
function sanitizeActionsDone(
  v: unknown,
  isKey: (key: string) => boolean,
  max: number,
): Record<ISODate, Record<string, number[]>> {
  const out: Record<ISODate, Record<string, number[]>> = {};
  if (!v || typeof v !== 'object') return out;
  for (const [cycleStart, byKey] of Object.entries(v as Record<string, unknown>)) {
    if (!isDate(cycleStart) || !byKey || typeof byKey !== 'object') continue;
    const cleaned: Record<string, number[]> = {};
    for (const [key, indexes] of Object.entries(byKey as Record<string, unknown>)) {
      if (!isKey(key) || !Array.isArray(indexes)) continue;
      const valid = indexes.filter(
        (i): i is number => typeof i === 'number' && Number.isInteger(i) && i >= 0 && i < max,
      );
      cleaned[key] = [...new Set(valid)].sort((a, b) => a - b);
    }
    out[cycleStart] = cleaned;
  }
  return out;
}

function sanitizeProfile(v: unknown): Profile | undefined {
  if (!v || typeof v !== 'object') return undefined;
  const p = v as Partial<Profile>;
  if (p.role !== 'tracker' && p.role !== 'user') return undefined;
  if (p.language !== 'da' && p.language !== 'en') return undefined;
  if (!isDate(p.programStartDate)) return undefined;
  return {
    id: typeof p.id === 'string' ? p.id : 'imported',
    role: p.role,
    language: p.language,
    partnerName: typeof p.partnerName === 'string' ? p.partnerName.slice(0, 60) : '',
    programStartDate: p.programStartDate,
    plan: 'free',
    onboardedAt: typeof p.onboardedAt === 'number' ? p.onboardedAt : 0,
  };
}

const int = (v: unknown, fallback: number, min: number, max: number): number =>
  typeof v === 'number' && Number.isFinite(v)
    ? Math.min(max, Math.max(min, Math.round(v)))
    : fallback;

function sanitizeSettings(v: unknown): Settings | undefined {
  if (!v || typeof v !== 'object') return undefined;
  const s = v as Partial<Settings>;
  const r = (s.reminders && typeof s.reminders === 'object' ? s.reminders : {}) as Partial<
    Settings['reminders']
  >;
  const d = DEFAULT_SETTINGS;
  return {
    defaultCycleLength: int(s.defaultCycleLength, d.defaultCycleLength, 21, 45),
    defaultPeriodLength: int(s.defaultPeriodLength, d.defaultPeriodLength, 2, 10),
    lutealLength: int(s.lutealLength, d.lutealLength, 10, 16),
    cloudBackup: typeof s.cloudBackup === 'boolean' ? s.cloudBackup : d.cloudBackup,
    appearance: (APPEARANCES as string[]).includes(s.appearance as string)
      ? (s.appearance as Appearance)
      : d.appearance,
    reminders: {
      dailyCard: typeof r.dailyCard === 'boolean' ? r.dailyCard : d.reminders.dailyCard,
      dailyCardHour: int(r.dailyCardHour, d.reminders.dailyCardHour, 0, 23),
      dailyCardMinute: int(r.dailyCardMinute, d.reminders.dailyCardMinute, 0, 59),
      periodSoon: typeof r.periodSoon === 'boolean' ? r.periodSoon : d.reminders.periodSoon,
      pmsWindow: typeof r.pmsWindow === 'boolean' ? r.pmsWindow : d.reminders.pmsWindow,
      cycleWeek: typeof r.cycleWeek === 'boolean' ? r.cycleWeek : d.reminders.cycleWeek,
      weeklyRead: typeof r.weeklyRead === 'boolean' ? r.weeklyRead : d.reminders.weeklyRead,
      monthWrap: typeof r.monthWrap === 'boolean' ? r.monthWrap : d.reminders.monthWrap,
    },
  };
}

function sanitizePairing(v: unknown): PairingInfo | undefined {
  if (!v || typeof v !== 'object') return undefined;
  const p = v as Partial<PairingInfo>;
  const str = (x: unknown) => (typeof x === 'string' ? x : undefined);
  const num = (x: unknown) => (typeof x === 'number' && Number.isFinite(x) ? x : undefined);
  return {
    partnerDeviceId: str(p.partnerDeviceId),
    partnerName: str(p.partnerName),
    lastSyncAt: num(p.lastSyncAt),
    lastSharedAt: num(p.lastSharedAt),
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
