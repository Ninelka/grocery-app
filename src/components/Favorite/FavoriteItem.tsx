import { StyleSheet, View } from 'react-native';
import { Button, ProductCard } from '../UI';
import { GlobalStyles } from '../../constants';
import { removeFavorite, useAppDispatch } from '../../store/redux';
import { useProducts } from '../../hooks/useProducts';
import { useCart } from '../../hooks/useCart';

function FavoriteItem({ item }) {
  const { countAmountWithDiscount } = useProducts();
  const { addToCartHandler } = useCart();
  const dispatch = useAppDispatch();
  const removeFavoriteHandler = (id: string) => {
    dispatch(removeFavorite(id));
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
            type="secondary"
            shape="rounded"
            onPress={() => removeFavoriteHandler(item?.id)}
          >
            Remove
          </Button>
        </View>
        <View style={{ flex: 1, marginLeft: GlobalStyles.spacing.s }}>
          <Button shape="rounded" onPress={() => addToCartHandler(item?.id, 1)}>
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
