/* eslint-disable implicit-arrow-linebreak */
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlise.js';
import channelsSlice from './slices/channelsSlice.js';
import { channelsApi } from './api/channelsApi.js';

export default configureStore({
  reducer: {
    auth: authReducer,
    channels: channelsSlice,
    [channelsApi.reducerPath]: channelsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(channelsApi.middleware),
});
