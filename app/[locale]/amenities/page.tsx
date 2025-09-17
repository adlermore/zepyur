'use client'

import Image from 'next/image'
import React from 'react'
import amenitiesBanner from '@/public/images/amenitiesBanner.png'
import amenBig1 from '@/public/images/amenBig1.png'
import amenBig2 from '@/public/images/amenBig2.png'
import amenBig3 from '@/public/images/amenBig3.png'
import amenBig4 from '@/public/images/amenBig4.png'
import amenBig5 from '@/public/images/amenBig5.png'
import amenBig6 from '@/public/images/amenBig6.png'
import amenBig7 from '@/public/images/amenBig7.png'
import { useTranslations } from 'next-intl'



function Amenities() {
  const t = useTranslations('communitySlider');
  const t2 = useTranslations('amenities');

  const amenitiesData = [
    { img: amenBig1, title: t('01Title'), desc: t('01Desc') },
    { img: amenBig2, title: t('02Title'), desc: t('02Desc') },
    { img: amenBig3, title: t('03Title'), desc: t('03Desc') },
    { img: amenBig4, title: t('04Title'), desc: t('04Desc') },
    { img: amenBig5, title: t('05Title'), desc: t('05Desc') },
    { img: amenBig6, title: t('06Title'), desc: t('06Desc') },
    { img: amenBig7, title: t('07Title'), desc: t('07Desc') },
  ]

  return (
    <div className='amenties_page pb-[40px]'>
      <div className='banner_img'>
        <Image
          src={amenitiesBanner}
          priority
          alt='Homes Banner'
          fill
          style={{ objectFit: 'cover' }}
          unoptimized
        />
        <div className='custom_container'>
          <h1>{t2('title')}</h1>
        </div>
      </div>
      <div className='amenities_section'>
        <div className='custom_container'>
          <p className='py-[20px]'>{t2('longDesc')}</p>
          {amenitiesData.map((item, index) => (
            <div
              key={index}
              className={`amenties_inline ${index % 2 !== 0 ? 'reverse' : ''}`}
            >
              <div className='bigImage'>
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  priority
                  sizes='100vw'
                  quality={100}
                  className='w-full h-auto'
                  unoptimized
                />
              </div>
              <div className='amenties_content'>
                <div className='title'>{item.title}</div>
                <div className='desc'>{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}

export default Amenities