import { createSlice } from "@reduxjs/toolkit";
{
  /* FIRST ONE IS FAVOURITES ARRAY,SECOND IS BASKET */
}
const initialState = [[], []];

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addFav: (state, action) => {
      {
        /* THIS FEATURE WILL ADD PRODUCTS TO FAVOURITES ARRAY,IF ITS ALREADY IN FAVOURITES ARRAY,
        IT WILL DELETE PRODUCT FROM FAVOURITES ARRAY */
      }
      const { id } = action.payload;
      const currentProduct = state[0].findIndex((product) => product.id === id);

      if (currentProduct === -1) {
        state[0].push(action.payload);
      } else {
        state[0].splice(currentProduct, 1);
      }
    },
    addToBasket: (state, action) => {
      {
        /* THIS FEATURE WILL ADD PRODUCTS TO BASKET ARRAY */
      }
      const { id, image, title, price } = action.payload;
      const currentProduct = state[1].find((product) => product.id === id);
      if (!currentProduct) {
        state[1].push({
          id,
          image,
          title,
          price,
        });
      }
    },
    deleteFromBasket: (state, action) => {
      {
        /* THIS FEATURE DELETES THAT PRODUCT FROM ARRAY */
      }
      const { id } = action.payload;
      const currentProduct = state[1].findIndex((product) => product.id == id);
      if (currentProduct !== -1) {
        state[1].splice(currentProduct, 1);
      }
    },
  },
});

export const { addFav, addToBasket, deleteFromBasket } = productSlice.actions;

export default productSlice.reducer;
