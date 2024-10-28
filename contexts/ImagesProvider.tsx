import React, { createContext, useContext } from 'react'

type ImagesContextType = {
  images: string[]
}

type ImagesProviderProps = {
  children: React.ReactNode
  images: string[]
}

const ImagesContext = createContext<ImagesContext | undefined>(undefined)

export default function ImagesProvider({ images, children }: ImagesContextType) {
  return <ImagesContext.Provider value={{ images }}>{children}</ImagesContext.Provider>
}
