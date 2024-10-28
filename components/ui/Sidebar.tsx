'use client'
import { SocialIcon } from 'react-social-icons/component'
import Link from 'next/link'
import { useState } from 'react'
import dynamic from 'next/dynamic'
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa'
import { IconContext } from 'react-icons'
import { motion, AnimatePresence } from 'framer-motion'

type Props = {}

const Sidebar = (props: Props) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  // const SocialIcon = dynamic(() => import('react-social-icons').then((mod) => mod.SocialIcon), { ssr: false })

  return (
    <div className="sidebar w-64 h-full items-center mx-auto bg-[#FFFFFF] flex flex-col ">
      <header className="p-10 left-0 right-0 w-full mx-auto ">
        <h1 className=" text-medium text-left text-gray-500 font-medium w-32 tracking-[0.2rem] uppercase">
          <Link href="/home">
            <span className="block">Anastasiya</span>
            <span className="block">Ivanova</span>
            <span className="block">Photography</span>
          </Link>
        </h1>
      </header>
      <section className="flex-1 h-full p-10 left-0 right-0 w-full mx-auto overflow-y-auto scrollbar-thumb-gray-500 scrollbar-thin">
        <ul className="text-gray-300 hover:text-gray-500 ">
          <li className="mt-2">
            <Link href="/home">Home</Link>
          </li>
          <li className="mt-2 relative">
            <button onClick={toggleDropdown} className="flex items-center justify-between w-full">
              Portfolio
              <span className={`ml-2 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}>▼</span>
            </button>
            <AnimatePresence>
              {isDropdownOpen && (
                <motion.ul
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-2 ml-4 space-y-2 overflow-hidden"
                  className="mt-2 ml-4 space-y-2"
                >
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
                </motion.ul>
              )}
            </AnimatePresence>
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

      <footer className=" text-gray-500 p-10 left-0 right-0 w-full mx-auto">
        <div className="flex justify-start">
          <span className="pr-1 text-gray-500">
            <FaFacebook size={15} color="#3b5998" />
          </span>
          <span className="pr-1">
            <FaTwitter size={15} color="#3b5998" />
          </span>
          <span className="">
            <FaLinkedin size={15} color="#3b5998" />
          </span>

          {/* <SocialIcon
            style={{ width: '2rem', height: '2rem' }}
            url="https://www.linkedin.com/in/vladimir-ivanov-dev/"
            fgColor="grey"
            bgColor="transparent"
          /> */}
        </div>
        <p className="text-xs mt-3">All content Copyright © 2024 anastasiya ivanova photography</p>
      </footer>
    </div>
  )
}

export default Sidebar
