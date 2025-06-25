import React from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons'
import useEmblaCarousel from 'embla-carousel-react'
import { useTranslations } from 'next-intl'
import image1 from '@/public/images/team1.png'
import image2 from '@/public/images/team2.png'
import Image from 'next/image'

type PropType = {
  options?: EmblaOptionsType
}

const TeamSlider: React.FC<PropType> = (props) => {

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
      image: image1,
      position: 'Chief Executive Officer',
      desc: 'Overall leadership and strategic direction.',
      name: 'Hayk S.'
    },
    {
      image: image2,
      position: 'Chief Technology Officer',
      desc: 'Management of daily operations and logistics.',
      name: 'Margarita A.'
    },
    {
      image: image1,
      position: 'Chief Financial Officer',
      desc: 'Financial planning and risk management.',
      name: 'Armen T.'
    },
    {
      image: image2,
      position: 'Chief Marketing Officer',
      desc: 'Marketing strategy and brand management.',
      name: 'Anna K.'
    },
    {
      image: image1,
      position: 'Chief Operations Officer',
      desc: 'Overseeing daily operations and logistics.',
      name: 'Vardan P.'
    },
    {
      image: image2,
      position: 'Chief Technology Officer',
      desc: 'Technology strategy and innovation.',
      name: 'Lilit G.'
    }
  ];

  return (
    <section className="embla team_slider">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {sliders.map((item, index) => (
            <div className="embla__slide" key={index}>
              <div className="slide_block">
                <div className="slide_image">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    style={{ objectFit: 'cover' }}
                    unoptimized
                  />
                </div>
                <div className="slide_position">{item.position}</div>
                <div className="slide_desc">{item.desc}</div>
                <div className="slide_name">{item.name}</div>
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

export default TeamSlider
