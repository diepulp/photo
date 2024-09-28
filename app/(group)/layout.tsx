import React from 'react'

type Children = { children: React.ReactNode }
export default function GroupLayout({ children }: Children) {
  return <section className="border-2 border-black m-3 p-4">{children}</section>
}
