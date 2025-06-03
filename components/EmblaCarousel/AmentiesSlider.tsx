import React from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons'
import useEmblaCarousel from 'embla-carousel-react'

import amenties1 from '@/public/images/amenties1.png'
import amenties2 from '@/public/images/amenties2.png'
import amenties3 from '@/public/images/amenties3.png'
import Image from 'next/image'
import Link from 'next/link'

type PropType = {
  options?: EmblaOptionsType
}

const AmentiesSlider: React.FC<PropType> = (props) => {

  const options: EmblaOptionsType = { align: 'start' }

  const [emblaRef, emblaApi] = useEmblaCarousel(options)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  const sliders = [
    { image: amenties1, title: 'ՍՈՒՊԵՐՄԱՐԿԵՏ' },
    { image: amenties2, title: 'ՍՊՈՐՏԱՅԻՆ ՀԱՄԱԼԻՐ' },
    { image: amenties3, title: 'ԽԱՂԱՅԻՆ ԿԵՆՏՐՈՆ' },
    { image: amenties3, title: 'ՄԱՆԿԱԿԱՆ ԽՈՒՃԱՓԱՐ' },
    { image: amenties1, title: 'ՍՈՒՊԵՐՄԱՐԿԵՏ' },
  ]

  return (
    <section className="embla amenties_slider">
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
                <div className='slide_content'>
                  <div className='slide_desc'>
                    {item.title}
                  </div>
                  <Link href="/community" className='moreLink'>Show More</Link>
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

export default AmentiesSlider
