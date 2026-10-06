import { useSyncExternalStore } from 'react';

/** Where the Home cycle ring sits on screen, so the splash can hand over to it. */
export interface RingAnchor {
  x: number;
  y: number;
  size: number;
}

/**
 * True from app start until the splash copy (src/ui/curtain.tsx) has finished fading. While it is
 * true the first Home draws its ring and hero at once, without their entrance animations: the
 * splash is the entrance, and the ring has to be fully there when the splash ring fades into it.
 */
let handover = true;
export const isHandover = () => handover;
export function endHandover() {
  handover = false;
}

/** The Home ring registers a function that measures itself right now (window coordinates). */
let measurer: (() => Promise<RingAnchor | null>) | null = null;
export function registerRingMeasurer(fn: (() => Promise<RingAnchor | null>) | null) {
  measurer = fn;
}
/** A fresh measurement of the Home ring, or the last reported anchor when none can be taken. */
export async function measureRing(): Promise<RingAnchor | null> {
  if (!measurer) return anchor;
  const fresh = await measurer();
  if (fresh) setRingAnchor(fresh);
  return fresh ?? anchor;
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
