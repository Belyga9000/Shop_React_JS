import React from "react";
import { useSelector } from "react-redux";
import { selectedCategory } from "../../store/header/headerSlice";
import { Content } from "./Content";

export const ContentContainer = () => {
  const category_name = useSelector(selectedCategory);

  return <Content category_name={category_name} />;
};
