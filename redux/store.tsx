import { configureStore } from '@reduxjs/toolkit';
import searchReducer from './reducer/search';
import productoReducer from './reducer/producto';

const store = configureStore({
  reducer: {
    search: searchReducer,
    producto:productoReducer
  },
});

export default store;