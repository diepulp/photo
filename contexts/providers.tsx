// app/providers.tsx

'use client'
import { NextUIProvider } from '@nextui-org/react'
import { ApolloWrapper } from './ApolloWrapper'
import { ThemeProvider, createTheme } from '@mui/material/styles'

const theme = createTheme()
export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      <ApolloWrapper>{children}</ApolloWrapper>
    </NextUIProvider>
  )
}
