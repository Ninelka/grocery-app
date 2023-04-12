import { StyleSheet, Text, View } from 'react-native';
import { useProducts } from '../../hooks/useProducts';
import { useAppNavigation } from '../../hooks/useAppNavigation';
import { GlobalStyles } from '../../constants';
import { SmallViewBox, ProductCard } from '../UI';
import { useCart } from '../../hooks/useCart';

interface IFeaturedVegetablesHomeScreen {
  onSeeAll: () => void;
}

const FeaturedVegetablesHomeScreen = ({
  onSeeAll,
}: IFeaturedVegetablesHomeScreen) => {
  const { products, isProductsLoading, countAmountWithDiscount } =
    useProducts();
  const { addToCartHandler } = useCart();
  const { showProductDetailsHandler } = useAppNavigation();

  return (
    <SmallViewBox title="Featured Vegetables" onSeeAll={onSeeAll}>
      {isProductsLoading && <Text>Loading...</Text>}
      {!products && !isProductsLoading && <Text>No any deals</Text>}
      <View style={styles.list}>
        {products?.slice(0, 2).map((item, index) => {
          return (
            <View
              key={index.toString()}
              style={[styles.item, index === 1 && { marginRight: 0 }]}
            >
              <ProductCard
                id={item?.id}
                onPress={() => showProductDetailsHandler(item)}
                onAddBtnPress={() => addToCartHandler(item?.id, 1)}
                title={item?.title}
                unit={item?.unit}
                amount={item?.amount}
                discount={item?.discount}
                amountWithDiscount={countAmountWithDiscount(
                  item?.amount,
                  item?.discount
                )}
                image={{ uri: item?.image }}
              />
            </View>
          );
        })}
      </View>
    </SmallViewBox>
  );
};

export default FeaturedVegetablesHomeScreen;

const styles = StyleSheet.create({
  list: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: GlobalStyles.spacing.l,
  },
  item: {
    flex: 1,
    marginRight: GlobalStyles.spacing.xs,
  },
});
