import { FlatList, StyleSheet, Text, View } from 'react-native';
import { useProducts } from '../hooks/useProducts';
import { ProductCard } from '../components/UI';
import { COLORS, GlobalStyles } from '../constants';
import { useCart } from '../hooks/useCart';

function FeaturedVegetablesScreen() {
  const {
    products,
    isProductsLoading,
    countAmountWithDiscount,
    showProductDetailsHandler,
  } = useProducts();
  const { addToCartHandler } = useCart();

  // TODO: show only featured products on this screen
  return (
    <View style={styles.root}>
      {isProductsLoading && <Text>Loading...</Text>}
      {!products && !isProductsLoading && <Text>No any deals</Text>}
      <FlatList
        numColumns={2}
        keyExtractor={(item, index) => index.toString()}
        data={products}
        renderItem={({ item, index }) => (
          <View
            key={index.toString()}
            style={[
              styles.item,
              index % 2 !== 0 && { marginRight: 0 },
              index >= products?.length - 2 && { marginBottom: 0 },
            ]}
          >
            <ProductCard
              id={item?.id}
              onPress={() => showProductDetailsHandler(item)}
              title={item?.title}
              unit={item?.unit}
              amount={item?.amount}
              discount={item?.discount}
              amountWithDiscount={countAmountWithDiscount(
                item?.amount,
                item?.discount
              )}
              image={{ uri: item?.image }}
              onAddBtnPress={() => addToCartHandler(item?.id, 1)}
            />
          </View>
        )}
      />
    </View>
  );
}

export default FeaturedVegetablesScreen;

const styles = StyleSheet.create({
  root: {
    backgroundColor: COLORS.bgSecondary,
    padding: GlobalStyles.spacing.s,
  },
  item: {
    flex: 1,
    marginRight: GlobalStyles.spacing.xs,
    marginBottom: GlobalStyles.spacing.s,
  },
});
