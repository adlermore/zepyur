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

type PropType = {
  options?: EmblaOptionsType
}

const ComunitySlider: React.FC<PropType> = (props) => {

  const options: EmblaOptionsType = { align: 'start' }

  const [emblaRef, emblaApi] = useEmblaCarousel(options)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  const sliders = [
    { icon: <IconCom1 />, title: 'FOOD COURT', desc: 'A blend of local and international cuisines served in a contemporary setting, ideal for any meal.' },
    { icon: <IconCom2 />, title: 'WELLNESS COMPLEX', desc: 'State-of-the-art gym, pool, and steam room designed for ultimate fitness and deep relaxation.' },
    { icon: <IconCom4 />, title: 'SUPERMARKET', desc: 'Stocked with fresh produce and daily essentials, meeting all your grocery shopping needs efficiently.' },
    { icon: <IconCom3 />, title: 'SPORTS ARENA', desc: 'Courts for football, basketball, volleyball, and tennis, perfect for maintaining an active lifestyle.' },
    { icon: <IconCom1 />, title: 'FOOD COURT', desc: 'A blend of local and international cuisines served in a contemporary setting, ideal for any meal.' },
    { icon: <IconCom2 />, title: 'WELLNESS COMPLEX', desc: 'State-of-the-art gym, pool, and steam room designed for ultimate fitness and deep relaxation.' }
  ]

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
