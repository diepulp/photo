'use client'
import React from 'react'
import Image from 'next/image'
import BlurImage from '@/components/ui/BlurImage'

import MasonryGallery from './MasonryGallery'
import Carousel from './EmblaCarousel'
import GalleryModal from './GalleryModal'
import { useDisclosure } from '@nextui-org/react'
import { useState } from 'react'
import { use } from 'chai'

type GalleryProps = {
  images: string[]
}

function cn(...classes: String[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Gallery({ images }: GalleryProps): React.JSX.Element {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(0)

  const openModal = (index: number) => {
    setSelectedIndex(index)
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
  }
  return (
    <>
      <GalleryModal isOpen={isOpen} onClose={closeModal} images={images} />
      <div className="mx-auto max-w-2xl py-5 px-3 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-5">
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {images?.map((image, index) => (
            <div key={index} className="w-full h-auto" onClick={() => openModal()}>
              <BlurImage image={image} index={index} />
            </div>
          ))}
        </div>
      </div>
      <Carousel slides={images} />
    </>
  )
}
