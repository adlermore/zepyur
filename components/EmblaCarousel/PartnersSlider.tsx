import React from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons'
import useEmblaCarousel from 'embla-carousel-react'

import partners1 from '@/public/images/partners1.png'
import partners2 from '@/public/images/partners2.png'
import partners3 from '@/public/images/partners3.png'
import partners4 from '@/public/images/partners4.png'
import partners5 from '@/public/images/partners5.png'
import partners6 from '@/public/images/partners6.png'
import partners7 from '@/public/images/partners7.png'
import partners9 from '@/public/images/partners9.png'

import Image from 'next/image'
import Link from 'next/link'

type PropType = {
  options?: EmblaOptionsType
}

const PartnersSlider: React.FC<PropType> = (props) => {

  const options: EmblaOptionsType = { align: 'start' }

  const [emblaRef, emblaApi] = useEmblaCarousel(options)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  const sliders = [
    { image: partners1 },
    { image: partners2 },
    { image: partners3 },
    { image: partners4 },
    { image: partners5 },
    { image: partners6 },
    { image: partners7 },
    { image: partners9 },
  ]

  return (
    <section className="embla partners_slider">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {sliders.map((item, index) => (
            <div className="embla__slide" key={index}>
              <Link href={`/about?section=partner`} scroll={false} className="block slide_block">
                <Image
                  src={item.image}
                  alt={`Choose Home ${index + 1}`}
                  className="w-full h-auto"
                  unoptimized
                  fill
                  style={{ objectFit: 'contain' }}
                />
              </Link>
            </div>
          ))}
        </div>
        {/* <div className="embla__controls">
          <div className="embla__buttons">
            <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
            <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
          </div>
        </div> */}
      </div>
    </section>
  )
}

export default PartnersSlider
