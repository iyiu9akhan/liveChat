import { createSlice } from "@reduxjs/toolkit";

export const activeMsgBox = createSlice({
  name: "active",
  initialState: {
    value: "",
  },
  reducers: {
    activeMsgBoxInfo: (state, action) => {
        state.value = action.payload;
    //   console.log(state.value);
    //   console.log(action.payload);
    },
  },
});

export const { activeMsgBoxInfo } = activeMsgBox.actions;

export default activeMsgBox.reducer;
