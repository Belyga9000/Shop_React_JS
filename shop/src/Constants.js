import { gql } from "@apollo/client";

export const GET_CATEGORIES = gql`
  {
    categories {
      name
    }
  }
`;

export const GET_CURRENCIES = gql`
  {
    currencies {
      label
      symbol
      isSelected @client
    }
  }
`;

export const GET_PRODUCTS = gql`
  query products($categoryName: CategoryInput) {
    category(input: $categoryName) {
      name
      products {
        id
        name
        inStock
        gallery
        description
        attributes {
          name
          items {
            displayValue
            value
          }
        }
        prices {
          amount
          currency {
            symbol
          }
        }
        brand
      }
    }
  }
`;
