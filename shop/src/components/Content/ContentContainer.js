import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  filteredProducts,
  filterProducts,
  productsAreFetched,
  selectedCategory,
} from "../../store/header/headerSlice";
import { Content } from "./Content";

export const ContentContainer = () => {
  const category_name = useSelector(selectedCategory);
  const products = useSelector(filteredProducts);
  const productsIsFetched = useSelector(productsAreFetched);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(filterProducts());
  }, [productsIsFetched]);

  return <Content products={products} category_name={category_name} />;
};
