/**
 * Article-style reading: a phase-tinted hero, serif body text drawn straight on the screen
 * background, lede, pull quote, a scroll progress bar and a "next" row. Shared by the
 * daily card, weekly read, monthly wrap and phase pages.
 */
import { usePathname, useRouter } from 'expo-router';
import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  StyleSheet,
  Text,
  useColorScheme,
  View,
  type NativeScrollEvent,
  type NativeSyntheticEvent,
} from 'react-native';

import {
  getDailyCard,
  getWeeklyRead,
  isDailyUnlocked,
  isWeeklyUnlocked,
  WEEKS_PER_MONTH,
  type DailyCard,
  type LanguageContent,
  type ProgramPosition,
  type WeeklyRead,
} from '@/content';
import type { Phase } from '@/domain/types';
import { colors, fonts, palette, phaseColor, phaseGradient, radius, spacing } from '@/ui/colors';
import { Card, Icon, Txt } from '@/ui/primitives';

const WORDS_PER_MINUTE = 200;
const BODY_MAX_SCALE = 1.6;

/** Reading time in whole minutes, at least one. */
export function readingMinutes(paragraphs: string[]): number {
  const words = paragraphs.join(' ').split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / WORDS_PER_MINUTE));
}

/** The first hex colour stop of a CSS gradient string. */
function firstStop(gradient: string): string {
  return gradient.match(/#[0-9A-Fa-f]{6}/)?.[0] ?? palette.light.cardSecondary;
}

export function ReadingHero({
  kicker,
  title,
  meta,
  phase,
}: {
  kicker: string;
  title: string;
  meta?: string;
  phase?: Phase;
}) {
  const dark = useColorScheme() === 'dark';
  const scheme = dark ? palette.dark : palette.light;
  const top = phase
    ? firstStop(phaseGradient[phase][dark ? 'dark' : 'light'])
    : scheme.cardSecondary;
  return (
    <View
      style={[
        styles.hero,
        {
          experimental_backgroundImage: `linear-gradient(180deg, ${top} 0%, ${scheme.background} 90%)`,
        },
      ]}
      accessibilityRole="header">
      <Txt variant="caption" color={phase ? phaseColor[phase] : colors.tint} style={styles.kicker}>
        {kicker.toUpperCase()}
      </Txt>
      <Txt style={styles.title}>{title}</Txt>
      {meta ? <Txt variant="footnote">{meta}</Txt> : null}
    </View>
  );
}

/** Whether the paragraph can open with a drop cap: a letter, not a quote or a digit. */
/**
 * The pull quote for a body: the first sentence of the middle paragraph when it is 60-160
 * characters, else the nearest paragraph whose first sentence is. Undefined for short bodies.
 */
export function pullQuoteFor(paragraphs: string[]): string | undefined {
  if (paragraphs.length < 3) return undefined;
  const middle = Math.floor(paragraphs.length / 2);
  const order = [middle];
  for (let step = 1; step < paragraphs.length; step++) {
    if (middle + step < paragraphs.length) order.push(middle + step);
    if (middle - step >= 0) order.push(middle - step);
  }
  for (const index of order) {
    const sentence = paragraphs[index].split('. ')[0].trim();
    if (sentence.length >= 60 && sentence.length <= 160) {
      return /[.!?"”]$/.test(sentence) ? sentence : `${sentence}.`;
    }
  }
  return undefined;
}

function Paragraph({ text }: { text: string }) {
  return (
    <Text style={styles.paragraph} allowFontScaling maxFontSizeMultiplier={1.6}>
      {text}
    </Text>
  );
}

export function PullQuote({ text }: { text: string }) {
  return (
    <View style={styles.pullQuote} testID="pull-quote">
      <Text allowFontScaling maxFontSizeMultiplier={BODY_MAX_SCALE} style={styles.pullQuoteText}>
        {text}
      </Text>
    </View>
  );
}

/**
 * Body paragraphs on the screen background. `lede` styles the first paragraph as an opening,
 * `pullQuote` is drawn after the
 * second paragraph without removing it from its paragraph.
 */
export function ReadingBody({
  paragraphs,
  lede,
  pullQuote,
}: {
  paragraphs: string[];
  lede?: boolean;
  pullQuote?: string;
}) {
  return (
    <View style={styles.body}>
      {paragraphs.map((p, i) => {
        const block =
          lede && i === 0 ? (
            <Text
              key={i}
              allowFontScaling
              maxFontSizeMultiplier={BODY_MAX_SCALE}
              style={styles.lede}>
              {p}
            </Text>
          ) : (
            <Paragraph key={i} text={p} />
          );
        if (pullQuote && i === 1) {
          return [block, <PullQuote key="quote" text={pullQuote} />];
        }
        return block;
      })}
    </View>
  );
}

/** Bulleted list in the reading typeface, for the sections on a phase page. */
export function ReadingBullets({ items }: { items: string[] }) {
  return (
    <View style={{ gap: spacing.sm }}>
      {items.map((item, i) => (
        <View key={i} style={styles.bullet}>
          <Text allowFontScaling maxFontSizeMultiplier={BODY_MAX_SCALE} style={styles.bulletDot}>
            •
          </Text>
          <Text
            allowFontScaling
            maxFontSizeMultiplier={BODY_MAX_SCALE}
            style={[styles.paragraph, { flex: 1 }]}>
            {item}
          </Text>
        </View>
      ))}
    </View>
  );
}

/** Scroll progress 0..1 of a Screen, from its scroll events. */
export function useReadingProgress() {
  const [progress, setProgress] = useState(0);
  const onScroll = useCallback((e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const { contentOffset, contentSize, layoutMeasurement } = e.nativeEvent;
    const scrollable = contentSize.height - layoutMeasurement.height;
    if (scrollable <= 0) {
      setProgress(1);
      return;
    }
    setProgress(Math.min(1, Math.max(0, contentOffset.y / scrollable)));
  }, []);
  return { progress, onScroll };
}

/** Thin bar over the top of the screen showing how far the reader has come. */
export function ReadingProgressBar({ progress }: { progress: number }) {
  return (
    <View style={styles.progressTrack} pointerEvents="none" accessible={false}>
      <View style={[styles.progressFill, { width: `${Math.round(progress * 100)}%` }]} />
    </View>
  );
}

/** Pushes within the stack the reader is in: the Home stack stays Home, otherwise Learn. */
export function useReadingStack() {
  const pathname = usePathname();
  return pathname.startsWith('/home') ? '/(tabs)/home' : '/(tabs)/learn';
}

export function NextRow({
  label,
  title,
  onPress,
}: {
  label: string;
  title: string;
  onPress: () => void;
}) {
  return (
    <Card onPress={onPress} style={styles.nextRow}>
      <View style={{ flex: 1, gap: 2 }}>
        <Txt variant="footnote" color={colors.tint} style={{ fontWeight: '600' }}>
          {label.toUpperCase()}
        </Txt>
        <Txt variant="headline">{title}</Txt>
      </View>
      <Icon name="chevron.right" size={14} color={colors.tertiaryLabel} />
    </Card>
  );
}

/** The next daily card when it exists and is unlocked, else undefined. */
export function nextDailyCard(
  content: LanguageContent,
  position: ProgramPosition,
  card: DailyCard,
): DailyCard | undefined {
  const sameMonth = getDailyCard(content, card.month, card.day + 1);
  const next = sameMonth ?? getDailyCard(content, card.month + 1, 1);
  if (!next || !isDailyUnlocked(position, next.month, next.day)) return undefined;
  return next;
}

/** The next weekly read when it exists and is unlocked, else undefined. */
export function nextWeeklyRead(
  content: LanguageContent,
  position: ProgramPosition,
  read: WeeklyRead,
): WeeklyRead | undefined {
  const next =
    read.week < WEEKS_PER_MONTH
      ? getWeeklyRead(content, read.month, read.week + 1)
      : getWeeklyRead(content, read.month + 1, 1);
  if (!next || !isWeeklyUnlocked(position, next.month, next.week)) return undefined;
  return next;
}

export function NextDailyRow({
  content,
  position,
  card,
}: {
  content: LanguageContent;
  position: ProgramPosition;
  card: DailyCard;
}) {
  const { t } = useTranslation();
  const router = useRouter();
  const stack = useReadingStack();
  const next = nextDailyCard(content, position, card);
  if (!next) return null;
  return (
    <NextRow
      label={t('reading.tomorrow')}
      title={next.title}
      onPress={() => router.push(`${stack}/daily/${next.id}`)}
    />
  );
}

export function NextWeeklyRow({
  content,
  position,
  read,
}: {
  content: LanguageContent;
  position: ProgramPosition;
  read: WeeklyRead;
}) {
  const { t } = useTranslation();
  const router = useRouter();
  const stack = useReadingStack();
  const next = nextWeeklyRead(content, position, read);
  if (!next) return null;
  return (
    <NextRow
      label={t('reading.nextWeek')}
      title={next.title}
      onPress={() => router.push(`${stack}/weekly/${next.id}`)}
    />
  );
}

const styles = StyleSheet.create({
  hero: {
    marginHorizontal: -spacing.md,
    marginTop: -spacing.sm,
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.md,
    paddingBottom: spacing.sm,
    gap: spacing.xs,
  },
  kicker: { fontWeight: '600', letterSpacing: 0.6 },
  title: {
    fontSize: 30,
    lineHeight: 36,
    fontWeight: '700',
    fontFamily: fonts?.rounded,
    color: colors.label,
  },
  body: { paddingHorizontal: spacing.sm, gap: spacing.md },
  paragraph: {
    fontFamily: fonts?.serif,
    fontSize: 19,
    lineHeight: 29,
    color: colors.label,
  },
  lede: {
    fontFamily: fonts?.serif,
    fontSize: 21,
    lineHeight: 31,
    color: colors.readingLede,
  },
  pullQuote: {
    borderLeftWidth: 3,
    borderLeftColor: colors.tint,
    paddingLeft: 14,
    marginVertical: spacing.sm,
  },
  pullQuoteText: {
    fontFamily: fonts?.serif,
    fontSize: 19,
    lineHeight: 29,
    fontStyle: 'italic',
    color: colors.label,
  },
  bullet: { flexDirection: 'row', gap: spacing.sm },
  bulletDot: { fontSize: 19, lineHeight: 29, color: colors.secondaryLabel },
  progressTrack: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 3,
    backgroundColor: colors.fill,
  },
  progressFill: { height: 3, backgroundColor: colors.tint, borderRadius: radius.chip },
  nextRow: { flexDirection: 'row', alignItems: 'center', gap: spacing.sm },
});
