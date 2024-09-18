// components/MyNavbar.js

'use client'

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
} from '@nextui-org/react'
import { usePathname, useRouter } from 'next/navigation'
import { SocialIcon } from 'react-social-icons/component'
import { useEffect, useState } from 'react'
import 'react-social-icons/vimeo'
export default function GlobalNavBar() {
  const pathName = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activePath, setActivePath] = useState(pathName)

  const router = useRouter()

  useEffect(() => {
    setActivePath(pathName)
  }, [pathName])

  const isActive = (path: string) => activePath === path

  // console.log('Router Pathname', pathName)

  const menuItems = ['Home', 'Portfolio', 'About', 'Investment', 'Contact', 'Graduates', 'Wedding Packages', 'Log Out']
  return (
    <Navbar
      className="border bg-[rgb(36,36,36)] text-white"
      onMenuOpenChange={setIsMenuOpen}
      classNames={{
        item: [
          'flex',
          'relative',
          'h-full',
          'items-center',
          "data-[active=true]:after:content-['']",
          'data-[active=true]:after:absolute',
          'data-[active=true]:after:bottom-0',
          'data-[active=true]:after:left-0',
          'data-[active=true]:after:right-0',
          'data-[active=true]:after:h-[2px]',
          'data-[active=true]:after:rounded-[2px]',
          'data-[active=true]:after:bg-primary',
        ],
      }}
    >
      <NavbarContent>
        <NavbarMenuToggle aria-label={isMenuOpen ? 'Close menu' : 'Open menu'} className="sm:hidden" />
        <NavbarBrand>
          <p className="font-semibold text-inherit">Anastasiya Ivanova Photography</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem
          className={`px-4 py-2 ${isActive('/image-gallery') ? 'text-red-500' : 'text-black'} hover:text-red-500`}
          isActive={isActive('/image-gallery')}
        >
          <Link href="/image-gallery">Image Gallery</Link>
        </NavbarItem>
        <NavbarItem isActive={isActive('/home')}>
          <Link href="/" aria-current="page">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem isActive={isActive('/notes')}>
          <Link href="/notes">Notes</Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
        <NavbarItem>
          <SocialIcon fgColor="grey" bgColor="transparent" url="www.vimeo.com" />
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={index === 2 ? 'primary' : index === menuItems.length - 1 ? 'danger' : 'foreground'}
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  )
}