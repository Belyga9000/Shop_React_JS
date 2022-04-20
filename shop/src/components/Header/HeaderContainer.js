import React from "react";
import { GET_CATEGORIES, GET_CURRENCIES, GET_PRODUCTS } from "../../Constants";
import Header from "./Header";
import { useGraphQl } from "../../customHook";
import { useParams } from "react-router-dom";
// import { useQuery } from "@apollo/client";
// import { client } from "../../index";

export const HeaderContainer = () => {
  // const { data: currencyData, error: currencyError } = useQuery(GET_CURRENCIES);
  // const currencies = client.readQuery({
  //   query: GET_CURRENCIES,
  // });
  // const { data: categoriesData, error: categoriesError } =
  //   useQuery(GET_CATEGORIES);
  // const categories = client.readQuery({
  //   query: GET_CATEGORIES,
  // });

  const categories = useGraphQl(GET_CATEGORIES);
  const currencies = useGraphQl(GET_CURRENCIES);
  useGraphQl(GET_PRODUCTS);
  const { productType } = useParams();
  if (currencies.currencies && categories.categories) {
    return (
      <Header
        productType={productType}
        currencies={currencies.currencies}
        categories={categories.categories}
      />
    );
  }
};
