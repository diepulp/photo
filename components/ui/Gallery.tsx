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
import EmblaCarousel from './EmblaCarousel'

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
  console.log('INdex: ', selectedIndex)

  const closeModal = () => {
    setIsOpen(false)
  }
  return (
    <>
      <GalleryModal isOpen={isOpen} onClose={closeModal} images={images} selectedIndex={selectedIndex} />
      <div className="mx-auto ">
        <div className="grid grid-cols-1 gap-y-3 gap-x-6 w-full h-full m-auto overflow-hidden sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-3">
          {images?.map((image, index) => (
            <div key={index} className="w-full h-auto overflow-hidden" onClick={() => openModal(index)}>
              <BlurImage image={image} index={index} />
            </div>
          ))}
        </div>
      </div>

      <EmblaCarousel slides={images} selectedIndex={selectedIndex} />

      {/* <div className="grid grid-cols-1 gap-y-3 gap-x-6 w-full h-full m-auto overflow-hidden sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-3 ">
        <Image
          alt={`alt`}
          src={`/gallery/IMG_8863-Enhanced-resized-NR.webp`}
          fill
          className="rounded object-center"
          priority="false"
          quality={75}
          sizes="(min-width: 1280px) calc(25vw - 89px), (min-width: 1040px) calc(33.18vw - 127px), (min-width: 640px) calc(50vw - 35px), calc(100vw - 44px)"
        />
      </div> */}
    </>
  )
}
