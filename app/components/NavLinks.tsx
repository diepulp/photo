import Link from "next/link";

export default function NavLinks() {
  return (
    <>
      <div className="flex justify-end ">
        <Link href="/" className="mx-2 px-3 ">
          Home
        </Link>
        <Link href="/notes">Notes</Link>
      </div>
    </>
  );
}
