import { useEffect, useRef } from 'react';
import { AppState } from 'react-native';

import { isCloudBackupAvailable, writeCloudBackup } from '@/backup/cloud';
import { selectSnapshotData, useStore } from '@/store/store';

const DEBOUNCE_MS = 60_000;

/**
 * Writes a backup to iCloud after data changes (debounced) and when the app goes
 * to the background. Mounted once in the root layout.
 */
export function useCloudBackup() {
  const hydrated = useStore((s) => s.hydrated);
  const enabled = useStore((s) => s.settings.cloudBackup);
  const profile = useStore((s) => s.profile);
  const periods = useStore((s) => s.periods);
  const logs = useStore((s) => s.logs);
  const progress = useStore((s) => s.progress);
  const settings = useStore((s) => s.settings);
  const pairing = useStore((s) => s.pairing);
  const setBackupStatus = useStore((s) => s.setBackupStatus);
  const dirty = useRef(false);

  useEffect(() => {
    if (!hydrated) return;
    void isCloudBackupAvailable().then((available) => setBackupStatus({ available }));
  }, [hydrated, setBackupStatus]);

  const flush = async () => {
    const state = useStore.getState();
    if (!state.hydrated || !state.settings.cloudBackup || !state.profile) return;
    if (!state.backupStatus.available) return;
    try {
      await writeCloudBackup(selectSnapshotData(state), state.deviceId);
      dirty.current = false;
      setBackupStatus({ lastBackupAt: Date.now(), lastError: undefined });
    } catch (e) {
      setBackupStatus({ lastError: e instanceof Error ? e.message : String(e) });
    }
  };

  useEffect(() => {
    if (!hydrated || !enabled || !profile) return;
    dirty.current = true;
    const handle = setTimeout(() => void flush(), DEBOUNCE_MS);
    return () => clearTimeout(handle);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hydrated, enabled, profile, periods, logs, progress, settings, pairing]);

  useEffect(() => {
    const sub = AppState.addEventListener('change', (state) => {
      if (state !== 'active' && dirty.current) void flush();
    });
    return () => sub.remove();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
