import React from 'react'
import { getClient } from '@/app/lib/client'
import { useQuery, gql } from '@apollo/client'

const query = gql`
  query ExampleQuery {
    movies {
      title
    }
  }
`
type movieData = {
  title: string
}
const GraphMovies = async () => {
  const client = getClient()
  console.log('client', client)
  const { data } = await client.query({
    query: query,
  })
  console.log('Data', data.movies)
  const dataArr = data.movies.map((t: movieData) => t)
  console.log(dataArr)
  const movieElements = dataArr.map((movie: any, index: number) => (
    <div key={index}>
      <h3>{movie.title}</h3>
    </div>
  ));
  return (
    <div>{movieElements}</div>
  )
}

export default GraphMovies
