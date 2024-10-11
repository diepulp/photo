import React from 'react'
import Head from 'next/head'

type Children = { children: React.ReactNode }
export default function SegmentLayout({ children }: Children) {
  return <section className="">{children}</section>
}
