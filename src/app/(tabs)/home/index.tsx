import { useRouter } from 'expo-router';
import { useTranslation } from 'react-i18next';
import { StyleSheet, View } from 'react-native';

import { useCycle, useCycleWeek } from '@/hooks/use-cycle';
import { useFormat } from '@/hooks/use-format';
import { useProgram } from '@/hooks/use-program';
import { relativeTime } from '@/hooks/use-relative-time';
import { selectLogForDate, useStore } from '@/store/store';
import { TabSwipe } from '@/ui/tab-swipe';
import { colors, spacing } from '@/ui/colors';
import { DailyCardPreview } from '@/ui/daily-card';
import { PhaseCard } from '@/ui/phase-card';
import { Bullets, Button, Card, Row, Screen, Icon, Txt } from '@/ui/primitives';
import { Reveal } from '@/ui/reveal';

/** Tappable card with a footnote heading, a chevron and up to three bullets. */
function BulletsCard({
  heading,
  items,
  onPress,
}: {
  heading: string;
  items: string[];
  onPress: () => void;
}) {
  return (
    <Card onPress={onPress}>
      <View style={styles.headingRow}>
        <Txt variant="footnote">{heading}</Txt>
        <Icon name="chevron.right" size={14} color={colors.tertiaryLabel} />
      </View>
      <Bullets items={items.slice(0, 3)} />
    </Card>
  );
}

/**
 * "This week": one grouped list with the cycle week (to the calendar) and the week's read (the
 * partner sees today's card of the program instead).
 */
function ThisWeek({
  rows,
}: {
  rows: { key: string; title: string; subtitle: string; onPress: () => void }[];
}) {
  const { t } = useTranslation();
  if (rows.length === 0) return null;
  return (
    <View style={styles.group}>
      <Txt variant="headline" style={styles.groupTitle}>
        {t('home.thisWeek')}
      </Txt>
      <Card style={styles.rowsCard}>
        {rows.map((row, i) => (
          <Row
            key={row.key}
            title={row.title}
            subtitle={row.subtitle}
            onPress={row.onPress}
            last={i === rows.length - 1}
          />
        ))}
      </Card>
    </View>
  );
}

export default function HomeScreen() {
  const { t } = useTranslation();
  const router = useRouter();
  const fmt = useFormat();
  const profile = useStore((s) => s.profile);
  const pairing = useStore((s) => s.pairing);
  const { today, snapshot } = useCycle();
  const program = useProgram();
  const cycleWeek = useCycleWeek();
  const todayLog = useStore(selectLogForDate(today));
  const isTracker = profile?.role === 'tracker';
  const name = profile?.partnerName ?? '';
  const phase = snapshot.today?.phase;
  const phaseInfo = phase ? program.content.phases[phase] : undefined;
  const openPhase = () =>
    phaseInfo ? router.push(`/(tabs)/home/phase/${phaseInfo.phase}`) : undefined;
  const openLog = () => router.push(`/log/${today}`);
  const openCalendar = () => router.navigate('/(tabs)/calendar');

  const programStatus = program.position.notStarted ? (
    <Card>
      <Txt>
        {t('home.programNotStarted', { date: fmt.short(profile?.programStartDate ?? today) })}
      </Txt>
    </Card>
  ) : program.position.completed ? (
    <Card>
      <Txt>{t('home.programCompleted')}</Txt>
    </Card>
  ) : program.card ? null : (
    <Card>
      <Txt>{t('home.contentMissing')}</Txt>
    </Card>
  );

  const weekRows: { key: string; title: string; subtitle: string; onPress: () => void }[] = [];
  if (cycleWeek) {
    weekRows.push({
      key: 'week',
      title: t('weeks.weekN', { n: cycleWeek.week }),
      subtitle: cycleWeek.focus.title,
      onPress: openCalendar,
    });
  }
  if (isTracker && program.weekly && !program.position.notStarted) {
    const id = program.weekly.id;
    weekRows.push({
      key: 'weekly',
      title: t('home.weeklyArticle'),
      subtitle: program.weekly.title,
      onPress: () => router.push(`/(tabs)/home/weekly/${id}`),
    });
  }
  if (!isTracker && programStatus === null && program.card) {
    const id = program.card.id;
    weekRows.push({
      key: 'partner',
      title: t('home.partnerLearnsToday'),
      subtitle: program.card.title,
      onPress: () => router.push(`/(tabs)/home/daily/${id}`),
    });
  }

  const pairingRows = (
    <>
      {isTracker ? (
        <Button
          title={t('home.scanPartner')}
          symbol="qrcode.viewfinder"
          variant="secondary"
          onPress={() => router.push('/scan')}
        />
      ) : (
        <Button
          title={t('home.shareWithPartner')}
          symbol="qrcode"
          variant="secondary"
          onPress={() => router.push('/share')}
        />
      )}
      <Txt variant="footnote" style={{ textAlign: 'center' }}>
        {isTracker
          ? pairing.lastSyncAt
            ? t('home.lastSynced', { when: relativeTime(pairing.lastSyncAt) })
            : t('home.neverSynced')
          : pairing.lastSharedAt
            ? t('home.lastShared', { when: relativeTime(pairing.lastSharedAt) })
            : t('home.neverShared')}
      </Txt>
    </>
  );

  const symptomTip = todayLog && todayLog.symptoms.length > 0 && (
    <Card onPress={openLog}>
      <Txt variant="footnote">
        {isTracker ? t('home.sheLogged', { name }) : t('home.youLogged')}
      </Txt>
      <Txt variant="headline">
        {todayLog.symptoms.map((s) => t(`log.symptomNames.${s}`)).join(' · ')}
      </Txt>
      <Txt color={isTracker ? colors.tint : colors.secondaryLabel}>
        {isTracker
          ? program.content.symptomTips[todayLog.symptoms[0]].doThis
          : program.content.symptomTips[todayLog.symptoms[0]].what}
      </Txt>
    </Card>
  );

  return (
    <TabSwipe tab="home">
      <Screen title={t('home.title')} subtitle={fmt.long(today)}>
        {snapshot.hasData ? (
          <Reveal>
            <PhaseCard snapshot={snapshot} name={name} isTracker={isTracker} />
          </Reveal>
        ) : (
          <Card>
            <Txt variant="title">{t('home.noDataTitle')}</Txt>
            <Txt color={colors.secondaryLabel}>
              {isTracker ? t('home.noDataBodyTracker', { name }) : t('home.noDataBodyUser')}
            </Txt>
            <Button title={t('home.logPeriodStart')} symbol="drop.fill" onPress={openLog} />
          </Card>
        )}

        {isTracker ? (
          <>
            {programStatus}
            {programStatus === null && program.card ? (
              <Reveal index={1}>
                <DailyCardPreview card={program.card} />
              </Reveal>
            ) : null}
            {symptomTip}
            <ThisWeek rows={weekRows} />
            {snapshot.hasData ? (
              <Button
                title={t('home.logToday')}
                symbol="square.and.pencil"
                variant="secondary"
                onPress={openLog}
              />
            ) : null}
          </>
        ) : (
          <>
            {phaseInfo ? (
              <Reveal index={1}>
                <BulletsCard
                  heading={t('home.selfCare')}
                  items={phaseInfo.selfCare}
                  onPress={openPhase}
                />
              </Reveal>
            ) : null}
            {snapshot.hasData ? (
              <Button
                title={t('home.logToday')}
                symbol="square.and.pencil"
                variant="primary"
                onPress={openLog}
              />
            ) : null}
            {symptomTip}
            {programStatus}
            <ThisWeek rows={weekRows} />
          </>
        )}

        {pairingRows}
      </Screen>
    </TabSwipe>
  );
}

const styles = StyleSheet.create({
  headingRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  group: { gap: spacing.sm },
  groupTitle: { marginLeft: spacing.xs },
  rowsCard: { padding: 0, paddingHorizontal: spacing.md, gap: 0 },
});
