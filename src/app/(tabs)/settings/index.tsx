import Constants from 'expo-constants';
import * as Updates from 'expo-updates';
import * as Clipboard from 'expo-clipboard';
import * as Haptics from 'expo-haptics';
import * as Linking from 'expo-linking';
import { useFocusEffect, useRouter } from 'expo-router';
import { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Alert, AppState, Pressable, StyleSheet, Switch, View } from 'react-native';

import { APPEARANCES } from '@/domain/types';
import { programPosition } from '@/content/program';
import { toISODate, todayISO } from '@/engine/dates';
import { useFormat } from '@/hooks/use-format';
import { relativeTime } from '@/hooks/use-relative-time';
import {
  notificationPermissionState,
  requestNotificationPermission,
  syncNotifications,
  type NotificationPermissionState,
} from '@/notifications';
import { selectActivePeriods, useStore } from '@/store';
import { TabSwipe } from '@/ui/tab-swipe';
import { colors, spacing } from '@/ui/colors';
import { usePhaseTheme } from '@/ui/theme';
import { Button, Card, Icon, Row, Screen, SectionTitle, Txt } from '@/ui/primitives';
import { Segmented } from '@/ui/segmented';
import { Avatar, HelpText, IconTile, Pill, StatusDot } from '@/ui/settings-bits';
import { Stepper } from '@/ui/stepper';
import { usePlan } from '@/entitlements';
import {
  describeCustomer,
  openManageSubscriptions,
  purchasesAvailable,
  redeemOfferCode,
  restore,
} from '@/purchases';

/** "1.0.0 (7)" from the native build. */
function appVersionLabel(): string {
  const version = Constants.expoConfig?.version ?? '0.0.0';
  const build = Constants.expoConfig?.ios?.buildNumber ?? Constants.nativeBuildVersion;
  return build ? `${version} (${build})` : version;
}

/** Short commit of the running OTA update, so it is visible which JavaScript is live. */
function updateLabel(embedded: string): string {
  if (Updates.isEmbeddedLaunch || !Updates.updateId) return embedded;
  const manifest = Updates.manifest as {
    extra?: { expoClient?: { extra?: { commit?: unknown } } };
  };
  const commit = manifest?.extra?.expoClient?.extra?.commit;
  const stamp = Updates.createdAt ? ` · ${Updates.createdAt.toLocaleDateString()}` : '';
  const id = typeof commit === 'string' ? commit.slice(0, 7) : Updates.updateId.slice(0, 8);
  return `${id}${stamp}`;
}

const timeAt = (hour: number, minute: number) => {
  const d = new Date();
  d.setHours(hour, minute, 0, 0);
  return d;
};

export default function SettingsScreen() {
  const { t } = useTranslation();
  const theme = usePhaseTheme();
  const fmt = useFormat();
  const router = useRouter();
  const profile = useStore((s) => s.profile);
  const pairing = useStore((s) => s.pairing);
  const backupStatus = useStore((s) => s.backupStatus);
  const cloudSync = useStore((s) => s.cloudSync);
  const settings = useStore((s) => s.settings);
  const updateSettings = useStore((s) => s.updateSettings);
  const updateReminders = useStore((s) => s.updateReminders);
  const resetAll = useStore((s) => s.resetAll);
  const [notifState, setNotifState] = useState<NotificationPermissionState | undefined>();
  const [updateState, setUpdateState] = useState<'idle' | 'checking' | 'downloading'>('idle');
  const entitlement = useStore((s) => s.entitlement);
  const previewFree = useStore((s) => s.previewFree);
  const setPreviewFree = useStore((s) => s.setPreviewFree);
  const plan = usePlan();

  // The answer lives in iOS Settings and can change while this screen stays mounted, so look
  // again whenever the tab is shown and whenever the app comes back to the front.
  useFocusEffect(
    useCallback(() => {
      void notificationPermissionState().then(setNotifState);
    }, []),
  );
  useEffect(() => {
    const sub = AppState.addEventListener('change', (state) => {
      if (state === 'active') void notificationPermissionState().then(setNotifState);
    });
    return () => sub.remove();
  }, []);

  if (!profile) return null;
  const r = settings.reminders;
  const isTracker = profile.role === 'tracker';
  const position = programPosition(profile.programStartDate, todayISO());

  const toggleReminder = async (
    key: 'dailyCard' | 'periodSoon' | 'pmsWindow' | 'weeklyRead' | 'monthWrap',
    value: boolean,
  ) => {
    if (value && !(await allowNotifications())) return;
    updateReminders({ [key]: value });
  };
  /** Asks iOS, and schedules everything right away when the answer is yes. */
  const allowNotifications = async () => {
    const granted = await requestNotificationPermission();
    setNotifState(granted ? 'granted' : 'denied');
    if (granted) {
      const s = useStore.getState();
      void syncNotifications(s.profile, s.settings, selectActivePeriods(s), plan);
    }
    return granted;
  };
  const dailyTime = fmt.time(timeAt(r.dailyCardHour, r.dailyCardMinute));
  const cycleTime = fmt.time(timeAt(r.cycleHour, r.cycleMinute));
  const programTime = fmt.time(timeAt(r.programHour, r.programMinute));
  const timesValue = [dailyTime, cycleTime, ...(isTracker ? [programTime] : [])].join(' · ');

  /**
   * Fetches the newest OTA update and restarts on it, so TestFlight testers do not have to
   * relaunch the app twice. Disabled in Expo Go and development builds, where updates are off.
   */
  const fetchUpdate = async () => {
    if (updateState !== 'idle') return;
    setUpdateState('checking');
    try {
      const check = await Updates.checkForUpdateAsync();
      if (!check.isAvailable) {
        Alert.alert(t('settings.fetchUpdate'), t('settings.updateNone'));
        return;
      }
      setUpdateState('downloading');
      await Updates.fetchUpdateAsync();
      void Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
      await Updates.reloadAsync();
    } catch (e) {
      Alert.alert(t('settings.fetchUpdate'), e instanceof Error ? e.message : String(e));
    } finally {
      setUpdateState('idle');
    }
  };

  const restorePurchases = async () => {
    try {
      const ok = await restore();
      Alert.alert(t('plus.name'), ok ? t('plus.restored') : t('plus.nothingToRestore'));
    } catch {
      Alert.alert(t('plus.name'), t('plus.purchaseFailed'));
    }
  };

  const planLabel = previewFree
    ? t('plus.freePreview')
    : plan === 'plus'
      ? entitlement.source === 'granted'
        ? t('plus.granted')
        : entitlement.periodType === 'trial'
          ? t('plus.activeTrial')
          : t('plus.active')
      : t('plus.free');
  const planHint =
    plan === 'plus' && entitlement.expiresAt
      ? t(
          entitlement.periodType === 'trial'
            ? 'plus.trialEnds'
            : entitlement.willRenew
              ? 'plus.renews'
              : 'plus.expires',
          { date: fmt.short(toISODate(new Date(entitlement.expiresAt))) },
        )
      : undefined;

  const confirmReset = () => {
    Alert.alert(t('settings.resetConfirmTitle'), t('settings.resetConfirmBody'), [
      { text: t('common.cancel'), style: 'cancel' },
      {
        text: t('settings.resetAll'),
        style: 'destructive',
        onPress: () => {
          void Haptics.notificationAsync(Haptics.NotificationFeedbackType.Warning);
          resetAll();
        },
      },
    ]);
  };

  const appearanceOptions = APPEARANCES.map((a) => ({
    value: a,
    label: t(`settings.appearanceNames.${a}`),
  }));
  const languageName = t(`settings.languageNames.${profile.language}`);
  const connected = !!cloudSync.lastSyncAt && !cloudSync.lastError;
  const syncSubtitle = cloudSync.lastError
    ? t(`autoSync.errors.${cloudSync.lastError}`)
    : cloudSync.lastSyncAt
      ? `${t('autoSync.connected')} · ${t('autoSync.lastSync', { when: relativeTime(cloudSync.lastSyncAt) })}`
      : t('autoSync.rowSubtitleOff');

  return (
    <TabSwipe tab="settings">
      <Screen title={t('settings.title')}>
        <Card onPress={() => router.push('/(tabs)/settings/profile')} style={styles.profileCard}>
          <Avatar name={profile.partnerName} />
          <View style={styles.profileText}>
            <Txt variant="cardTitle">{profile.partnerName}</Txt>
            <Txt variant="footnote">
              {isTracker
                ? t('settings.profileLineTracker', {
                    name: profile.partnerName,
                    language: languageName,
                  })
                : t('settings.profileLineUser', { language: languageName })}
            </Txt>
            <View style={styles.pills}>
              <Pill label={t('settings.profileDay', { day: position.programDay })} filled />
              {isTracker ? <Pill label={plan === 'plus' ? t('plus.active') : t('plus.free')} /> : null}
            </View>
          </View>
          <Icon name="chevron.right" size={14} color={colors.tertiaryLabel} />
        </Card>

        <SectionTitle>
          {isTracker ? t('settings.cycleOf', { name: profile.partnerName }) : t('settings.yourCycle')}
        </SectionTitle>
        <Card style={styles.rowsCard}>
          <Row
            title={t('settings.cycleLength')}
            trailing={
              <Stepper
                value={settings.defaultCycleLength}
                min={21}
                max={45}
                onChange={(v) => updateSettings({ defaultCycleLength: v })}
                format={(v) => t('settings.daysValue', { n: v })}
              />
            }
          />
          <Row
            title={t('settings.periodLength')}
            trailing={
              <Stepper
                value={settings.defaultPeriodLength}
                min={2}
                max={10}
                onChange={(v) => updateSettings({ defaultPeriodLength: v })}
                format={(v) => t('settings.daysValue', { n: v })}
              />
            }
          />
          <Row
            title={t('settings.lutealLength')}
            last
            trailing={
              <Stepper
                value={settings.lutealLength}
                min={10}
                max={16}
                onChange={(v) => updateSettings({ lutealLength: v })}
                format={(v) => t('settings.daysValue', { n: v })}
              />
            }
          />
        </Card>
        <HelpText>{isTracker ? t('settings.cycleHelpTracker') : t('settings.cycleHelp')}</HelpText>

        <SectionTitle>{t('settings.reminders')}</SectionTitle>
        <Card style={styles.rowsCard}>
          <Row
            title={isTracker ? t('settings.dailyCard') : t('settings.dailyReminder')}
            subtitle={t('settings.everyDayAt', { time: dailyTime })}
            trailing={
              <Switch
                value={r.dailyCard}
                onValueChange={(v) => void toggleReminder('dailyCard', v)}
              />
            }
          />
          <Row
            title={t('settings.periodSoon')}
            subtitle={t('settings.atTime', { time: cycleTime })}
            trailing={
              <Switch
                value={r.periodSoon}
                onValueChange={(v) => void toggleReminder('periodSoon', v)}
              />
            }
          />
          <Row
            title={t('settings.pmsWindow')}
            subtitle={t('settings.atTime', { time: cycleTime })}
            trailing={
              <Switch
                value={r.pmsWindow}
                onValueChange={(v) => void toggleReminder('pmsWindow', v)}
              />
            }
          />
          {isTracker ? (
            <>
              <Row
                title={t('settings.weeklyRead')}
                subtitle={t('settings.atTime', { time: programTime })}
                trailing={
                  <Switch
                    value={r.weeklyRead}
                    onValueChange={(v) => void toggleReminder('weeklyRead', v)}
                  />
                }
              />
              <Row
                title={t('settings.monthWrap')}
                subtitle={t('settings.atTime', { time: programTime })}
                trailing={
                  <Switch
                    value={r.monthWrap}
                    onValueChange={(v) => void toggleReminder('monthWrap', v)}
                  />
                }
              />
            </>
          ) : null}
          <Row
            title={t('settings.times')}
            value={timesValue}
            onPress={() => router.push('/reminder-times')}
            last={notifState === 'granted' || notifState === undefined}
          />
          {notifState === 'undetermined' ? (
            <Button
              title={t('settings.notificationsAsk')}
              variant="plain"
              onPress={() => void allowNotifications()}
            />
          ) : notifState === 'denied' ? (
            <Button
              title={t('settings.notificationsDenied')}
              variant="plain"
              onPress={() => void Linking.openSettings()}
            />
          ) : null}
        </Card>

        <SectionTitle>{t('settings.sharing')}</SectionTitle>
        <Card style={styles.rowsCard}>
          <Row
            title={t('autoSync.title')}
            subtitle={syncSubtitle}
            subtitleLead={
              cloudSync.lastSyncAt ? (
                <StatusDot color={connected ? colors.green : colors.orange} />
              ) : undefined
            }
            lead={<IconTile symbol="icloud" accent />}
            onPress={() => router.push('/auto-sync')}
          />
          <Row
            title={t('settings.share')}
            subtitle={t('settings.shareHint')}
            lead={<IconTile symbol="qrcode" />}
            onPress={() => router.push('/share')}
          />
          <Row
            title={t('settings.scan')}
            subtitle={
              pairing.partnerDeviceId
                ? t('sync.pairedWith', { name: pairing.partnerName ?? '?' })
                : t('sync.notPaired')
            }
            lead={<IconTile symbol="qrcode.viewfinder" />}
            onPress={() => router.push('/scan')}
          />
          <Row
            title={t('settings.cloudBackup')}
            subtitle={
              !backupStatus.available
                ? t('settings.cloudBackupUnavailable')
                : backupStatus.lastError
                  ? t('settings.cloudBackupError', { error: backupStatus.lastError })
                  : backupStatus.lastBackupAt
                    ? t('settings.cloudBackupLast', {
                        when: relativeTime(backupStatus.lastBackupAt),
                      })
                    : t('settings.cloudBackupNever')
            }
            lead={<IconTile symbol="icloud.and.arrow.up" />}
            trailing={
              <Switch
                value={settings.cloudBackup}
                disabled={!backupStatus.available}
                onValueChange={(v) => updateSettings({ cloudBackup: v })}
              />
            }
          />
          <Row
            title={t('settings.data')}
            subtitle={t('settings.dataHint')}
            lead={<IconTile symbol="doc" />}
            onPress={() => router.push('/(tabs)/settings/data')}
            last
          />
        </Card>

        {isTracker ? (
          <>
            <SectionTitle>{t('plus.name')}</SectionTitle>
            <Card style={styles.rowsCard}>
              <Pressable
                delayLongPress={600}
                onLongPress={() =>
                  Alert.alert('Test', undefined, [
                    {
                      text: previewFree ? t('plus.previewPlus') : t('plus.previewFree'),
                      onPress: () => setPreviewFree(!previewFree),
                    },
                    {
                      text: t('plus.previewInfo'),
                      onPress: () =>
                        void describeCustomer().then((text) =>
                          Alert.alert('Plus', `role: ${profile.role}, plan: ${plan}\n${text}`),
                        ),
                    },
                    { text: t('common.cancel'), style: 'cancel' },
                  ])
                }>
                <Row
                  title={t('plus.status')}
                  subtitle={planHint}
                  trailing={
                    <Txt variant="headline" color={plan === 'plus' ? theme.accent : colors.secondaryLabel}>
                      {planLabel}
                    </Txt>
                  }
                />
              </Pressable>
              {entitlement.source === 'store' ? (
                <Row
                  title={t('plus.manage')}
                  onPress={() => void openManageSubscriptions(entitlement.managementUrl)}
                />
              ) : plan === 'free' ? (
                <Row title={t('plus.upgrade')} onPress={() => router.push('/paywall')} />
              ) : null}
              <Row title={t('plus.restore')} onPress={() => void restorePurchases()} chevron={false} />
              <Row
                title={t('plus.redeem')}
                onPress={() => void redeemOfferCode()}
                chevron={false}
                last
              />
            </Card>
            {!purchasesAvailable ? <HelpText>{t('plus.unavailable')}</HelpText> : null}
          </>
        ) : null}

        <SectionTitle>{t('settings.about')}</SectionTitle>
        <Card style={styles.rowsCard}>
          <Row
            title={t('settings.appearance')}
            trailing={
              <Segmented
                options={appearanceOptions}
                value={settings.appearance}
                onChange={(appearance) => updateSettings({ appearance })}
              />
            }
          />
          <Row
            title={t('settings.version')}
            value={`${appVersionLabel()} · ${updateLabel(t('settings.updateEmbedded'))}`}
            last={!Updates.isEnabled && !entitlement.appUserId}
          />
          {Updates.isEnabled ? (
            <Row
              title={t('settings.fetchUpdate')}
              value={
                updateState === 'checking'
                  ? t('settings.updateChecking')
                  : updateState === 'downloading'
                    ? t('settings.updateDownloading')
                    : undefined
              }
              onPress={() => void fetchUpdate()}
              last={!entitlement.appUserId}
            />
          ) : null}
          {entitlement.appUserId ? (
            <Row
              title={t('plus.supportId')}
              subtitle={t('plus.supportIdHint')}
              value={entitlement.appUserId.replace(/^\$RCAnonymousID:/, '').slice(0, 12)}
              onPress={() => {
                void Clipboard.setStringAsync(entitlement.appUserId ?? '');
                void Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
                Alert.alert(t('plus.supportId'), t('plus.copied'));
              }}
              chevron={false}
              last
            />
          ) : null}
        </Card>

        <Card>
          <Txt variant="headline">{t('settings.privacy')}</Txt>
          <Txt variant="footnote">{t('settings.privacyBody')}</Txt>
        </Card>
        <Card>
          <Txt variant="headline">{t('settings.disclaimer')}</Txt>
          <Txt variant="footnote">{t('settings.disclaimerBody')}</Txt>
        </Card>

        <Card style={[styles.rowsCard, styles.dangerCard]}>
          <Row title={t('settings.resetAll')} destructive onPress={confirmReset} chevron={false} last />
        </Card>
        <HelpText>{t('settings.resetHelp')}</HelpText>
      </Screen>
    </TabSwipe>
  );
}

const styles = StyleSheet.create({
  rowsCard: { padding: 0, paddingHorizontal: spacing.md, gap: 0 },
  profileCard: { flexDirection: 'row', alignItems: 'center', gap: 14, padding: spacing.md },
  profileText: { flex: 1, gap: 3 },
  pills: { flexDirection: 'row', gap: 6, marginTop: 4, flexWrap: 'wrap' },
  dangerCard: { marginTop: spacing.sm },
});
