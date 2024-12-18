import React from 'react'
import { getClient } from '@/lib/client'
import { useQuery, gql } from '@apollo/client'
// import { Movie, Actor } from '@/codegen/generations/core/graphql'
// import { Get_Actors_NameDocument } from '@/codegen/generations/core/graphql'
// import { Get_Actors_NameQuery } from '@/codegen/generations/core/graphql'

const GraphMovies = async () => {
  const client = getClient()
  // console.log('client', client)
  // const { data } = await client.query<Get_Actors_NameQuery>({
  //   query: Get_Actors_NameDocument,
  // })
  // console.log('Data', data.users)
  // const dataArr = data.movies.map((t) => t)
  // console.log('Destructured data object', ...dataArr)
  // const movieElements = dataArr.map((movie, index: number) => (
  //   <div key={index}>
  //     <h2>{movie.title}</h2>
  //     <ul>
  //       {movie.actors?.map((a, i) => {
  //         return <li key="i">{a.name}</li>
  //       })}
  //     </ul>
  //   </div>
  // ))
  // return <div>{movieElements}</div>
  return <div>Null</div>
}

export default GraphMovies
