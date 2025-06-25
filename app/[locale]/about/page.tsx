'use client'

import Image from 'next/image'
import React from 'react'
import aboutBanner from '@/public/images/aboutBanner.png'
import aboutSvg from '@/public/images/about_svg.png'
import GallerySlider from '@/components/EmblaCarousel/GallerySlider'
import TeamSlider from '@/components/EmblaCarousel/TeamSlider'
import AboutPartners from '@/components/EmblaCarousel/AboutPartners'

function About() {
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
          <h1>Zepyur Residential Area</h1>
        </div>
      </div>
      <div className='about_section'>
        <div className='custom_container'>
          <div className='about_desc'>
            «ԶԵՓՅՈՒՌ»-ը ապրելակերպ է, որը բացի հարմարավետ առանձնատներից ունի բազմաթիվ հագեցվածություն, օրը լիարժեք եւ առողջ անցկացնելու համար։ Յուրաքանչյուր փուլում մենք բացի բնակելի տարածքներից ստեղծում ենք ժամանակակից եւ հարմարավետ միջավայր՝ լիարժեք համայնքի ձեւավորման համար։
          </div>
          <div className='about_slider'>
            <GallerySlider />
          </div>
          <div className='about_desc'>
            «ԶԵՓՅՈՒՌ» բնակելի թաղամասը գտնվում է Երեւանից 21կմ հեռավորության վրա՝ Կոտայքի գեղատեսիլ մարզի, Նոր Հաճն համայնքի, Նոր Գեղի գյուղում։ Այս մանրակրկիտ ծրագրված նախագիծն ընդգրկում է 10 հեկտար ընդարձակ տարածք՝ առաջարկելով, ոճի եւ հանգստության համադրություն:
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
                «Զեփյուռ» բնակելի թաղա-մասի բնակիչները կբացահայտեն, որ յուրաքանչյուր մանրուք մշակվել է մտածված կերպով՝ բարելավելու կենսափորձը։
              </div>
              <div className='svg_desc'>
                (200-600) քմ հողատարածքներ, (50-100) քմ բնակելի տարածքներով, նախագիծը իր առաջին փուլում առաջարկում է սահմանափակ 59 առանձնատներ՝ յու-րահատուկ ճարտարապետական ինքնությամբ՝ համատեղելով ժամանակակից դիզայնը և նրբագեղությունը։
              </div>
              <hr />
              <div className='svg_desc'>
                «ZEPYUR» residents will discover every detail has been thoughtfully curated to enhance the living experience. With lands ranging between (200-600)m that contain (50-150)m of living spaces, the project (at phase one) offers a limited 59 private houses with unique architectual identity.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='team_slider'>
        <div className='section_title'>
          development team
        </div>
        <div className='team_slider_container'>
          <TeamSlider />
        </div>
      </div>
      <div className='team_slider'>
        <div className='section_title'>
          PARTNERS & AFFILIATES
        </div>
        <div className='partners_slider_container'>
          <AboutPartners />
        </div>
      </div>
    </div>
  )
}

export default About