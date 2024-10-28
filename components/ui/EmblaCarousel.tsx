'use client'
import React from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import Fade from 'embla-carousel-fade'
import { NextButton, PrevButton, usePrevNextButtons } from './EmblaCarouselArrowButtons'
import BlurImage from './BlurImage'
// import { DotButton, useDotButton } from './EmblaCarouselDotButton'

type PropType = {
  slides: string[]
  options?: EmblaOptionsType
}

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Fade()])
  console.log('slides from carousel', slides)
  // const { selectedIndex, scrollSnaps, onDotButtonClick } =
  //   useDotButton(emblaApi)

  const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(emblaApi)

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((image, index) => (
            <div className="embla__slide" key={index}>
              <BlurImage image={image} index={index} />
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
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
