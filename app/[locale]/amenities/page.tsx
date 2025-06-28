'use client'

import Image from 'next/image'
import React from 'react'
import amenitiesBanner from '@/public/images/amenitiesBanner.png'
import amenBig1 from '@/public/images/amenBig1.png'
import amenBig2 from '@/public/images/amenBig2.png'
import { useTranslations } from 'next-intl'


function Amenities() {
  const t = useTranslations('amenities');

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
          <h1>{t('title')}</h1>
        </div>
      </div>
      <div className='amenities_section'>
        <div className='custom_container'>
          <div className='amenties_desc'>
            <p>{t('blockDesc1')}</p>
          </div>
          <div className='amenties_inline'>
            <div className='bigImage'>
              <Image
                src={amenBig1}
                alt='About SVG'
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
              <div className='title'>{t('blocktitle1')}</div>
              <div className='desc'>
                {t('blockDesc1')}
              </div>
            </div>
          </div>
          <div className='amenties_inline reverse' >
            <div className='bigImage'>
              <Image
                src={amenBig2}
                alt='About SVG'
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
              <div className='title'>{t('blocktitle2')}</div>
              <div className='desc'>
                {t('blockDesc2')}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Amenities