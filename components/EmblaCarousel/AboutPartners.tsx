'use client'

import React, { useState } from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import { PrevButton, NextButton, usePrevNextButtons } from './EmblaCarouselArrowButtons'
import useEmblaCarousel from 'embla-carousel-react'
import { useTranslations } from 'next-intl'
import Image, { StaticImageData } from 'next/image'

import AcbaBank01 from '@/public/images/partners/AcbaBANK_01.png'
import AcbaBank02 from '@/public/images/partners/AcbaBANK_02.png'
import AmeriaBank01 from '@/public/images/partners/AmeriaBANK_01.png'
import AmeriaBank02 from '@/public/images/partners/AmeriaBANK_02.png'
import Avetisyan01 from '@/public/images/partners/AVETISYAN_01.png'
import Avetisyan02 from '@/public/images/partners/AVETISYAN_02.png'
import Betton01 from '@/public/images/partners/BETTON_01.png'
import Betton02 from '@/public/images/partners/BETTON_02.png'
import EvocaBank01 from '@/public/images/partners/EvocaBANK_01.png'
import EvocaBank02 from '@/public/images/partners/EvocaBANK_02.png'
import Exact01 from '@/public/images/partners/EXACT_01.png'
import Exact02 from '@/public/images/partners/EXACT_02.png'
import HousingClub01 from '@/public/images/partners/HousingClub_01.png'
import HousingClub02 from '@/public/images/partners/HousingClub_02.png'
import NoshN01 from '@/public/images/partners/noshn_01.png'
import NoshN02 from '@/public/images/partners/noshn_02.png'

import { Facebook, Instagram, Linkedin, Youtube, Twitter } from 'lucide-react'
import Link from 'next/link'
import IconTeamFb from '@/public/icons/IconTeamFb'
import IconTeamInsta from '@/public/icons/IconTeamInsta'
import IconTeamYoutube from '@/public/icons/IconTeamYoutube'
import IconTeamIn from '@/public/icons/IconTeamIn'


type PropType = {
  options?: EmblaOptionsType
}

type PartnerType = {
  id: string;
  logoDefault: StaticImageData;
  logoActive: StaticImageData;
  desc?: string;
  social?: {
    facebook?: string;
    instagram?: string;
    linkedin?: string;
    contact?: string;
    email?: string;
    website?: string;
    x?: string;
  };

}

const partners: PartnerType[] = [
  { id: 'HousingClub', logoDefault: HousingClub01, logoActive: HousingClub02 },
  { id: 'AmeriaBank', logoDefault: AmeriaBank01, logoActive: AmeriaBank02 },
  { id: 'Exact', logoDefault: Exact01, logoActive: Exact02 },
  { id: 'EvocaBank', logoDefault: EvocaBank01, logoActive: EvocaBank02 },
  { id: 'Avetisyan', logoDefault: Avetisyan01, logoActive: Avetisyan02 },
  { id: 'AcbaBank', logoDefault: AcbaBank01, logoActive: AcbaBank02 },
  { id: 'NoshN', logoDefault: NoshN01, logoActive: NoshN02 },
  { id: 'Betton', logoDefault: Betton01, logoActive: Betton02 }
]

const AboutPartners: React.FC<PropType> = ({ options: propOptions }) => {
  const options: EmblaOptionsType = propOptions || { align: 'start' }
  const t = useTranslations('partnersSlider')

  const [emblaRef, emblaApi] = useEmblaCarousel(options)
  const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } =
    usePrevNextButtons(emblaApi)

  const [activePartner, setActivePartner] = useState<string | null>(null)

  const handleClick = (id: string) => {
    setActivePartner(prev => (prev === id ? null : id))
  }

  return (
    <section className="embla about_partner_slider">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {partners.map(partner => {
            const isActive = activePartner === partner.id
            const partnerDesc = t(`${partner.id}.desc`)
            const partnerSocial = {
              facebook: t(`${partner.id}.social.facebook`),
              instagram: t(`${partner.id}.social.instagram`),
              youtube: t(`${partner.id}.social.youtube`),
              linkedin: t(`${partner.id}.social.linkedin`),
              x: t(`${partner.id}.social.x`),
              contact: t(`${partner.id}.social.contact`),
              email: t(`${partner.id}.social.email`),
              website: t(`${partner.id}.social.website`)
            }

            return (
              <div className="embla__slide" key={partner.id}>
                <div
                  className={`slide_block flex flex-col  rounded-[10px] ${isActive ? 'active' : ''}`}
                  onClick={() => handleClick(partner.id)}
                  style={{
                    background: isActive ? '#989F42' : '#F2F1EF',
                    color: isActive ? '#fff' : '#000',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer'
                  }}
                >
                  <div className="slide_image min-h-[60px] relative w-full" >
                    <Image
                      src={isActive ? partner.logoActive : partner.logoDefault}
                      alt={'partner logo'}
                      fill
                      style={{ objectFit: 'contain' }}
                      unoptimized
                    />
                  </div>

                  {!isActive ? (
                    <>
                      <div className="slide_desc">{partnerDesc}</div>
                      <div className='more flex-1 flex justify-center uppercase items-end text-[#A6A6A6]'>{t('learnMore')}</div>
                    </>
                  ) : (
                    <div className="slide_active_info flex flex-col items-center gap-4">
                      <div className="social_icons flex gap-3">
                        {partnerSocial.facebook && partnerSocial.facebook !== `${partner.id}.social.facebook` && (
                          <Link href={partnerSocial.facebook} target="_blank" rel="noopener noreferrer">
                            <IconTeamFb />
                          </Link>
                        )}
                        {partnerSocial.instagram && partnerSocial.instagram !== `${partner.id}.social.instagram` && (
                          <Link href={partnerSocial.instagram} target="_blank" rel="noopener noreferrer">
                            <IconTeamInsta />
                          </Link>
                        )}
                        {partnerSocial.linkedin && partnerSocial.linkedin !== `${partner.id}.social.linkedin` && (
                          <Link href={partnerSocial.linkedin} target="_blank" rel="noopener noreferrer">
                            <IconTeamIn />
                          </Link>
                        )}
                        {partnerSocial.youtube && partnerSocial.youtube !== `${partner.id}.social.youtube` && (
                          <Link className='youtube' href={partnerSocial.youtube} target="_blank" rel="noopener noreferrer">
                            <IconTeamYoutube />
                          </Link>
                        )}
                      </div>
                      <div className='more_info_line'>
                        <span>{partnerSocial.contact}</span>
                        <span>{partnerSocial.email}</span>
                      </div>

                      {partnerSocial.website && partnerSocial.website !== `${partner.id}.social.website` && (
                        <div className="partner_website text-sm">
                          <Link href={partnerSocial.website} target="_blank" rel="noopener noreferrer" className="underline">
                            {partnerSocial.website}
                          </Link>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            )
          })}
        </div>

        <div className="embla__controls">
          <div className="embla__buttons">
            <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
            <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
          </div>
        </div>
      </div>
      <style jsx>{`
        .slide_block {
          padding: 20px;
          border-radius: 12px;
          min-height: 200px;
        }
        .slide_block.active .slide_desc {
          display: none;
        }
        .slide_active_info {
          font-size: 14px;
          line-height: 1.5;
        }
        .slide_active_info .social_links {
          list-style: none;
          padding: 0;
          margin: 0 0 8px 0;
        }
        .slide_active_info .social_links li {
          margin-bottom: 4px;
        }
      `}</style>
    </section>
  )
}

export default AboutPartners
