/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: null,
  data: null,
};

const modalsSlice = createSlice({
  name: 'modals',
  initialState,
  reducers: {
    closeModal: (state) => {
      state.name = null;
    },
    openModal: (state, { payload }) => {
      if (!payload.id) {
        state.name = payload.name;
        state.data = null;
      } else {
        state.name = payload.name;
        state.data = payload.id;
      }
    },
  },
});

export const { closeModal, openModal } = modalsSlice.actions;
export default modalsSlice.reducer;
