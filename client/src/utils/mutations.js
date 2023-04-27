import { gql } from '@apollo/client';


export const LOGIN = gql`
mutation Mutation($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
    user {
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
}
`;

export const ADD_USER = gql`
mutation Mutation($firstName: String!, $lastName: String!, $email: String!, $password: String!) {
  addUser(firstName: $firstName, lastName: $lastName, email: $email, password: $password) {
    token
    user {
      ownedCars {
        year
        make
        id
        carModel
      }
    }
  }
}
`;

export const ADD_CAR = gql`
mutation Mutation($make: String!, $carModel: String!, $year: Int!) {
  addCar(make: $make, carModel: $carModel, year: $year) {
    carModel
    id
    make
    year
  }
}
`;

export const DELETE_USER = gql`
mutation Mutation($id: ID!) {
  deleteUser(_id: $id) {
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
`

export const REMOVE_CAR = gql`
mutation RemoveCar($id: ID!) {
  removeCar(_id: $id) {
    email
    firstName
    id
    ownedCars {
      carModel
      id
      make
      year
    }
    lastName
  }
}
`