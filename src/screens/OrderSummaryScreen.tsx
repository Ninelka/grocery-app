import { SafeAreaView, StyleSheet, View } from 'react-native';
import { COLORS, GlobalStyles } from '../constants';
import { Button, Input } from '../components/UI';
import { SwipableList, Summary } from '../components/Cart';
import { useCart } from '../hooks/useCart';

export default function OrderSummaryScreen() {
  const { cartItems } = useCart();

  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.container}>
        <SwipableList items={cartItems} />
        <View style={styles.divider}></View>
        <Input
          label="Promo Code"
          placeholder="Enter Promo Code"
          onBtnPress={() => console.log('Input btn pressed!')}
        />
        <View style={styles.divider}></View>
        <Summary />
      </View>
      <View style={styles.actionsRow}>
        <View style={styles.checkoutBtn}>
          <Button size="large" shape="rounded">
            Checkout
          </Button>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: COLORS.bgSecondary,
  },
  container: {
    flex: 1,
    padding: GlobalStyles.spacing.s,
  },
  divider: {
    flex: 1,
    minHeight: 2,
    maxHeight: 2,
    backgroundColor: COLORS.grey5,
    marginVertical: GlobalStyles.spacing.s,
  },
  actionsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: COLORS.bgPrimary,
    padding: GlobalStyles.spacing.s,
  },
  checkoutBtn: {
    flex: 1,
  },
});
