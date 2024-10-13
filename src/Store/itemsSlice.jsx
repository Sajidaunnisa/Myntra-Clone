import { createSlice } from "@reduxjs/toolkit";
import Specialcategories from "../../src/Data/homeData";
import WomenProducts from "../Data/womenData";
import MenProducts from "../Data/manData";
import KidsProducts from "../Data/kidsData";
import BeautyProducts from "../Data/beautyData";
import HomeandLivingProducts from "../Data/home&livingData";

const homeitemsSlice = createSlice({
  name: "homeItems",
  initialState: Specialcategories,
  reducers: {
    addInitialItem: (store, action) => {
      return store;
    },
  },
});

const menitemsSlice = createSlice({
  name: "menItems",
  initialState: MenProducts,
  reducers: {
    addInitialItem: (store, action) => {
      return store;
    },
  },
});

const womenitemsSlice = createSlice({
  name: "womenItems",
  initialState: WomenProducts,
  reducers: {
    addInitialItem: (store, action) => {
      return store;
    },
  },
});

const kidsitemsSlice = createSlice({
  name: "kidsItems",
  initialState: KidsProducts,
  reducers: {
    addInitialItem: (store, action) => {
      return store;
    },
  },
});

const beautyitemsSlice = createSlice({
  name: "beautyItems",
  initialState: BeautyProducts,
  reducers: {
    addInitialItem: (store, action) => {
      return store;
    },
  },
});

const homenlivingitemsSlice = createSlice({
  name: "homeLivingItems",
  initialState: HomeandLivingProducts,
  reducers: {
    addInitialItem: (store, action) => {
      return store;
    },
  },
});

export const homeitemsActions = homeitemsSlice.actions;
export const menitemsActions = menitemsSlice.actions;
export const womenitemsActions = womenitemsSlice.actions;
export const kidsitemsActions = kidsitemsSlice.actions;
export const beautyitemsActions = beautyitemsSlice.actions;
export const homenlivingitemsActions = homenlivingitemsSlice.actions;

export const homeitemsReducer = homeitemsSlice.reducer;
export const menitemsReducer = menitemsSlice.reducer;
export const womenitemsReducer = womenitemsSlice.reducer;
export const kidsitemsReducer = kidsitemsSlice.reducer;
export const beautyitemsReducer = beautyitemsSlice.reducer;
export const homenlivingitemsReducer = homenlivingitemsSlice.reducer;
