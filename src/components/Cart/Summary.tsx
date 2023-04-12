import { StyleSheet, Text, View } from 'react-native';
import { COLORS, FONT_FAMILY, GlobalStyles } from '../../constants';
import { useMemo } from 'react';
import { useCart } from '../../hooks';

const Summary = () => {
  const { totalCartAmount } = useCart();
  const deliveryAmount: number = 8;
  const totalPrice: number = useMemo(() => {
    return totalCartAmount + deliveryAmount;
  }, [totalCartAmount]);

  return (
    <View>
      <View style={styles.row}>
        <Text style={styles.summaryLabel}>Subtotal Price</Text>
        <Text
          style={styles.summaryText}
        >{`$${totalCartAmount.toFixed()}`}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.summaryLabel}>Delivery Fee</Text>
        <Text style={styles.summaryText}>{`$${deliveryAmount}`}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.summaryLabel}>Total Price</Text>
        <Text style={styles.summaryText}>{`$${totalPrice.toFixed()}`}</Text>
      </View>
    </View>
  );
};

export default Summary;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  summaryLabel: {
    fontFamily: FONT_FAMILY.regular,
    fontWeight: '400',
    fontSize: GlobalStyles.fontSize.headline,
    color: COLORS.labelsSecondary,
  },
  summaryText: {
    fontFamily: FONT_FAMILY.bold,
    fontWeight: '700',
    fontSize: GlobalStyles.fontSize.headline,
  },
});
