import { configureStore } from '@reduxjs/toolkit';
import jobReducer from './jobslice';

export const store = configureStore({
  reducer: {
    jobs: jobReducer,
  },
});
