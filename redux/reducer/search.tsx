import { createSlice } from '@reduxjs/toolkit';

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    valuePrecio: 0,
    valueArea: 0,
  },
  reducers: {
    actPrecio: (state, action) => {
      state.valuePrecio = action.payload;
    },
    actArea: (state, action) => {
      state.valueArea = action.payload;
    },
  },
});

export const { actPrecio, actArea } = searchSlice.actions;

export default searchSlice.reducer;