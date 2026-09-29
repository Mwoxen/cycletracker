/**
 * Compact, URL-safe encoding of a Snapshot for QR codes and share links.
 * JSON -> deflate -> base64url. Decoding validates through parseSnapshot.
 */
import { deflateSync, inflateSync, strFromU8, strToU8 } from 'fflate';

import {
  parseSnapshot,
  serializeSnapshot,
  SnapshotParseError,
  type Snapshot,
} from '@/store/snapshot';

export const DEEP_LINK_SCHEME = 'cycletracker';
export const IMPORT_PATH = 'import';
/** QR codes above this length become hard to scan on a phone screen. */
export const MAX_QR_LENGTH = 2200;

const B64 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_';

function toBase64Url(bytes: Uint8Array): string {
  let out = '';
  for (let i = 0; i < bytes.length; i += 3) {
    const a = bytes[i];
    const b = i + 1 < bytes.length ? bytes[i + 1] : undefined;
    const c = i + 2 < bytes.length ? bytes[i + 2] : undefined;
    out += B64[a >> 2];
    out += B64[((a & 3) << 4) | ((b ?? 0) >> 4)];
    if (b !== undefined) out += B64[((b & 15) << 2) | ((c ?? 0) >> 6)];
    if (c !== undefined) out += B64[c & 63];
  }
  return out;
}

function fromBase64Url(text: string): Uint8Array {
  const clean = text.replace(/[^A-Za-z0-9\-_]/g, '');
  const out: number[] = [];
  let buffer = 0;
  let bits = 0;
  for (const ch of clean) {
    const v = B64.indexOf(ch);
    if (v < 0) throw new SnapshotParseError('invalid-base64');
    buffer = (buffer << 6) | v;
    bits += 6;
    if (bits >= 8) {
      bits -= 8;
      out.push((buffer >> bits) & 0xff);
    }
  }
  return Uint8Array.from(out);
}

export function encodePayload(snapshot: Snapshot): string {
  const bytes = deflateSync(strToU8(serializeSnapshot(snapshot)), { level: 9 });
  return toBase64Url(bytes);
}

export function decodePayload(payload: string): Snapshot {
  let json: string;
  try {
    json = strFromU8(inflateSync(fromBase64Url(payload.trim())));
  } catch (e) {
    if (e instanceof SnapshotParseError) throw e;
    throw new SnapshotParseError('invalid-payload');
  }
  return parseSnapshot(json);
}

export function buildImportLink(payload: string): string {
  return `${DEEP_LINK_SCHEME}://${IMPORT_PATH}?d=${payload}`;
}

/** Accepts a full deep link, a bare payload, or text with the link somewhere inside. */
export function extractPayload(text: string): string | undefined {
  const trimmed = text.trim();
  const match = trimmed.match(/[?&]d=([A-Za-z0-9\-_]+)/);
  if (match) return match[1];
  if (/^[A-Za-z0-9\-_]{8,}$/.test(trimmed)) return trimmed;
  return undefined;
}

export function fitsInQr(payload: string): boolean {
  return payload.length <= MAX_QR_LENGTH;
}
