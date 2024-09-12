import React from 'react'
import Head from 'next/head'

type Children = { children: React.ReactNode }
export default function SegmentLayout({ children }: Children) {
  return <section className="border-2 border-black m-3">{children}</section>
}
