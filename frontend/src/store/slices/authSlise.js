import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: localStorage.getItem("token") || null,
  username: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logIn: (state, { payload }) => {
      localStorage.setItem("token", payload.token);
      state.username = payload.username;
      state.token = payload.token;
    },
    logOut: (state) => {
      localStorage.clear();
      state.token = null;
      state.username = null;
    },
  },
});

export const { logIn, logOut } = authSlice.actions;
export default authSlice.reducer;
