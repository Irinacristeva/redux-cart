// src/store/store.js
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cart/slice';
import { productsApi } from '../api/productsApi';

// Функция для сохранения корзины в localStorage
const saveToLocalStorage = (state) => {
  try {
    const serialized = JSON.stringify(state.cart);
    localStorage.setItem('cart', serialized);
  } catch (e) {
    console.error('Ошибка сохранения в localStorage', e);
  }
};

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});

// Подписка на изменения состояния
store.subscribe(() => {
  saveToLocalStorage(store.getState());
});
