import React from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import Fade from 'embla-carousel-fade'
import Image from 'next/image'
import {
  NextButton,
  PrevButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons'
import { DotButton, useDotButton } from './EmblaCarouselDotButton'
import { Button } from '@nextui-org/button'
import { ChevronLeft, ChevronRight } from 'lucide-react'

type PropType = {
  slides: number[]
  options?: EmblaOptionsType
}

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Fade()])

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  return (
    <div className={cn('relative w-full max-w-5xl mx-auto', className)}>
      <div className="overflow-hidden rounded-lg" ref={emblaRef}>
        <div className="flex">
          {images.map((image, index) => (
            <div className="relative flex-[0_0_100%] min-w-0" key={index}>
              <div className="relative h-[100vh]">
                <Image
                  src={`/gallery/${image}`}
                  alt="alt"
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

export default EmblaCarousel
