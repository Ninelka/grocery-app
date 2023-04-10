import { StyleSheet, View } from 'react-native';
import { FloatingCard, TotalCard } from '../UI';
import { useCart } from '../../hooks/useCart';
import { GlobalStyles } from '../../constants';
import SwipableList from './SwipableList';

export default function CartList() {
  const { cartItems, totalCartAmount, showOrderSummaryHandler } = useCart();

  return (
    <View style={styles.root}>
      <SwipableList items={cartItems} />
      <FloatingCard style={styles.total}>
        <TotalCard
          counter={cartItems.length}
          totalAmount={totalCartAmount}
          onPress={showOrderSummaryHandler}
        />
      </FloatingCard>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  total: {
    marginTop: GlobalStyles.spacing.s,
  },
});
