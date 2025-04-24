import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Create thunks to fetch each category
export const fetchHomeItems = createAsyncThunk("items/fetchHome", async () => {
  const response = await axios.get("http://localhost:5000/api/"); // Replace with your actual backend route
  return response.data;
});

export const fetchMenItems = createAsyncThunk("items/fetchMen", async () => {
  const response = await axios.get("http://localhost:5000/api/men");
  return response.data;
});

export const fetchWomenItems = createAsyncThunk(
  "items/fetchWomen",
  async () => {
    const response = await axios.get("http://localhost:5000/api/women");
    return response.data;
  }
);

export const fetchKidsItems = createAsyncThunk("items/fetchKids", async () => {
  const response = await axios.get("http://localhost:5000/api/kids");
  return response.data;
});

export const fetchBeautyItems = createAsyncThunk(
  "items/fetchBeauty",
  async () => {
    const response = await axios.get("http://localhost:5000/api/beauty");
    return response.data;
  }
);

export const fetchHomeLivingItems = createAsyncThunk(
  "items/fetchHomeLiving",
  async () => {
    const response = await axios.get("http://localhost:5000/api/home-living");
    return response.data;
  }
);

// Generic slice generator
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
      builder
        .addCase(eval(`fetch${name}Items`).pending, (state) => {
          state.loading = true;
        })
        .addCase(eval(`fetch${name}Items`).fulfilled, (state, action) => {
          state.loading = false;
          state.items = action.payload;
        })
        .addCase(eval(`fetch${name}Items`).rejected, (state, action) => {
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

// import { createSlice } from "@reduxjs/toolkit";
// import Specialcategories from "../../src/Data/homeData";
// import WomenProducts from "../Data/womenData";
// import MenProducts from "../Data/manData";
// import KidsProducts from "../Data/kidsData";
// import BeautyProducts from "../Data/beautyData";
// import HomeandLivingProducts from "../Data/home&livingData";

// const homeitemsSlice = createSlice({
//   name: "homeItems",
//   initialState: Specialcategories,
//   reducers: {
//     addInitialItem: (store, action) => {
//       return store;
//     },
//   },
// });

// const menitemsSlice = createSlice({
//   name: "menItems",
//   initialState: MenProducts,
//   reducers: {
//     addInitialItem: (store, action) => {
//       return store;
//     },
//   },
// });

// const womenitemsSlice = createSlice({
//   name: "womenItems",
//   initialState: WomenProducts,
//   reducers: {
//     addInitialItem: (store, action) => {
//       return store;
//     },
//   },
// });

// const kidsitemsSlice = createSlice({
//   name: "kidsItems",
//   initialState: KidsProducts,
//   reducers: {
//     addInitialItem: (store, action) => {
//       return store;
//     },
//   },
// });

// const beautyitemsSlice = createSlice({
//   name: "beautyItems",
//   initialState: BeautyProducts,
//   reducers: {
//     addInitialItem: (store, action) => {
//       return store;
//     },
//   },
// });

// const homenlivingitemsSlice = createSlice({
//   name: "homeLivingItems",
//   initialState: HomeandLivingProducts,
//   reducers: {
//     addInitialItem: (store, action) => {
//       return store;
//     },
//   },
// });

// export const homeitemsActions = homeitemsSlice.actions;
// export const menitemsActions = menitemsSlice.actions;
// export const womenitemsActions = womenitemsSlice.actions;
// export const kidsitemsActions = kidsitemsSlice.actions;
// export const beautyitemsActions = beautyitemsSlice.actions;
// export const homenlivingitemsActions = homenlivingitemsSlice.actions;

// export const homeitemsReducer = homeitemsSlice.reducer;
// export const menitemsReducer = menitemsSlice.reducer;
// export const womenitemsReducer = womenitemsSlice.reducer;
// export const kidsitemsReducer = kidsitemsSlice.reducer;
// export const beautyitemsReducer = beautyitemsSlice.reducer;
// export const homenlivingitemsReducer = homenlivingitemsSlice.reducer;
