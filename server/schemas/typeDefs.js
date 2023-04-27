const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    id: ID
    firstName: String
    lastName: String
    email: String
    ownedCars: [Car]
    cart: [Product]
  }

  type Car {
    id: ID
    make: String
    carModel: String
    year: Int
    oil: [Product]
  }

  type Product {
    id: ID
    name: String
    price: Int
    quantity: Int
  }

  type Auth {
    token: ID!
    user: User
  }

  type Checkout {
    session: ID
  }
  
  type Query {
    garage: User
    cart: User 
    oil: User
    checkout(products: [ID]!): Checkout
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    deleteUser(_id: ID!): User
    addCar(make: String!, carModel: String!, year: Int!): Car
    removeCar(_id: ID!): User
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
