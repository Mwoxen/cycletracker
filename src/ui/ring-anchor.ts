import { useSyncExternalStore } from 'react';

/** Where the Home cycle ring sits on screen, so the splash can hand over to it. */
export interface RingAnchor {
  x: number;
  y: number;
  size: number;
}

let anchor: RingAnchor | null = null;
const listeners = new Set<() => void>();

export function setRingAnchor(next: RingAnchor | null) {
  if (
    anchor === next ||
    (anchor && next && anchor.x === next.x && anchor.y === next.y && anchor.size === next.size)
  )
    return;
  anchor = next;
  listeners.forEach((l) => l());
}

export function useRingAnchor(): RingAnchor | null {
  return useSyncExternalStore(
    (l) => {
      listeners.add(l);
      return () => listeners.delete(l);
    },
    () => anchor,
    () => anchor,
  );
}
