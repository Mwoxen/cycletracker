import { useRouter } from 'expo-router';
import { useTranslation } from 'react-i18next';
import { StyleSheet, View } from 'react-native';

import { useCycle } from '@/hooks/use-cycle';
import { useFormat } from '@/hooks/use-format';
import { useProgram } from '@/hooks/use-program';
import { relativeTime } from '@/hooks/use-relative-time';
import { selectLogForDate, useStore } from '@/store/store';
import { TabSwipe } from '@/ui/tab-swipe';
import { colors, spacing } from '@/ui/colors';
import { DailyCardPreview } from '@/ui/daily-card';
import { PhaseCard } from '@/ui/phase-card';
import { Bullets, Button, Card, Screen, Icon, Txt } from '@/ui/primitives';
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

export default function HomeScreen() {
  const { t } = useTranslation();
  const router = useRouter();
  const fmt = useFormat();
  const profile = useStore((s) => s.profile);
  const pairing = useStore((s) => s.pairing);
  const { today, snapshot } = useCycle();
  const program = useProgram();
  const todayLog = useStore(selectLogForDate(today));
  const isTracker = profile?.role === 'tracker';
  const name = profile?.partnerName ?? '';
  const phase = snapshot.today?.phase;
  const phaseInfo = phase ? program.content.phases[phase] : undefined;
  const openPhase = () =>
    phaseInfo ? router.push(`/(tabs)/home/phase/${phaseInfo.phase}`) : undefined;
  const openLog = () => router.push(`/log/${today}`);

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
                <DailyCardPreview
                  card={program.card}
                  isTracker
                  programDay={program.position.programDay}
                />
              </Reveal>
            ) : null}

            {todayLog && todayLog.symptoms.length > 0 ? (
              <Card onPress={openLog}>
                <Txt variant="footnote">{t('home.sheLogged', { name })}</Txt>
                <Txt variant="headline">
                  {todayLog.symptoms.map((s) => t(`log.symptomNames.${s}`)).join(' · ')}
                </Txt>
                <Txt variant="footnote">
                  {program.content.symptomTips[todayLog.symptoms[0]].what}
                </Txt>
                <Txt color={colors.tint}>
                  {program.content.symptomTips[todayLog.symptoms[0]].doThis}
                </Txt>
              </Card>
            ) : null}

            {phaseInfo ? (
              <BulletsCard
                heading={t('home.whatYouCanDo')}
                items={phaseInfo.whatYouCanDo}
                onPress={openPhase}
              />
            ) : null}

            {program.weekly && !program.position.notStarted ? (
              <Card
                onPress={() => router.push(`/(tabs)/home/weekly/${program.weekly!.id}`)}
                style={{ paddingVertical: 12 }}>
                <View style={styles.weeklyRow}>
                  <View style={{ flex: 1, gap: 2 }}>
                    <Txt variant="footnote">{t('home.conversation')}</Txt>
                    <Txt variant="headline">{program.weekly.conversationQuestion}</Txt>
                  </View>
                  <Icon name="chevron.right" size={14} color={colors.tertiaryLabel} />
                </View>
              </Card>
            ) : null}

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
                  heading={t('home.howYouMayFeel')}
                  items={phaseInfo.howSheMayFeel}
                  onPress={openPhase}
                />
              </Reveal>
            ) : null}
            {phaseInfo ? (
              <Reveal index={2}>
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

            {todayLog && todayLog.symptoms.length > 0 ? (
              <Card onPress={openLog}>
                <Txt variant="footnote">{t('home.youLogged')}</Txt>
                <Txt variant="headline">
                  {todayLog.symptoms.map((s) => t(`log.symptomNames.${s}`)).join(' · ')}
                </Txt>
                <Txt color={colors.secondaryLabel}>
                  {program.content.symptomTips[todayLog.symptoms[0]].what}
                </Txt>
              </Card>
            ) : null}

            {programStatus}
            {programStatus === null && program.card ? (
              <Card
                onPress={() => router.push(`/(tabs)/home/daily/${program.card!.id}`)}
                style={{ paddingVertical: 12 }}>
                <View style={styles.weeklyRow}>
                  <View style={{ flex: 1, gap: 2 }}>
                    <Txt variant="footnote">{t('home.partnerLearnsToday')}</Txt>
                    <Txt variant="headline">{program.card.title}</Txt>
                    <Txt variant="caption" color={colors.tertiaryLabel}>
                      {t('home.todaysCardDay', { day: program.position.programDay })}
                    </Txt>
                  </View>
                  <Icon name="chevron.right" size={14} color={colors.tertiaryLabel} />
                </View>
              </Card>
            ) : null}
          </>
        )}

        {pairingRows}
      </Screen>
    </TabSwipe>
  );
}

const styles = StyleSheet.create({
  headingRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  weeklyRow: { flexDirection: 'row', alignItems: 'center', gap: spacing.sm },
});
