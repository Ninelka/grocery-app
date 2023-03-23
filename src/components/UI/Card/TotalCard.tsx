import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import Button from '../Button';
import { COLORS, FONT_FAMILY, GlobalStyles } from '../../../constants';

interface ITotalCard {
  counter?: number;
  onPress?: () => void;
  isSummary?: boolean;
  totalAmount?: number;
  summaryText?: string;
  summaryAmount?: number;
}

const TotalCard: React.FC<ITotalCard> = ({
  onPress,
  isSummary,
  counter = 0,
  totalAmount,
  summaryText,
  summaryAmount,
}) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.container, pressed && styles.pressed]}
    >
      <View style={{ flex: 1 }}>
        {isSummary ? (
          <>
            <Text style={styles.title}>{`${counter} Item`}</Text>
            <Text numberOfLines={1} style={styles.summaryText}>
              {summaryText}
            </Text>
          </>
        ) : (
          <>
            <Text style={styles.text}>{`Total (${counter})`}</Text>
            <Text style={styles.text}>{`$${totalAmount.toFixed()}`}</Text>
          </>
        )}
      </View>
      {isSummary ? (
        <Text style={styles.amount}>{`$${summaryAmount.toFixed()}`}</Text>
      ) : (
        <Button shape="ellipse" onPress={onPress}>
          Buy Now
        </Button>
      )}
    </Pressable>
  );
};

export default TotalCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: GlobalStyles.spacing.s,
  },
  text: {
    fontFamily: FONT_FAMILY.bold,
    fontWeight: '700',
    fontSize: GlobalStyles.fontSize.callout,
  },
  title: {
    fontFamily: FONT_FAMILY.bold,
    fontWeight: '700',
    fontSize: GlobalStyles.fontSize.callout,
    color: COLORS.labelsQuarternary,
    marginBottom: GlobalStyles.spacing.xs,
  },
  summaryText: {
    fontFamily: FONT_FAMILY.regular,
    fontWeight: '400',
    fontSize: GlobalStyles.fontSize.footnote,
    color: COLORS.labelsQuarternary,
  },
  amount: {
    fontFamily: FONT_FAMILY.bold,
    fontWeight: '700',
    fontSize: GlobalStyles.fontSize.title1,
    color: COLORS.labelsQuarternary,
  },
  pressed: {
    opacity: 0.75,
  },
});
