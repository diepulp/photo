'use client'
import React, { useEffect, useState } from 'react'
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  styled,
} from '@nextui-org/react'
import EmblaCarousel from './embla-carousel'
import Image from 'next/image'
import { PhotoCarousel } from './image-gallery'

type GalleryModalProps = {
  isOpen: boolean
  onClose: () => void
  images: string[]
  selectedIndex: number
}
export default function GalleryModal({ isOpen, images, onClose, selectedIndex }: GalleryModalProps) {
  const { onOpen } = useDisclosure()
  const [modalSize, setModalSize] = useState<number>()

  useEffect(() => {
    // You can remove this empty effect
  })

  //Disable the modal on small screens
  if (typeof window !== 'undefined' && window.innerWidth < 640) {
    return null
  }

  return (
    <>
      <Modal
        size="3xl"
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
      >
        <ModalContent className="bg-transparent m-0 rounded-none h-[99vh] w-screen flex items-center justify-center">
          <ModalBody className="p-0 w-full h-[90vh] flex items-center justify-center">
            <PhotoCarousel images={images} className="w-full h-full" />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}
