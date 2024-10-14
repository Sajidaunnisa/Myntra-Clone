import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wishlist: [],
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist: (state, action) => {
      state.wishlist.push(action.payload);
    },
    removeFromWishlist: (state, action) => {
      state.wishlist = state.wishlist.filter(
        (itemId) => itemId !== action.payload
      );
    },
  },
});

export const wishlistActions = wishlistSlice.actions;
export const wishlistReducer = wishlistSlice.reducer;
