'use client'

import Image from 'next/image'
import React from 'react'
import amenitiesBanner from '@/public/images/amenitiesBanner.png'
import amenBig1 from '@/public/images/amenBig1.png'
import amenBig2 from '@/public/images/amenBig2.png'


function Amenities() {
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
          <h1>Our Amentities</h1>
        </div>
      </div>
      <div className='amenities_section'>
        <div className='custom_container'>
          <div className='amenties_desc'>
            «ԶԵՓՅՈՒՌ»-ի բնակիչները հնարավորություն կունենան օգտվելու մտածված հարմարություններից, որոնք նախատեսված են ապրե- լակերպը բարելավելու և հարմարավետություն ապահովելու համար.
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
              <div className='title'>Zepyur Commercial Complex</div>
              <div className='desc'>
                Residents of  ZEPYUR will enjoy access to thoughtfully curated amenities designed to enhance lifestyle and provide convenience. The project has a Marketplace, Dining plaza, Events hall, Wellness complex, Sports arena, Community cafe, Cine lounge, Game hub.
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
              <div className='title'>Zepyur Commercial Units</div>
              <div className='desc'>
                Full-service supermarket stocked with fresh produce and daily essentials. Diverse food court offering a mix of local and international flavors. Outdoor sports facilities include a universal court for football, basketball, volleyball, and tennis, encouraging active and social lifestyles and others.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Amenities