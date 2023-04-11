import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Summary } from '../components/Cart';
import { Button } from '../components/UI';
import { COLORS, GlobalStyles } from '../constants';
import { useCart } from '../hooks/useCart';

const CheckoutScreen = () => {
  const { paymentSuccessHandler } = useCart();

  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.container}>
        <Text>Here will be destination block</Text>
        <View style={styles.divider}></View>
        <Text>Here will be payment methods</Text>
        <View style={styles.divider}></View>
        <Summary />
      </View>
      <View style={styles.actionsRow}>
        <View style={styles.checkoutBtn}>
          <Button size="large" shape="rounded" onPress={paymentSuccessHandler}>
            Pay Now
          </Button>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CheckoutScreen;

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
