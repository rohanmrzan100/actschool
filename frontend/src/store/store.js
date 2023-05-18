import { configureStore } from "@reduxjs/toolkit";
import navSlice from "./slice/NavSlice";

export const store = configureStore({
  reducer: {
    nav:navSlice
  },
});
