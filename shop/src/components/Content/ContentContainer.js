import React from "react";
import { useSelector } from "react-redux";
import {
  filteredProducts,
  selectedCategory,
} from "../../store/header/headerSlice";
import { Content } from "./Content";

export const ContentContainer = () => {
  const category_name = useSelector(selectedCategory);
  const products = useSelector(filteredProducts);

  return <Content products={products} category_name={category_name} />;
};
