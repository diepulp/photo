// app/providers.tsx

'use client'
import { NextUIProvider } from '@nextui-org/react'
import { ApolloWrapper } from './ApolloWrapper'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      <ApolloWrapper>{children}</ApolloWrapper>
    </NextUIProvider>
  )
}
