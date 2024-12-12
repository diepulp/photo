'use client'
import React, { useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Fade from 'embla-carousel-fade'
import { NextButton, PrevButton, usePrevNextButtons } from './EmblaCarouselArrowButtons'
import Image from 'next/image'

const EmblaCarousel = ({ slides, selectedIndex }) => {
  console.log('slides from embla', slides)

  // Embla Carousel options
  const OPTIONS = {
    loop: true,
    speed: 10, // Adjust for smoother transitions
    draggable: true,
  }

  // Initialize Embla Carousel with Fade effect
  const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS, [Fade()])

  // Scroll to selected index when it changes
  useEffect(() => {
    if (emblaApi) {
      emblaApi.scrollTo(selectedIndex, true) // Smooth scroll to selected slide
    }
  }, [emblaApi, selectedIndex])

  // Handle Previous and Next button states and actions
  const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(emblaApi)

  return (
    <div className="embla w-full h-full flex items-center justify-center rounded relative">
      {/* Embla Viewport */}
      <div className="embla__viewport w-full h-full border border-red-500" ref={emblaRef}>
        <div className="embla__container flex w-full h-full">
          {slides.map((image, index) => (
            <div className="embla__slide  w-full h-full flex items-center justify-center relative" key={index}>
              {/* Image Container */}
              <div className="embla__slide__img  w-full h-full rounded-lg  overflow-hidden flex items-center justify-center">
                <Image
                  alt={`Slide ${index + 1}`}
                  src={`/gallery/${image}`}
                  fill
                  className="object-cover"
                  priority={false}
                  quality={75}
                  sizes="(max-width: 640px) 100vw, (max-width: 1040px) 50vw, (min-width: 1280px) 25vw, 33vw"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Controls */}
      {/* Previous Button */}
      {/* Navigation Controls */}
      {/* Previous Button */}
      <div className="embla__controls absolute top-1/2 left-4 transform -translate-y-1/2 z-20">
        <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
      </div>

      {/* Next Button */}
      <div className="embla__controls absolute top-1/2 right-4 transform -translate-y-1/2 z-20">
        <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
      </div>
    </div>
  )
}

export default EmblaCarousel
