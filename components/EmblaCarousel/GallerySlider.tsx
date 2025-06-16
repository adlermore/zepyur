import React from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons'
import useEmblaCarousel from 'embla-carousel-react'

import gallery1 from '@/public/images/gallery1.png'
import gallery2 from '@/public/images/gallery2.png'
import gallery3 from '@/public/images/gallery3.png'
import gallery4 from '@/public/images/gallery4.png'

import Image from 'next/image'

type PropType = {
  options?: EmblaOptionsType
}

const GallerySlider: React.FC<PropType> = (props) => {

  const options: EmblaOptionsType = { align: 'start' }

  const [emblaRef, emblaApi] = useEmblaCarousel(options)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  const sliders = [
    { image: gallery1 },
    { image: gallery2 },
    { image: gallery3 },
    { image: gallery4 },
    { image: gallery4 },
    { image: gallery2 },
  ]

  return (
    <section className="embla gallery_slider">
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

export default GallerySlider
