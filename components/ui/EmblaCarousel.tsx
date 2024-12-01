'use client'
import React, { useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Fade from 'embla-carousel-fade'
import { NextButton, PrevButton, usePrevNextButtons } from './EmblaCarouselArrowButtons'
// import { useDotButton } from './EmblaCarouselDotButton'
import Image from 'next/image'

const EmblaCarousel = ({ slides, selectedIndex }) => {
  console.log('slides from embla', slides)
  // const { slides, options } = props
  const OPTIONS = {
    active: true,
    loop: true,
    duration: 30,
  }
  const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS, [Fade()])

  useEffect(() => {
    if (emblaApi) {
      emblaApi.scrollTo(selectedIndex, true) // Scroll to the selected image
    }
  }, [emblaApi, selectedIndex])

  const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(emblaApi)

  return (
    <div className="embla flex items-center justify-center rounded">
      <div className="embla__viewport flex justify-center items-center" ref={emblaRef}>
        <div className="embla__container border border-green-600">
          {slides.map((image, index) => (
            <div className="embla__slide w-full" key={index}>
              <div className="embla__slide__img relative w-full h-0 pb-[55.66%]">
                <Image
                  alt={`Slide ${index + 1}`}
                  src={`/gallery/${image}`}
                  fill
                  className="rounded object-contain"
                  priority={false}
                  quality={75}
                  sizes="(min-width: 1280px) 25vw, (min-width: 1040px) 33vw, (min-width: 640px) 50vw, 100vw"
                />
                {/* Navigation Buttons */}
              </div>
              <div className="embla__controls relative">
                <div className="embla__buttons absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-4 z-100">
                  <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
                  <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default EmblaCarousel
