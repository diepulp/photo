import { gql } from 'graphql-tag'
export const typeDefs = gql`
  query UsersQuery {
    users {
      firstName
      lastName
    }
  }

  type User {
    firstName: String!
    lastName: String!
    orders: [Order!]! @relationship(type: "ORDERED", direction: OUT)
  }

  type Order {
    orderType: String!
    users: [User!]! @relationship(type: "ORDERED", direction: IN)
  }
`
