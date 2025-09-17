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
import IconCom5 from '@/public/icons/IconCom5'
import IconCom6 from '@/public/icons/IconCom6'
import IconCom7 from '@/public/icons/IconCom7'



import { useTranslations } from 'next-intl'
import Autoplay from 'embla-carousel-autoplay'

type PropType = {
  options?: EmblaOptionsType
}

const autoplayOptions = Autoplay({ delay: 3000, stopOnInteraction: true });

const ComunitySlider: React.FC<PropType> = (props) => {

  const options: EmblaOptionsType = { align: "start", loop: true };
  const t = useTranslations('communitySlider');

  const [emblaRef, emblaApi] = useEmblaCarousel(options, [autoplayOptions]);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  const sliders = [
    {
      icon: <IconCom4 />,
      title: t('01Title'),
      desc: t('01Desc'),
    },
    {
      icon: <IconCom1 />,
      title: t('02Title'),
      desc: t('02Desc'),
    },
    {
      icon: <IconCom2 />,
      title: t('03Title'),
      desc: t('03Desc'),
    },
    {
      icon: <IconCom3 />,
      title: t('04Title'),
      desc: t('04Desc'),
    },
    {
      icon: <IconCom5 className='scale13' />,
      title: t('05Title'),
      desc: t('05Desc'),
    },
    {
      icon: <IconCom7 className='scale13' />,
      title: t('06Title'),
      desc: t('06Desc'),
    },
    {
      icon: <IconCom6 className='scale13' />,
      title: t('07Title'),
      desc: t('07Desc'),
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
