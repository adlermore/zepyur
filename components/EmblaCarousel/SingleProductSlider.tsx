import React from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons'
import useEmblaCarousel from 'embla-carousel-react'

import option1 from '@/public/images/aboutBanner.png'
import option2 from '@/public/images/amenitiesBanner.png'
import option3 from '@/public/images/contactsBanner.png'
import option4 from '@/public/images/homesBaner.png'

import Image from 'next/image'

type PropType = {
  options?: EmblaOptionsType
}

const SingleProductSlider: React.FC<PropType> = (props) => {

  const options: EmblaOptionsType = { align: 'start' }

  const [emblaRef, emblaApi] = useEmblaCarousel(options)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  const sliders = [
    { image: option1 },
    { image: option2 },
    { image: option3 },
    { image: option4 }
  ]

  return (
    <section className="embla single_product_slider">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {sliders.map((item, index) => (
            <div className="embla__slide" key={index}>
              <div className="slide_block">
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

export default SingleProductSlider
