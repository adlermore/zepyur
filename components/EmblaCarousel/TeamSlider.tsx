import React from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons'
import useEmblaCarousel from 'embla-carousel-react'
import { useTranslations } from 'next-intl'
import Hayk_S from '@/public/images/team/Hayk_S.png'
import Mushegh from '@/public/images/team/Mushegh.png'
import Lusine from '@/public/images/team/Lusine.png'
import Hayk_D from '@/public/images/team/Hayk_D.png'
import SoSarkissian from '@/public/images/team/SoSarkissian.png'
import Tatevik from '@/public/images/team/Tatevik.png'
import Ghukas from '@/public/images/team/Ghukas.png'

import Image from 'next/image'

type PropType = {
  options?: EmblaOptionsType
}

const TeamSlider: React.FC<PropType> = (props) => {

  const options: EmblaOptionsType = { align: 'start' }
  const t = useTranslations();

  const [emblaRef, emblaApi] = useEmblaCarousel(options)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  const sliders = [
    {
      image: SoSarkissian,
      keys: {
        before: {
          name: 'teamSlider.team5.name.before',
          position: 'teamSlider.team5.position.before',
          desc: 'teamSlider.team5.desc.before'
        },
        after: {
          name: 'teamSlider.team5.name.after',
          position: 'teamSlider.team5.position.after',
          desc: 'teamSlider.team5.desc.after'
        }
      }
    },
    {
      image: Hayk_S,
      keys: {
        before: {
          name: 'teamSlider.team1.name.before',
          position: 'teamSlider.team1.position.before',
          desc: 'teamSlider.team1.desc.before'
        },
        after: {
          name: 'teamSlider.team1.name.after',
          position: 'teamSlider.team1.position.after',
          desc: 'teamSlider.team1.desc.after'
        }
      }
    },
    {
      image: Mushegh,
      keys: {
        before: {
          name: 'teamSlider.team2.name.before',
          position: 'teamSlider.team2.position.before',
          desc: 'teamSlider.team2.desc.before'
        },
        after: {
          name: 'teamSlider.team2.name.after',
          position: 'teamSlider.team2.position.after',
          desc: 'teamSlider.team2.desc.after'
        }
      }
    },
    {
      image: Lusine,
      keys: {
        before: {
          name: 'teamSlider.team3.name.before',
          position: 'teamSlider.team3.position.before',
          desc: 'teamSlider.team3.desc.before'
        },
        after: {
          name: 'teamSlider.team3.name.after',
          position: 'teamSlider.team3.position.after',
          desc: 'teamSlider.team3.desc.after'
        }
      }
    },
    {
      image: Hayk_D,
      keys: {
        before: {
          name: 'teamSlider.team4.name.before',
          position: 'teamSlider.team4.position.before',
          desc: 'teamSlider.team4.desc.before'
        },
        after: {
          name: 'teamSlider.team4.name.after',
          position: 'teamSlider.team4.position.after',
          desc: 'teamSlider.team4.desc.after'
        }
      }
    },

    {
      image: Tatevik,
      keys: {
        before: {
          name: 'teamSlider.team6.name.before',
          position: 'teamSlider.team6.position.before',
          desc: 'teamSlider.team6.desc.before'
        },
        after: {
          name: 'teamSlider.team6.name.after',
          position: 'teamSlider.team6.position.after',
          desc: 'teamSlider.team6.desc.after'
        }
      }
    },
    {
      image: Ghukas,
      keys: {
        before: {
          name: 'teamSlider.team7.name.before',
          position: 'teamSlider.team7.position.before',
          desc: 'teamSlider.team7.desc.before'
        },
        after: {
          name: 'teamSlider.team7.name.after',
          position: 'teamSlider.team7.position.after',
          desc: 'teamSlider.team7.desc.after'
        }
      }
    }
  ]



  return (
    <section className="embla team_slider">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {sliders.map((item, index) => (
            <div className="embla__slide" key={index}>
              <div className="slide_block group">
                <div className="slide_inner">
                  {/* FRONT */}
                  <div className="slide_front relative">
                    <div className='relative w-full h-[200px] md:h-[350px] lg:h-[400px] rounded-t-[15px] lg:rounded-t-[25px] overflow-hidden'>
                      <Image
                        src={item.image}
                        alt="Team member"
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </div>

                    <div className="slide_info">
                      <div className="slide_position">{t(item.keys.before.position)}</div>
                      <div className="slide_desc">{t(item.keys.before.desc)}</div>
                      <div className="slide_name">{t(item.keys.before.name)}</div>
                    </div>
                  </div>

                  {/* BACK */}
                  <div className="slide_back">
                    <div className="slide_name">{t(item.keys.after.name)}</div>
                    <div className="slide_position">{t(item.keys.after.position)}</div>
                    <div className="slide_desc">{t(item.keys.after.desc)}</div>
                  </div>
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

export default TeamSlider
