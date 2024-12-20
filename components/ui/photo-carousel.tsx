'use client'

import React, { useState, useCallback, useEffect } from 'react'
import Image from 'next/image'
import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
// import { cn } from '@/lib/utils'
import { Button } from '@nextui-org/react'
import { NextButton, PrevButton, usePrevNextButtons } from './EmblaCarouselArrowButtons'
import Fade from 'embla-carousel-fade'
import { cn } from '@/lib/utils'

interface CarouselImage {
  src: string
  alt: string
  width: number
  height: number
}

interface PhotoCarouselProps {
  images: CarouselImage[]
  className?: string
  initialIndex?: number
}

export function PhotoCarousel({ images, className, initialIndex = 0 }: PhotoCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      startIndex: initialIndex,
    },
    [Fade()],
  )
  const [prevBtnDisabled, setPrevBtnDisabled] = useState<boolean>(true)
  const [nextBtnDisabled, setNextBtnDisabled] = useState<boolean>(true)
  const [selectedIndex, setSelectedIndex] = useState<number>(0)

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
    setPrevBtnDisabled(!emblaApi.canScrollPrev())
    setNextBtnDisabled(!emblaApi.canScrollNext())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on('select', onSelect)
    emblaApi.on('reInit', onSelect)
  }, [emblaApi, onSelect])

  return (
    <div className={cn('relative w-full max-w-5xl mx-auto', className)}>
      <div className="overflow-hidden rounded-lg" ref={emblaRef}>
        <div className="flex">
          {images.map((image, index) => (
            <div className="relative flex-[0_0_100%] min-w-0" key={index}>
              <div className="relative h-[100vh]">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  fill
                  sizes="(min-width: 1640px) 363px, (min-width: 1040px) calc(30.34vw - 129px), (min-width: 900px) 207px, (min-width: 780px) calc(16vw + 185px), (min-width: 740px) 262px, (min-width: 600px) 35vw, calc(100vw - 128px)"
                  className="object-contain"
                  fetchPriority={index === 0 ? 'high' : 'low'}
                  quality={90}
                  loading={index === 0 ? 'eager' : 'lazy'}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute left-4 right-4 top-1/2 flex items-center justify-between -translate-y-1/2">
        <Button
          variant="light"
          size="sm"
          isIconOnly
          className="h-8 w-8 rounded-full bg-white/10 backdrop-blur-sm"
          isDisabled={prevBtnDisabled}
          onClick={scrollPrev}
        >
          <ChevronLeft className="h-4 w-4 text-white" />
          <span className="sr-only">Previous slide</span>
        </Button>
        <Button
          variant="light"
          size="sm"
          isIconOnly
          className="h-8 w-8 rounded-full bg-white/10 backdrop-blur-sm"
          isDisabled={nextBtnDisabled}
          onClick={scrollNext}
        >
          <ChevronRight className="h-4 w-4 text-white" />
          <span className="sr-only">Next slide</span>
        </Button>
      </div>
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 space-x-2">
        {images.map((_, index) => (
          <Button
            key={index}
            variant="light"
            size="sm"
            isIconOnly
            className={cn(
              'h-2 w-2 min-w-unit-2 rounded-full bg-white/80 backdrop-blur-sm',
              selectedIndex === index && 'scale-125 bg-white',
            )}
            onClick={() => emblaApi?.scrollTo(index)}
          >
            <span className="sr-only">Go to slide {index + 1}</span>
          </Button>
        ))}
      </div>
    </div>
  )
}
