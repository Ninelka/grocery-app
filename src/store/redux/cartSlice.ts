import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProductCard } from '../../components/UI/ProductCard/ProductCard';

export interface CartItem {
  productData: IProductCard;
  count: number;
}
export interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      state.items.push({
        productData: action.payload.productData,
        count: action.payload.count,
      });
    },
    removeFromCart: (state, action: PayloadAction<CartItem>) => {
      state.items = state.items.filter(
        (item) => item.productData.id !== action.payload.productData.id
      );
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
