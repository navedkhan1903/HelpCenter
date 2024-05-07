import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "authInfo",
  initialState: {
    name: "",
    email: "",
    pass: "",
  },
  reducers: {
    setAuthInfo: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.pass = action.payload.pass;
    },
  },
});

export const { setAuthInfo } = authSlice.actions;
export default authSlice.reducer;
