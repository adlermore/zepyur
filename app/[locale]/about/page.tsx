'use client'

import Image from 'next/image'
import React, { useEffect } from 'react'
import aboutBanner from '@/public/images/aboutBanner.png'
import aboutSvg from '@/public/images/about_svg.png'
import GallerySlider from '@/components/EmblaCarousel/GallerySlider'
import TeamSlider from '@/components/EmblaCarousel/TeamSlider'
import AboutPartners from '@/components/EmblaCarousel/AboutPartners'
import { useTranslations } from 'next-intl'
import { usePathname, useSearchParams } from 'next/navigation'


function About() {
  const t = useTranslations();

  const pathname = usePathname();
  const searchParams = useSearchParams();
  
useEffect(() => {
  if (typeof window !== 'undefined') {
    const section = searchParams.get('section');
    if (section === 'partner') {
      const el = document.getElementById('partnerSection');
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 200);
      }
    }
  }
}, [pathname, searchParams]);


  // handle scroll when route changes or params update
  return (
    <div className='about_page pb-[40px]'>
      <div className='banner_img'>
        <Image
          src={aboutBanner}
          priority
          alt='Homes Banner'
          fill
          style={{ objectFit: 'cover' }}
          unoptimized
        />
        <div className='custom_container'>
          {/* <h1>{t('about.title')}</h1> */}
        </div>
      </div>
      <div className='about_section'>
        <div className='custom_container'>
          <div className='about_desc'>
            {t('about.desc1')}
          </div>
          <div className='about_slider'>
            <GallerySlider />
          </div>
          <div className='about_desc'>
            {t('about.desc2')}
          </div>
        </div>
      </div>
      <div className='about_svg'>
        <Image
          src={aboutSvg}
          alt='About SVG'
          fill
          style={{ objectFit: 'contain' }}
          priority
          sizes='100vw'
          quality={100}
          className='w-full h-auto'
          unoptimized
        />
        <div className='svg_content'>
          <div className='custom_container'>
            <div className='content_inner'>
              <div className='svg_desc'>
                {t('about.desc3')}
              </div>
              <div className='svg_desc'>
                {t('about.desc4')}
              </div>
              <hr />
              <div className='svg_desc'>
                {t('about.desc5')}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='team_slider'>
        <div className='section_title'>
          {t('about.devTeam')}
        </div>
        <div className='team_slider_container'>
          <TeamSlider />
        </div>
      </div>
      <div className='team_slider'>
        <div className='section_title'>
          {t('about.partners')}
        </div>
        <div className='partners_slider_container' id='partnerSection' >
          <AboutPartners />
        </div>
      </div>
    </div>
  )
}

export default About