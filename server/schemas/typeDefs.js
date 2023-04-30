const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    firstName: String!
    lastName: String!
    email: String!
    ownedCars: [Car]
  }

  type Car {
    _id: ID!
    make: String!
    carModel: String!
    year: Int!
  }

  type Product {
    _id: ID!
    image: String!
    name: String!
    price: Int!
    quantity: Int!
  }

  type Auth {
    token: ID!
    user: User
  }

  type Checkout {
    session: String
  }
  
  type Query {
    garage: User
    allProducts: [Product]
    oil(_id: [ID]!): Product
    checkout(cart: String): Checkout
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    deleteUser(_id: ID!): User
    updateProduct(_id: ID!, quantity: Int!): Product
    addCar(make: String!, carModel: String!, year: Int!): Car
    removeCar(_id: ID!): Car
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
