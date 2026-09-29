import { useEffect } from 'react';

import { useStore } from '@/store/store';
import { buildWidgetState, writeWidgetState } from '@/widget/sync';

import { useCycle } from './use-cycle';

/** Keeps the home-screen widget in step with the app. Mounted once in the root layout. */
export function useWidgetSync() {
  const hydrated = useStore((s) => s.hydrated);
  const profile = useStore((s) => s.profile);
  const { today, settings, snapshot } = useCycle();

  useEffect(() => {
    if (!hydrated || !profile) return;
    const handle = setTimeout(
      () => writeWidgetState(buildWidgetState(profile, settings, snapshot, today)),
      500,
    );
    return () => clearTimeout(handle);
  }, [hydrated, profile, settings, snapshot, today]);
}
