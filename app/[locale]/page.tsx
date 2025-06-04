'use client'
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import homeBottomBanner from '@/public/images/homeBottomBanner.png';
import Image from 'next/image';
import '@/styles/home.scss'
import homegrid1 from '@/public/images/homegrid1.png';
import homegrid2 from '@/public/images/homegrid2.png';
import homegrid3 from '@/public/images/homegrid3.png';
import ComunitySlider from '@/components/EmblaCarousel/ComunitySlider';
import ChooseSlider from '@/components/EmblaCarousel/ChooseSlider';
import LayoutSlider from '@/components/EmblaCarousel/LayoutSlider';
import AmentiesSlider from '@/components/EmblaCarousel/AmentiesSlider';
import ZepyurSvg from '@/components/ZepyurArea/ZepyurSvg';


export default function HomePage() {
  const t = useTranslations('home');

  const handleApartamentClick = (id: string) => {
    console.log('apartament', id);
  }

  return (
    <div className='home_page'>
      <div className='test_area'>
        <ZepyurSvg />
      </div>

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
        <Link href="http://192.168.100.178:3000/" className='more_btn'>GO TO IRP</Link>

      </div>
      <div className='choose_section'>
        <div className='section_title'>
          CHOOSE YOUR HOME
        </div>
        <ChooseSlider />
        <Link href="/community" className='more_btn'>{t('showMore')}</Link>
      </div>
      <div className='layout_section'>
        <div className='section_title'>
          LAYOUT OPTIONS
        </div>
        <LayoutSlider />
        {/* <Link href="/community" className='more_btn'>{t('showMore')}</Link> */}
      </div>
      <div className='amenties_section'>
        <div className='section_title'>
          AMENTIES
        </div>
        <AmentiesSlider />
        <Link href="/community" className='more_btn'>{t('showMore')}</Link>
      </div>
      <div className='home_bottom_banner relative mt-[50px] h-[900px]'>
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