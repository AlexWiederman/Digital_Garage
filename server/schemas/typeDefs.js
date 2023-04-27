const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    id: ID!
    firstName: String!
    lastName: String!
    email: String!
    ownedCars: [Car]
    orders: [Order]
  }

  type Car {
    id: ID!
    make: String!
    carModel: String!
    year: Int!
  }

  type Product {
    id: ID!
    name: String!
    price: Int!
    quantity: Int!
  }

  type Order {
    _id: ID
    purchaseDate: String
    products: [Product]
  }

  type Auth {
    token: ID!
    user: User!
  }

  type Checkout {
    session: ID!
  }
  
  type Query {
    garage: User
    oil(_id: [ID]!): Product
    order(_id: ID!): Order
    checkout(products: [ID]!): Checkout
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    deleteUser(_id: ID!): User
    addOrder(products: [ID]!): Order
    updateProduct(_id: ID!, quantity: Int!): Product
    addCar(make: String!, carModel: String!, year: Int!): Car
    removeCar(_id: ID!): User
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
