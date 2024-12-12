'use client'
import React, { useState, useCallback } from 'react'
import Box from '@mui/material/Box'
import Masonry from '@mui/lab/Masonry'
import { styled } from '@mui/material/styles'
import Image from 'next/image'

interface MasonryGalleryProps {
  images: string[]
  onImageClick?: (index: number) => void
}

const ImageWrapper = styled('div')({
  position: 'relative',
  width: '100%',
  overflow: 'hidden',
  borderRadius: '8px',
  cursor: 'pointer',
  transition: 'transform 0.2s ease-out',
  '&:hover': {
    transform: 'scale(1.01)',
  },
})

const StyledMasonry = styled(Masonry)({
  margin: '0 !important',
  width: '100% !important',
})

function cn(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function MasonryGallery({ images, onImageClick }: MasonryGalleryProps) {
  const handleImageClick = useCallback(
    (index: number) => {
      onImageClick?.(index)
    },
    [onImageClick],
  )
  
  const [loadedImages, setLoadedImages] = useState<{ [key: string]: boolean }>({})

  const handleImageLoad = (imagePath: string) => {
    setLoadedImages(prev => ({
      ...prev,
      [imagePath]: true
    }))
  }

  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: '1200px',
        mx: 'auto',
        p: { xs: 2, sm: 3, md: 4 },
        overflow: 'hidden',
      }}
    >
      <StyledMasonry columns={{ xs: 1, sm: 2, md: 3 }} spacing={2}>
        {images.map((image, index) => {
          const aspectRatio = index % 3 === 0 ? '4/3' : index % 3 === 1 ? '3/4' : '1/1'
          const isLoaded = loadedImages[image]

          return (
            <ImageWrapper key={image} onClick={() => handleImageClick(index)} className="group">
              <div
                className="relative"
                style={{
                  aspectRatio,
                  width: '100%',
                }}
              >
                <Image
                  src={`/gallery/${image}`}
                  alt={`Gallery image ${index + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className={cn(
                    'object-cover transition-opacity duration-300',
                    !isLoaded ? 'opacity-0' : 'opacity-100'
                  )}
                  loading={index < 8 ? 'eager' : 'lazy'}
                  onLoad={() => handleImageLoad(image)}
                  quality={90}
                  priority={index < 4}
                />
              </div>
            </ImageWrapper>
          )
        })}
      </StyledMasonry>
    </Box>
  )
}
