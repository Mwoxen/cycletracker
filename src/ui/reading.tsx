/**
 * Reading screens (docs/design/README.md §2–3): accent kicker, light title, body at 18/1.62 on
 * the screen background, boxes in `soft`, a "tomorrow" row between hair lines, sources and a
 * scroll progress bar. Shared by the daily card, weekly read, monthly wrap and phase pages.
 */
import { usePathname, useRouter } from 'expo-router';
import { useCallback, useState, type PropsWithChildren } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Pressable,
  StyleSheet,
  Text,
  View,
  type ColorValue,
  type NativeScrollEvent,
  type NativeSyntheticEvent,
  type StyleProp,
  type ViewStyle,
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
import { colors, fontFor, phaseColor, radius, spacing } from '@/ui/colors';
import { Icon, Txt } from '@/ui/primitives';
import { usePhaseTheme } from '@/ui/theme';

const WORDS_PER_MINUTE = 200;
const BODY_MAX_SCALE = 1.6;

/** Reading time in whole minutes, at least one. */
export function readingMinutes(paragraphs: string[]): number {
  const words = paragraphs.join(' ').split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / WORDS_PER_MINUTE));
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
  const theme = usePhaseTheme();
  return (
    <View style={styles.hero} accessibilityRole="header">
      <Txt variant="boxLabel" color={phase ? phaseColor[phase] : theme.accent}>
        {kicker.toUpperCase()}
      </Txt>
      <Txt variant="readTitle">{title}</Txt>
      {meta ? (
        <Txt variant="footnote" style={styles.meta}>
          {meta}
        </Txt>
      ) : null}
    </View>
  );
}

function Paragraph({ text }: { text: string }) {
  return (
    <Text style={styles.paragraph} allowFontScaling maxFontSizeMultiplier={BODY_MAX_SCALE}>
      {text}
    </Text>
  );
}

/** Body paragraphs on the screen background, 18 pt at 1.62 with 18 pt between. */
export function ReadingBody({ paragraphs }: { paragraphs: string[] }) {
  return (
    <View style={styles.body}>
      {paragraphs.map((p, i) => (
        <Paragraph key={i} text={p} />
      ))}
    </View>
  );
}

/**
 * A box in `soft` with an accent label: the action on the daily card, the conversation
 * question on the weekly read.
 */
export function ReadingBox({
  label,
  children,
  style,
}: PropsWithChildren<{ label: string; style?: StyleProp<ViewStyle> }>) {
  const theme = usePhaseTheme();
  return (
    <View style={[styles.box, { backgroundColor: theme.soft }, style]}>
      <Txt variant="boxLabel" color={theme.accent}>
        {label.toUpperCase()}
      </Txt>
      {children}
    </View>
  );
}

/**
 * A titled section of a reading page, drawn straight on the background like the body text.
 * `accent` adds a thin left rule in that colour for the section the page is really about.
 */
export function ReadingSection({
  title,
  accent,
  children,
}: PropsWithChildren<{ title: string; accent?: ColorValue }>) {
  return (
    <View
      style={[styles.section, accent ? [styles.sectionAccent, { borderLeftColor: accent }] : null]}>
      <Txt variant="cardTitle" accessibilityRole="header">
        {title}
      </Txt>
      {children}
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
            style={[styles.paragraph, styles.bulletText]}>
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
  const theme = usePhaseTheme();
  return (
    <View style={styles.progressTrack} pointerEvents="none" accessible={false}>
      <View
        style={[
          styles.progressFill,
          { width: `${Math.round(progress * 100)}%`, backgroundColor: theme.accent },
        ]}
      />
    </View>
  );
}

/** Pushes within the stack the reader is in: the Home stack stays Home, otherwise Learn. */
export function useReadingStack() {
  const pathname = usePathname();
  return pathname.startsWith('/home') ? '/(tabs)/home' : '/(tabs)/learn';
}

/**
 * "Tomorrow: title" between two hair lines. Without `onPress` the row is the locked state and
 * says so instead of a chevron.
 */
export function NextRow({
  label,
  title,
  onPress,
  lockedText,
}: {
  label: string;
  title: string;
  onPress?: () => void;
  lockedText?: string;
}) {
  const theme = usePhaseTheme();
  const content = (
    <View style={styles.nextRow}>
      <View style={{ flex: 1, flexShrink: 1, marginRight: spacing.sm }}>
        <Txt variant="callout" color={colors.secondaryLabel}>
          <Txt variant="callout" color={theme.accent} style={styles.nextLabel}>
            {label}:
          </Txt>{' '}
          <Txt variant="callout" color={colors.label}>
            {title}
          </Txt>
        </Txt>
      </View>
      {onPress ? (
        <Icon name="chevron.right" size={14} color={colors.tertiaryLabel} />
      ) : lockedText ? (
        <Txt variant="footnote" color={colors.tertiaryLabel}>
          {lockedText}
        </Txt>
      ) : null}
    </View>
  );
  if (!onPress) return content;
  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="button"
      style={({ pressed }) => pressed && styles.pressed}>
      {content}
    </Pressable>
  );
}

/** The next daily card when it exists, with whether it is unlocked yet. */
export function nextDailyCard(
  content: LanguageContent,
  position: ProgramPosition,
  card: DailyCard,
): { card: DailyCard; unlocked: boolean } | undefined {
  const sameMonth = getDailyCard(content, card.month, card.day + 1);
  const next = sameMonth ?? getDailyCard(content, card.month + 1, 1);
  if (!next) return undefined;
  return { card: next, unlocked: isDailyUnlocked(position, next.month, next.day) };
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
      title={next.card.title}
      onPress={next.unlocked ? () => router.push(`${stack}/daily/${next.card.id}`) : undefined}
      lockedText={next.unlocked ? undefined : t('reading.unlocksTomorrow')}
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
    paddingTop: 6,
    paddingBottom: 0,
    gap: spacing.sm,
  },
  meta: { fontSize: 14, lineHeight: 19 },
  body: { paddingHorizontal: spacing.sm, gap: 18 },
  // 18 at 1.62 is 29.16; whole-number line heights keep iOS from dropping the last line.
  paragraph: {
    fontFamily: fontFor(400),
    fontSize: 18,
    lineHeight: 29,
    color: colors.label,
  },
  bulletText: { flex: 1, flexShrink: 1 },
  box: {
    borderRadius: radius.card,
    padding: spacing.card,
    gap: spacing.sm + spacing.xs,
    marginHorizontal: spacing.sm,
  },
  section: { paddingHorizontal: spacing.sm, gap: spacing.sm },
  sectionAccent: { borderLeftWidth: 3, paddingLeft: 14, marginLeft: spacing.sm - 3 },
  // No `gap` on rows that hold wrapping text: Yoga measures the text without it and clips a
  // line that fills the width to the last few points. The dot carries the spacing instead.
  bullet: { flexDirection: 'row' },
  bulletDot: {
    fontSize: 18,
    lineHeight: 29,
    color: colors.secondaryLabel,
    marginRight: spacing.sm,
  },
  progressTrack: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 3,
    backgroundColor: colors.fill,
  },
  progressFill: { height: 3, borderRadius: radius.chip },
  nextRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: spacing.sm,
    paddingVertical: 14,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: colors.separator,
  },
  nextLabel: { fontFamily: fontFor(700) },
  pressed: { opacity: 0.6 },
});
