import { configureStore } from "@reduxjs/toolkit";
import usersSlice from "./user/userSlice";
export const store = configureStore({
  reducer: {
    users: usersSlice,
  },
});
