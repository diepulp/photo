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
    <div className="embla flex items-center justify-center border border-red-600">
      <div className="embla__viewport flex justify-center align-center border border-orange-600-600 " ref={emblaRef}>
        <div className="embla__container  border border-green-600">
          {slides.map((image, index) => (
            <div className="embla__slide" key={index}>
              <div className="embla__slide__img  relative aspect-w-5 aspect-h-7 overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-5 xl:aspect-h-7 ">
                <Image
                  alt={`Slide  ${index + 1}`}
                  src={`/gallery/${image}`}
                  width={200}
                  height={800}
                  className="rounded "
                  priority="false"
                  quality={75}
                  sizes="(min-width: 1280px) calc(25vw - 89px), (min-width: 1040px) calc(33.18vw - 127px), (min-width: 640px) calc(50vw - 35px), calc(100vw - 44px)"
                />
                <div className="embla__controls ">
                  <div className="embla__buttons absolute bottom-0 left-1/2 md:transorm md:-translate-y-1/2 transform -translate-x-1/2 -translate-y-1/2 flex space-x-4">
                    <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
                    <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
                  </div>
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
