// src/store/cart/slice.js
import { createSlice } from '@reduxjs/toolkit';

// Загружаем состояние из localStorage
const loadFromLocalStorage = () => {
  try {
    const data = localStorage.getItem('cart');
    return data ? JSON.parse(data) : { items: [], totalQuantity: 0 };
  } catch (e) {
    console.error('Ошибка чтения из localStorage', e);
    return { items: [], totalQuantity: 0 };
  }
};

const initialState = loadFromLocalStorage();

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const item = state.items.find((i) => i.id === action.payload.id);
      if (item) {
        item.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      state.totalQuantity += 1;
    },
    removeFromCart(state, action) {
      const index = state.items.findIndex((i) => i.id === action.payload);
      if (index !== -1) {
        state.totalQuantity -= state.items[index].quantity;
        state.items.splice(index, 1);
      }
    },
    updateQuantity(state, action) {
      const { id, quantity } = action.payload;
      const item = state.items.find((i) => i.id === id);
      if (item) {
        state.totalQuantity += quantity - item.quantity;
        item.quantity = quantity;
      }
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
