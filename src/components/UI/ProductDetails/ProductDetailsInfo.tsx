import { StyleSheet, Text, View } from 'react-native';
import { IProductCard } from '../ProductCard/ProductCard';
import { COLORS, FONT_FAMILY, GlobalStyles } from '../../../constants';
import Badge from '../Badge/Badge';
import IconButton from '../IconButton';
import { useMemo } from 'react';
import QuantityButtons from '../QuantityButtons';

export default function ProductDetailsInfo({
  title,
  unit,
  amount,
  discount,
}: IProductCard) {
  const amountWithDiscount = useMemo(() => {
    return amount - (amount * discount) / 100;
  }, [amount, discount]);

  return (
    <View>
      {discount > 0 && (
        <Badge counter={`Disc ${discount}%`} style={styles.badge} />
      )}
      <View style={styles.row}>
        <Text style={styles.title}>{title}</Text>
        <IconButton
          icon="heart-outline"
          bgColor="transparent"
          color={COLORS.primaryGreen}
        />
      </View>
      {unit && <Text style={styles.unit}>{unit}</Text>}
      <View style={styles.row}>
        <View style={styles.amountRow}>
          {discount > 0 && (
            <View style={styles.discount}>
              <Text style={styles.discountText}>{`$${amount.toFixed()}`}</Text>
            </View>
          )}
          <View style={styles.amount}>
            <Text
              style={[
                styles.amountText,
                { marginLeft: discount > 0 ? GlobalStyles.spacing.xs : 0 },
              ]}
            >
              {discount > 0
                ? `$${amountWithDiscount.toFixed()}`
                : `$${amount.toFixed()}`}
            </Text>
          </View>
        </View>
        <View>
          <QuantityButtons />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    alignSelf: 'flex-start',
  },
  title: {
    fontFamily: FONT_FAMILY.bold,
    fontWeight: '700',
    fontSize: GlobalStyles.fontSize.title1,
    color: COLORS.labelsPrimary,
  },
  unit: {
    fontFamily: FONT_FAMILY.regular,
    fontWeight: '400',
    fontSize: GlobalStyles.fontSize.subhead,
    color: COLORS.labelsSecondary,
    marginBottom: GlobalStyles.spacing.s,
  },
  discount: {
    backgroundColor: COLORS.secondaryOrange,
    paddingVertical: GlobalStyles.spacing.xs,
    paddingHorizontal: GlobalStyles.spacing.s,
    borderRadius: GlobalStyles.spacing.xs,
    marginRight: GlobalStyles.spacing.xs,
  },
  discountText: {
    fontFamily: FONT_FAMILY.regular,
    fontWeight: '400',
    fontSize: GlobalStyles.fontSize.footnote,
    color: COLORS.primaryOrange,
    textDecorationLine: 'line-through',
  },
  amount: {
    backgroundColor: COLORS.secondaryGreen,
    paddingVertical: GlobalStyles.spacing.xs,
    paddingHorizontal: GlobalStyles.spacing.s,
    borderRadius: GlobalStyles.spacing.xs,
  },
  amountText: {
    fontFamily: FONT_FAMILY.bold,
    fontWeight: '700',
    fontSize: GlobalStyles.fontSize.title1,
    color: COLORS.primaryGreen,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  amountRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
});
