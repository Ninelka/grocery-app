import { StyleSheet, Text, View } from 'react-native';
import { IProductCard } from '../ProductCard/ProductCard';
import { COLORS, FONT_FAMILY, GlobalStyles } from '../../../constants';
import Badge from '../Badge/Badge';
import IconButton from '../IconButton';
import { useEffect, useMemo, useState } from 'react';
import QuantityButtons from '../QuantityButtons';
import { useFavorites } from '../../../hooks/useFavorites';

interface IProductDetailsInfo extends IProductCard {
  onChangeProductQuantity?: (quantity: number) => void;
}

export default function ProductDetailsInfo({
  id,
  title,
  unit,
  amount,
  discount,
  initialQuantity,
  onChangeProductQuantity,
}: IProductDetailsInfo) {
  const { isFavorite, toggleFavorite } = useFavorites(id);
  const [initQuantity, setInitQuantity] = useState(initialQuantity);

  const amountWithDiscount = useMemo(() => {
    return amount - (amount * discount) / 100;
  }, [amount, discount]);

  const getPropsFromChild = (props) => {
    setInitQuantity(props);
  };

  useEffect(() => {
    onChangeProductQuantity(initQuantity);
  }, [initQuantity]);

  return (
    <View>
      {discount > 0 && (
        <Badge counter={`Disc ${discount}%`} style={styles.badge} />
      )}
      <View style={styles.row}>
        <Text style={styles.title}>{title}</Text>
        <IconButton
          icon={isFavorite ? 'heart' : 'heart-outline'}
          bgColor="transparent"
          color={COLORS.primaryGreen}
          onPress={toggleFavorite}
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
            <Text style={styles.amountText}>
              {discount > 0
                ? `$${amountWithDiscount.toFixed()}`
                : `$${amount.toFixed()}`}
            </Text>
          </View>
        </View>
        <View>
          <QuantityButtons
            onQuantity={getPropsFromChild}
            initialQuantity={initQuantity}
          />
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
