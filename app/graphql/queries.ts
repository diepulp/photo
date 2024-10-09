import { gql } from 'apollo-server-micro'

// export const GET_ACTORS_NAME = gql`
//   query GET_ACTORS_NAME {
//     movies {
//       title
//       actors {
//         name
//       }
//     }
//   }
// `

// export const ActorNames = gql`
//   fragment ActorNamesFragment on Actor {
//     name
//   }
// `
export const GET_USERS_QUERY = gql`
  query GET_USERS_QUERY {
    users {
      firstName
      lastName
    }
  }
`
