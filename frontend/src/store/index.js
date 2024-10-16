import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlise.js";

export default configureStore({
  reducer: {
    auth: authReducer,
  },
});
