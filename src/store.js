import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./features/productSlice";
import sidebarReducer from "./features/sidebarSlice";
import basketReducer from "./features/basketSlice";

export const store = configureStore({
  reducer: {
    product: productReducer,
    sidebars: sidebarReducer,
    basket: basketReducer,
  },
});
