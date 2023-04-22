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

  type Query {
    garage: User
    cart: User 
    oil: User
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    deleteUser(_id: ID!): User
    addCar(make: String!, carModel: String!, year: Int!): Car
    removeCar(_id: ID!, )
    addToCart
    removeFromCart
    login
  }
`;


module.exports = typeDefs;
