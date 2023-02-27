import { Animated, FlatList, StyleSheet, Text, View } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { ProductCard } from '../UI';
import { useCart } from '../../hooks/useCart';
import { useProducts } from '../../hooks/useProducts';
import { COLORS, GlobalStyles } from '../../constants';
import { Ionicons } from '@expo/vector-icons';

const RemoveAction = (progress, dragX) => {
  const scale = dragX.interpolate({
    inputRange: [0, 96],
    outputRange: [0, 1],
  });

  return (
    <Animated.View style={{ transform: [{ translateX: scale }] }}>
      <View style={styles.removeAction}>
        <Ionicons
          size={GlobalStyles.spacing.m}
          color={COLORS.white}
          name="trash-outline"
        />
        <Text style={styles.removeActionText}>Delete</Text>
      </View>
    </Animated.View>
  );
};

export default function CartList() {
  const { cartItems, removeFromCartHandler } = useCart();
  const { countAmountWithDiscount, currentProduct } = useProducts();

  return (
    <FlatList
      keyExtractor={(item) => item.productId}
      data={cartItems}
      renderItem={({ item, index }) => (
        <View
          style={{
            marginBottom:
              index === cartItems.length - 1 ? 0 : GlobalStyles.spacing.s,
          }}
        >
          <Swipeable
            renderRightActions={RemoveAction}
            onSwipeableOpen={() => removeFromCartHandler(item)}
          >
            <ProductCard
              {...currentProduct(item?.productId)}
              amountWithDiscount={countAmountWithDiscount(
                currentProduct(item?.productId).amount,
                currentProduct(item?.productId).discount
              )}
              image={{ uri: currentProduct(item?.productId).image as string }}
              type="horizontal"
              withQuantity={true}
              initialQuantity={item?.count}
            />
          </Swipeable>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  removeAction: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.red,
    borderRadius: GlobalStyles.spacing.xs,
    minWidth: 96,
    minHeight: '100%',
  },
  removeActionText: {
    color: COLORS.white,
    marginTop: GlobalStyles.spacing.xs,
  },
});
