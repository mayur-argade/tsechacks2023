import { configureStore } from "@reduxjs/toolkit";
import auth from "./AuthSlice";
import UserDetailSlice from "./UserDetailSlice";

export const store = configureStore({
  reducer: {
    auth,
    UserDetailSlice
  },
});
