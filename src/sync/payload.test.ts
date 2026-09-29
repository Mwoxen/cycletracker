import { DEFAULT_SETTINGS, type DayLog, type PeriodEvent } from '@/domain/types';
import { addDaysISO } from '@/engine/dates';
import { createSnapshot, createSyncSnapshot, type SnapshotData } from '@/store/snapshot';

import { buildImportLink, decodePayload, encodePayload, extractPayload, fitsInQr } from './payload';

function yearOfData(): SnapshotData {
  const periods: Record<string, PeriodEvent> = {};
  const logs: Record<string, DayLog> = {};
  let start = '2026-01-03';
  for (let i = 0; i < 13; i++) {
    const id = `p-${i}`;
    periods[id] = { id, startDate: start, endDate: addDaysISO(start, 4), updatedAt: 1000 + i };
    start = addDaysISO(start, 28);
  }
  let day = '2026-01-01';
  for (let i = 0; i < 365; i++) {
    if (i % 2 === 0) {
      const id = `l-${i}`;
      logs[id] = {
        id,
        date: day,
        symptoms: i % 6 === 0 ? ['cramps', 'fatigue'] : [],
        mood: i % 3 === 0 ? 'good' : undefined,
        energy: i % 4 === 0 ? 'low' : undefined,
        note: i % 10 === 0 ? 'Rolig dag' : undefined,
        updatedAt: 5000 + i,
      };
    }
    day = addDaysISO(day, 1);
  }
  return {
    settings: DEFAULT_SETTINGS,
    periods,
    logs,
    progress: {},
    pairing: {},
    weekFocus: {},
    weekActionsDone: {},
  };
}

describe('payload', () => {
  it('round-trips a snapshot', () => {
    const snap = createSnapshot(yearOfData(), 'dev', 42);
    const decoded = decodePayload(encodePayload(snap));
    expect(decoded).toEqual(snap);
  });

  it('keeps a full year of sync data small', () => {
    const payload = encodePayload(createSyncSnapshot(yearOfData(), 'dev'));
    expect(payload.length).toBeLessThan(4000);
  });

  it('keeps a typical delta inside QR range', () => {
    const data = yearOfData();
    const payload = encodePayload(createSyncSnapshot(data, 'dev', 5300));
    expect(fitsInQr(payload)).toBe(true);
  });

  it('rejects garbage without throwing anything but SnapshotParseError', () => {
    expect(() => decodePayload('not a payload!!')).toThrow(/invalid/);
    expect(() => decodePayload('')).toThrow(/invalid/);
    expect(() => decodePayload('QUJD')).toThrow(/invalid/);
  });

  it('builds and extracts deep links', () => {
    const payload = encodePayload(createSyncSnapshot(yearOfData(), 'dev', 5300));
    const link = buildImportLink(payload);
    expect(link.startsWith('cycletracker://import?d=')).toBe(true);
    expect(extractPayload(link)).toBe(payload);
    expect(extractPayload(`Se her: ${link} :)`)).toBe(payload);
    expect(extractPayload(payload)).toBe(payload);
    expect(extractPayload('hello world')).toBeUndefined();
  });
});
