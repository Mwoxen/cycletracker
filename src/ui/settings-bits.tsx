import { useTranslation } from 'react-i18next';
import { StyleSheet, View, type ColorValue } from 'react-native';
import type { SFSymbol } from 'sf-symbols-typescript';

import { colors, radius, spacing } from './colors';
import { Icon, Txt } from './primitives';
import { usePhaseTheme } from './theme';

/** A 30 pt rounded tile with a symbol, in front of a settings row. Accent = the live one. */
export function IconTile({ symbol, accent }: { symbol: SFSymbol; accent?: boolean }) {
  const theme = usePhaseTheme();
  return (
    <View style={[styles.tile, { backgroundColor: accent ? theme.soft : colors.fill }]}>
      <Icon name={symbol} size={15} color={accent ? theme.accent : colors.secondaryLabel} />
    </View>
  );
}

/** A 7 pt dot in front of a status line. */
export function StatusDot({ color }: { color: ColorValue }) {
  return <View style={[styles.dot, { backgroundColor: color }]} />;
}

/** Explanatory line under a card, in the secondary colour. */
export function HelpText({ children }: { children: string }) {
  return (
    <Txt variant="footnote" style={styles.help}>
      {children}
    </Txt>
  );
}

/** "Dag 24 af 365" and similar: small uppercase capsule, filled or outlined. */
export function Pill({ label, filled }: { label: string; filled?: boolean }) {
  const theme = usePhaseTheme();
  return (
    <View
      style={[
        styles.pill,
        filled
          ? { backgroundColor: theme.soft }
          : { borderWidth: 1, borderColor: colors.separator },
      ]}>
      <Txt variant="tag" color={filled ? theme.accent : colors.secondaryLabel}>
        {label.toUpperCase()}
      </Txt>
    </View>
  );
}

/** The round initial used on the profile card and the profile screen. */
export function Avatar({ name, size = 52 }: { name?: string; size?: number }) {
  const theme = usePhaseTheme();
  const { t } = useTranslation();
  const initial = name?.trim().charAt(0).toUpperCase();
  return (
    <View
      accessibilityLabel={t('settings.profile')}
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor: theme.soft,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      {initial ? (
        <Txt
          variant="cardTitle"
          color={theme.accent}
          // The variant's fixed line height clips a glyph this big, so it scales with the size.
          style={{ fontSize: size * 0.42, lineHeight: Math.round(size * 0.42 * 1.3) }}>
          {initial}
        </Txt>
      ) : (
        <Icon name="person.fill" size={size * 0.4} color={theme.accent} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  tile: {
    width: 30,
    height: 30,
    borderRadius: 9,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dot: { width: 7, height: 7, borderRadius: 4, marginRight: 6 },
  help: { marginHorizontal: spacing.md, marginTop: -spacing.sm },
  pill: {
    borderRadius: radius.chip,
    paddingHorizontal: 9,
    paddingVertical: 4,
    alignSelf: 'flex-start',
  },
});
