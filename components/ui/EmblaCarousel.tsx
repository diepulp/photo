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
  const OPTIONS = { loop: true, duration: 30 }
  const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS, [Fade()])

  // const { selectedIndex, scrollSnaps, onDotButtonClick } =
  //   useDotButton(emblaApi)

  useEffect(() => {
    if (emblaApi) {
      emblaApi.scrollTo(selectedIndex, true) // Scroll to the selected image
    }
  }, [emblaApi, selectedIndex])

  const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(emblaApi)

  return (
    <div className="embla ">
      <div className="embla__viewport flex items-center justify-center" ref={emblaRef}>
        <div className="embla__container relative m-auto">
          {slides.map((image, index) => (
            <div className="embla__slide" key={index}>
              <div className=".embla__slide__img aspect-w-2 aspect-h-3 relative m-auto box-border">
                <Image
                  alt={`Slide  ${index + 1}`}
                  src={`/gallery/${image}`}
                  fill
                  className="object-contain"
                  priority="false"
                  quality={75}
                  sizes="
                    (max-width: 567px) 100vw, 
                    (max-width: 768px) 50vw, 
                    33vw
                  "
                />
              </div>
            </div>
          ))}
        </div>

        <div className="embla__controls ">
          <div className="embla__buttons absolute bottom-0 left-1/2 md:transorm md:-translate-y-1/2 transform -translate-x-1/2 -translate-y-1/2 flex space-x-4">
            <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
            <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
          </div>
        </div>

        {/* <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={'embla__dot'.concat(
                index === selectedIndex ? ' embla__dot--selected' : ''
              )}
            />
          ))}
        </div> */}
      </div>
    </div>
  )
}

export default EmblaCarousel
