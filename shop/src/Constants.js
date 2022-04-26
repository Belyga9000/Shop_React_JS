import { gql } from "graphql-request";

export const url = "http://localhost:4000/graphQl";

export const GET_PRODUCTS = gql`
  {
    categories {
      name
      products {
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

export const GET_CURRENCIES = gql`
  {
    currencies {
      label
      symbol
    }
  }
`;
