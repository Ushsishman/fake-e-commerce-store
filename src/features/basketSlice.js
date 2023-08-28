import { createSlice } from "@reduxjs/toolkit";

const initialState = { current: "basket" };

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    setCurrent: (state, action) => {
      {
        /* THIS IS RIGHT SIDEBARS MENU PART,
        IF YOU CLCIK FOR BASKET PART,STATE WILL CHANGE TO BASKET,
        IF YOU CLICK FAVOURITES PART,STATE WILL BE FAVOURITES */
      }
      if (action.payload == "basket") {
        state.current = "basket";
      }
      if (action.payload == "favourites") {
        state.current = "favourites";
      }
    },
  },
});

export const { setCurrent } = basketSlice.actions;

export default basketSlice.reducer;
