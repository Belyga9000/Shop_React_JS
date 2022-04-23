import { createSlice } from "@reduxjs/toolkit";

const initialState = { data: [] };

const contentSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    increment(state) {
      state.value++;
    },
    decrement(state) {
      state.value--;
    },
    incrementByAmount(state, action) {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = contentSlice.actions;
export default contentSlice.reducer;
