import authSlice from "./authSlice";
import profileSlice from "./profileSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    updateProfile: profileSlice,
    authInfo: authSlice,
  },
});
