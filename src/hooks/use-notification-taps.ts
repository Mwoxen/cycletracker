import { useRootNavigationState, useRouter, useSegments } from 'expo-router';
import * as Notifications from 'expo-notifications';
import { useEffect, useRef } from 'react';

import { routeForNotification } from '@/notifications';
import { useStore } from '@/store/store';

/**
 * Opens the right screen when a notification is tapped, whether it launched the app or the app
 * was already running. Waits until the navigator and the profile are ready, and until the start
 * route has finished sending the app to the tabs (a cold start otherwise pushes the card while
 * that redirect is still running), and handles each tap once.
 */
export function useNotificationTaps() {
  const router = useRouter();
  const navigationReady = !!useRootNavigationState()?.key;
  const profile = useStore((s) => s.profile);
  const inTabs = useSegments()[0] === '(tabs)';
  const response = Notifications.useLastNotificationResponse();
  const handled = useRef<string | undefined>(undefined);

  useEffect(() => {
    if (!response || !navigationReady || !profile || !inTabs) return;
    const { identifier } = response.notification.request;
    const key = `${identifier}:${response.notification.date}`;
    if (handled.current === key) return;
    handled.current = key;
    const route = routeForNotification(identifier, profile);
    if (route) router.push(route as never);
  }, [response, navigationReady, profile, inTabs, router]);
}
