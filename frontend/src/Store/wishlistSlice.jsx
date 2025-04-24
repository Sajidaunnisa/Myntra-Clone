import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchWishlistItems = createAsyncThunk(
  "wishlist/fetchWishlistItems",
  async () => {
    const response = await axios.get("http://localhost:5000/api/wishlist");
    return response.data;
  }
);

export const addToWishlist = createAsyncThunk(
  "wishlist/addToWishlist",
  async (item) => {
    await axios.post("http://localhost:5000/api/wishlist", item);
    return item;
  }
);

export const removeFromWishlist = createAsyncThunk(
  "wishlist/removeFromWishlist",
  async (id) => {
    await axios.delete(`http://localhost:5000/api/wishlist/${id}`);
    return id;
  }
);

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: {
    items: [],
    status: "idle",
  },
  reducers: {
    clearWishlist: (state) => {
      state.items = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchWishlistItems.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(addToWishlist.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(removeFromWishlist.fulfilled, (state, action) => {
        state.items = state.items.filter((item) => item.id !== action.payload);
      });
  },
});

export const wishlistReducer = wishlistSlice.reducer;
export const wishlistActions = wishlistSlice.actions;

// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   wishlist: [],
// };

// const wishlistSlice = createSlice({
//   name: "wishlist",
//   initialState,
//   reducers: {
//     addToWishlist: (state, action) => {
//       state.wishlist.push(action.payload);
//     },
//     removeFromWishlist: (state, action) => {
//       state.wishlist = state.wishlist.filter(
//         (itemId) => itemId !== action.payload
//       );
//     },
//   },
// });

// export const wishlistActions = wishlistSlice.actions;
// export const wishlistReducer = wishlistSlice.reducer;
