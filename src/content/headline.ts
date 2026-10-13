import { daysBetween } from '@/engine/dates';

/**
 * Picks today's headline for the partner from a phase's list. Consecutive cycle days give
 * consecutive lines, so no two days in a row read the same, and the starting point moves from
 * one cycle to the next, so the same cycle day does not always get the same line. The lists have
 * a length that does not divide a typical cycle length (28), or the shift would cancel out.
 */
export function pickHeadline(pool: string[], cycleDay: number, cycleStart: string): string {
  if (pool.length === 0) return '';
  const offset = daysBetween('2026-01-01', cycleStart);
  const index = (((cycleDay - 1 + offset) % pool.length) + pool.length) % pool.length;
  return pool[index]!;
}
