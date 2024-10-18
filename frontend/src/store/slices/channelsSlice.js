/* eslint-disable no-param-reassign */

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  activeChannel: {
    id: '1',
    name: 'general',
    removable: false,
  },
};

const channelsSlice = createSlice({
  name: 'channels',
  initialState,
  reducers: {
    setActive: (state, { payload }) => {
      state.activeChannel = payload;
    },
  },
});

export const { setActive } = channelsSlice.actions;
export default channelsSlice.reducer;
