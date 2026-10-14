import { useStore } from '@/store/store';

import { errorDetail } from './detail';
import { syncWithPartner } from './run';
import type { CloudTransport } from './transport';

/**
 * The cycle owner's iCloud share address, made on first use and reused after that, so the
 * partner's QR code can carry it. Undefined when iCloud is not available; the QR code then simply
 * works as before, without connecting the automatic sharing.
 */
export async function ensureCloudShareUrl(transport: CloudTransport): Promise<string | undefined> {
  try {
    if ((await transport.accountStatus()) !== 'available') return undefined;
    const url = await transport.createShare();
    // Publish her data right away, so the partner finds it the moment they connect.
    void syncWithPartner(transport);
    return url;
  } catch (e) {
    useStore.getState().setCloudSync({ lastError: 'error', lastDetail: errorDetail(e) });
    return undefined;
  }
}
