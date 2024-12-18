'use client'
import Link from 'next/link'
import { useState, lazy, Suspense } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import dynamic from 'next/dynamic'

// Dynamically import icons
const SocialIcons = {
  FaFacebook: dynamic(() => import('react-icons/fa').then(mod => mod.FaFacebook), {
    loading: () => <div className="w-[15px] h-[15px]" />,
    ssr: false
  }),
  FaTwitter: dynamic(() => import('react-icons/fa').then(mod => mod.FaTwitter), {
    loading: () => <div className="w-[15px] h-[15px]" />,
    ssr: false
  }),
  FaLinkedin: dynamic(() => import('react-icons/fa').then(mod => mod.FaLinkedin), {
    loading: () => <div className="w-[15px] h-[15px]" />,
    ssr: false
  })
}

type Props = {}

const Sidebar = (props: Props) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

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
                    <Link href="/portfolio/family">Family</Link>
                  </li>
                  <li>
                    <Link href="/portfolio/couples">Couples</Link>
                  </li>
                  <li>
                    <Link href="/portfolio/boudoir">Boudoir</Link>
                  </li>
                  <li>
                    <Link href="/portfolio/graduates">Graduates</Link>
                  </li>
                  <li>
                    <Link href="/portfolio/newborn">Newborn</Link>
                  </li>
                  <li>
                    <Link href="/portfolio/milestones">Milestones</Link>
                  </li>
                </motion.ul>
              )}
            </AnimatePresence>
          </li>
          <li className="mt-2">
            <Link href="/about">About</Link>
          </li>
          <li className="mt-2">
            <Link href="/contact">Contact</Link>
          </li>
          <li className="mt-2">
            <Link href="/investment" className="text-gray-300 hover:text-gray-500">
              Investment
            </Link>
          </li>
        </ul>
      </section>

      <footer className="text-gray-500 p-10 left-0 right-0 w-full mx-auto">
        <div className="flex justify-start space-x-2">
          <button className="hover:opacity-80" aria-label="Facebook">
            <SocialIcons.FaFacebook size={15} color="#3b5998" />
          </button>
          <button className="hover:opacity-80" aria-label="Twitter">
            <SocialIcons.FaTwitter size={15} color="#3b5998" />
          </button>
          <button className="hover:opacity-80" aria-label="LinkedIn">
            <SocialIcons.FaLinkedin size={15} color="#3b5998" />
          </button>
        </div>
        <p className="text-xs mt-3">All content Copyright © 2024 anastasiya ivanova photography</p>
      </footer>
    </div>
  )
}

export default Sidebar
