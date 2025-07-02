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
import { useTranslations } from 'next-intl'

type PropType = {
  options?: EmblaOptionsType
}

const AmentiesSlider: React.FC<PropType> = (props) => {

  const options: EmblaOptionsType = { align: 'start' }
  const t = useTranslations('amentiesSlider');

  const [emblaRef, emblaApi] = useEmblaCarousel(options)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  const sliders = [
    { image: amenties1, title: t('amentiesTitle1'), desc: t('amentiesDesc1') },
    { image: amenties2, title: t('amentiesTitle2'), desc: t('amentiesDesc2') },
    { image: amenties3, title: t('amentiesTitle3'), desc: t('amentiesDesc3') },
    { image: amenties3, title: t('amentiesTitle4'), desc: t('amentiesDesc4') },
    { image: amenties1, title: t('amentiesTitle5'), desc: t('amentiesDesc5') },
  ];

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
                    alt={`Slide ${index + 1}`}
                    className="w-full h-auto"
                    unoptimized
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className='slide_content'>
                  <div className='slide_desc'>{item.title}</div>
                  <div className='slide_desc_text'>{item.desc}</div>
                  <Link href="/amenities" className='moreLink'>{t('showMore')}</Link>
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
