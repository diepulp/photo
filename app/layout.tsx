import type { Metadata } from 'next'

import type { Viewport } from 'next'
import { Bitter } from 'next/font/google'
import { Playfair_Display } from 'next/font/google'

import './globals.css'

import { Providers } from '../contexts/providers'

import GlobalNavBar from '../components/GlobalNavBar'

import Sidebar from '@/components/ui/sidebar'

const bitter = Bitter({
  subsets: ['latin'],
  weight: ['100', '200', '300', '500'],
})

export const metadata: Metadata = {
  title: {
    template: 'Photo',
    default: 'Daydream Creations',
  },

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
