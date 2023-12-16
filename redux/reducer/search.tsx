import { createSlice } from '@reduxjs/toolkit';
import { search } from '../actions/search';

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    value: 0,
  },
  reducers: {
    searchProducts: search,
  },
});

export const { searchProducts } = searchSlice.actions;

export default searchSlice.reducer;