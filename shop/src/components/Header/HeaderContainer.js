import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import {
  fetchCurrencies,
  fetchProducts,
  filterProducts,
  productsAreFetched,
  selectAllCategories,
  selectAllCurrencies,
  selectCategory,
} from "../../store/header/headerSlice";
import Header from "./Header";

export const HeaderContainer = () => {
  const dispatch = useDispatch();
  const { productType } = useParams();
  const currencies = useSelector(selectAllCurrencies);
  const categories = useSelector(selectAllCategories);
  const productsIsFetched = useSelector(productsAreFetched);

  useEffect(() => {
    dispatch(fetchCurrencies());
    dispatch(fetchProducts());
    dispatch(selectCategory(productType));
  }, []);

  useEffect(() => {
    dispatch(filterProducts());
  }, [productsIsFetched]);

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
    />
  );
};
