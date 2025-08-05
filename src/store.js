import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slice/userSlice";
import activeMsgBox from "./slice/activeMsgBox";

export default configureStore({
  reducer: {
    userInfo: userSlice,
    activeMsgBoxInfo: activeMsgBox,
  },
});
