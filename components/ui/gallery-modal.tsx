'use client'
import React, { useEffect, useState, useCallback } from 'react'
import { Modal, ModalContent, ModalBody } from '@nextui-org/react'
import dynamic from 'next/dynamic'
import { useMediaQuery } from '@/hooks/use-media-query'

interface CarouselImage {
  src: string
  alt: string
  width: number
  height: number
}

// Dynamically import PhotoCarousel for better code splitting
const DynamicPhotoCarousel = dynamic(
  () => import('./photo-carousel').then((mod) => mod.PhotoCarousel),
  {
    loading: () => <div className="w-full h-full bg-gray-100 animate-pulse" />,
    ssr: false
  }
)

interface GalleryModalProps {
  isOpen: boolean
  onClose: () => void
  images: string[]
  selectedIndex: number
}

export default function GalleryModal({ isOpen, images, onClose, selectedIndex }: GalleryModalProps) {
  const isMobile = useMediaQuery('(max-width: 640px)')
  
  // Convert string[] to CarouselImage format
  const formattedImages = images.map(image => ({
    src: `/gallery/${image}`,
    alt: image.split('.')[0].replace(/-/g, ' ') || 'Gallery image',
    width: 1920,
    height: 1080
  }))

  // Early return for mobile devices
  if (isMobile) {
    return null
  }

  return (
    <Modal
      size="5xl"
      backdrop="blur"
      isOpen={isOpen}
      onClose={onClose}
      classNames={{
        body: 'p-0',
        wrapper: 'items-center justify-center',
        base: 'bg-transparent',
        closeButton: 'z-50 top-4 right-4 hover:bg-white/10',
        backdrop: 'bg-black/40 backdrop-blur-md',
      }}
      motionProps={{
        variants: {
          enter: {
            opacity: 1,
            transition: { duration: 0.3, ease: 'easeOut' }
          },
          exit: {
            opacity: 0,
            transition: { duration: 0.2, ease: 'easeIn' }
          }
        }
      }}
    >
      <ModalContent className="bg-transparent m-0 rounded-none h-[99vh] w-screen flex items-center justify-center">
        <ModalBody className="p-0 w-full h-[90vh] flex items-center justify-center">
          <DynamicPhotoCarousel
            images={formattedImages}
            initialIndex={selectedIndex}
            className="w-full h-full"
          />
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}
