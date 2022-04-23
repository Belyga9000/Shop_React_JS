import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { GET_CATEGORIES, GET_CURRENCIES, url } from "../../Constants";
import { request } from "graphql-request";

const initialState = {
  currencies: {},
  categories: {},
  products: {},
};
// const fetchCurrencies = () => {
//   request(url, GET_CURRENCIES).then((data) => console.log(data));
// };

// export const fetchCurrencies = incrementAsync() {
//   return dispatch => {
//     setTimeout(() => {
//       dispatch(increment())
//     },

export const fetchCurrencies = createAsyncThunk(
  "/fetchCurrencies",
  async () => {
    const res = await request(url, GET_CURRENCIES);
    return res;
  }
);
export const fetchCategories = createAsyncThunk(
  "/fetchCategories",
  async () => {
    const res = await request(url, GET_CATEGORIES);
    return res;
  }
);
export const fetchProducts = createAsyncThunk("/fetchProducts", async () => {
  const res = await request(url, GET_CATEGORIES);
  return res;
});

const headerSlice = createSlice({
  name: "currencies",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCurrencies.fulfilled, (state, action) => {
        const currencies = action.payload;
        state.currencies = currencies;
        return state;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        const categories = action.payload;
        state.categories = categories;
        return state;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        const products = action.payload;
        state.products = products;
        return state;
      });
  },
});

// Rename the exports for readability in component usage
export const selectAllCurrencies = (state) =>
  state.header.currencies.currencies;
export const selectAllCategories = (state) =>
  state.header.categories.categories;

export const { increment } = headerSlice.actions;
export default headerSlice.reducer;
