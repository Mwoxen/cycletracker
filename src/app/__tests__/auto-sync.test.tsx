/**
 * The automatic sharing sheet with a fake iCloud transport in place of the native module:
 * the cycle owner starts the sharing, the partner joins with a pasted link, and either can stop.
 */
import { fireEvent, screen, waitFor } from 'expo-router/testing-library';
import { Alert, Share } from 'react-native';

import da from '@/i18n/da';
import { setLanguage } from '@/i18n';
import { useStore } from '@/store';
import { renderApp } from '@/test/render-app';
import type { CloudState, CloudTransport } from '@/sync/cloud/transport';

jest.mock('@/sync/cloud/transport', () => {
  const actual = jest.requireActual('@/sync/cloud/transport');
  return { ...actual, nativeTransport: jest.fn() };
});

// eslint-disable-next-line @typescript-eslint/no-require-imports
const { nativeTransport } = require('@/sync/cloud/transport') as {
  nativeTransport: jest.Mock;
};

function fakeTransport(initial: CloudState = { participants: 0 }) {
  let state = initial;
  const t: jest.Mocked<CloudTransport> = {
    accountStatus: jest.fn(async () => 'available' as const),
    state: jest.fn(async () => state),
    createShare: jest.fn(async () => {
      state = { role: 'owner', participants: 0 };
      return 'https://www.icloud.com/share/abc';
    }),
    joinShare: jest.fn(async (_url: string) => {
      state = { role: 'participant', participants: 0 };
    }),
    write: jest.fn(async (_name: string, _payload: string) => undefined),
    read: jest.fn(async (_name: string) => undefined),
    stop: jest.fn(async () => {
      state = { participants: 0 };
    }),
  };
  return t;
}

const onboard = (role: 'user' | 'tracker') =>
  useStore.getState().completeOnboarding({
    role,
    language: 'da',
    partnerName: 'Anna',
    programStartDate: '2026-03-01',
    lastPeriodStart: '2026-02-20',
    cycleLength: 28,
    periodLength: 5,
  });

beforeEach(() => {
  setLanguage('da');
  useStore.getState().resetAll();
  useStore.getState().setHydrated(true);
  jest.spyOn(Share, 'share').mockResolvedValue({ action: Share.sharedAction });
});

afterEach(() => jest.restoreAllMocks());

describe('automatic sharing sheet', () => {
  it('lets the cycle owner start sharing and send the link', async () => {
    const transport = fakeTransport();
    nativeTransport.mockReturnValue(transport);
    onboard('user');
    await renderApp('/auto-sync');

    await fireEvent.press(await screen.findByText(da.autoSync.start));
    expect(await screen.findByText(da.autoSync.connected)).toBeTruthy();
    expect(transport.createShare).toHaveBeenCalledTimes(1);
    expect(Share.share).toHaveBeenCalledWith(
      expect.objectContaining({ url: 'https://www.icloud.com/share/abc' }),
    );
    expect(screen.getByText(da.autoSync.waitingForPartner)).toBeTruthy();
    // Let the background sync that follows settle before the test ends.
    await waitFor(() => expect(useStore.getState().cloudSync.lastSyncAt).toBeDefined());
  });

  it('lets the partner join with a pasted link', async () => {
    const transport = fakeTransport();
    nativeTransport.mockReturnValue(transport);
    onboard('tracker');
    await renderApp('/auto-sync');

    await fireEvent.changeText(
      await screen.findByPlaceholderText(da.autoSync.linkPlaceholder),
      ' https://www.icloud.com/share/abc ',
    );
    await fireEvent.press(screen.getByText(da.autoSync.join));
    expect(await screen.findByText(da.autoSync.connected)).toBeTruthy();
    expect(transport.joinShare).toHaveBeenCalledWith('https://www.icloud.com/share/abc');
    expect(screen.getByText(da.autoSync.connectedTracker)).toBeTruthy();
    await waitFor(() => expect(useStore.getState().cloudSync.lastSyncAt).toBeDefined());
  });

  it('says so when the link cannot be used', async () => {
    const transport = fakeTransport();
    transport.joinShare.mockRejectedValue(new Error('nope'));
    nativeTransport.mockReturnValue(transport);
    onboard('tracker');
    await renderApp('/auto-sync');

    await fireEvent.changeText(await screen.findByPlaceholderText(da.autoSync.linkPlaceholder), 'x');
    await fireEvent.press(screen.getByText(da.autoSync.join));
    expect(await screen.findByText(new RegExp(`${da.autoSync.joinFailed}[\\s\\S]*nope`))).toBeTruthy();
    expect(screen.queryByText(da.autoSync.connected)).toBeNull();
  });

  it('shows the state of an existing pairing and stops it after confirmation', async () => {
    const transport = fakeTransport({ role: 'owner', participants: 1 });
    nativeTransport.mockReturnValue(transport);
    onboard('user');
    const alert = jest.spyOn(Alert, 'alert').mockImplementation((_t, _m, buttons) => {
      buttons?.find((b) => b.style === 'destructive')?.onPress?.();
    });
    await renderApp('/auto-sync');

    expect(await screen.findByText(da.autoSync.partnerJoined)).toBeTruthy();
    await fireEvent.press(screen.getByText(da.autoSync.stop));
    expect(alert).toHaveBeenCalled();
    expect(await screen.findByText(da.autoSync.start)).toBeTruthy();
    expect(transport.stop).toHaveBeenCalledTimes(1);
  });

  it('explains when iCloud is not signed in', async () => {
    const transport = fakeTransport();
    transport.accountStatus.mockResolvedValue('noAccount');
    nativeTransport.mockReturnValue(transport);
    onboard('user');
    await renderApp('/auto-sync');
    expect(await screen.findByText(da.autoSync.noAccount)).toBeTruthy();
  });
});
