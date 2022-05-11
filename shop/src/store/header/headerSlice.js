import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import { GET_CURRENCIES, GET_PRODUCTS, url } from "../../Constants";
import { request } from "graphql-request";

const initialState = {
  currencies: {},
  products: {},
  selectedCategory: "",
  filteredCategory: {},
  productsForCurrentCategory: {},
  productsAreFetched: false,
};

export const fetchCurrencies = createAsyncThunk(
  "/fetchCurrencies",
  async () => {
    const res = await request(url, GET_CURRENCIES);
    return res;
  }
);
export const fetchProducts = createAsyncThunk("/fetchProducts", async () => {
  const res = await request(url, GET_PRODUCTS);
  return res;
});

const headerSlice = createSlice({
  name: "header",
  initialState,
  reducers: {
    selectCategory: (state, action) => {
      const categoryName = action.payload;
      state.selectedCategory = categoryName;
      return state;
    },
    productsDidUpdate: (state) => {},
    filterProducts: (state) => {
      const category = state.selectedCategory;
      const currentProducts = current(state.products);
      const data = currentProducts.categories;

      if (data) {
        const filteredCategory = Object.values(data).filter(
          (a) => a.name === category
        );

        const filteredProducts = (([{ products }]) => ({ products }))(
          filteredCategory
        );
        state.filteredCategory = filteredProducts.products;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCurrencies.fulfilled, (state, action) => {
        const currencies = action.payload;
        state.currencies = currencies;
        return state;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        const categories = action.payload;
        state.products = categories;
        state.productsAreFetched = true;
        return state;
      });
  },
});

export const selectAllCurrencies = (state) =>
  state.header.currencies.currencies;
export const selectAllCategories = (state) => state.header.products.categories;
export const selectedCategory = (state) => state.header.selectedCategory;
export const productsAreFetched = (state) => state.header.productsAreFetched;
export const filteredProducts = (state) => state.header.filteredCategory;

export const { selectCategory, filterProducts } = headerSlice.actions;
export default headerSlice.reducer;
