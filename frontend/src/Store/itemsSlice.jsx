import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchHomeItems = createAsyncThunk("items/fetchHome", async () => {
  const response = await axios.get(
    "https://myntra-backend-1v84.onrender.com/api/"
  );
  return response.data;
});

export const fetchMenItems = createAsyncThunk("items/fetchMen", async () => {
  const response = await axios.get(
    "https://myntra-backend-1v84.onrender.com/api/men"
  );
  return response.data;
});

export const fetchWomenItems = createAsyncThunk(
  "items/fetchWomen",
  async () => {
    const response = await axios.get(
      "https://myntra-backend-1v84.onrender.com/api/women"
    );
    return response.data;
  }
);

export const fetchKidsItems = createAsyncThunk("items/fetchKids", async () => {
  const response = await axios.get(
    "https://myntra-backend-1v84.onrender.com/api/kids"
  );
  return response.data;
});

export const fetchBeautyItems = createAsyncThunk(
  "items/fetchBeauty",
  async () => {
    const response = await axios.get(
      "https://myntra-backend-1v84.onrender.com/api/beauty"
    );
    return response.data;
  }
);

export const fetchHomeLivingItems = createAsyncThunk(
  "items/fetchHomeLiving",
  async () => {
    const response = await axios.get(
      "https://myntra-backend-1v84.onrender.com/api/home-living"
    );
    return response.data;
  }
);
const fetchThunks = {
  Home: fetchHomeItems,
  Men: fetchMenItems,
  Women: fetchWomenItems,
  Kids: fetchKidsItems,
  Beauty: fetchBeautyItems,
  HomeLiving: fetchHomeLivingItems,
};

const createItemsSlice = (name) =>
  createSlice({
    name,
    initialState: {
      items: [],
      loading: false,
      error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
      const thunk = fetchThunks[name];
      builder
        .addCase(thunk.pending, (state) => {
          state.loading = true;
        })
        .addCase(thunk.fulfilled, (state, action) => {
          state.loading = false;
          state.items = action.payload;
        })
        .addCase(thunk.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message;
        });
    },
  });

// Create slices
export const homeitemsSlice = createItemsSlice("Home");
export const menitemsSlice = createItemsSlice("Men");
export const womenitemsSlice = createItemsSlice("Women");
export const kidsitemsSlice = createItemsSlice("Kids");
export const beautyitemsSlice = createItemsSlice("Beauty");
export const homenlivingitemsSlice = createItemsSlice("HomeLiving");

// Export reducers
export const homeitemsReducer = homeitemsSlice.reducer;
export const menitemsReducer = menitemsSlice.reducer;
export const womenitemsReducer = womenitemsSlice.reducer;
export const kidsitemsReducer = kidsitemsSlice.reducer;
export const beautyitemsReducer = beautyitemsSlice.reducer;
export const homenlivingitemsReducer = homenlivingitemsSlice.reducer;
