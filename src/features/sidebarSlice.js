import { createSlice } from "@reduxjs/toolkit";

const initialState = { sidebarMenu: false, basketAndFavMenu: false };

export const sidebarSlice = createSlice({
  name: "sidebars",
  initialState,
  reducers: {
    open: (state, action) => {
      {
        /* THIS FEATURE CHECKS WHAT YOU CLICKED,IF YOU CLICKED RIGHT SIDEBAR ICON,IT WILL OPEN RIGHT,
    IF YOU CLICKED LEFT ICON,IT WILL OPEN LEFT SIDEBAR */
      }
      if (action.payload == "sidebarMenu") {
        state.sidebarMenu = true;
      }
      if (action.payload == "basketAndFavMenu") {
        state.basketAndFavMenu = true;
      }
    },
    close: (state, action) => {
      {
        /* THIS IS THE SAME WITH ABOVE,BUT IT WILL CLOSE DEPENDS ON WHAT YOU CLICKED */
      }
      if (action.payload == "sidebarMenu") {
        state.sidebarMenu = false;
      }
      if (action.payload == "basketAndFavMenu") {
        state.basketAndFavMenu = false;
      }
    },
  },
});

export const { open, close } = sidebarSlice.actions;

export default sidebarSlice.reducer;
