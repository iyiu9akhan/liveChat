import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    value: localStorage.getItem("userLoginInfo")
      ? JSON.parse(localStorage.getItem("userLoginInfo"))
      : null,
  },
  reducers: {
    userLoginInfo: (state, action) => {
      //   console.log(state.value);
      //   console.log(action.payload);
      state.value = action.payload;
    },
  },
});

export const { userLoginInfo } = userSlice.actions;

export default userSlice.reducer;
