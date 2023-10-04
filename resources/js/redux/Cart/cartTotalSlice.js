import { createSlice } from '@reduxjs/toolkit';

const cartTotalSlice = createSlice({
  name: 'cartTotal',
  initialState: 0,
  reducers: {
    updateTotal: (state, action) => {
      // Update the total price based on the items in the cart
      state = action.payload;
    },
  },
});

export const { updateTotal } = cartTotalSlice.actions;
export default cartTotalSlice.reducer;
