/**
 * One round of automatic sync: read what the other phone has published, merge it in, and publish
 * this phone's own data. Pure apart from the transport and the callbacks it is given, so it is
 * tested with an in-memory transport and two simulated phones.
 */
import { decodePayload, encodePayload } from '@/sync/payload';
import { SnapshotParseError, type CycleSettings, type Snapshot } from '@/store/snapshot';

import { otherRecord, ownRecord, type CloudRole, type CloudTransport } from './transport';

/** CloudKit keeps a record under about 1 MB; stay well below it. */
export const MAX_CLOUD_PAYLOAD = 800_000;

export interface SyncDeps {
  transport: CloudTransport;
  role: CloudRole;
  /** What this phone publishes: its cycle data as a full snapshot. */
  buildOutgoing: () => Snapshot;
  /** Merges the other phone's data in and reports how much changed. */
  applyIncoming: (snapshot: Snapshot) => { periods: number; logs: number };
  /** The cycle owner's numbers, applied on the partner's phone only. */
  applyCycleSettings?: (settings: CycleSettings) => void;
  /** Only for tests; defaults to {@link MAX_CLOUD_PAYLOAD}. */
  maxPayload?: number;
}

export type SyncOutcome =
  | { ok: true; received: boolean; changed: number; wrote: boolean }
  | { ok: false; reason: SyncFailure; message?: string };

export type SyncFailure =
  'unavailable' | 'not-connected' | 'unreadable' | 'too-large' | 'newer-app' | 'error';

export async function runCloudSync(deps: SyncDeps): Promise<SyncOutcome> {
  const { transport, role } = deps;
  try {
    if ((await transport.accountStatus()) !== 'available') {
      return { ok: false, reason: 'unavailable' };
    }

    // 1. What the other phone has published, if anything. Reading goes first, so a change made
    //    on both phones is merged before this phone publishes its own version.
    let received = false;
    let changed = 0;
    const incoming = await transport.read(otherRecord(role));
    if (incoming) {
      let snapshot: Snapshot | undefined;
      try {
        snapshot = decodePayload(incoming.payload);
      } catch (e) {
        if (e instanceof SnapshotParseError && e.message === 'unsupported-version') {
          return { ok: false, reason: 'newer-app' };
        }
        // A broken record is skipped; this phone still publishes its own data below.
        snapshot = undefined;
      }
      if (snapshot) {
        const result = deps.applyIncoming(snapshot);
        changed = result.periods + result.logs;
        received = true;
        if (role === 'participant' && snapshot.cycleSettings) {
          deps.applyCycleSettings?.(snapshot.cycleSettings);
        }
      }
    }

    // 2. This phone's own data, after the merge.
    const payload = encodePayload(deps.buildOutgoing());
    if (payload.length > (deps.maxPayload ?? MAX_CLOUD_PAYLOAD))
      return { ok: false, reason: 'too-large' };
    await transport.write(ownRecord(role), payload);
    return { ok: true, received, changed, wrote: true };
  } catch (e) {
    return { ok: false, reason: 'error', message: e instanceof Error ? e.message : String(e) };
  }
}
