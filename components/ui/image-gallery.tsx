'use client'

import * as React from 'react'
import Image from 'next/image'
import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
// import { cn } from '@/lib/utils'
import { Button } from '@nextui-org/react'

interface PhotoCarouselProps {
  images: {
    src: string
    alt: string
    width: number
    height: number
  }[]
  className?: string
}

function cn(...classes: String[]) {
  return classes.filter(Boolean).join(' ')
}

export function PhotoCarousel({ images, className }: PhotoCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
  const [prevBtnDisabled, setPrevBtnDisabled] = React.useState(true)
  const [nextBtnDisabled, setNextBtnDisabled] = React.useState(true)
  const [selectedIndex, setSelectedIndex] = React.useState(0)

  const scrollPrev = React.useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
  const scrollNext = React.useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])

  const onSelect = React.useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
    setPrevBtnDisabled(!emblaApi.canScrollPrev())
    setNextBtnDisabled(!emblaApi.canScrollNext())
  }, [emblaApi])

  React.useEffect(() => {
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
                  src={`/gallery/${image}`}
                  alt='alt'
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                  className="object-contain"
                  priority={index === 0}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute left-4 right-4 top-1/2 flex items-center justify-between -translate-y-1/2">
        <Button
          variant="outline"
          size="icon"
          className="h-8 w-8 rounded-full bg-white/80 backdrop-blur-sm"
          disabled={prevBtnDisabled}
          onClick={scrollPrev}
        >
          <ChevronLeft className="h-4 w-4" />
          <span className="sr-only">Previous slide</span>
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="h-8 w-8 rounded-full bg-white/80 backdrop-blur-sm"
          disabled={nextBtnDisabled}
          onClick={scrollNext}
        >
          <ChevronRight className="h-4 w-4" />
          <span className="sr-only">Next slide</span>
        </Button>
      </div>
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 space-x-2">
        {images.map((_, index) => (
          <Button
            key={index}
            variant="outline"
            size="icon"
            className={cn(
              'h-1/2 w-1/2 rounded-full bg-white/80 backdrop-blur-sm',
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
