import { createSlice } from '@reduxjs/toolkit';
import { product } from '../actions/producto';

const productoSlice = createSlice({
  name: 'producto',
  initialState: {
    value: 0,
  },
  reducers: {
    increment: product,
  },
});

export const { increment } = productoSlice.actions;

export default productoSlice.reducer;