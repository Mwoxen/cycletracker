import { View } from 'react-native';
import type { SFSymbol } from 'sf-symbols-typescript';

import { colors, spacing } from '@/ui/colors';
import { Card, Symbol, Txt } from '@/ui/primitives';

export function Empty({ symbol, text }: { symbol: SFSymbol; text: string }) {
  return (
    <Card style={{ alignItems: 'center', paddingVertical: spacing.lg, gap: spacing.sm }}>
      <View
        style={{
          width: 52,
          height: 52,
          borderRadius: 26,
          backgroundColor: colors.fill,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Symbol name={symbol} size={24} color={colors.secondaryLabel} />
      </View>
      <Txt color={colors.secondaryLabel} style={{ textAlign: 'center' }}>
        {text}
      </Txt>
    </Card>
  );
}
