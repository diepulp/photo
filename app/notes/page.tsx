'use client'
import React from 'react'
import { FragmentType, getFragmentData } from '@/codegen/generations/core/fragment-masking'
import { Button } from '@nextui-org/button'

// import { GET_ACTORS_NAME } from '@/app/graphql/queries'
import { useQuery, gql } from '@apollo/client'
import { graphql } from '@/codegen/generations/core/gql'
import { Movie } from '@/codegen/generations/core/graphql'
// import { Get_Actors_NameQuery } from '@/codegen/generations/core/graphql'
import { MoviesQuery } from '@/app/graphql/queries'

const ActorNames = graphql(`
  fragment ActorNamesFragment on Actor {
    name
  }
`)

type Names = {
  actor: FragmentType<typeof ActorNames>
}
function Movies() {
  //get the rypesctipt type
  const { data, loading, error } = useQuery(MoviesQuery)
  const movie = data?.movies
  console.log('Movies', movie)
  if (movie && movie.length > 0) {
    const actorsName = movie[0].actors[0]?.name
    console.log('Actors name', actorsName)
  }

  // console.log('Actor', { actor })

  if (loading) {
    return <p>Loading...</p>
  }
  return (
    <>
      {data &&
        data.movies.map((m: Movie, i: number) => {
          const actor = getFragmentData(ActorNames, m.actors[0] as FragmentType<typeof ActorNames>)
          console.log(actor) // to retrieve the actor property
          return (
            <>
              <div key={i}>{m.title}</div>
              {/* <div key={i}>{actor.name}</div> */}
            </>
          )
        })}
      
      <p>Someting</p>
    </>
  )
}

export default Movies
