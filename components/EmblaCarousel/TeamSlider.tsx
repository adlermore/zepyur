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
  const t = useTranslations('teamSlider');

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
      nameKey: 'team1Name',
      positionKey: 'team1Position',
      descKey: 'team1Desc'
    },
    {
      image: image2,
      nameKey: 'team2Name',
      positionKey: 'team2Position',
      descKey: 'team2Desc'
    },
    {
      image: image1,
      nameKey: 'team3Name',
      positionKey: 'team3Position',
      descKey: 'team3Desc'
    },
    {
      image: image2,
      nameKey: 'team4Name',
      positionKey: 'team4Position',
      descKey: 'team4Desc'
    },
    {
      image: image1,
      nameKey: 'team5Name',
      positionKey: 'team5Position',
      descKey: 'team5Desc'
    },
    {
      image: image2,
      nameKey: 'team6Name',
      positionKey: 'team6Position',
      descKey: 'team6Desc'
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
                    alt={'Team member image'}
                    fill
                    style={{ objectFit: 'cover' }}
                    unoptimized
                  />
                </div>
                <div className="slide_position">{t(item.positionKey)}</div>
                <div className="slide_desc">{t(item.descKey)}</div>
                <div className="slide_name">{t(item.nameKey)}</div>
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
