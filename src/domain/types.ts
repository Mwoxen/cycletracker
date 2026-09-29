/**
 * Core domain types shared by the engine, the store, the content layer and the UI.
 * All dates are ISO calendar dates in local time: "YYYY-MM-DD".
 */

export type ISODate = string;

export type Role = 'user' | 'tracker';

export type Language = 'da' | 'en';
export const LANGUAGES: Language[] = ['da', 'en'];

export type Phase = 'menstrual' | 'follicular' | 'ovulation' | 'luteal';

export const PHASES: Phase[] = ['menstrual', 'follicular', 'ovulation', 'luteal'];

export type Flow = 'spotting' | 'light' | 'medium' | 'heavy';

export type Symptom =
  | 'cramps'
  | 'headache'
  | 'backPain'
  | 'breastTenderness'
  | 'bloating'
  | 'fatigue'
  | 'nausea'
  | 'acne'
  | 'cravings'
  | 'insomnia'
  | 'lowLibido'
  | 'highLibido'
  | 'moodSwings'
  | 'anxiety'
  | 'irritability'
  | 'sadness';

export const SYMPTOMS: Symptom[] = [
  'cramps',
  'headache',
  'backPain',
  'breastTenderness',
  'bloating',
  'fatigue',
  'nausea',
  'acne',
  'cravings',
  'insomnia',
  'lowLibido',
  'highLibido',
  'moodSwings',
  'anxiety',
  'irritability',
  'sadness',
];

export type Mood = 'great' | 'good' | 'neutral' | 'low' | 'bad';
export const MOODS: Mood[] = ['great', 'good', 'neutral', 'low', 'bad'];

export type Energy = 'high' | 'normal' | 'low';
export const ENERGIES: Energy[] = ['high', 'normal', 'low'];

/** A record that can be merged between devices and backups. */
export interface Syncable {
  id: string;
  /** Milliseconds since epoch. Last-write-wins on merge. */
  updatedAt: number;
  deleted?: boolean;
}

export interface PeriodEvent extends Syncable {
  startDate: ISODate;
  endDate?: ISODate;
}

export interface DayLog extends Syncable {
  date: ISODate;
  flow?: Flow;
  symptoms: Symptom[];
  mood?: Mood;
  energy?: Energy;
  note?: string;
}

export interface LessonProgress {
  lessonId: string;
  readAt?: number;
  actionDoneAt?: number;
  quizScore?: number;
  quizTotal?: number;
}

export interface Reminders {
  dailyCard: boolean;
  /** Hour of day, 0-23. */
  dailyCardHour: number;
  dailyCardMinute: number;
  periodSoon: boolean;
  pmsWindow: boolean;
}

export interface Settings {
  /** Used until at least two cycles are logged. */
  defaultCycleLength: number;
  defaultPeriodLength: number;
  lutealLength: number;
  reminders: Reminders;
  cloudBackup: boolean;
  /** Light/dark override; 'system' follows the phone. */
  appearance: Appearance;
}

export type Appearance = 'system' | 'light' | 'dark';
export const APPEARANCES: Appearance[] = ['system', 'light', 'dark'];

export interface Profile {
  id: string;
  role: Role;
  language: Language;
  /** The name the tracker uses for their partner, or the user's own name. */
  partnerName: string;
  /** Program day 1 is this date. */
  programStartDate: ISODate;
  plan: 'free';
  onboardedAt: number;
}

export interface PairingInfo {
  partnerDeviceId?: string;
  partnerName?: string;
  /** Last time a snapshot from the partner was imported. */
  lastSyncAt?: number;
  /** Last time this device shared a snapshot; the next share only includes newer changes. */
  lastSharedAt?: number;
}

export interface BackupStatus {
  available: boolean;
  lastBackupAt?: number;
  lastError?: string;
}

export const DEFAULT_SETTINGS: Settings = {
  defaultCycleLength: 28,
  defaultPeriodLength: 5,
  lutealLength: 14,
  reminders: {
    dailyCard: true,
    dailyCardHour: 8,
    dailyCardMinute: 30,
    periodSoon: true,
    pmsWindow: true,
  },
  cloudBackup: true,
  appearance: 'system',
};
