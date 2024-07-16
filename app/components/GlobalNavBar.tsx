// components/MyNavbar.js

"use client";

import { Navbar, NavbarContent, NavbarItem } from '@nextui-org/navbar';
import Link from 'next/link';

export default function GlobalNavBar() {
  return (
    <Navbar>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link className="p-2" href="/">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="p-2" href="/notes">
            Notes
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="p-2" href="/graphpage">
            Db test
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
