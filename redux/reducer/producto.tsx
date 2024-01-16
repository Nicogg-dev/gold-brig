import { createSlice } from '@reduxjs/toolkit';
import { product } from '../actions/producto';

const productoSlice = createSlice({
  name: 'producto',
  initialState: {
    value: 0,
  },
  reducers: {
    otracosa: (state, action) => {
      state.value = action.payload;
  }
  },
});

export const { otracosa } = productoSlice.actions;

export default productoSlice.reducer;