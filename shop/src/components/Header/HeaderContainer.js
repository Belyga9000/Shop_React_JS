import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import {
  fetchCurrencies,
  fetchProducts,
  filterProducts,
  selectAllCategories,
  selectAllCurrencies,
  selectCategory,
  selectedCurrency,
} from "../../store/header/headerSlice";
import Header from "./Header";

export const HeaderContainer = () => {
  const dispatch = useDispatch();
  const { productType } = useParams();
  const currencies = useSelector(selectAllCurrencies);
  const categories = useSelector(selectAllCategories);
  const currentCurrency = useSelector(selectedCurrency);

  useEffect(() => {
    dispatch(fetchCurrencies());
    dispatch(fetchProducts());
    dispatch(selectCategory(productType));
  }, []);

  const handleCategoryChange = (e) => {
    dispatch(selectCategory(e.target.text));
    dispatch(filterProducts());
  };

  return (
    <Header
      handleCategoryChange={handleCategoryChange}
      productType={productType}
      currencies={currencies}
      categories={categories}
      currentCurrency={currentCurrency}
    />
  );
};
