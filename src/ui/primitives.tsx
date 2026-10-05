import { SymbolView } from 'expo-symbols';
import type { PropsWithChildren, ReactNode, RefObject } from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  View,
  type ColorValue,
  type PressableProps,
  type ScrollViewProps,
  type StyleProp,
  type TextProps,
  type ViewStyle,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import type { SFSymbol } from 'sf-symbols-typescript';

import { colors, fontFor, radius, spacing } from './colors';
import { Pressed } from './pressed';
import { usePhaseTheme } from './theme';

/**
 * Page title drawn in the content instead of a native large title, which iOS 26 under native
 * tabs either hides or pushes down. The status-bar distance comes from the scroll view's
 * automatic content inset (native tabs force it on), so nothing is added here.
 */
export function PageTitle({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <View style={{ paddingTop: spacing.xs, gap: 4 }} accessibilityRole="header">
      <Txt variant="screenTitle">{title}</Txt>
      {subtitle ? <Txt variant="footnote">{subtitle}</Txt> : null}
    </View>
  );
}

/** Scrolling screen body. With `title` it draws its own page title and skips the native inset. */
export function Screen({
  children,
  contentContainerStyle,
  title,
  subtitle,
  scrollRef,
  ...rest
}: ScrollViewProps & {
  title?: string;
  subtitle?: string;
  scrollRef?: RefObject<ScrollView | null>;
}) {
  return (
    <ScrollView
      ref={scrollRef}
      style={styles.screen}
      contentInsetAdjustmentBehavior="automatic"
      keyboardDismissMode="on-drag"
      contentContainerStyle={[styles.screenContent, contentContainerStyle]}
      {...rest}>
      {title ? <PageTitle title={title} subtitle={subtitle} /> : null}
      {children}
    </ScrollView>
  );
}

/**
 * Text roles from docs/design/README.md. The old names stay as aliases so every screen keeps
 * compiling: `largeTitle` = screen title, `title` = card title, `headline` = emphasised UI text.
 */
type TextVariant =
  | 'hero'
  | 'screenTitle'
  | 'readTitle'
  | 'cardTitle'
  | 'question'
  | 'read'
  | 'label'
  | 'boxLabel'
  | 'tag'
  | 'largeTitle'
  | 'title'
  | 'headline'
  | 'body'
  | 'callout'
  | 'footnote'
  | 'caption';

export function Txt({
  variant = 'body',
  color,
  style,
  ...rest
}: TextProps & { variant?: TextVariant; color?: ColorValue }) {
  return (
    <Text
      allowFontScaling
      maxFontSizeMultiplier={2}
      style={[styles[variant], { color: color ?? textColor[variant] }, style]}
      {...rest}
    />
  );
}

const textColor: Record<TextVariant, ColorValue> = {
  hero: colors.label,
  screenTitle: colors.label,
  readTitle: colors.label,
  cardTitle: colors.label,
  question: colors.label,
  read: colors.label,
  label: colors.secondaryLabel,
  boxLabel: colors.tint,
  tag: colors.secondaryLabel,
  largeTitle: colors.label,
  title: colors.label,
  headline: colors.label,
  body: colors.label,
  callout: colors.label,
  footnote: colors.secondaryLabel,
  caption: colors.secondaryLabel,
};

/** Surface card: 1 pt hair border, radius 18, no shadow. Scales to .98 while pressed. */
export function Card({
  children,
  style,
  onPress,
}: PropsWithChildren<{ style?: StyleProp<ViewStyle>; onPress?: () => void }>) {
  if (onPress) {
    return (
      <Pressed
        onPress={onPress}
        scale={0.98}
        accessibilityRole="button"
        style={[styles.card, style]}>
        {children}
      </Pressed>
    );
  }
  return <View style={[styles.card, style]}>{children}</View>;
}

/** Small uppercase section label (11/600, 0.16em) above a card. */
export function SectionTitle({
  children,
  style,
}: PropsWithChildren<{ style?: StyleProp<ViewStyle> }>) {
  return (
    <Txt variant="label" style={[styles.sectionTitle, style]}>
      {String(children).toUpperCase()}
    </Txt>
  );
}

export function Icon({
  name,
  size = 18,
  color,
  weight = 'medium',
}: {
  name: SFSymbol;
  size?: number;
  color?: ColorValue;
  weight?: 'regular' | 'medium' | 'semibold' | 'bold';
}) {
  const theme = usePhaseTheme();
  return (
    <SymbolView
      name={name}
      size={size}
      tintColor={(color ?? theme.accent) as string}
      weight={weight}
      fallback={<View style={{ width: size, height: size }} />}
    />
  );
}

/**
 * A tappable list row with optional leading symbol or custom lead view (a badge), trailing
 * value and chevron.
 */
export function Row({
  title,
  subtitle,
  value,
  symbol,
  symbolColor,
  lead,
  onPress,
  chevron = !!onPress,
  trailing,
  destructive,
  last,
}: {
  title: string;
  subtitle?: string;
  value?: string;
  symbol?: SFSymbol;
  symbolColor?: ColorValue;
  /** Rendered before the text, instead of `symbol` (e.g. a round badge). */
  lead?: ReactNode;
  onPress?: () => void;
  chevron?: boolean;
  trailing?: ReactNode;
  destructive?: boolean;
  last?: boolean;
}) {
  const theme = usePhaseTheme();
  const content = (
    <View style={[styles.row, !last && styles.rowBorder]}>
      {lead ? (
        <View style={styles.rowLead}>{lead}</View>
      ) : symbol ? (
        <View style={styles.rowSymbol}>
          <Icon name={symbol} color={symbolColor ?? theme.accent} />
        </View>
      ) : null}
      <View style={styles.rowText}>
        <Txt color={destructive ? colors.red : colors.label}>{title}</Txt>
        {subtitle ? (
          <Txt variant="footnote" style={{ marginTop: 2 }}>
            {subtitle}
          </Txt>
        ) : null}
      </View>
      {value ? (
        <Txt variant="body" color={colors.secondaryLabel} style={styles.rowValue}>
          {value}
        </Txt>
      ) : null}
      {trailing}
      {chevron ? <Icon name="chevron.right" size={14} color={colors.tertiaryLabel} /> : null}
    </View>
  );
  if (!onPress) return content;
  return (
    <Pressable onPress={onPress} style={({ pressed }) => pressed && styles.pressed}>
      {content}
    </Pressable>
  );
}

/**
 * Buttons from the design: primary = capsule outline in the accent, 54 high; secondary = hair
 * outline, 50 high; plain = text only; destructive = outline in the menstrual red.
 */
export function Button({
  title,
  onPress,
  variant = 'primary',
  symbol,
  disabled,
  style,
}: {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary' | 'plain' | 'destructive';
  symbol?: SFSymbol;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
}) {
  const theme = usePhaseTheme();
  const fg =
    variant === 'primary' || variant === 'plain'
      ? theme.accent
      : variant === 'destructive'
        ? colors.red
        : colors.label;
  const border =
    variant === 'primary'
      ? { borderWidth: 1.5, borderColor: theme.accent, minHeight: 54 }
      : variant === 'destructive'
        ? { borderWidth: 1.5, borderColor: colors.red, minHeight: 54 }
        : variant === 'secondary'
          ? { borderWidth: 1, borderColor: colors.separator, minHeight: 50 }
          : { minHeight: 44 };
  return (
    <Pressed
      onPress={onPress}
      disabled={disabled}
      scale={0.97}
      accessibilityRole="button"
      style={[styles.button, border, { opacity: disabled ? 0.4 : 1 }, style]}>
      {symbol ? <Icon name={symbol} color={fg} size={16} weight="semibold" /> : null}
      <Txt variant="headline" color={fg} style={variant === 'plain' ? styles.plainText : null}>
        {title}
      </Txt>
    </Pressed>
  );
}

/** Capsule chip: hair outline, or filled with the accent (text in onAccent) when selected. */
export function Chip({
  label,
  selected,
  onPress,
  color,
}: {
  label: string;
  selected?: boolean;
  onPress?: PressableProps['onPress'];
  color?: ColorValue;
}) {
  const theme = usePhaseTheme();
  const fill = color ?? theme.accent;
  return (
    <Pressed
      onPress={onPress}
      scale={0.94}
      accessibilityRole="button"
      accessibilityState={{ selected: !!selected }}
      style={[
        styles.chip,
        selected
          ? { backgroundColor: fill, borderColor: fill }
          : { backgroundColor: 'transparent', borderColor: colors.separator },
      ]}>
      <Txt
        variant="callout"
        color={selected ? colors.onAccent : colors.label}
        style={{ fontFamily: fontFor(600), fontSize: 14, lineHeight: 18 }}>
        {label}
      </Txt>
    </Pressed>
  );
}

export function Badge({ label, color }: { label: string; color: ColorValue }) {
  return (
    <View style={[styles.badge, { backgroundColor: color }]}>
      <Txt variant="caption" color={colors.onAccent} style={{ fontFamily: fontFor(600) }}>
        {label}
      </Txt>
    </View>
  );
}

export function Bullets({ items }: { items: string[] }) {
  return (
    <View style={{ gap: spacing.sm }}>
      {items.map((item, i) => (
        <View key={i} style={styles.bullet}>
          <Txt color={colors.secondaryLabel} style={{ marginRight: spacing.sm }}>
            •
          </Txt>
          <Txt style={{ flex: 1, flexShrink: 1 }}>{item}</Txt>
        </View>
      ))}
    </View>
  );
}

export function Paragraphs({ items }: { items: string[] }) {
  return (
    <View style={{ gap: spacing.md }}>
      {items.map((p, i) => (
        <Txt key={i} style={{ lineHeight: 24 }}>
          {p}
        </Txt>
      ))}
    </View>
  );
}

export function Gap({ size = spacing.md }: { size?: number }) {
  return <View style={{ height: size }} />;
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.background },
  screenContent: {
    paddingTop: spacing.sm,
    paddingHorizontal: spacing.md,
    paddingBottom: spacing.xl + spacing.lg,
    gap: spacing.md,
  },
  // Whole-number line heights: a text frame whose measured height is a whole number survives
  // pixel-grid rounding, so iOS does not drop its last line (facebook/react-native#53450).
  hero: { fontFamily: fontFor(300), fontSize: 31, lineHeight: 36, letterSpacing: -0.5 },
  screenTitle: { fontFamily: fontFor(300), fontSize: 28, lineHeight: 30, letterSpacing: -0.3 },
  readTitle: { fontFamily: fontFor(400), fontSize: 31, lineHeight: 34, letterSpacing: -0.6 },
  cardTitle: { fontFamily: fontFor(400), fontSize: 21, lineHeight: 25, letterSpacing: -0.2 },
  question: { fontFamily: fontFor(400), fontSize: 23, lineHeight: 29, letterSpacing: -0.2 },
  read: { fontFamily: fontFor(400), fontSize: 18, lineHeight: 29 },
  label: { fontFamily: fontFor(600), fontSize: 11, lineHeight: 14, letterSpacing: 1.8 },
  boxLabel: { fontFamily: fontFor(700), fontSize: 12, lineHeight: 15, letterSpacing: 0.8 },
  tag: { fontFamily: fontFor(600), fontSize: 10, lineHeight: 12, letterSpacing: 1.4 },
  largeTitle: { fontFamily: fontFor(300), fontSize: 28, lineHeight: 30, letterSpacing: -0.3 },
  title: { fontFamily: fontFor(400), fontSize: 21, lineHeight: 25, letterSpacing: -0.2 },
  headline: { fontFamily: fontFor(600), fontSize: 17, lineHeight: 22 },
  body: { fontFamily: fontFor(400), fontSize: 16, lineHeight: 23 },
  callout: { fontFamily: fontFor(400), fontSize: 15, lineHeight: 21 },
  footnote: { fontFamily: fontFor(400), fontSize: 13, lineHeight: 18 },
  caption: { fontFamily: fontFor(400), fontSize: 12, lineHeight: 16 },
  card: {
    backgroundColor: colors.card,
    borderRadius: radius.card,
    borderWidth: 1,
    borderColor: colors.separator,
    padding: spacing.card,
    gap: spacing.sm,
  },
  sectionTitle: { marginLeft: spacing.xs, marginBottom: -(spacing.md - spacing.label) },
  // Rows that hold wrapping text use margins, not `gap`: Yoga measures the text without the gap
  // and clips a line that fills the width to the last few points.
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    minHeight: 44,
  },
  rowBorder: { borderBottomWidth: 1, borderBottomColor: colors.separator },
  rowSymbol: { width: 28, alignItems: 'center', marginRight: spacing.sm },
  rowLead: { marginRight: spacing.sm + spacing.xs, alignItems: 'center', justifyContent: 'center' },
  rowText: { flex: 1, flexShrink: 1, marginRight: spacing.sm },
  rowValue: { marginRight: spacing.sm + spacing.xs },
  pressed: { opacity: 0.6 },
  button: {
    flexDirection: 'row',
    gap: spacing.sm,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: spacing.lg,
    borderRadius: radius.chip,
    backgroundColor: 'transparent',
  },
  plainText: { fontFamily: fontFor(600) },
  chip: {
    paddingVertical: 9,
    paddingHorizontal: 13,
    borderRadius: radius.chip,
    borderWidth: 1,
    minHeight: 36,
    justifyContent: 'center',
  },
  badge: { paddingVertical: 3, paddingHorizontal: 8, borderRadius: 6 },
  bullet: { flexDirection: 'row' },
});
