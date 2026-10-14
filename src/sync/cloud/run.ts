/**
 * Connects the sync engine to the store: one round of sync, one at a time. Used by the hook that
 * triggers it and by the "Synkroniser nu" button.
 */
import { createSyncSnapshot } from '@/store/snapshot';
import { selectSnapshotData, useStore } from '@/store/store';

import { runCloudSync, type SyncOutcome } from './engine';
import type { CloudTransport } from './transport';

let inFlight: Promise<SyncOutcome> | undefined;

export function syncWithPartner(transport: CloudTransport): Promise<SyncOutcome> {
  // A second request while one is running joins it; the hook asks again after data changes.
  inFlight ??= run(transport).finally(() => {
    inFlight = undefined;
  });
  return inFlight;
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
  if (outcome.ok) setCloudSync({ lastSyncAt: Date.now(), lastError: undefined });
  else if (outcome.reason !== 'not-connected') setCloudSync({ lastError: outcome.reason });
  return outcome;
}
