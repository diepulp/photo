import React from 'react'

type Children = { children: React.ReactNode }
export default function GroupLayout({ children }: Children) {
  return <section className="m-3">{children}</section>
}
