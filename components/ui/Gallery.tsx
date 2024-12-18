'use client'
import React, { useState } from 'react'
import MasonryGallery from './masonry-gallery'
import GalleryModal from './gallery-modal'
import { PhotoCarousel } from './photo-carousel'
import BlurImage from './blur-image'

type GalleryProps = {
  images: string[]
}

export default function Gallery({ images }: GalleryProps): React.JSX.Element {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(0)

  const handleImageClick = (index: number) => {
    setSelectedIndex(index)
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
  }
  const openModal = (index: number) => {
    setSelectedIndex(index)
    setIsOpen(true)
  }

  return (
    <>
      <GalleryModal isOpen={isOpen} onClose={closeModal} images={images} selectedIndex={selectedIndex} />
      <div className="mx-auto">
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {images?.map((image, index) => (
            <div key={index} className="w-full h-auto" onClick={() => openModal(index)}>
              <BlurImage image={image} index={index} />
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4">
        {/* <MasonryGallery images={images} onImageClick={handleImageClick} /> */}
      </div>
    </>
  )
}
