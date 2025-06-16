import React from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons'
import useEmblaCarousel from 'embla-carousel-react'
import IconCom1 from '@/public/icons/IconCom1'
import IconCom2 from '@/public/icons/IconCom2'
import IconCom3 from '@/public/icons/IconCom3'
import IconCom4 from '@/public/icons/IconCom4'
import { useTranslations } from 'next-intl'

type PropType = {
  options?: EmblaOptionsType
}

const ComunitySlider: React.FC<PropType> = (props) => {

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
      icon: <IconCom1 />,
      title: t('foodCourtTitle'),
      desc: t('foodCourtDesc'),
    },
    {
      icon: <IconCom2 />,
      title: t('wellnessComplexTitle'),
      desc: t('wellnessComplexDesc'),
    },
    {
      icon: <IconCom4 />,
      title: t('supermarketTitle'),
      desc: t('supermarketDesc'),
    },
    {
      icon: <IconCom3 />,
      title: t('sportsArenaTitle'),
      desc: t('sportsArenaDesc'),
    },
    {
      icon: <IconCom1 />,
      title: t('foodCourtTitle'),
      desc: t('foodCourtDesc'),
    },
    {
      icon: <IconCom2 />,
      title: t('wellnessComplexTitle'),
      desc: t('wellnessComplexDesc'),
    }
  ];

  return (
    <section className="embla comunity_slider">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {sliders.map((item, index) => (
            <div className="embla__slide" key={index}>
              <div className="slide_block">
                <div className="slide_icon">{item.icon}</div>
                <div className="slide_title">{item.title}</div>
                <div className="slide_desc">{item.desc}</div>
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

export default ComunitySlider
