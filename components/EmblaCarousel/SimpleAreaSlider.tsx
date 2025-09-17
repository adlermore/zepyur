import React, { useEffect } from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons'
import useEmblaCarousel from 'embla-carousel-react'

import z01image1 from '@/public/images/Z01/Z01-01.png'
import z01image2 from '@/public/images/Z01/Z01-02.png'
import z01image3 from '@/public/images/Z01/Z01-03.png'
import z01image4 from '@/public/images/Z01/Z01-04.png'
import z01image5 from '@/public/images/Z01/Z01-05.png'
import z01image6 from '@/public/images/Z01/Z01-06.png'
import z01image7 from '@/public/images/Z01/Z01-07.png'
import z01image8 from '@/public/images/Z01/Z01-08.png'
import z01image9 from '@/public/images/Z01/Z01-09.png'
import z01image10 from '@/public/images/Z01/Z01-10.png'
import z01image11 from '@/public/images/Z01/Z01-11.png'
import z01image12 from '@/public/images/Z01/Z01-12.png'

import z02image1 from '@/public/images/Z02/Z02-01.png'
import z02image2 from '@/public/images/Z02/Z02-02.png'
import z02image3 from '@/public/images/Z02/Z02-03.png'
import z02image4 from '@/public/images/Z02/Z02-04.png'
import z02image5 from '@/public/images/Z02/Z02-05.png'
import z02image6 from '@/public/images/Z02/Z02-06.png'
import z02image7 from '@/public/images/Z02/Z02-07.png'
import z02image8 from '@/public/images/Z02/Z02-08.png'
import z02image9 from '@/public/images/Z02/Z02-09.png'
import z02image10 from '@/public/images/Z02/Z02-10.png'
import z02image11 from '@/public/images/Z02/Z02-11.png'
import z02image12 from '@/public/images/Z02/Z02-12.png'

import Image from 'next/image'
import { Fancybox } from '@fancyapps/ui'

type PropType = {
  options?: EmblaOptionsType
  selectedType: 'z01' | 'z02' | string
}

const SimpleAreaSlider: React.FC<PropType> = ({ selectedType }) => {

  const options: EmblaOptionsType = { align: 'start' }

  const [emblaRef, emblaApi] = useEmblaCarousel(options)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  const z01Images = [
    z01image1, z01image2, z01image3, z01image4, z01image5, z01image6,
    z01image7, z01image8, z01image9, z01image10, z01image11, z01image12
  ]

  const z02Images = [
    z02image1, z02image2, z02image3, z02image4, z02image5, z02image6,
    z02image7, z02image8, z02image9, z02image10, z02image11, z02image12
  ]

  const sliders = selectedType === 'z01' ? z01Images.map((image) => ({ image })) :
    selectedType === 'z02' ?
      z02Images.map((image) => ({ image })) :
      [...z01Images, ...z02Images].map((image) => ({ image }))


  useEffect(() => {
    Fancybox.bind('[data-fancybox="gallery"]', {});

    return () => {
      Fancybox.destroy();
    };
  }, []);

  return (
    <section className="embla simple_area_slider">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {sliders.map((item, index) => (
            <div className="embla__slide" key={index}>
              <div className="slide_block">
                <div className='slide_image'>
                  <a
                    href={item.image.src}
                    data-fancybox="gallery"
                    className="image_block relative block w-full h-[300px]"
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

export default SimpleAreaSlider
