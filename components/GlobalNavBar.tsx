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
import dynamic from 'next/dynamic'
export default function GlobalNavBar() {
  const pathName = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activePath, setActivePath] = useState(pathName)

  const router = useRouter()

  useEffect(() => {
    setActivePath(pathName)
  }, [pathName])

  const isActive = (path: string) => activePath === path

  const SocialIcon = dynamic(() => import('react-social-icons').then((mod) => mod.SocialIcon), { ssr: false })

  // console.log('Router Pathname', pathName)

  const menuItems = ['Home', 'Portfolio', 'About', 'Investment', 'Contact', 'Graduates', 'Wedding Packages', 'Log Out']
  return (
    <Navbar
      className="border bg-[rgb(249,246,246)] text-black "
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
        <NavbarMenuToggle aria-label={isMenuOpen ? 'Close menu' : 'Open menu'} className="lg:hidden" />
        <NavbarBrand>
          {/* Short text for mobile */}
          <p className="text-inherit block lg:hidden"></p>
          {/* Full text for larger screens */}
          <p className="text-inherit hidden lg:block">Anastasiya Ivanova Photography</p>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button
            className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"
            as={Link}
            color="primary"
            href="#"
            variant="faded"
            size="sm"
            radius="full"
          >
            Book Now
          </Button>
        </NavbarItem>
        <NavbarItem></NavbarItem>
      </NavbarContent>

      <NavbarMenu className="flex flex-col text-left justify-center items-center">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`} className=" tracking-[0.25rem] flex items-center justify-center">
            <Link
              color={index === 2 ? 'primary' : index === menuItems.length - 1 ? 'danger' : 'foreground'}
              className="w-full text-sm lg:text-lg"
              href={`/${item.toLowerCase()}`}
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
