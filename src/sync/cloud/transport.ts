/**
 * The two phones talk through a small shared space in iCloud (CloudKit). This is the contract
 * the native module `CycleSync` fulfils, so the sync logic can be tested without a phone.
 *
 * Each side only ever writes its own record and only reads the other's, so two phones can never
 * overwrite each other. Merging is done here, in the app, with the same last-write-wins rules as
 * the manual share.
 */
import { requireOptionalNativeModule } from 'expo-modules-core';

export type CloudAccount = 'available' | 'noAccount' | 'restricted' | 'unknown';

/** Which side of the pairing this phone is: the one that made the share, or the one that joined. */
export type CloudRole = 'owner' | 'participant';

export interface CloudState {
  role?: CloudRole;
  /** People who have accepted the share, apart from the owner. */
  participants: number;
}

export interface CloudRecord {
  payload: string;
  /** Unix milliseconds, set by the phone that wrote it. */
  updatedAt: number;
}

export interface CloudTransport {
  accountStatus(): Promise<CloudAccount>;
  state(): Promise<CloudState>;
  /** Owner: creates the shared space and returns the link to send to the partner. */
  createShare(): Promise<string>;
  /** Participant: accepts the link from the owner. */
  joinShare(url: string): Promise<void>;
  write(name: string, payload: string): Promise<void>;
  read(name: string): Promise<CloudRecord | undefined>;
  /** Owner: removes the shared space. Participant: leaves it. */
  stop(): Promise<void>;
}

/** The record each side writes; it reads the other one. */
export const RECORD_NAMES = { owner: 'from-owner', participant: 'from-partner' } as const;

export function ownRecord(role: CloudRole): string {
  return RECORD_NAMES[role];
}

export function otherRecord(role: CloudRole): string {
  return RECORD_NAMES[role === 'owner' ? 'participant' : 'owner'];
}

interface NativeCycleSync {
  accountStatus(): Promise<string>;
  state(): Promise<{ role: string; participants: number }>;
  createShare(): Promise<string>;
  joinShare(url: string): Promise<void>;
  write(name: string, payload: string): Promise<void>;
  read(name: string): Promise<{ exists: boolean; payload?: string; updatedAt?: number }>;
  stop(): Promise<void>;
}

/** The real transport, or undefined in Expo Go, on the web and in tests, where there is no module. */
export function nativeTransport(): CloudTransport | undefined {
  const native = requireOptionalNativeModule<NativeCycleSync>('CycleSync');
  if (!native) return undefined;
  return {
    async accountStatus() {
      const s = await native.accountStatus();
      return s === 'available' || s === 'noAccount' || s === 'restricted' ? s : 'unknown';
    },
    async state() {
      const s = await native.state();
      const role = s.role === 'owner' || s.role === 'participant' ? s.role : undefined;
      return { role, participants: Math.max(0, Number(s.participants) || 0) };
    },
    createShare: () => native.createShare(),
    joinShare: (url) => native.joinShare(url),
    write: (name, payload) => native.write(name, payload),
    async read(name) {
      const r = await native.read(name);
      if (!r.exists || typeof r.payload !== 'string') return undefined;
      return { payload: r.payload, updatedAt: Number(r.updatedAt) || 0 };
    },
    stop: () => native.stop(),
  };
}
