type Children = { children: React.ReactNode }
export default function SegmentLayout({ children }: Children) {
  return <section className="border-2 border-black m-3 h-screen">{children}</section>
}
