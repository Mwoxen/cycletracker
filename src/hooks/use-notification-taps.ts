import { useRootNavigationState, useRouter } from 'expo-router';
import * as Notifications from 'expo-notifications';
import { useEffect, useRef } from 'react';

import { routeForNotification } from '@/notifications';
import { useStore } from '@/store/store';

/**
 * Opens the right screen when a notification is tapped, whether it launched the app or the app
 * was already running. Waits until the navigator and the profile are ready, and handles each tap
 * once.
 */
export function useNotificationTaps() {
  const router = useRouter();
  const navigationReady = !!useRootNavigationState()?.key;
  const profile = useStore((s) => s.profile);
  const response = Notifications.useLastNotificationResponse();
  const handled = useRef<string | undefined>(undefined);

  useEffect(() => {
    if (!response || !navigationReady || !profile) return;
    const { identifier } = response.notification.request;
    const key = `${identifier}:${response.notification.date}`;
    if (handled.current === key) return;
    handled.current = key;
    const route = routeForNotification(identifier, profile);
    if (route) router.push(route as never);
  }, [response, navigationReady, profile, router]);
}
