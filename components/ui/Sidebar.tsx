'use client'
import { SocialIcon } from 'react-social-icons/component'
import Link from 'next/link'
import { useState } from 'react'
import dynamic from 'next/dynamic'
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa'

type Props = {}

const Sidebar = (props: Props) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  const SocialIcon = dynamic(() => import('react-social-icons').then((mod) => mod.SocialIcon), { ssr: false })

  return (
    <div className="sidebar w-64 h-full  bg-[#FFFFFF] text-white flex flex-col ">
      <header className="mx-auto mt-3 left-0 right-0 w-fit">
        <h1 className=" text-medium text-left text-gray-500 font-medium  tracking-[0.2rem] uppercase">
          Anastasiya
          <br /> Ivanova
          <br /> Photography
        </h1>
      </header>

      <section className="flex-1 p-4 overflow-x-auto">
        <ul className='text-gray-300 hover:text-gray-500'>
          <li className="mt-2">
            <Link href="#">Home</Link>
          </li>
          <li className="mt-2 relative">
            <button onClick={toggleDropdown} className="flex items-center justify-between w-full">
              Portfolio
              <span className={`ml-2 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}>▼</span>
            </button>
            {isDropdownOpen && (
              <ul className="mt-2 ml-4 space-y-2">
                <li>
                  <Link href="/portfolio/weddings">Weddings</Link>
                </li>
                <li>
                  <Link href="/portfolio/portraits">Portraits</Link>
                </li>
                <li>
                  <Link href="/portfolio/events">Events</Link>
                </li>
                <li>
                  <Link href="/portfolio/commercial">Family</Link>
                </li>
                <li>
                  <Link href="/portfolio/commercial">Couples</Link>
                </li>
                <li>
                  <Link href="/portfolio/commercial">Boudoir</Link>
                </li>
                <li>
                  <Link href="/portfolio/commercial">Graduates</Link>
                </li>
                <li>
                  <Link href="/portfolio/commercial">Newborn</Link>
                </li>
                <li>
                  <Link href="/portfolio/commercial">Milestones</Link>
                </li>
              </ul>
            )}
          </li>
          <li className="mt-2">
            <Link href="/portfolio/commercial">About</Link>
          </li>
          <li className="mt-2">
            <Link href="/portfolio/commercial">Contact</Link>
          </li>
          <li className="mt-2">
            <a href="#" className="text-gray-300 hover:text-gray-500">
              Investment
            </a>
          </li>
        </ul>
      </section>

      <footer className="p-4 bg-gray-900">
        <div className="flex justify-around">
          <FaFacebook size={30} color="#3b5998" />
          <FaTwitter size={30} color="#3b5998" />
          <FaTwitter size={30} color="#3b5998" />
          <SocialIcon
            style={{ width: '2rem', height: '2rem' }}
            url="https://www.linkedin.com/in/vladimir-ivanov-dev/"
            fgColor="grey"
            bgColor="transparent"
          />
        </div>

        <p className="text-sm mt-3">All content Copyright © 2024 anastasiya ivanova photography</p>
      </footer>
    </div>
  )
}

export default Sidebar
