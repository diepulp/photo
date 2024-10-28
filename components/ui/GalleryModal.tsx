import React, { useEffect } from 'react'
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from '@nextui-org/react'
import EmblaCarousel from './EmblaCarousel'

export default function GalleryModal({ isOpen, images, onClose }) {
  const { onOpen } = useDisclosure()
  const [backdrop, setBackdrop] = React.useState('opaque')

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

  return (
    <>
      <Modal size="5xl" backdrop={backdrop} isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader>
              <ModalBody>
                <EmblaCarousel
                  className="max-h-[500px] w-full object-cover .embla__carousel--custom "
                  slides={images}
                />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Action
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}
