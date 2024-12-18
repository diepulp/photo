'use client'
import React from 'react'
import { FragmentType, getFragmentData } from '@/codegen/generations/core/fragment-masking'
import { Button } from '@nextui-org/button'
//DatePicker imports
import { DatePicker } from '@nextui-org/date-picker'
import { CalendarDate, Calendar, DateFormatter, Time } from '@internationalized/date'
import {
  DatePickerProps,
  DateValue,

} from '@react-types/datepicker'
import { FormValidationState } from '@react-stately/form'
import { OverlayTriggerState } from '@react-stately/overlays'
import { ValidationState, RangeValue } from '@react-types/shared'
//---------------------------------------------------------------------

// import { GET_ACTORS_NAME } from '@/app/graphql/queries'
import { useQuery, gql } from '@apollo/client'
import { graphql } from '@/codegen/generations/core/gql'

// import { Get_Actors_NameQuery } from '@/codegen/generations/core/graphql'
// import { MoviesQuery } from '@/app/graphql/queries'
import { useState } from 'react'

interface MyDatePickerProps<T extends DateValue> extends DatePickerProps<T> {}

const ActorNames = graphql(`
  fragment ActorNamesFragment on Actor {
    name
  }
`)

type Names = {
  actor: FragmentType<typeof ActorNames>
}
// function Movies() {
//   const [date, setDate] = useState<Date | null | undefined>(null)
//   //get the rypesctipt type
//   // const { data, loading, error } = useQuery(MoviesQuery)
//   const movie = data?.movies
//   console.log('Movies', movie)
//   if (movie && movie.length > 0) {
//     const actorsName = movie[0].actors[0]?.name
//     console.log('Actors name', actorsName)
//   }

//   // console.log('Actor', { actor })

//   // if (loading) {
//   //   return <p>Loading...</p>
//   // }

//   const handleChange = (date: DateValue | null) => {
//     setDate(date)
//     console.log('Date: ', date)
//   }
//   return (
//     <>
//       {data &&
//         data.movies.map((m: Movie, i: number) => {
//           const actor = getFragmentData(ActorNames, m.actors[0] as FragmentType<typeof ActorNames>)
//           console.log(actor) // to retrieve the actor property
//           return (
//             <>
//               <div key={i}>{m.title}</div>
//               {/* <div key={i}>{actor.name}</div> */}
//             </>
//           )
//         })}
//       <Button className="m-10" color="primary">
//         Click you
//       </Button>
//       <DatePicker
//         value={date}
//         onChange={handleChange}
//         label="Birth date"
//         className="max-w-[284px] m-10"
//         classNames={{
//           base: 'base-classes',
//           label: 'label-classes',
//           calendar: 'calendar-classes',
//           selectorButton: 'selector-button-classes',
//           selectorIcon: 'selector-icon-classes',
//           popoverContent: 'popover-content-classes',
//           calendarContent: 'calendar-content-classes',
//           inputWrapper: 'input-wrapper-classes',
//           input: 'input-classes',
//           segment: 'segment-classes',
//           helperWrapper: 'helper-wrapper-classes',
//           description: 'description-classes',
//           errorMessage: 'error-message-classes',
//         }}
//       />
//       <p className="m-10">Someting</p>
//     </>
//   )
// }

// export default Movies

export default function Page() {
  return <div>Hello</div>
}
