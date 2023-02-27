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

  const addToCartHandler = (id, count) => {
    dispatch(addToCart({ productId: id, count: count }));
  };

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  return {
    cartItems,
    isCartEmpty,
    addToCartHandler,
    removeFromCartHandler,
  };
};
