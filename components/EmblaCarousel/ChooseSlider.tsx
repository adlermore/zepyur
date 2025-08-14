import React from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons'
import useEmblaCarousel from 'embla-carousel-react'

import choseHome1 from '@/public/images/choseHome1.png'
import choseHome2 from '@/public/images/choseHome2.png'
import choseHome3 from '@/public/images/choseHome3.png'
import choseHome4 from '@/public/images/choseHome4.png'





import Image from 'next/image'

type PropType = {
  options?: EmblaOptionsType
}

const ChooseSlider: React.FC<PropType> = (props) => {

  const options: EmblaOptionsType = { align: 'start' }

  const [emblaRef, emblaApi] = useEmblaCarousel(options)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  const sliders = [
    { image: choseHome1 },
    { image: choseHome2 },
    { image: choseHome3 },
    { image: choseHome4 },
  ]

  return (
    <section className="embla chose_slider">
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

export default ChooseSlider
