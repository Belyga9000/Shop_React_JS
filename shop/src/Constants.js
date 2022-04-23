import { gql } from "graphql-request";

export const url = "http://localhost:4000/graphQl";

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
