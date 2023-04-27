import { gql } from '@apollo/client';

export const QUERY_OIL = gql`
query Oil($id: [ID]!) {
  oil(_id: $id) {
    id
    name
    price
    quantity
  }
}
`;

export const QUERY_PRODUCTS = gql`
query Query {
  allProducts {
    id
    name
    price
    quantity
  }
}
`;

export const QUERY_CHECKOUT = gql`
query Oil($products: [ID]!) {
  checkout(products: $products) {
    session
  }
}
`;

export const QUERY_GARAGE = gql`
query Garage {
  garage {
    email
    firstName
    id
    lastName
    ownedCars {
      carModel
      id
      make
      year
    }
  }
}
`;
