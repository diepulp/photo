import React from 'react'
import Head from 'next/head'

type Children = { children: React.ReactNode }
export default function SegmentLayout({ children }: Children) {
  return (
    <section className="items-center bg-[rgb(36,36,36)] scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]  text-white snap-y h-screen snap-mandatory overflow-y-hidden overflow-x-hidden scroll-smooth z-0">
      {children}
    </section>
  )
}
