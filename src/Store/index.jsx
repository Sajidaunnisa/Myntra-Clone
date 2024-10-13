import { configureStore } from "@reduxjs/toolkit";
import { homeitemsReducer } from "./itemsSlice";
import { menitemsReducer } from "./itemsSlice";
import { womenitemsReducer } from "./itemsSlice";
import { kidsitemsReducer } from "./itemsSlice";
import { beautyitemsReducer } from "./itemsSlice";
import { homenlivingitemsReducer } from "./itemsSlice";
import { bagReducer } from "./bagSlice";
import { wishlistReducer } from "./wishlistSlice";

const myntraStore = configureStore({
  reducer: {
    homeItems: homeitemsReducer,
    menItems: menitemsReducer,
    womenItems: womenitemsReducer,
    kidsItems: kidsitemsReducer,
    beautyItems: beautyitemsReducer,
    homeLivingItems: homenlivingitemsReducer,
    bag: bagReducer,
    wishlist: wishlistReducer,
  },
});

export default myntraStore;
