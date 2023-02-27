import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface CartItem {
  productId: string;
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
      const currentItem = state.items.find(
        (item) => item.productId === action.payload.productId
      );

      if (
        state.items.length === 0 ||
        currentItem?.productId !== action.payload.productId
      ) {
        state.items.push({
          productId: action.payload.productId,
          count: action.payload.count,
        });
      }

      if (
        state.items.length > 0 &&
        currentItem?.productId === action.payload.productId
      ) {
        currentItem.count = action.payload.count;
      }
    },
    removeFromCart: (state, action: PayloadAction<CartItem>) => {
      state.items = state.items.filter(
        (item) => item.productId !== action.payload.productId
      );
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
