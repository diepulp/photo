import React from 'react'
import Head from 'next/head'

type Children = { children: React.ReactNode }
export default function SegmentLayout({ children }: Children) {
  return <section className=" bg-[rgb(36,36,36)] text-white overflow-y-auto">{children}</section>
}
