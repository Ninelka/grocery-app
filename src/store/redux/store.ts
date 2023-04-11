import { combineReducers, configureStore } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistReducer, persistStore } from 'redux-persist';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import favoritesReducer from './favoritesSlice';
import cartReducer from './cartSlice';

const rootReducer = combineReducers({
  favoriteProducts: favoritesReducer,
  cart: cartReducer,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const setupStore = () => {
  return configureStore({
    reducer: persistedReducer,
    middleware: [thunk, logger],
  });
};
export const store = setupStore();
export const persistor = persistStore(store);

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
