import { useRouter } from 'expo-router';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';

import { useCycle } from '@/hooks/use-cycle';
import { useFormat } from '@/hooks/use-format';
import { useProgram } from '@/hooks/use-program';
import { relativeTime } from '@/hooks/use-relative-time';
import { selectLogForDate, useStore } from '@/store/store';
import { colors, spacing } from '@/ui/colors';
import { DailyCardPreview } from '@/ui/daily-card';
import { PhaseCard } from '@/ui/phase-card';
import { Bullets, Button, Card, Screen, Icon, Txt } from '@/ui/primitives';
import { Reveal } from '@/ui/reveal';

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

  return (
    <Screen>
      <Txt variant="footnote" style={{ marginLeft: spacing.xs }}>
        {fmt.long(today)}
      </Txt>

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
          <Button
            title={t('home.logPeriodStart')}
            symbol="drop.fill"
            onPress={() => router.push(`/log/${today}`)}
          />
        </Card>
      )}

      {program.position.notStarted ? (
        <Card>
          <Txt>
            {t('home.programNotStarted', { date: fmt.short(profile?.programStartDate ?? today) })}
          </Txt>
        </Card>
      ) : program.position.completed ? (
        <Card>
          <Txt>{t('home.programCompleted')}</Txt>
        </Card>
      ) : program.card ? (
        <Reveal index={1}>
          <DailyCardPreview
            card={program.card}
            isTracker={isTracker}
            programDay={program.position.programDay}
          />
        </Reveal>
      ) : (
        <Card>
          <Txt>{t('home.contentMissing')}</Txt>
        </Card>
      )}

      {todayLog && todayLog.symptoms.length > 0 ? (
        <Card onPress={() => router.push(`/log/${today}`)}>
          <Txt variant="footnote">
            {isTracker ? t('home.sheLogged', { name }) : t('home.youLogged')}
          </Txt>
          <Txt variant="headline">
            {todayLog.symptoms.map((s) => t(`log.symptomNames.${s}`)).join(' · ')}
          </Txt>
          {isTracker ? (
            <>
              <Txt variant="footnote">{program.content.symptomTips[todayLog.symptoms[0]].what}</Txt>
              <Txt color={colors.tint}>
                {program.content.symptomTips[todayLog.symptoms[0]].doThis}
              </Txt>
            </>
          ) : null}
        </Card>
      ) : null}

      {phaseInfo && isTracker ? (
        <Card onPress={() => router.push(`/(tabs)/home/phase/${phaseInfo.phase}`)}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Txt variant="footnote">{t('home.whatYouCanDo')}</Txt>
            <Icon name="chevron.right" size={14} color={colors.tertiaryLabel} />
          </View>
          <Bullets items={phaseInfo.whatYouCanDo.slice(0, 3)} />
        </Card>
      ) : null}

      {phaseInfo && !isTracker ? (
        <Card onPress={() => router.push(`/(tabs)/home/phase/${phaseInfo.phase}`)}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Txt variant="footnote">{t('home.whatHappensNow')}</Txt>
            <Icon name="chevron.right" size={14} color={colors.tertiaryLabel} />
          </View>
          <Bullets items={phaseInfo.howSheMayFeel.slice(0, 3)} />
        </Card>
      ) : null}

      {program.weekly && !program.position.notStarted ? (
        <Card
          onPress={() => router.push(`/(tabs)/home/weekly/${program.weekly!.id}`)}
          style={{ paddingVertical: 12 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: spacing.sm }}>
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
          variant={isTracker ? 'secondary' : 'primary'}
          onPress={() => router.push(`/log/${today}`)}
        />
      ) : null}

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
    </Screen>
  );
}
