import { useRouter } from 'expo-router';
import { useTranslation } from 'react-i18next';
import { StyleSheet, View } from 'react-native';

import { useMonthAccess } from '@/entitlements';
import { useCycle } from '@/hooks/use-cycle';
import { useFormat } from '@/hooks/use-format';
import { useProgram } from '@/hooks/use-program';
import { relativeTime } from '@/hooks/use-relative-time';
import { selectLogForDate, useStore } from '@/store/store';
import { colors, fontFor, phaseColor, radius, spacing } from '@/ui/colors';
import { DailyCardPreview } from '@/ui/daily-card';
import { Hero } from '@/ui/hero';
import { PhaseActionsCard } from '@/ui/phase-actions';
import { PlusTeaserCard } from '@/ui/plus-teaser';
import { Bullets, Button, Card, Icon, Screen, SectionTitle, Txt } from '@/ui/primitives';
import { readingMinutes } from '@/ui/reading';
import { Reveal } from '@/ui/reveal';
import { TabSwipe } from '@/ui/tab-swipe';
import { usePhaseTheme } from '@/ui/theme';

/** Tappable card with a card title, a chevron and up to three bullets. */
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
        <Txt variant="cardTitle">{heading}</Txt>
        <Icon name="chevron.right" size={14} color={colors.tertiaryLabel} />
      </View>
      <Bullets items={items.slice(0, 3)} />
    </Card>
  );
}

/** Small capsule in `soft` with text in the accent, for what she logged today. */
function SoftChip({ label }: { label: string }) {
  const theme = usePhaseTheme();
  return (
    <View style={[styles.softChip, { backgroundColor: theme.soft }]}>
      <Txt variant="footnote" color={theme.accent} style={styles.softChipText}>
        {label}
      </Txt>
    </View>
  );
}

export default function HomeScreen() {
  const { t } = useTranslation();
  const router = useRouter();
  const fmt = useFormat();
  const theme = usePhaseTheme();
  const profile = useStore((s) => s.profile);
  const pairing = useStore((s) => s.pairing);
  const { today, snapshot } = useCycle();
  const program = useProgram();
  const todayLog = useStore(selectLogForDate(today));
  const cardUnlocked = useMonthAccess(program.card?.month ?? 1);
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

  // What she logged today, as chips; the first symptom with a tip gives the why and the action.
  const logChips: string[] = [];
  if (todayLog?.flow) logChips.push(t(`log.flows.${todayLog.flow}`));
  for (const s of todayLog?.symptoms ?? []) logChips.push(t(`log.symptomNames.${s}`));
  if (todayLog?.mood) logChips.push(t(`log.moods.${todayLog.mood}`));
  if (todayLog?.energy) logChips.push(t(`log.energies.${todayLog.energy}`));
  const tip = todayLog?.symptoms.length ? program.content.symptomTips[todayLog.symptoms[0]] : null;

  const syncLine = isTracker
    ? pairing.lastSyncAt
      ? t('home.lastSynced', { when: relativeTime(pairing.lastSyncAt) })
      : t('home.neverSynced')
    : pairing.lastSharedAt
      ? t('home.lastShared', { when: relativeTime(pairing.lastSharedAt) })
      : t('home.neverShared');
  const synced = isTracker ? !!pairing.lastSyncAt : !!pairing.lastSharedAt;

  const actions = (
    <View style={styles.actions}>
      {snapshot.hasData ? (
        <Button title={t('home.logToday')} variant="primary" onPress={openLog} />
      ) : null}
      {isTracker ? (
        <Button
          title={t('home.scanPartner')}
          variant="secondary"
          onPress={() => router.push('/scan')}
        />
      ) : (
        <Button
          title={t('home.shareWithPartner')}
          variant="secondary"
          onPress={() => router.push('/share')}
        />
      )}
      <View style={styles.syncRow}>
        <View
          style={[
            styles.syncDot,
            { backgroundColor: synced ? phaseColor.follicular : colors.tertiaryLabel },
          ]}
        />
        <Txt variant="footnote">{syncLine}</Txt>
      </View>
      <Txt variant="caption" style={styles.centered}>
        {t('home.localOnly')}
      </Txt>
    </View>
  );

  return (
    <TabSwipe tab="home">
      <Screen title={t('home.title')} subtitle={fmt.long(today)}>
        {snapshot.hasData ? (
          <Reveal>
            <Hero snapshot={snapshot} name={name} isTracker={isTracker} />
          </Reveal>
        ) : (
          <Card>
            <Txt variant="cardTitle">{t('home.noDataTitle')}</Txt>
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
                {cardUnlocked ? (
                  <DailyCardPreview
                    card={program.card}
                    isTracker
                    programDay={program.position.programDay}
                  />
                ) : (
                  <PlusTeaserCard card={program.card} programDay={program.position.programDay} />
                )}
              </Reveal>
            ) : null}

            {logChips.length > 0 ? (
              <Reveal index={2}>
                <Card onPress={openLog}>
                  <Txt variant="cardTitle">{t('home.sheLogged', { name })}</Txt>
                  <View style={styles.chips}>
                    {logChips.map((c) => (
                      <SoftChip key={c} label={c} />
                    ))}
                  </View>
                  {tip ? (
                    <View style={styles.tip}>
                      <Txt variant="callout">
                        <Txt variant="callout" style={styles.bold}>
                          {t('home.why')}:
                        </Txt>{' '}
                        {tip.what}
                      </Txt>
                      <Txt variant="callout">
                        <Txt variant="callout" style={styles.bold}>
                          {t('home.doThis')}:
                        </Txt>{' '}
                        {tip.doThis}
                      </Txt>
                    </View>
                  ) : null}
                </Card>
              </Reveal>
            ) : null}

            {phaseInfo && snapshot.today ? (
              <Reveal index={3}>
                <PhaseActionsCard
                  phase={phaseInfo.phase}
                  cycleDay={snapshot.today.cycleDay}
                  cycleStart={snapshot.today.cycleStart}
                  items={phaseInfo.whatYouCanDo}
                  onOpen={openPhase}
                />
              </Reveal>
            ) : null}

            {program.weekly && !program.position.notStarted ? (
              <Reveal index={4}>
                <SectionTitle>
                  {t('learn.thisWeekMinutes', {
                    min: Math.max(2, readingMinutes(program.weekly.body)),
                  })}
                </SectionTitle>
                <Card onPress={() => router.push(`/(tabs)/home/weekly/${program.weekly!.id}`)}>
                  <Txt variant="cardTitle">{program.weekly.title}</Txt>
                  <View style={styles.talkBox}>
                    <Txt variant="boxLabel" color={theme.accent}>
                      {t('home.talkTogether').toUpperCase()}
                    </Txt>
                    <Txt variant="callout" style={styles.question}>
                      “{program.weekly.conversationQuestion}”
                    </Txt>
                  </View>
                </Card>
              </Reveal>
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

            {todayLog && todayLog.symptoms.length > 0 ? (
              <Card onPress={openLog}>
                <Txt variant="cardTitle">{t('home.youLogged')}</Txt>
                <View style={styles.chips}>
                  {logChips.map((c) => (
                    <SoftChip key={c} label={c} />
                  ))}
                </View>
                <Txt variant="callout" color={colors.secondaryLabel}>
                  {program.content.symptomTips[todayLog.symptoms[0]].what}
                </Txt>
              </Card>
            ) : null}

            {programStatus}
            {programStatus === null && program.card ? (
              <View>
                <SectionTitle>{t('home.partnerLearnsToday')}</SectionTitle>
                <Card onPress={() => router.push(`/(tabs)/home/daily/${program.card!.id}`)}>
                  <View style={styles.headingRow}>
                    <View style={{ flex: 1, flexShrink: 1, gap: 2, marginRight: spacing.sm }}>
                      <Txt variant="cardTitle">{program.card.title}</Txt>
                      <Txt variant="footnote">
                        {t('home.todaysCardDay', { day: program.position.programDay })}
                      </Txt>
                    </View>
                    <Icon name="chevron.right" size={14} color={colors.tertiaryLabel} />
                  </View>
                </Card>
              </View>
            ) : null}
          </>
        )}

        {actions}
      </Screen>
    </TabSwipe>
  );
}

const styles = StyleSheet.create({
  headingRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  chips: { flexDirection: 'row', flexWrap: 'wrap', gap: 6, marginTop: 2 },
  softChip: { borderRadius: radius.chip, paddingVertical: 5, paddingHorizontal: 11 },
  softChipText: { fontFamily: fontFor(600) },
  tip: { gap: 6, marginTop: spacing.xs },
  bold: { fontFamily: fontFor(700) },
  talkBox: {
    backgroundColor: colors.cardSecondary,
    borderRadius: radius.cell,
    paddingVertical: 14,
    paddingHorizontal: 16,
    gap: 6,
    marginTop: spacing.xs,
  },
  question: { fontStyle: 'italic' },
  actions: { gap: spacing.sm + spacing.xs, marginTop: spacing.sm },
  syncRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 7,
    marginTop: spacing.xs,
  },
  syncDot: { width: 7, height: 7, borderRadius: 4 },
  centered: { textAlign: 'center' },
});
