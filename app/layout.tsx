import type { Metadata } from 'next'

import type { Viewport } from 'next'
import { Inter, Raleway, Bitter } from 'next/font/google'
import { Playfair_Display } from 'next/font/google'
import {} from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@mui/material-nextjs'
import { Providers } from '../contexts/providers'
import { NextUIProvider } from '@nextui-org/react'
import GlobalNavBar from '../components/GlobalNavBar'
import Header from '../components/Header'
import Sidebar from '@/components/ui/Sidebar'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter'

const inter = Inter({ subsets: ['latin'] })
const raleway = Raleway({ subsets: ['latin'] })
const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700'],
})
const bitter = Bitter({
  subsets: ['latin'],
  weight: ['100', '200', '300', '500'],
})

export const metadata: Metadata = {
  title: {
    template: 'Photo',
    default: 'Photo attempt',
  },

  // viewport: {
  //   width: 'device-width',
  //   initialScale: 1,
  //   maximumScale: 1, // Optional: Prevent zooming
  // },

  description: 'Photo ',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  // Also supported by less commonly used
  // interactiveWidget: 'resizes-visual',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html className="h-full w-full " lang="en">
      <body className={`${bitter.className} h-screen flex flex-col `}>
        {/* <Header /> */}
        <div className="flex-1 flex ">
          <div className="lg:block hidden">
            <Sidebar />
          </div>
          <main className="flex-1 h-screen overflow-x-hidden w-full">
            <div className="lg:hidden w-screen sticky top-0 z-50 ">
              <GlobalNavBar />
            </div>
            <div className="">
              <Providers>{children}</Providers>
            </div>
          </main>
        </div>
      </body>
    </html>
  )
}
