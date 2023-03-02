import { createSlice } from "@reduxjs/toolkit";

const ProductSlice = createSlice({
  name: "product",
  initialState: {
    cart: [],
  },
  reducers: {
    cartReducer: (state, action) => {
      state.cart.push({...action.payload});
    }
  },
});

export const { cartReducer } = ProductSlice.actions;
export default ProductSlice.reducer;
