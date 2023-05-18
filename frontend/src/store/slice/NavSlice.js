import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  toggle: false,
};

export const sideNav = createSlice({
  name: "sideNav",
  initialState,
  reducers: {
    toggleSideNav: (state, action) => {
      return {
        ...state,
        toggle: !state.toggle,
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggleSideNav } = sideNav.actions;

export default sideNav.reducer;
