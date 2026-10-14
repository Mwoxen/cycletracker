/**
 * Connects the sync engine to the store: one round of sync, one at a time. Used by the hook that
 * triggers it and by the "Synkroniser nu" button.
 */
import { createSyncSnapshot, type Snapshot } from '@/store/snapshot';
import { selectSnapshotData, useStore } from '@/store/store';

import { runCloudSync, type SyncOutcome } from './engine';
import type { CloudTransport } from './transport';

let inFlight: Promise<SyncOutcome> | undefined;
let followUp: Promise<SyncOutcome> | undefined;
/** What this phone wrote last, apart from the time stamp, so unchanged data is not written again. */
let publishedKey: string | undefined;

/** The snapshot without its time stamp: the same data gives the same key. */
export function snapshotKey(snapshot: Snapshot): string {
  return JSON.stringify({ ...snapshot, exportedAt: 0 });
}

/** Only for tests. */
export function forgetPublished() {
  publishedKey = undefined;
}

/**
 * One round at a time. A request that arrives while a round is running may be about something the
 * running round did not see (a connection made a moment ago, a change just saved), so it gets one
 * more round right after, shared by everyone who asks in the meantime.
 */
export function syncWithPartner(transport: CloudTransport): Promise<SyncOutcome> {
  if (!inFlight) {
    inFlight = run(transport).finally(() => {
      inFlight = undefined;
    });
    return inFlight;
  }
  followUp ??= inFlight.then(
    () => {
      followUp = undefined;
      return syncWithPartner(transport);
    },
    () => {
      followUp = undefined;
      return syncWithPartner(transport);
    },
  );
  return followUp;
}

async function run(transport: CloudTransport): Promise<SyncOutcome> {
  const store = useStore.getState();
  if (!store.hydrated || !store.profile) return { ok: false, reason: 'not-connected' };

  let role;
  try {
    role = (await transport.state()).role;
  } catch (e) {
    return finish({ ok: false, reason: 'error', message: e instanceof Error ? e.message : '' });
  }
  if (!role) return finish({ ok: false, reason: 'not-connected' });

  const outcome = await runCloudSync({
    transport,
    role,
    buildOutgoing: () => {
      const s = useStore.getState();
      return createSyncSnapshot(selectSnapshotData(s), s.deviceId);
    },
    applyIncoming: (snapshot) =>
      // Partner data only: never the other person's profile or lesson progress.
      useStore.getState().applySnapshot(snapshot, { includeProfile: false, includeProgress: false }),
    alreadyPublished: (snapshot) => snapshotKey(snapshot) === publishedKey,
    published: (snapshot) => {
      publishedKey = snapshotKey(snapshot);
    },
    applyCycleSettings: (incoming) => {
      const { settings, updateSettings } = useStore.getState();
      if (
        settings.defaultCycleLength !== incoming.defaultCycleLength ||
        settings.defaultPeriodLength !== incoming.defaultPeriodLength ||
        settings.lutealLength !== incoming.lutealLength
      ) {
        updateSettings(incoming);
      }
    },
  });
  return finish(outcome);
}

function finish(outcome: SyncOutcome): SyncOutcome {
  const { setCloudSync } = useStore.getState();
  if (outcome.ok) setCloudSync({ lastSyncAt: Date.now(), lastError: undefined, lastDetail: undefined });
  else if (outcome.reason !== 'not-connected') {
    setCloudSync({ lastError: outcome.reason, lastDetail: outcome.message });
  }
  return outcome;
}
