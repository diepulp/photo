import { gql } from 'graphql-tag'
export const typeDefs = gql`
  type Query {
    hello: String
  }

  type Movie {
    title: String
    actors: [Actor!]! @relationship(type: "ACTED_IN", direction: IN)
  }

  type Actor {
    name: String
    movies: [Movie!]! @relationship(type: "ACTED_IN", direction: OUT)
  }
`

