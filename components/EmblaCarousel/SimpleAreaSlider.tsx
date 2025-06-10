import React from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons'
import useEmblaCarousel from 'embla-carousel-react'
import simpleSlider1 from '@/public/images/simpleSlider1.png'
import simpleSlider2 from '@/public/images/simpleSlider2.png'
import Image from 'next/image'

type PropType = {
  options?: EmblaOptionsType
}

const SimpleAreaSlider: React.FC<PropType> = (props) => {

  const options: EmblaOptionsType = { align: 'start' }

  const [emblaRef, emblaApi] = useEmblaCarousel(options)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  const sliders = [
    { image: simpleSlider1 },
    { image: simpleSlider2 },
    { image: simpleSlider1 },
    { image: simpleSlider2 },
  ]

  return (
    <section className="embla simple_area_slider">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {sliders.map((item, index) => (
            <div className="embla__slide" key={index}>
              <div className="slide_block">
                <div className='slide_image'>
                  <Image
                    src={item.image}
                    alt={`Choose Home ${index + 1}`}
                    className="w-full h-auto"
                    unoptimized
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="embla__controls">
          <div className="embla__buttons">
            <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
            <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default SimpleAreaSlider
