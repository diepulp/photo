import Link from 'next/link'

export default function NavLinks() {

  return (
    <>
      <div className="flex justify-center m-2 py-2">
        <Link className="p-2" href="/">
          Home
        </Link>
        <Link className="p-2" href="/notes">
          Notes
        </Link>
        <Link className="p-2" href="/graphpage">
          Db test
        </Link>
      </div>
    </>
  )
}
