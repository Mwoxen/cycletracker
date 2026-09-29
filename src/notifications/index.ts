import * as Notifications from 'expo-notifications';
import { Platform } from 'react-native';

import { getContent } from '@/content';
import { programPosition } from '@/content/program';
import {
  CYCLE_WEEKS,
  type CycleWeek,
  type ISODate,
  type PeriodEvent,
  type Profile,
  type Settings,
} from '@/domain/types';
import { cycleWeekStartDates, predict } from '@/engine/cycle';
import { addDaysISO, compareISO, fromISODate, todayISO } from '@/engine/dates';
import i18n from '@/i18n';

const REMINDER_HOUR = 9;
/** A new cycle week is announced in the morning. */
const CYCLE_WEEK_HOUR = 8;
const CYCLE_WEEK_MINUTE = 30;

let handlerInstalled = false;

export function installNotificationHandler() {
  if (handlerInstalled) return;
  handlerInstalled = true;
  Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowBanner: true,
      shouldShowList: true,
      shouldPlaySound: false,
      shouldSetBadge: false,
    }),
  });
}

export async function requestNotificationPermission(): Promise<boolean> {
  try {
    const current = await Notifications.getPermissionsAsync();
    if (current.granted) return true;
    if (!current.canAskAgain) return false;
    const next = await Notifications.requestPermissionsAsync();
    return next.granted;
  } catch {
    return false;
  }
}

export async function hasNotificationPermission(): Promise<boolean> {
  try {
    return (await Notifications.getPermissionsAsync()).granted;
  } catch {
    return false;
  }
}

function at(iso: string, hour: number, minute = 0): Date {
  const d = fromISODate(iso);
  d.setHours(hour, minute, 0, 0);
  return d;
}

/**
 * Rebuild every scheduled local notification from the current state.
 * Cheap enough to call after any change to periods, settings or profile.
 */
export async function syncNotifications(
  profile: Profile | undefined,
  settings: Settings,
  periods: PeriodEvent[],
): Promise<void> {
  if (Platform.OS === 'web') return;
  try {
    await Notifications.cancelAllScheduledNotificationsAsync();
    if (!profile) return;
    if (!(await hasNotificationPermission())) return;
    const t = i18n.getFixedT(profile.language);
    const r = settings.reminders;
    const isTracker = profile.role === 'tracker';

    const programDone = programPosition(profile.programStartDate, todayISO()).completed;
    if (r.dailyCard && !programDone) {
      await Notifications.scheduleNotificationAsync({
        identifier: 'daily-card',
        content: {
          title: t(isTracker ? 'notifications.dailyCardTitle' : 'notifications.logTitle'),
          body: t(isTracker ? 'notifications.dailyCardBody' : 'notifications.logBody'),
        },
        trigger: {
          type: Notifications.SchedulableTriggerInputTypes.DAILY,
          hour: r.dailyCardHour,
          minute: r.dailyCardMinute,
        },
      });
    }

    const today = todayISO();
    const prediction = predict(periods, settings, today);
    if (!prediction) return;

    if (r.periodSoon) {
      const day = addDaysISO(prediction.nextPeriodStart, -2);
      if (compareISO(day, today) > 0) {
        await Notifications.scheduleNotificationAsync({
          identifier: 'period-soon',
          content: {
            title: t('notifications.periodSoonTitle'),
            body: t(
              isTracker
                ? 'notifications.periodSoonBodyTracker'
                : 'notifications.periodSoonBodyUser',
            ),
          },
          trigger: {
            type: Notifications.SchedulableTriggerInputTypes.DATE,
            date: at(day, REMINDER_HOUR),
          },
        });
      }
    }

    if (r.pmsWindow) {
      const day = prediction.pmsWindow.start;
      if (compareISO(day, today) > 0) {
        await Notifications.scheduleNotificationAsync({
          identifier: 'pms-window',
          content: {
            title: t('notifications.pmsTitle'),
            body: t(isTracker ? 'notifications.pmsBodyTracker' : 'notifications.pmsBodyUser'),
          },
          trigger: {
            type: Notifications.SchedulableTriggerInputTypes.DATE,
            date: at(day, REMINDER_HOUR),
          },
        });
      }
    }

    if (r.cycleWeek) {
      // Weeks 2-4 of the current cycle plus week 1 of the predicted next one; past dates skip.
      const cycleWeeks = getContent(profile.language).cycleWeeks;
      const starts = cycleWeekStartDates(prediction.lastPeriodStart);
      const upcoming: { week: CycleWeek; date: ISODate; id: string }[] = [
        ...CYCLE_WEEKS.filter((w) => w > 1).map((w) => ({
          week: w,
          date: starts[w],
          id: `cycle-week-${w}`,
        })),
        { week: 1, date: prediction.nextPeriodStart, id: 'cycle-week-next-1' },
      ];
      for (const item of upcoming) {
        if (compareISO(item.date, today) <= 0) continue;
        const weekContent = cycleWeeks.find((w) => w.week === item.week);
        if (!weekContent) continue;
        await Notifications.scheduleNotificationAsync({
          identifier: item.id,
          content: {
            title: t('notifications.cycleWeekTitle'),
            body: t('notifications.cycleWeekBody', {
              n: item.week,
              title: isTracker ? weekContent.title : weekContent.partnerFocus,
            }),
          },
          trigger: {
            type: Notifications.SchedulableTriggerInputTypes.DATE,
            date: at(item.date, CYCLE_WEEK_HOUR, CYCLE_WEEK_MINUTE),
          },
        });
      }
    }
  } catch {
    // Notifications are best-effort; never let them break the app.
  }
}
