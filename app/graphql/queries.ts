import { gql } from 'apollo-server-micro'

export const GET_USERS_QUERY = gql`
  query GET_USERS_QUERY {
    users {
      firstName
      lastName
    }
  }
`
