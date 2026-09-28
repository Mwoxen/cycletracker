import { Link, useRouter } from 'expo-router';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';

import { useCycle } from '@/hooks/use-cycle';
import { useFormat } from '@/hooks/use-format';
import { useProgram } from '@/hooks/use-program';
import { useStore } from '@/store/store';
import { colors, spacing } from '@/ui/colors';
import { DailyCardPreview } from '@/ui/daily-card';
import { PhaseCard } from '@/ui/phase-card';
import { Bullets, Button, Card, Screen, Symbol, Txt } from '@/ui/primitives';

export default function HomeScreen() {
  const { t } = useTranslation();
  const router = useRouter();
  const fmt = useFormat();
  const profile = useStore((s) => s.profile);
  const { today, snapshot } = useCycle();
  const program = useProgram();
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
        <PhaseCard snapshot={snapshot} name={name} isTracker={isTracker} />
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
      ) : program.card ? (
        <DailyCardPreview card={program.card} isTracker={isTracker} />
      ) : (
        <Card>
          <Txt>
            {program.position.completed ? t('home.programCompleted') : t('home.contentMissing')}
          </Txt>
        </Card>
      )}

      {phaseInfo && isTracker ? (
        <Link href={`/(tabs)/learn/phase/${phaseInfo.phase}`} asChild>
          <Card>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Txt variant="footnote">{t('home.whatYouCanDo')}</Txt>
              <Symbol name="chevron.right" size={14} color={colors.tertiaryLabel} />
            </View>
            <Bullets items={phaseInfo.whatYouCanDo.slice(0, 3)} />
          </Card>
        </Link>
      ) : null}

      {phaseInfo && !isTracker ? (
        <Link href={`/(tabs)/learn/phase/${phaseInfo.phase}`} asChild>
          <Card>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Txt variant="footnote">{t('home.whatHappensNow')}</Txt>
              <Symbol name="chevron.right" size={14} color={colors.tertiaryLabel} />
            </View>
            <Bullets items={phaseInfo.howSheMayFeel.slice(0, 3)} />
          </Card>
        </Link>
      ) : null}

      {program.weekly ? (
        <Link href={`/(tabs)/learn/weekly/${program.weekly.id}`} asChild>
          <Card>
            <Txt variant="footnote">{t('home.conversation')}</Txt>
            <Txt variant="headline">{program.weekly.conversationQuestion}</Txt>
          </Card>
        </Link>
      ) : null}

      {snapshot.hasData ? (
        <Button
          title={t('home.logToday')}
          symbol="square.and.pencil"
          variant={isTracker ? 'secondary' : 'primary'}
          onPress={() => router.push(`/log/${today}`)}
        />
      ) : null}
    </Screen>
  );
}
