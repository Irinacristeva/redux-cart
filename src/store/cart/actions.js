export const selectCart = (state) => state.cart;
export const selectCartItemsCount = (state) =>
  state.cart.items.reduce((total, item) => total + item.quantity, 0);
