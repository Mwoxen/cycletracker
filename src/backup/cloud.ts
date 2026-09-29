/**
 * Automatic backup to the app's own iCloud container. Nothing here is required
 * for the app to work: every function degrades to "unavailable" in Expo Go,
 * on devices without iCloud, or if the native module is missing.
 */
import { Platform } from 'react-native';

import {
  createSnapshot,
  parseSnapshot,
  SnapshotParseError,
  serializeSnapshot,
  type Snapshot,
  type SnapshotData,
} from '@/store/snapshot';

export const BACKUP_PATH = '/backup-v1.json';

type CloudModule = typeof import('react-native-cloud-storage');

let cloud: CloudModule | null | undefined;

function loadCloud(): CloudModule | null {
  if (cloud !== undefined) return cloud;
  if (Platform.OS !== 'ios') {
    cloud = null;
    return cloud;
  }
  try {
    // The native module only exists in real builds; requiring it in Expo Go throws.
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    cloud = require('react-native-cloud-storage') as CloudModule;
  } catch {
    cloud = null;
  }
  return cloud;
}

export async function isCloudBackupAvailable(): Promise<boolean> {
  const mod = loadCloud();
  if (!mod) return false;
  try {
    return await mod.CloudStorage.isCloudAvailable();
  } catch {
    return false;
  }
}

export async function writeCloudBackup(data: SnapshotData, deviceId: string): Promise<void> {
  const mod = loadCloud();
  if (!mod) throw new Error('unavailable');
  const text = serializeSnapshot(createSnapshot(data, deviceId));
  await mod.CloudStorage.writeFile(BACKUP_PATH, text, mod.CloudStorageScope.Documents);
}

/** Undefined when there is no backup or iCloud is unavailable; throws only on a corrupt file. */
export async function readCloudBackup(): Promise<Snapshot | undefined> {
  const mod = loadCloud();
  if (!mod) return undefined;
  try {
    if (!(await mod.CloudStorage.isCloudAvailable())) return undefined;
    if (!(await mod.CloudStorage.exists(BACKUP_PATH, mod.CloudStorageScope.Documents)))
      return undefined;
    const text = await mod.CloudStorage.readFile(BACKUP_PATH, mod.CloudStorageScope.Documents);
    return parseSnapshot(text);
  } catch (e) {
    if (e instanceof SnapshotParseError) throw e;
    return undefined;
  }
}
