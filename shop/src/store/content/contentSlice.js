import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const contentSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
});

export const { increment, decrement, incrementByAmount } = contentSlice.actions;
export default contentSlice.reducer;
