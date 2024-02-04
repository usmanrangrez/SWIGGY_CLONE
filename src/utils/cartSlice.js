import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      const existingItem = state.items.find(
        (item) => item?.card?.info?.id === action?.payload?.card?.info?.id
      );
      if (existingItem) {
        existingItem.quantity = (existingItem.quantity || 0) + 1;
      } else {
        const newItem = {
          ...action.payload,
          quantity: 1,
        };
        state.items.push(newItem);
      }
    },
    removeItem: (state, action) => {
      const index = state.items.findIndex(
        (item) => item?.card?.info?.id === action?.payload?.card?.info?.id
      );
      if (index !== -1) {
        if (state.items[index].quantity > 1) {
          state.items[index].quantity -= 1;
        } else {
          state.items.splice(index, 1);
        }
      }
    },
    clearCart: (state) => {
      state.items.length = 0;
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
