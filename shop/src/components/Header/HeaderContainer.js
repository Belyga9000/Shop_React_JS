import React, { useEffect, useRef, useState } from "react";
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

  const currenciesDropdown = useRef();

  const handleCategoryChange = (e) => {
    dispatch(selectCategory(e.target.text));
    dispatch(filterProducts());
  };

  const [isOpen, setIsOpen] = useState(false);
  const handleCurrencyDropdown = (e) => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handler = (event) => {
      if (!currenciesDropdown.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    <Header
      currenciesDropdown={currenciesDropdown}
      handleCurrencyDropdown={handleCurrencyDropdown}
      isOpen={isOpen}
      handleCategoryChange={handleCategoryChange}
      productType={productType}
      currencies={currencies}
      categories={categories}
      currentCurrency={currentCurrency}
    />
  );
};
