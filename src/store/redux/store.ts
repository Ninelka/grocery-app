import { combineReducers, configureStore } from '@reduxjs/toolkit';

import favoritesReducer from './favoritesSlice';

const rootReducer = combineReducers({
  favoriteProducts: favoritesReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
