import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { EmptyList, IconButton } from '../../components/UI';
import { COLORS, FONT_FAMILY, GlobalStyles } from '../../constants';
import { useCart } from '../../hooks/useCart';
import CartList from '../../components/Cart/CartList';

export default function CartScreen() {
  const { isCartEmpty } = useCart();

  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.mainTitle}>My Cart</Text>
          {/* TODO: replace to search component */}
          <IconButton
            size="small"
            icon="search"
            color={COLORS.primaryGreen}
            bgColor="transparent"
          />
        </View>
        {isCartEmpty && (
          <EmptyList
            title="Your Cart is empty!"
            description={`It seems nothing in here. Explore more\n and add some item to the cart.`}
          />
        )}
        {!isCartEmpty && <CartList />}
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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: GlobalStyles.spacing.s,
  },
  mainTitle: {
    fontFamily: FONT_FAMILY.bold,
    fontSize: GlobalStyles.fontSize.title1,
  },
});
