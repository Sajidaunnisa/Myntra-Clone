import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchBagItems = createAsyncThunk("bag/fetchBagItems", async () => {
  const response = await axios.get(
    "https://myntra-backend-1v84.onrender.com/api/bag"
  );
  return response.data;
});

export const addToBag = createAsyncThunk("bag/addToBag", async (item) => {
  console.log("Adding to bag:", item);
  await axios.post("https://myntra-backend-1v84.onrender.com/api/bag", item);
  return item;
});

export const removeFromBag = createAsyncThunk(
  "bag/removeFromBag",
  async (id) => {
    await axios.delete(
      `https://myntra-backend-1v84.onrender.com/api/bag/${id}`
    );
    return id;
  }
);

const bagSlice = createSlice({
  name: "bag",
  initialState: {
    items: [],
    status: "idle",
  },
  reducers: {
    clearBag: (state) => {
      state.items = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBagItems.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(addToBag.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(removeFromBag.fulfilled, (state, action) => {
        state.items = state.items.filter((item) => item.id !== action.payload);
      });
  },
});

export const bagReducer = bagSlice.reducer;
export const bagActions = bagSlice.actions;
