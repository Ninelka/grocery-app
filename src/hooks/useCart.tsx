import {
  addToCart,
  removeFromCart,
  useAppDispatch,
  useAppSelector,
} from '../store/redux';
import { useMemo } from 'react';
import { useProducts } from './useProducts';
import { useNavigation } from '@react-navigation/native';
import { StackNavigation } from '../types/stack-navigation';

export const useCart = () => {
  const { items: cartItems } = useAppSelector((store) => store.cart);
  const dispatch = useAppDispatch();
  const { currentProduct, countAmountWithDiscount } = useProducts();
  const navigation = useNavigation<StackNavigation>();

  const isCartEmpty = useMemo(() => {
    return cartItems.length <= 0;
  }, [cartItems.length]);

  const addToCartHandler = (id, count) => {
    dispatch(addToCart({ productId: id, count: count }));
  };

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const showOrderSummaryHandler = () => {
    navigation.navigate('OrderSummary');
  };

  const showOrderCheckoutHandler = () => {
    navigation.navigate('Checkout');
  };

  const showCartHandler = () => {
    navigation.navigate('Cart');
  };

  const totalCartAmount = useMemo(() => {
    return cartItems.reduce(
      (total, item) =>
        total +
        item.count *
          countAmountWithDiscount(
            currentProduct(item?.productId).amount,
            currentProduct(item?.productId).discount
          ),
      0
    );
  }, [countAmountWithDiscount]);

  const summaryText = useMemo(() => {
    const cartItemsTitles = cartItems.map(
      (item) => currentProduct(item.productId).title
    );
    return cartItemsTitles.join(', ');
  }, [cartItems]);

  return {
    cartItems,
    isCartEmpty,
    addToCartHandler,
    removeFromCartHandler,
    totalCartAmount,
    summaryText,
    showOrderSummaryHandler,
    showCartHandler,
    showOrderCheckoutHandler,
  };
};
