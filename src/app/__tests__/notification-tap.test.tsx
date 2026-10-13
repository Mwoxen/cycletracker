/**
 * Opening the app from the daily reminder must land on today's card without a render loop.
 * The real route files, store and i18n are used; only the tapped notification is faked.
 */
import * as Notifications from 'expo-notifications';
import { act } from '@testing-library/react-native';
import { waitFor } from 'expo-router/testing-library';

import { FREE_ENTITLEMENT } from '@/domain/types';
import { addDaysISO } from '@/engine/dates';
import { setLanguage } from '@/i18n';
import { useStore } from '@/store';
import { renderApp } from '@/test/render-app';

const TODAY = '2026-05-10';

function tap(identifier: string) {
  (Notifications.useLastNotificationResponse as jest.Mock).mockReturnValue({
    notification: { date: 1, request: { identifier } },
  });
}

function onboardTracker(daysIntoProgramme: number) {
  useStore.getState().completeOnboarding({
    role: 'tracker',
    language: 'da',
    partnerName: 'Anna',
    programStartDate: addDaysISO(TODAY, -daysIntoProgramme),
    lastPeriodStart: addDaysISO(TODAY, -10),
    cycleLength: 28,
    periodLength: 5,
  });
}

beforeEach(() => {
  jest.useFakeTimers();
  jest.setSystemTime(new Date(`${TODAY}T12:00:00`));
  setLanguage('da');
  useStore.getState().resetAll();
  useStore.getState().setEntitlement(FREE_ENTITLEMENT);
  useStore.getState().setHydrated(true);
  (Notifications.useLastNotificationResponse as jest.Mock).mockReturnValue(null);
});

afterEach(() => {
  jest.useRealTimers();
  (Notifications.useLastNotificationResponse as jest.Mock).mockReturnValue(null);
});

const grantPlus = () =>
  useStore.getState().setEntitlement({ plan: 'plus', source: 'store', expiresAt: 4e12 });

describe('tapping the daily reminder', () => {
  it.each([
    ['free', 0],
    ['free', 12],
    ['free', 29],
    ['free', 30],
    ['plus', 30],
    ['plus', 45],
    ['plus', 100],
  ])(
    "opens today's card on a %s plan, programme day offset %i, without a render loop",
    async (plan, offset) => {
      if (plan === 'plus') grantPlus();
      onboardTracker(offset);
      tap('daily-card');
      // The shared test setup fails a test on any console.error, which is how a render loop
      // ('Maximum update depth exceeded') is caught here.
      const app = await renderApp('/');
      await waitFor(() => expect(app.getPathname()).toContain('/daily/'), { timeout: 4000 });
    },
  );
});

describe('while the card is open', () => {
  it('survives the store being refreshed as the app returns to the front', async () => {
    grantPlus();
    onboardTracker(12);
    tap('daily-card');
    const app = await renderApp('/');
    await waitFor(() => expect(app.getPathname()).toContain('/daily/'), { timeout: 4000 });
    for (let i = 0; i < 5; i++) {
      await act(async () => {
        useStore.getState().setEntitlement({ plan: 'plus', source: 'store', expiresAt: 4e12 + i });
      });
    }
    expect(app.getPathname()).toContain('/daily/');
  });
});
