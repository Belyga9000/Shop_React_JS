import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import {
  fetchCategories,
  fetchCurrencies,
  fetchProducts,
  selectAllCategories,
  selectAllCurrencies,
} from "../../store/header/headerSlice";
import Header from "./Header";

export const HeaderContainer = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCurrencies());
    dispatch(fetchCategories());
    dispatch(fetchProducts());
  }, []);
  const currencies = useSelector(selectAllCurrencies);
  const categories = useSelector(selectAllCategories);

  // useGraphQl(GET_PRODUCTS);
  const { productType } = useParams();
  return (
    <Header
      productType={productType}
      currencies={currencies}
      categories={categories}
    />
  );
};
