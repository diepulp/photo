'use client'
import React, { useState } from 'react'
import MasonryGallery from './masonry-gallery'
import GalleryModal from './gallery-modal'
import { PhotoCarousel } from './image-gallery'

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

  return (
    <>
      <GalleryModal 
        isOpen={isOpen} 
        onClose={closeModal} 
        images={images} 
        selectedIndex={selectedIndex} 
      />
      
      <div className="container mx-auto px-4">
        <MasonryGallery 
          images={images} 
          onImageClick={handleImageClick}
        />
      </div>
    </>
  )
}
