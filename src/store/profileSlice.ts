import { createSlice } from "@reduxjs/toolkit";

export const profileSlice = createSlice({
  name: "updateProfile",
  initialState: { profileUpdated: 0 },
  reducers: {
    update: (state) => {
      state.profileUpdated++;
    },
  },
});

export const { update } = profileSlice.actions;
export default profileSlice.reducer;
