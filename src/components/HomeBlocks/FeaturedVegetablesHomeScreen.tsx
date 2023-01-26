import { StyleSheet, Text, View } from 'react-native';
import SmallViewBox from '../UI/SmallViewBox/SmallViewBox';
import { useProducts } from '../../hooks/useProducts';
import ProductCard from '../UI/ProductCard/ProductCard';
import { GlobalStyles } from '../../constants';

interface IFeaturedVegetablesHomeScreen {
  onSeeAll: () => void;
}

const FeaturedVegetablesHomeScreen = ({
  onSeeAll,
}: IFeaturedVegetablesHomeScreen) => {
  const { products, isProductsLoading, countAmountWithDiscount } =
    useProducts();

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
