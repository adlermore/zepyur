'use client'
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { EmblaOptionsType } from 'embla-carousel'
import EmblaCarousel from '@/components/EmblaCarousel/EmblaCarousel';
import homeBottomBanner from '@/public/images/homeBottomBanner.png';
import Image from 'next/image';
import ZepyurArea from '@/components/ZepyurArea/ZepyurArea';
import '@/styles/home.scss'
import homegrid1 from '@/public/images/homegrid1.png';
import homegrid2 from '@/public/images/homegrid2.png';
import homegrid3 from '@/public/images/homegrid3.png';
import ComunitySlider from '@/components/EmblaCarousel/ComunitySlider';

export default function HomePage() {
  const t = useTranslations('home');

  const OPTIONS: EmblaOptionsType = { align: 'start' }
  const SLIDE_COUNT = 6
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

  const SLIDE_COUNT2 = 7
  const SLIDES2 = Array.from(Array(SLIDE_COUNT2).keys())

  return (
    <div className='home_page'>
      <ZepyurArea />
      <div className='main_description'>
        <div className='custom_container'>
          <div className='desc'>{t('mainDescription1')}</div>
          <div className='desc'>{t('mainDescription2')}</div>
          <div className='main_grid mt-[50px] grid grid-cols-3 gap-[15px]'>
            <div className='grid_block'>
              <div className='block_title'>107 HOUSES</div>
              <div className='block_desc'>
                Discover single-level living with our range of houses, featuring a private backyard and 2 parking sport.
                <br />
                <br />
                Choose from small (2 bedrooms), medium (3 bedroom), or large (4 bedrooms) layouts, designed for style and functionality.
              </div>
            </div>
            <div className='grid_block'>
              <Image
                src={homegrid1}
                alt="homegrid1"
                className="w-full h-auto"
                unoptimized
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className='grid_block'>
              <div className='block_title'>45 TOWNHOUSES</div>
              <div className='block_desc'>
                Experience elegant living in our two-story townhouses, uniformly designed for sophistication & space.                <br />
                <br />
                Experience elegant living in our two-story townhouses, uniformly designed for sophistication & space.              </div>
            </div>
            <div className='grid_block'>
              <Image
                src={homegrid2}
                alt="homegrid2"
                className="w-full h-auto"
                unoptimized
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className='grid_block'>
              <div className='block_title'>45 TOWNHOUSES</div>
              <div className='block_desc'>
                Experience elegant living in our two-story townhouses, uniformly designed for sophistication & space.                <br />
                <br />
                Experience elegant living in our two-story townhouses, uniformly designed for sophistication & space.              </div>
            </div>
            <div className='grid_block'>
              <Image
                src={homegrid3}
                alt="homegrid3"
                className="w-full h-auto"
                unoptimized
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className='comunity_section'>
        <div className='section_title'>
          COMMUNITY AMENTITIES
        </div>
        <ComunitySlider />
        <Link href="/community" className='more_btn'>{t('showMore')}</Link>
      </div>

        <EmblaCarousel slides={SLIDES} options={OPTIONS} />

      <div className='custom_slide'>
        <EmblaCarousel slides={SLIDES2} options={OPTIONS} />
      </div>

      <Link href="/contact">{t('contact')}</Link>
      <div className='home_bottom_banner relative h-[900px]'>
        <Image
          src={homeBottomBanner}
          alt="homeBottomBanner"
          className="w-full h-auto"
          unoptimized
          fill
          style={{ objectFit: 'cover' }}
        />
      </div>

    </div>
  );
}