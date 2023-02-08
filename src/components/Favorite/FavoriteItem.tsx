import { StyleSheet, View } from 'react-native';
import { Button, ProductCard } from '../UI';
import { GlobalStyles } from '../../constants';
import { removeFavorite, useAppDispatch } from '../../store/redux';
import { useProducts } from '../../hooks/useProducts';

function FavoriteItem({ item }) {
  const { countAmountWithDiscount } = useProducts();
  const dispatch = useAppDispatch();
  const removeFavoriteHandler = (id: string) => {
    dispatch(removeFavorite(id));
  };

  // TODO: dispatch to the store
  const addToCartHandler = () => {
    console.log('item added to the cart!');
  };

  return (
    <View key={item.id}>
      <ProductCard
        type="horizontal"
        id={item?.id}
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
      <View style={styles.actions}>
        <View style={{ flex: 1 }}>
          <Button
            size="large"
            type="secondary"
            shape="rounded"
            onPress={() => removeFavoriteHandler(item?.id)}
          >
            Remove
          </Button>
        </View>
        <View style={{ flex: 1, marginLeft: GlobalStyles.spacing.s }}>
          <Button size="large" shape="rounded" onPress={addToCartHandler}>
            Add to Cart
          </Button>
        </View>
      </View>
    </View>
  );
}

export default FavoriteItem;

const styles = StyleSheet.create({
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: GlobalStyles.spacing.s,
  },
});
