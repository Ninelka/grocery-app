import { StyleSheet, View } from 'react-native';
import { FloatingCard, TotalCard } from '../UI';
import { useCart } from '../../hooks/useCart';
import { useAppNavigation } from '../../hooks/useAppNavigation';
import { GlobalStyles } from '../../constants';
import SwipableList from './SwipableList';

export default function CartList() {
  const { cartItems, totalCartAmount } = useCart();
  const { showOrderSummaryHandler } = useAppNavigation();

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
