import da from '@/i18n/da';
import en from '@/i18n/en';

import { pickHeadline } from './headline';

const phases = ['menstrual', 'follicular', 'ovulation', 'luteal'] as const;

describe('pickHeadline', () => {
  const pool = ['a', 'b', 'c', 'd', 'e'];

  it('gives a different line on each of two days in a row', () => {
    for (let day = 1; day < 28; day++) {
      expect(pickHeadline(pool, day, '2026-05-01')).not.toBe(
        pickHeadline(pool, day + 1, '2026-05-01'),
      );
    }
  });

  it('gives the same line twice on the same day, so it does not flicker', () => {
    expect(pickHeadline(pool, 9, '2026-05-01')).toBe(pickHeadline(pool, 9, '2026-05-01'));
  });

  it('starts somewhere else in the next cycle', () => {
    expect(pickHeadline(pool, 9, '2026-05-01')).not.toBe(pickHeadline(pool, 9, '2026-05-29'));
  });

  it('copes with an empty list', () => {
    expect(pickHeadline([], 3, '2026-05-01')).toBe('');
  });
});

describe('the headline lists', () => {
  it.each(phases)('has the same number of lines in Danish and English for %s', (phase) => {
    expect(en.home.needs[phase]).toHaveLength(da.home.needs[phase].length);
  });

  it.each(phases)('has lines for %s that are not repeated and not empty', (phase) => {
    for (const list of [da.home.needs[phase], en.home.needs[phase]]) {
      expect(new Set(list).size).toBe(list.length);
      expect(list.every((l) => l.trim().length > 20)).toBe(true);
    }
  });

  it.each(phases)('has a list length for %s that does not divide a 28-day cycle', (phase) => {
    // A length of 2, 4, 7, 14 or 28 would give the same lines on the same cycle day, cycle after cycle.
    expect([1, 2, 4, 7, 14, 28]).not.toContain(da.home.needs[phase].length);
  });

  it('keeps the original line first in every phase', () => {
    expect(da.home.needs.follicular[0]).toContain('Sig ja, før du når at sige');
  });
});
