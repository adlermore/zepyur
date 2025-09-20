import React, { useEffect } from 'react'
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
import gallery5 from '@/public/images/gallery5.png'
import gallery6 from '@/public/images/gallery6.png'
import gallery7 from '@/public/images/gallery7.png'
import gallery8 from '@/public/images/gallery8.png'

import Image from 'next/image'
import { Fancybox } from '@fancyapps/ui'

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
    { image: gallery7 },
    { image: gallery8 },
    { image: gallery5 },
    { image: gallery6 },
    { image: gallery1 },
    { image: gallery2 },
    { image: gallery3 },
    { image: gallery4 },
  ]

  useEffect(() => {
    Fancybox.bind('[data-fancybox="gallery"]', {});

    return () => {
      Fancybox.destroy();
    };
  }, []);


  return (
    <section className="embla gallery_slider">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {sliders.map((item, index) => (
            <div className="embla__slide" key={index}>
              <div className="slide_block">
                <a
                  href={item.image.src}
                  data-fancybox="gallery"
                >
                  <Image
                    src={item.image}
                    alt={`Choose Home ${index + 1}`}
                    className="w-full h-auto"
                    unoptimized
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </a>
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
