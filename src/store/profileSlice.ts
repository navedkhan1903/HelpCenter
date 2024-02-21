import { createSlice } from "@reduxjs/toolkit";

export const profileSlice = createSlice({
  name: "updateProfile",
  initialState: { profileUpdated: new Date() },
  reducers: {
    update: (state) => {
      state.profileUpdated = new Date();
    },
  },
});

export const { update } = profileSlice.actions;
export default profileSlice.reducer;
