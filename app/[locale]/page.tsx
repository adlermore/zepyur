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
import { useEffect, useState } from 'react';
import AreaBook from '@/components/ZepyurArea/AreaBook';
import GallerySlider from '@/components/EmblaCarousel/GallerySlider';
import PartnersSlider from '@/components/EmblaCarousel/PartnersSlider';
import PageLoader from '@/components/PageLoader/PageLoader';
import SearchBlock from '@/components/SearchBlock/SearchBlock';
import HomeMobileSlider from '@/components/EmblaCarousel/HomeMobileSlider';

export default function HomePage() {
  const t = useTranslations();

  const [selectedArea, setSelectedArea] = useState<string | null>(null);
  const [lands, setLands] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    async function fetchLands() {
      setIsLoading(true);
      try {
        const res = await fetch('https://admin.zepyur.am/api/getLands', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        if (!res.ok) {
          throw new Error('Failed to fetch lands');
        }
        const data = await res.json();
        console.log('Fetched lands:', data?.lands);
        setLands(data?.lands || []);
      } catch (error: any) {
        console.error(error.message || 'Unknown error');
      } finally {
        setIsLoading(false);
      }
    }

    if (lands.length === 0) {
      fetchLands();
    }
  }, []);

  const handleSvgClick = (value: unknown) => {
    setSelectedArea(value as string);
  };

  const onClose = () => {
    setSelectedArea(null);
  };

  if (isLoading) {
    return <PageLoader />;
  }

  return (
    <div className='home_page'>
      <div className='banner_wrapp'>
      <div className='area_section'>
        <div className='zepyur_area'>
          <ZepyurSvg lands={lands} handleClick={handleSvgClick} />
        </div>
        <div className='home_mobile_slider'>
          <HomeMobileSlider />
        </div>
      </div>
      <SearchBlock />
      </div>
      <AreaBook selectedArea={selectedArea} onClose={onClose} />
      <div className='main_description'>
        <div className='custom_container'>
          <div className='desc'>{t('home.mainDescription1')}</div>
          <div className='desc'>{t('home.mainDescription2')}</div>
          <div className='main_grid mt-[50px] grid grid-cols-3 gap-[15px]'>
            <div className='grid_block'>
              <div className='block_title'>{t('mainGrid.107house')}</div>
              <div className='block_desc'>
                {t('mainGrid.blockdesc1')}
                <br />
                <br />
                {t('mainGrid.blockdesc2')}
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
              <div className='block_title'>{t('mainGrid.45townhouse')}</div>
              <div className='block_desc'>
                {t('mainGrid.blockdesc3')}
                <br />
                <br />
                {t('mainGrid.blockdesc4')}
              </div>
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
              <div className='block_title'>{t('mainGrid.45townhouse')}</div>
              <div className='block_desc'>
                {t('mainGrid.blockdesc5')}
                <br />
                <br />
                {t('mainGrid.blockdesc6')}
              </div>
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
          {t('home.communityAmenities')}
        </div>
        <ComunitySlider />
        <Link href="/community" className='more_btn'>{t('home.showMore')}</Link>
      </div>
      <div className='choose_section'>
        <div className='section_title'>
          {t('home.chooseYourHome')}
        </div>
        <ChooseSlider />
        <Link href="/community" className='more_btn'>{t('home.showMore')}</Link>
      </div>
      <div className='layout_section'>
        <div className='section_title'>
          {t('home.layoutOptions')}
        </div>
        <LayoutSlider />
      </div>
      <div className='amenties_section'>
        <div className='section_title'>
          {t('home.amenties')}
        </div>
        <AmentiesSlider />
        <Link href="/community" className='more_btn'>{t('home.showMore')}</Link>
      </div>
      <div className='gallery_section'>
        <div className='section_title'>
          {t('home.gallery')}
        </div>
        <GallerySlider />
        <Link href="/gallery" className='more_btn'>{t('home.showMore')}</Link>
      </div>
      <div className='partners_section'>
        <div className='section_title'>
          {t('home.partners')}
        </div>
        <PartnersSlider />
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