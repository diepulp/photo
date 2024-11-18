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
  console.log('selected index from gallery modal', selectedIndex)

  const backdrops = ['opaque', 'blur', 'transparent']

  const handleOpen = (backdrop) => {
    setBackdrop(backdrop)
    onOpen()
  }

  useEffect(() => {
    if (isOpen) {
      setBackdrop('blur')
    }
  }, [isOpen])

  if (typeof window !== 'undefined' && window.innerWidth < 768) {
    return null
  }

  return (
    <>
      <Modal
        size="2xl"
        backdrop={backdrop}
        isOpen={isOpen}
        onClose={onClose}
        classNames={{
          body: 'w-full h-full m-auto',
          wrapper: 'flex overflow-hidden items-center justify-center',
          base: 'overflow-hidden',
          closeButton: 'hidden',
        }}
      >
        <ModalContent className="bg-transparent max-h-[90vh] w-full h-full ">
          {(onClose) => (
            <>
              <ModalBody className="bg-transparent overflow-hidden">
                <div className="">
                  {/* <Image
                    alt={`alt`}
                    src={`/gallery/${images[selectedIndex]}`}
                    fill
                    className="object-contain"
                    priority="false"
                    quality={75}
                    sizes="(max-width: 768px) 100vw, (min-width: 568px) 33vw"
                  /> */}

                  <EmblaCarousel slides={images} selectedIndex={selectedIndex} />
                </div>
              </ModalBody>
              <ModalFooter className="mb-5 flex justify-end items-center space-x-4"></ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}
