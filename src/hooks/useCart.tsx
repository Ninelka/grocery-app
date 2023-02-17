import {
  addToCart,
  removeFromCart,
  useAppDispatch,
  useAppSelector,
} from '../store/redux';
import { useMemo } from 'react';

export const useCart = () => {
  const { items: cartItems } = useAppSelector((store) => store.cart);
  const dispatch = useAppDispatch();

  const isCartEmpty = useMemo(() => {
    return cartItems.length <= 0;
  }, [cartItems.length]);

  const addToCartHandler = (product, count) => {
    dispatch(addToCart({ productData: product, count: count }));
  };

  const removeFromCartHandler = (product) => {
    dispatch(removeFromCart(product));
  };

  return {
    cartItems,
    isCartEmpty,
    addToCartHandler,
    removeFromCartHandler,
  };
};
