import { combineReducers, configureStore } from '@reduxjs/toolkit';

import favoritesReducer from './favoritesSlice';
import cartReducer from './cartSlice';

const rootReducer = combineReducers({
  favoriteProducts: favoritesReducer,
  cart: cartReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
