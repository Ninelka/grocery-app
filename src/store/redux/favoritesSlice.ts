import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface FavoritesState {
  idList: string[];
}

const initialState: FavoritesState = {
  idList: [],
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<string>) => {
      state.idList.push(action.payload);
    },
    removeFavorite: (state, action: PayloadAction<string>) => {
      state.idList = state.idList.filter((item) => item !== action.payload);
    },
  },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
