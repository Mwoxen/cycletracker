/**
 * Manual backup: export the snapshot as a JSON file through the iOS share sheet,
 * and import one picked from Files.
 */
import * as Sharing from 'expo-sharing';
import { File, Paths } from 'expo-file-system';

import type { ISODate } from '@/domain/types';
import {
  createSnapshot,
  parseSnapshot,
  serializeSnapshot,
  type Snapshot,
  type SnapshotData,
} from '@/store/snapshot';

export const BACKUP_MIME = 'application/json';

export function backupFileName(date: ISODate): string {
  return `cycletracker-backup-${date}.json`;
}

export async function exportSnapshotFile(
  data: SnapshotData,
  deviceId: string,
  date: ISODate,
): Promise<void> {
  const file = new File(Paths.cache, backupFileName(date));
  if (file.exists) file.delete();
  file.write(serializeSnapshot(createSnapshot(data, deviceId)));
  if (!(await Sharing.isAvailableAsync())) return;
  await Sharing.shareAsync(file.uri, { mimeType: BACKUP_MIME, UTI: 'public.json' });
}

/** Returns undefined when the user cancels; throws SnapshotParseError on a bad file. */
export async function pickSnapshotFile(): Promise<Snapshot | undefined> {
  const result = await File.pickFileAsync({ mimeTypes: [BACKUP_MIME, 'text/plain'] });
  if (result.canceled) return undefined;
  const text = await result.result.text();
  return parseSnapshot(text);
}
