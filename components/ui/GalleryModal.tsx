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
        size="full"
        backdrop={backdrop}
        isOpen={isOpen}
        onClose={onClose}
        classNames={{
          body: 'w-screen h-screen m-auto p-0 m-0 inset-0 outline outline-red-500 md:overflow-hidden',
          wrapper: 'inset-0 absolute flex items-center justify-center md:overflow-hidden',
          base: 'w-full h-full',
          closeButton: 'outline focus:outline-none hover:bg-transparent ',
        }}
      >
        <ModalContent className="bg-transparent max-h-[95vh] sm:overflow-hidden">
          {(onClose) => (
            <>
              <ModalBody className="bg-transparent">
                <div className="">
                  <EmblaCarousel slides={images} selectedIndex={selectedIndex} />
                </div>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}
