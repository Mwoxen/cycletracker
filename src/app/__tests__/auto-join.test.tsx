/**
 * Scanning the partner's code connects the automatic sharing by itself: her share screen puts the
 * iCloud address into the code, and the partner's import screen joins it without asking. The
 * native module is replaced by a fake transport.
 */
import { fireEvent, screen, waitFor } from 'expo-router/testing-library';
import { Share } from 'react-native';

import da from '@/i18n/da';
import { setLanguage } from '@/i18n';
import { createSyncSnapshot, selectSnapshotData, useStore } from '@/store';
import { renderApp } from '@/test/render-app';
import { extractCloudShare, encodePayload } from '@/sync/payload';
import type { CloudState, CloudTransport } from '@/sync/cloud/transport';

jest.mock('@/sync/cloud/transport', () => {
  const actual = jest.requireActual('@/sync/cloud/transport');
  return { ...actual, nativeTransport: jest.fn() };
});

// eslint-disable-next-line @typescript-eslint/no-require-imports
const { nativeTransport } = require('@/sync/cloud/transport') as { nativeTransport: jest.Mock };

const SHARE = 'https://www.icloud.com/share/abc123#Cycle_Tracker';

function fakeTransport(initial: CloudState = { participants: 0 }) {
  let state = initial;
  const t: jest.Mocked<CloudTransport> = {
    accountStatus: jest.fn(async () => 'available' as const),
    state: jest.fn(async () => state),
    createShare: jest.fn(async () => {
      state = { role: 'owner', participants: 0 };
      return SHARE;
    }),
    joinShare: jest.fn(async (_url: string) => {
      state = { role: 'participant', participants: 0 };
    }),
    write: jest.fn(async (_name: string, _payload: string) => undefined),
    read: jest.fn(async (_name: string) => undefined),
    stop: jest.fn(async () => undefined),
  };
  return t;
}

const onboard = (role: 'user' | 'tracker') => {
  useStore.getState().completeOnboarding({
    role,
    language: 'da',
    partnerName: 'Anna',
    programStartDate: '2026-03-01',
    lastPeriodStart: '2026-02-20',
    cycleLength: 28,
    periodLength: 5,
  });
  useStore.getState().setHydrated(true);
};

/** A code as her phone would make it, with or without the iCloud address. */
function herCode(withShare: boolean | string) {
  useStore.getState().resetAll();
  onboard('user');
  const s = useStore.getState();
  const payload = encodePayload(createSyncSnapshot(selectSnapshotData(s), s.deviceId));
  s.resetAll();
  return { payload, share: withShare === true ? SHARE : withShare || undefined };
}

beforeEach(() => {
  setLanguage('da');
  useStore.getState().resetAll();
  jest.spyOn(Share, 'share').mockResolvedValue({ action: Share.sharedAction });
});

afterEach(() => jest.restoreAllMocks());

describe('her partner screen', () => {
  it('puts the iCloud address into the link she sends', async () => {
    const transport = fakeTransport();
    nativeTransport.mockReturnValue(transport);
    onboard('user');
    await renderApp('/partner');

    await waitFor(() => expect(transport.createShare).toHaveBeenCalledTimes(1));
    await waitFor(() => expect(useStore.getState().cloudSync.lastSyncAt).toBeDefined());
    await fireEvent.press(await screen.findByText(da.sync.sendLink));
    const sent = (Share.share as jest.Mock).mock.calls[0][0].url as string;
    expect(extractCloudShare(sent)).toBe(SHARE);
  });

  it('still works as before when iCloud is not available', async () => {
    const transport = fakeTransport();
    transport.accountStatus.mockResolvedValue('noAccount');
    nativeTransport.mockReturnValue(transport);
    onboard('user');
    await renderApp('/partner');

    await fireEvent.press(await screen.findByText(da.sync.sendLink));
    const sent = (Share.share as jest.Mock).mock.calls[0][0].url as string;
    expect(extractCloudShare(sent)).toBeUndefined();
    expect(transport.createShare).not.toHaveBeenCalled();
  });
});

describe("the partner's import screen", () => {
  it('connects the automatic sharing by itself after a scan', async () => {
    const { payload, share } = herCode(true);
    const transport = fakeTransport();
    nativeTransport.mockReturnValue(transport);
    onboard('tracker');
    await renderApp(`/import?d=${payload}&s=${encodeURIComponent(share!)}`);

    expect(await screen.findByText(da.sync.autoJoined)).toBeTruthy();
    expect(transport.joinShare).toHaveBeenCalledWith(SHARE);
    expect(transport.write).toHaveBeenCalledWith('from-partner', expect.any(String));
  });

  it('does not connect twice when already connected', async () => {
    const { payload, share } = herCode(true);
    const transport = fakeTransport({ role: 'participant', participants: 0 });
    nativeTransport.mockReturnValue(transport);
    onboard('tracker');
    await renderApp(`/import?d=${payload}&s=${encodeURIComponent(share!)}`);

    expect(await screen.findByText(da.sync.autoJoined)).toBeTruthy();
    expect(transport.joinShare).not.toHaveBeenCalled();
  });

  it('says so, and still lets the data be imported, when joining fails', async () => {
    const { payload, share } = herCode(true);
    const transport = fakeTransport();
    transport.joinShare.mockRejectedValue(new Error('CKError 9: Not Authenticated'));
    nativeTransport.mockReturnValue(transport);
    onboard('tracker');
    await renderApp(`/import?d=${payload}&s=${encodeURIComponent(share!)}`);

    // The system's own words are shown with it, so the cause can be found.
    expect(
      await screen.findByText(new RegExp(`${da.sync.autoJoinFailed}[\\s\\S]*Not Authenticated`)),
    ).toBeTruthy();
    expect(screen.getByText(da.sync.importButton)).toBeTruthy();
  });

  it('ignores a share address that is not an iCloud link', async () => {
    const { payload } = herCode('https://evil.example/share/x');
    const transport = fakeTransport();
    nativeTransport.mockReturnValue(transport);
    onboard('tracker');
    await renderApp(`/import?d=${payload}&s=${encodeURIComponent('https://evil.example/share/x')}`);

    expect(await screen.findByText(da.sync.importButton)).toBeTruthy();
    expect(transport.joinShare).not.toHaveBeenCalled();
    expect(screen.queryByText(da.sync.autoJoining)).toBeNull();
  });

  it('does nothing for a code without an iCloud address', async () => {
    const { payload } = herCode(false);
    const transport = fakeTransport();
    nativeTransport.mockReturnValue(transport);
    onboard('tracker');
    await renderApp(`/import?d=${payload}`);

    expect(await screen.findByText(da.sync.importButton)).toBeTruthy();
    expect(transport.joinShare).not.toHaveBeenCalled();
  });

  it("never joins on the cycle owner's own phone", async () => {
    const { payload, share } = herCode(true);
    const transport = fakeTransport();
    nativeTransport.mockReturnValue(transport);
    onboard('user');
    await renderApp(`/import?d=${payload}&s=${encodeURIComponent(share!)}`);

    expect(await screen.findByText(da.sync.importButton)).toBeTruthy();
    expect(transport.joinShare).not.toHaveBeenCalled();
  });

  it('works through the scan screen: a pasted link ends up connected', async () => {
    const { payload, share } = herCode(true);
    const transport = fakeTransport();
    nativeTransport.mockReturnValue(transport);
    onboard('tracker');
    await renderApp('/scan');

    const input = await screen.findByPlaceholderText(da.sync.pastePlaceholder);
    await fireEvent.changeText(
      input,
      `cycletracker://import?d=${payload}&s=${encodeURIComponent(share!)}`,
    );
    await fireEvent(input, 'submitEditing');

    expect(await screen.findByText(da.sync.autoJoined)).toBeTruthy();
    expect(transport.joinShare).toHaveBeenCalledWith(SHARE);
  });
});
