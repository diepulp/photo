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
import EmblaCarousel from './EmblaCarousel'
import Image from 'next/image'

type GalleryModalProps = {
  isOpen: boolean
  onClose: () => void
  images: string[]
  selectedIndex: number
}
export default function GalleryModal({ isOpen, images, onClose, selectedIndex }: GalleryModalProps) {
  const { onOpen } = useDisclosure()
  const [backdrop, setBackdrop] = useState('opaque')
  const [modalSize, setModalSize] = useState<number>()
  console.log('selected index from gallery modal', selectedIndex)

  const backdrops = ['opaque', 'blur', 'transparent']

  const handleOpen = (backdrop) => {
    setBackdrop(backdrop)
    onOpen()
  }

  useEffect(() => {})

  useEffect(() => {
    if (isOpen) {
      setBackdrop('blur')
    }
  }, [isOpen])

  //Disable tht modal on small screens
  if (typeof window !== 'undefined' && window.innerWidth < 640) {
    return null
  }

  return (
    <>
      <Modal
        size="full" // Consider using responsive sizes like '3xl' if 'full' causes issues
        backdrop={backdrop}
        isOpen={isOpen}
        onClose={onClose}
        classNames={{
          body: 'w-full h-full p-0 overflow-hidden', // Removed redundant/miscellaneous classes
          wrapper: 'flex items-center justify-center', // Simplified for proper centering
          base: '',
          closeButton: 'outline focus:outline-none hover:bg-transparent',
        }}
      >
        <ModalContent className="bg-transparent flex flex-col p-0 max-h-[100vh] w-full h-full">
          <ModalBody className="bg-transparent flex-grow flex justify-center items-center">
            <div className="w-full h-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <EmblaCarousel slides={images} selectedIndex={selectedIndex} />
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}
