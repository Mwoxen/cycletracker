import * as Notifications from 'expo-notifications';
import { Platform } from 'react-native';

import { getContent } from '@/content';
import {
  findWeekly,
  findWrap,
  getDailyCard,
  getWeeklyRead,
  getWrap,
  programPosition,
} from '@/content/program';
import { DAYS_PER_MONTH, MONTHS_IN_PROGRAM, WEEKS_PER_MONTH } from '@/content/types';
import type { PeriodEvent, Profile, Settings } from '@/domain/types';
import { predict } from '@/engine/cycle';
import { addDaysISO, compareISO, fromISODate, todayISO } from '@/engine/dates';
import { hasMonthAccess, type Plan } from '@/entitlements';
import i18n from '@/i18n';

const REMINDER_HOUR = 9;
/**
 * iOS keeps at most 64 pending local notifications, so only the next few articles and wraps are
 * scheduled. The schedule is rebuilt every time the app opens.
 */
const MAX_PROGRAM_NOTIFICATIONS = 16;

export interface ProgramNotification {
  /** `weekly:<id>` or `wrap:<id>`; the tap handler reads the id back from it. */
  identifier: string;
  kind: 'weekly' | 'wrap';
  /** The day the item unlocks. */
  date: string;
  title: string;
}

/**
 * The next weekly articles and monthly wraps that unlock after `now`, in order. A weekly article
 * unlocks on the first day of its week and a wrap on the last day of its month (see
 * `isWeeklyUnlocked` and `isMonthWrapUnlocked`). Months the plan does not cover are left out.
 */
export function upcomingProgramNotifications(
  programStartDate: string,
  language: Profile['language'],
  plan: Plan,
  now: Date,
  time: { hour: number; minute: number } = { hour: 19, minute: 0 },
  limit: number = MAX_PROGRAM_NOTIFICATIONS,
): ProgramNotification[] {
  const content = getContent(language);
  const items: ProgramNotification[] = [];
  for (let month = 1; month <= MONTHS_IN_PROGRAM; month++) {
    if (!hasMonthAccess(month, plan)) continue;
    for (let week = 1; week <= WEEKS_PER_MONTH; week++) {
      const read = getWeeklyRead(content, month, week);
      if (!read) continue;
      const day = (month - 1) * DAYS_PER_MONTH + (week - 1) * 7 + 1;
      items.push({
        identifier: `weekly:${read.id}`,
        kind: 'weekly',
        date: addDaysISO(programStartDate, day - 1),
        title: read.title,
      });
    }
    const wrap = getWrap(content, month);
    if (wrap) {
      items.push({
        identifier: `wrap:${wrap.id}`,
        kind: 'wrap',
        date: addDaysISO(programStartDate, month * DAYS_PER_MONTH - 1),
        title: wrap.title,
      });
    }
  }
  return items
    .filter((i) => at(i.date, time.hour, time.minute).getTime() > now.getTime())
    .sort((a, b) => compareISO(a.date, b.date))
    .slice(0, limit);
}

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
  plan: Plan = 'free',
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

    if (isTracker && !programDone && (r.weeklyRead || r.monthWrap)) {
      const upcoming = upcomingProgramNotifications(
        profile.programStartDate,
        profile.language,
        plan,
        new Date(),
        { hour: r.programHour, minute: r.programMinute },
      );
      for (const item of upcoming) {
        if (item.kind === 'weekly' ? !r.weeklyRead : !r.monthWrap) continue;
        await Notifications.scheduleNotificationAsync({
          identifier: item.identifier,
          content: {
            title: t(
              item.kind === 'weekly' ? 'notifications.weeklyTitle' : 'notifications.wrapTitle',
            ),
            body: t(
              item.kind === 'weekly' ? 'notifications.weeklyBody' : 'notifications.wrapBody',
              {
                title: item.title,
              },
            ),
          },
          trigger: {
            type: Notifications.SchedulableTriggerInputTypes.DATE,
            date: at(item.date, r.programHour, r.programMinute),
          },
        });
      }
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
  } catch {
    // Notifications are best-effort; never let them break the app.
  }
}

/**
 * Where a tap on a scheduled notification should lead, or undefined to just open the app.
 * The daily reminder opens today's card for the partner and the log sheet for the cycle owner;
 * the card is resolved at tap time because the reminder repeats every day.
 */
export function routeForNotification(
  identifier: string,
  profile: Profile | undefined,
  today: string = todayISO(),
): string | undefined {
  if (!profile) return undefined;
  const content = getContent(profile.language);
  if (profile.role === 'tracker') {
    if (identifier.startsWith('weekly:')) {
      const id = identifier.slice('weekly:'.length);
      return findWeekly(content, id) ? `/(tabs)/home/weekly/${id}` : undefined;
    }
    if (identifier.startsWith('wrap:')) {
      const id = identifier.slice('wrap:'.length);
      return findWrap(content, id) ? `/(tabs)/learn/wrap/${id}` : undefined;
    }
  }
  if (identifier !== 'daily-card') return undefined;
  if (profile.role !== 'tracker') return `/log/${today}`;
  const position = programPosition(profile.programStartDate, today);
  if (position.completed || position.notStarted) return undefined;
  const card = getDailyCard(content, position.month, position.dayInMonth);
  return card ? `/(tabs)/home/daily/${card.id}` : undefined;
}
