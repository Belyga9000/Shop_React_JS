import { InMemoryCache, makeVar } from "@apollo/client";

export const allLabels = makeVar([])
export const allSymbols = makeVar([])
export const isSelected = makeVar (false)

export const cache = new InMemoryCache ({
    typePolicies: {
      currencies: {
        fields: {
          label: {
            read(label) {
              return allLabels();
            }
          },
          symbol: {
            read(symbol) {
              return allSymbols();
          }
        },
          isSelected: {
            read(isSelected) {
              return isSelected
          }
        },
      }
    }
}})