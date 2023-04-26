import { gql } from '@apollo/client';

export const QUERY_OIL = gql`
query Oil($product: [ID]!) {
  oil(product: $product) {
    id
    name
    price
    quantity
  }
}
`;



export const QUERY_CHECKOUT = gql`
  query getCheckout($products: [ID]!) {
    checkout(products: $products) {
      session
    }
  }
`;

export const QUERY_GARAGE = gql`
  {
    user {
      firstName
      lastName
      orders {
        _id
        purchaseDate
        products {
          _id
          name
          description
          price
          quantity
          image
        }
      }
    }
  }
`;
