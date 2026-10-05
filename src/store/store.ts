import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

import {
  DEFAULT_SETTINGS,
  FREE_ENTITLEMENT,
  WEEK_FOCUS_MAX_LENGTH,
  type BackupStatus,
  type CycleWeek,
  type DayLog,
  type Entitlement,
  type ISODate,
  type Language,
  type LessonProgress,
  type PairingInfo,
  type PeriodEvent,
  type Phase,
  type Profile,
  type Role,
  type Settings,
} from '@/domain/types';
import { addDaysISO, compareISO } from '@/engine/dates';
import { newId } from '@/lib/id';

import { mergeSnapshot, type MergeOptions, type Snapshot, type SnapshotData } from './snapshot';

export const SCHEMA_VERSION = 1;

export interface OnboardingInput {
  role: Role;
  language: Language;
  partnerName: string;
  programStartDate: ISODate;
  lastPeriodStart?: ISODate;
  cycleLength?: number;
  periodLength?: number;
}

export interface AppState extends SnapshotData {
  schemaVersion: number;
  deviceId: string;
  hydrated: boolean;
  backupStatus: BackupStatus;
  /** Cached Plus status so the UI is right at launch; refreshed from the store on start. */
  entitlement: Entitlement;

  setHydrated: (value: boolean) => void;
  setBackupStatus: (patch: Partial<BackupStatus>) => void;
  setEntitlement: (entitlement: Entitlement) => void;
  completeOnboarding: (input: OnboardingInput) => void;
  updateProfile: (patch: Partial<Omit<Profile, 'id'>>) => void;
  updateSettings: (patch: Partial<Settings>) => void;
  updateReminders: (patch: Partial<Settings['reminders']>) => void;

  startPeriod: (date: ISODate) => string;
  endPeriod: (id: string, endDate: ISODate | undefined) => void;
  updatePeriod: (id: string, patch: Partial<Pick<PeriodEvent, 'startDate' | 'endDate'>>) => void;
  deletePeriod: (id: string) => void;

  upsertLog: (date: ISODate, patch: Partial<Omit<DayLog, 'id' | 'date' | 'updatedAt'>>) => void;
  deleteLog: (date: ISODate) => void;

  markRead: (lessonId: string) => void;
  toggleActionDone: (lessonId: string) => void;
  recordQuiz: (lessonId: string, score: number, total: number) => void;

  /** The couple's own focus for a cycle week; empty text clears it. */
  setWeekFocus: (week: CycleWeek, text: string) => void;
  toggleWeekAction: (cycleStart: ISODate, week: CycleWeek, index: number) => void;
  /** Ticks one of the phase's "what you can do" items on Home for the current cycle. */
  togglePhaseAction: (cycleStart: ISODate, phase: Phase, index: number) => void;

  applySnapshot: (snapshot: Snapshot, options: MergeOptions) => { periods: number; logs: number };
  setPairing: (patch: Partial<PairingInfo>) => void;
  resetAll: () => void;
}

const initialData = (): SnapshotData & { deviceId: string } => ({
  profile: undefined,
  settings: DEFAULT_SETTINGS,
  periods: {},
  logs: {},
  progress: {},
  pairing: {},
  weekFocus: {},
  weekActionsDone: {},
  phaseActionsDone: {},
  deviceId: newId(),
});

export const useStore = create<AppState>()(
  persist(
    (set, get) => ({
      schemaVersion: SCHEMA_VERSION,
      hydrated: false,
      backupStatus: { available: false },
      entitlement: FREE_ENTITLEMENT,
      ...initialData(),

      setHydrated: (value) => set({ hydrated: value }),
      setBackupStatus: (patch) => set({ backupStatus: { ...get().backupStatus, ...patch } }),
      setEntitlement: (entitlement) => set({ entitlement }),

      completeOnboarding: (input) => {
        const now = Date.now();
        const profile: Profile = {
          id: newId(),
          role: input.role,
          language: input.language,
          partnerName: input.partnerName.trim(),
          programStartDate: input.programStartDate,
          plan: 'free',
          onboardedAt: now,
        };
        const settings: Settings = {
          ...get().settings,
          defaultCycleLength: input.cycleLength ?? get().settings.defaultCycleLength,
          defaultPeriodLength: input.periodLength ?? get().settings.defaultPeriodLength,
        };
        const periods = { ...get().periods };
        if (input.lastPeriodStart) {
          const id = newId();
          periods[id] = { id, startDate: input.lastPeriodStart, updatedAt: now };
        }
        set({ profile, settings, periods });
      },

      updateProfile: (patch) => {
        const profile = get().profile;
        if (!profile) return;
        set({ profile: { ...profile, ...patch } });
      },

      updateSettings: (patch) => set({ settings: { ...get().settings, ...patch } }),
      updateReminders: (patch) =>
        set({
          settings: {
            ...get().settings,
            reminders: { ...get().settings.reminders, ...patch },
          },
        }),

      startPeriod: (date) => {
        const now = Date.now();
        const periods = { ...get().periods };
        // A period already starting on this date is revived instead of duplicated.
        const existing = Object.values(periods).find((p) => p.startDate === date);
        if (existing) {
          periods[existing.id] = { ...existing, deleted: false, updatedAt: now };
          set({ periods });
          return existing.id;
        }
        // A previous period whose logged end overlaps the new start is trimmed to the day before.
        for (const p of Object.values(periods)) {
          if (p.deleted || !p.endDate) continue;
          if (compareISO(p.startDate, date) < 0 && compareISO(p.endDate, date) >= 0) {
            periods[p.id] = { ...p, endDate: addDaysISO(date, -1), updatedAt: now };
          }
        }
        const id = newId();
        periods[id] = { id, startDate: date, updatedAt: now };
        set({ periods });
        return id;
      },

      endPeriod: (id, endDate) => {
        const p = get().periods[id];
        if (!p) return;
        if (endDate && compareISO(endDate, p.startDate) < 0) return;
        set({ periods: { ...get().periods, [id]: { ...p, endDate, updatedAt: Date.now() } } });
      },

      updatePeriod: (id, patch) => {
        const p = get().periods[id];
        if (!p) return;
        const next = { ...p, ...patch, updatedAt: Date.now() };
        if (next.endDate && compareISO(next.endDate, next.startDate) < 0) next.endDate = undefined;
        set({ periods: { ...get().periods, [id]: next } });
      },

      deletePeriod: (id) => {
        const p = get().periods[id];
        if (!p) return;
        set({
          periods: { ...get().periods, [id]: { ...p, deleted: true, updatedAt: Date.now() } },
        });
      },

      upsertLog: (date, patch) => {
        const now = Date.now();
        const logs = { ...get().logs };
        const existing = Object.values(logs).find((l) => l.date === date);
        if (existing) {
          // A cleared log starts over instead of bringing back its old entries.
          const base = existing.deleted
            ? { id: existing.id, date: existing.date, symptoms: [] as DayLog['symptoms'] }
            : existing;
          logs[existing.id] = { ...base, ...patch, deleted: false, updatedAt: now };
        } else {
          const id = newId();
          logs[id] = { id, date, symptoms: [], ...patch, updatedAt: now };
        }
        set({ logs });
      },

      deleteLog: (date) => {
        const logs = { ...get().logs };
        const existing = Object.values(logs).find((l) => l.date === date);
        if (!existing) return;
        logs[existing.id] = { ...existing, deleted: true, updatedAt: Date.now() };
        set({ logs });
      },

      markRead: (lessonId) => {
        const existing = get().progress[lessonId];
        if (existing?.readAt) return;
        set({
          progress: {
            ...get().progress,
            [lessonId]: { ...(existing ?? { lessonId }), readAt: Date.now() },
          },
        });
      },

      toggleActionDone: (lessonId) => {
        const existing: LessonProgress = get().progress[lessonId] ?? { lessonId };
        set({
          progress: {
            ...get().progress,
            [lessonId]: {
              ...existing,
              actionDoneAt: existing.actionDoneAt ? undefined : Date.now(),
            },
          },
        });
      },

      recordQuiz: (lessonId, score, total) => {
        const existing: LessonProgress = get().progress[lessonId] ?? { lessonId };
        const best = Math.max(existing.quizScore ?? -1, score);
        set({
          progress: {
            ...get().progress,
            [lessonId]: {
              ...existing,
              readAt: existing.readAt ?? Date.now(),
              quizScore: best,
              quizTotal: total,
            },
          },
        });
      },

      setWeekFocus: (week, text) => {
        const trimmed = text.trim().slice(0, WEEK_FOCUS_MAX_LENGTH);
        const key = String(week);
        if ((get().weekFocus[key]?.text ?? '') === trimmed) return;
        set({
          weekFocus: { ...get().weekFocus, [key]: { week, text: trimmed, updatedAt: Date.now() } },
        });
      },

      toggleWeekAction: (cycleStart, week, index) => {
        const all = get().weekActionsDone;
        const key = String(week);
        const done = all[cycleStart]?.[key] ?? [];
        const next = done.includes(index)
          ? done.filter((i) => i !== index)
          : [...done, index].sort((a, b) => a - b);
        set({
          weekActionsDone: { ...all, [cycleStart]: { ...all[cycleStart], [key]: next } },
        });
      },

      togglePhaseAction: (cycleStart, phase, index) => {
        const all = get().phaseActionsDone;
        const done = all[cycleStart]?.[phase] ?? [];
        const next = done.includes(index)
          ? done.filter((i) => i !== index)
          : [...done, index].sort((a, b) => a - b);
        set({
          phaseActionsDone: { ...all, [cycleStart]: { ...all[cycleStart], [phase]: next } },
        });
      },

      applySnapshot: (snapshot, options) => {
        const s = get();
        const current: SnapshotData = {
          profile: s.profile,
          settings: s.settings,
          periods: s.periods,
          logs: s.logs,
          progress: s.progress,
          pairing: s.pairing,
          weekFocus: s.weekFocus,
          weekActionsDone: s.weekActionsDone,
          phaseActionsDone: s.phaseActionsDone,
        };
        const result = mergeSnapshot(current, snapshot, options);
        set({ ...result.data });
        return { periods: result.periodsChanged, logs: result.logsChanged };
      },

      setPairing: (patch) => set({ pairing: { ...get().pairing, ...patch } }),

      resetAll: () => set({ ...initialData(), deviceId: get().deviceId }),
    }),
    {
      name: 'cycletracker-state',
      version: SCHEMA_VERSION,
      storage: createJSONStorage(() => AsyncStorage),
      partialize: (state) => ({
        schemaVersion: state.schemaVersion,
        deviceId: state.deviceId,
        profile: state.profile,
        settings: state.settings,
        periods: state.periods,
        logs: state.logs,
        progress: state.progress,
        pairing: state.pairing,
        weekFocus: state.weekFocus,
        weekActionsDone: state.weekActionsDone,
        phaseActionsDone: state.phaseActionsDone,
        entitlement: state.entitlement,
      }),
      migrate: (persisted, version) => {
        // Future schema migrations go here, keyed on `version`.
        void version;
        return persisted as AppState;
      },
      // Settings added in later versions get their defaults instead of being undefined.
      merge: (persisted, current) => {
        const p = (persisted ?? {}) as Partial<AppState>;
        return {
          ...current,
          ...p,
          weekFocus: p.weekFocus ?? {},
          weekActionsDone: p.weekActionsDone ?? {},
          phaseActionsDone: p.phaseActionsDone ?? {},
          entitlement: p.entitlement ?? FREE_ENTITLEMENT,
          settings: {
            ...DEFAULT_SETTINGS,
            ...p.settings,
            reminders: { ...DEFAULT_SETTINGS.reminders, ...p.settings?.reminders },
          },
        };
      },
      onRehydrateStorage: () => (state) => {
        state?.setHydrated(true);
      },
    },
  ),
);

/* Selectors */

/**
 * Selectors that build a new array or object must return the same reference for the same state,
 * or `useStore(selector)` re-renders forever ("Maximum update depth exceeded"): zustand compares
 * the selected value by identity on every render. The state object is replaced on every change,
 * so caching by state identity is both correct and cheap.
 */
function stable<T>(select: (s: AppState) => T): (s: AppState) => T {
  const cache = new WeakMap<AppState, T>();
  return (s) => {
    const hit = cache.get(s);
    if (hit !== undefined) return hit;
    const value = select(s);
    cache.set(s, value);
    return value;
  };
}

export const selectActivePeriods = stable((s): PeriodEvent[] =>
  Object.values(s.periods).filter((p) => !p.deleted),
);

export const selectActiveLogs = stable((s): DayLog[] =>
  Object.values(s.logs).filter((l) => !l.deleted),
);

// Returns an existing object (or undefined), so it is already reference-stable.
export const selectLogForDate =
  (date: ISODate) =>
  (s: AppState): DayLog | undefined =>
    Object.values(s.logs).find((l) => l.date === date && !l.deleted);

export const selectSnapshotData = stable((s): SnapshotData => ({
  profile: s.profile,
  settings: s.settings,
  periods: s.periods,
  logs: s.logs,
  progress: s.progress,
  pairing: s.pairing,
  weekFocus: s.weekFocus,
  weekActionsDone: s.weekActionsDone,
  phaseActionsDone: s.phaseActionsDone,
}));
