/**
 * The partner sheet with a fake iCloud transport in place of the native module: she shows her
 * code and sends the link, he joins with a pasted link, and either can see the state and stop.
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
      state = { role: 'owner', participants: state.participants };
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

describe('partner sheet', () => {
  it('shows her the code, makes the iCloud share by itself and waits for the partner', async () => {
    const transport = fakeTransport();
    nativeTransport.mockReturnValue(transport);
    onboard('user');
    await renderApp('/partner');

    await waitFor(() => expect(transport.createShare).toHaveBeenCalledTimes(1));
    expect(await screen.findByText(da.autoSync.waitingForPartner)).toBeTruthy();
    expect(screen.queryByText(da.autoSync.stop)).toBeNull();
    await fireEvent.press(screen.getByText(da.sync.sendLink));
    expect(Share.share).toHaveBeenCalledWith(
      expect.objectContaining({ url: expect.stringContaining('icloud.com') }),
    );
    await waitFor(() => expect(useStore.getState().cloudSync.lastSyncAt).toBeDefined());
  });

  it('lets him join with a pasted iCloud link', async () => {
    const transport = fakeTransport();
    nativeTransport.mockReturnValue(transport);
    onboard('tracker');
    await renderApp('/partner');

    await fireEvent.changeText(
      await screen.findByPlaceholderText(da.autoSync.linkPlaceholder),
      ' https://www.icloud.com/share/abc ',
    );
    await fireEvent.press(screen.getByText(da.autoSync.join));
    expect(
      await screen.findByText(da.partner.connectedWith.replace('{{name}}', 'Anna')),
    ).toBeTruthy();
    expect(transport.joinShare).toHaveBeenCalledWith('https://www.icloud.com/share/abc');
    expect(screen.getByText(da.autoSync.connectedTracker)).toBeTruthy();
    expect(screen.getByText(da.partner.scanAgain)).toBeTruthy();
    await waitFor(() => expect(useStore.getState().cloudSync.lastSyncAt).toBeDefined());
  });

  it('says so when a pasted text is neither a code link nor an iCloud link', async () => {
    const transport = fakeTransport();
    nativeTransport.mockReturnValue(transport);
    onboard('tracker');
    await renderApp('/partner');

    await fireEvent.changeText(await screen.findByPlaceholderText(da.autoSync.linkPlaceholder), 'x');
    await fireEvent.press(screen.getByText(da.autoSync.join));
    expect(await screen.findByText(da.sync.importInvalid)).toBeTruthy();
    expect(transport.joinShare).not.toHaveBeenCalled();
  });

  it('reports an iCloud link that cannot be joined', async () => {
    const transport = fakeTransport();
    transport.joinShare.mockRejectedValue(new Error('nope'));
    nativeTransport.mockReturnValue(transport);
    onboard('tracker');
    await renderApp('/partner');

    await fireEvent.changeText(
      await screen.findByPlaceholderText(da.autoSync.linkPlaceholder),
      'https://www.icloud.com/share/abc',
    );
    await fireEvent.press(screen.getByText(da.autoSync.join));
    expect(await screen.findByText(new RegExp(`${da.autoSync.joinFailed}[\\s\\S]*nope`))).toBeTruthy();
  });

  it('shows her an existing connection and stops it after confirmation', async () => {
    const transport = fakeTransport({ role: 'owner', participants: 1 });
    nativeTransport.mockReturnValue(transport);
    onboard('user');
    useStore.getState().setPairing({ partnerDeviceId: 'p', partnerName: 'Bo' });
    const alert = jest.spyOn(Alert, 'alert').mockImplementation((_t, _m, buttons) => {
      buttons?.find((b) => b.style === 'destructive')?.onPress?.();
    });
    await renderApp('/partner');

    expect(await screen.findByText(da.partner.connectedWith.replace('{{name}}', 'Bo'))).toBeTruthy();
    expect(screen.getByText(da.partner.showCodeAgain)).toBeTruthy();
    await fireEvent.press(screen.getByText(da.autoSync.stop));
    expect(alert).toHaveBeenCalled();
    // A fresh share is made right away, so the code keeps connecting; she waits for a scan.
    expect(await screen.findByText(da.autoSync.waitingForPartner)).toBeTruthy();
    expect(transport.stop).toHaveBeenCalledTimes(1);
    expect(transport.createShare).toHaveBeenCalledTimes(2);
  });

  it('explains when iCloud is not signed in, and still shows the code', async () => {
    const transport = fakeTransport();
    transport.accountStatus.mockResolvedValue('noAccount');
    nativeTransport.mockReturnValue(transport);
    onboard('user');
    await renderApp('/partner');
    expect(await screen.findByText(da.autoSync.noAccount)).toBeTruthy();
    expect(screen.getByText(da.sync.sendLink)).toBeTruthy();
  });
});
