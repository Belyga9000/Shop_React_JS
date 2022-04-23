import React from "react";
import { useOutletContext } from "react-router";
import { Content } from "./Content";

export const ContentContainer = () => {
  const category_name = useOutletContext();

  // const handleclickdouble = () => {
  //   const data = client.readQuery({
  //     query: GET_PRODUCTS,
  //     variables: {
  //       categoryName: {
  //         title: category_name,
  //       },
  //     },
  //   });
  //   console.log(data);
  //   return data;
  // };

  // const { data } = useQuery(GET_PRODUCTS, {
  //   variables: {
  //     categoryName: {
  //       title: category_name,
  //     },
  //   },
  // });

  // const category_name = JSON.stringify(useOutletContext());
  return (
    <Content
      // handleclickdouble={handleclickdouble}
      category_name={category_name}
    />
  );
};
