import { useEffect } from 'react';
import { AppState } from 'react-native';

import { syncWithPartner } from '@/sync/cloud/run';
import { nativeTransport } from '@/sync/cloud/transport';
import { useStore } from '@/store/store';

const DEBOUNCE_MS = 5_000;

/**
 * Keeps the two phones in step through iCloud: syncs at launch, when the app comes back to the
 * foreground and a few seconds after local changes. Does nothing until a pairing exists (the
 * native module reports no role) and in builds without the native module.
 */
export function useCloudSync() {
  const hydrated = useStore((s) => s.hydrated);
  const hasProfile = useStore((s) => !!s.profile);
  const periods = useStore((s) => s.periods);
  const logs = useStore((s) => s.logs);
  const weekFocus = useStore((s) => s.weekFocus);
  const cycleDefaults = useStore(
    (s) =>
      `${s.settings.defaultCycleLength}/${s.settings.defaultPeriodLength}/${s.settings.lutealLength}`,
  );
  const ready = hydrated && hasProfile;

  useEffect(() => {
    if (!ready) return;
    const transport = nativeTransport();
    if (!transport) return;
    void syncWithPartner(transport);
    const sub = AppState.addEventListener('change', (state) => {
      if (state === 'active') void syncWithPartner(transport);
    });
    return () => sub.remove();
  }, [ready]);

  useEffect(() => {
    if (!ready) return;
    const transport = nativeTransport();
    if (!transport) return;
    const handle = setTimeout(() => void syncWithPartner(transport), DEBOUNCE_MS);
    return () => clearTimeout(handle);
  }, [ready, periods, logs, weekFocus, cycleDefaults]);
}
