import React from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons'
import useEmblaCarousel from 'embla-carousel-react'
import { useTranslations } from 'next-intl'

import partners1 from '@/public/images/partners1.png'
import partners2 from '@/public/images/partners2.png'
import partners3 from '@/public/images/partners3.png'
import partners4 from '@/public/images/partners4.png'
import partners5 from '@/public/images/partners5.png'
import partners6 from '@/public/images/partners6.png'

import Image from 'next/image'

type PropType = {
  options?: EmblaOptionsType
}

const AboutPartners: React.FC<PropType> = (props) => {

  const options: EmblaOptionsType = { align: 'start' }
  const t = useTranslations('communitySlider');

  const [emblaRef, emblaApi] = useEmblaCarousel(options)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  const sliders = [
    {
      image: partners1,
      desc : 'Brief descriptive text about the organization and the industry, highliting specialty, experience, and anything important to include in this introductory text.'
    },
    {
      image: partners2,
      desc : 'Brief descriptive text about the organization and the industry, highliting specialty, experience, and anything important to include in this introductory text.'
    },
    {
      image: partners3,
      desc : 'Brief descriptive text about the organization and the industry, highliting specialty, experience, and anything important to include in this introductory text.'
    },
    {
      image: partners4,
      desc : 'Brief descriptive text about the organization and the industry, highliting specialty, experience, and anything important to include in this introductory text.'
    },
    {
      image: partners5,
      desc : 'Brief descriptive text about the organization and the industry, highliting specialty, experience, and anything important to include in this introductory text.'
    },
    {
      image: partners6,
      desc : 'Brief descriptive text about the organization and the industry, highliting specialty, experience, and anything important to include in this introductory text.'
    }
    
  ];

  return (
    <section className="embla about_partner_slider">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {sliders.map((item, index) => (
            <div className="embla__slide" key={index}>
              <div className="slide_block">
                <div className="slide_image">
                  <Image
                    src={item.image}
                    alt={`Partner ${index + 1}`}
                    fill
                    style={{ objectFit: 'cover' }}
                    unoptimized
                  />
                </div>
                <div className="slide_desc">{item.desc}</div>
                <div className='more'>LEARN MORE</div>
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

export default AboutPartners
