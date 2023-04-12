import { Animated, FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { COLORS, GlobalStyles } from '../../constants';
import { Ionicons } from '@expo/vector-icons';
import { CartItem } from '../../store/redux';
import { ProductCard } from '../UI';
import { useProducts, useCart } from '../../hooks';

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

interface IList {
  items: CartItem[];
}

const SwipableList: React.FC<IList> = ({ items }) => {
  const { countAmountWithDiscount, currentProduct } = useProducts();
  const { removeFromCartHandler } = useCart();

  return (
    <FlatList
      keyExtractor={(item) => item.productId}
      data={items}
      renderItem={({ item, index }) => (
        <View
          style={{
            marginBottom:
              index === items.length - 1 ? 0 : GlobalStyles.spacing.s,
          }}
        >
          <GestureHandlerRootView>
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
                image={{
                  uri: currentProduct(item?.productId).image as string,
                }}
                type="horizontal"
                withQuantity={true}
                initialQuantity={item?.count}
              />
            </Swipeable>
          </GestureHandlerRootView>
        </View>
      )}
    />
  );
};
export default SwipableList;

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
