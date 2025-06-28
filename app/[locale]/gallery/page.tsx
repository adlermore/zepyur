'use client'

import Image, { StaticImageData } from 'next/image'
import React, { useEffect } from 'react'
import galleryBanner from '@/public/images/galleryBanner.png'
import galler1 from '@/public/images/gallery/gallery1.png'
import galler2 from '@/public/images/gallery/gallery2.png'
import galler3 from '@/public/images/gallery/gallery3.png'
import galler4 from '@/public/images/gallery/gallery4.png'
import galler5 from '@/public/images/gallery/gallery5.png'
import galler6 from '@/public/images/gallery/gallery6.png'
import { Fancybox } from '@fancyapps/ui'
import '@fancyapps/ui/dist/fancybox/fancybox.css'
import { useTranslations } from 'next-intl'

function Gallery() {
  useEffect(() => {
    Fancybox.bind('[data-fancybox="gallery"]', {});

    return () => {
      Fancybox.destroy();
    };
  }, []);
  const images: StaticImageData[] = [galler1, galler2, galler3];
  const images2: StaticImageData[] = [galler4, galler5, galler6];

  const t = useTranslations('gallery');
  
  return (
    <div className='amenties_page pb-[40px]'>
      <div className='banner_img'>
        <Image
          src={galleryBanner}
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
            {t('desc1')}
          </div>
          <div className='gallery_section'>
            <div className='gallery_container'>
              <div className='section_title'>{t('overview')}</div>
              <div className='section_desc text-center'>
                {t('desc2')}
              </div>
              <div className="gallery_grid">
                {images.map((img, i) => (
                  <a
                    key={i}
                    href={img.src}
                    data-fancybox="gallery"
                    className="image_block relative block w-full h-[300px]"
                  >
                    <Image
                      src={img}
                      alt={`gallery-${i}`}
                      fill
                      style={{ objectFit: 'cover' }}
                      unoptimized
                    />
                  </a>
                ))}
              </div>
            </div>
            <div className='gallery_container'>
              <div className='section_title'>{t('events')}</div>
              <div className='section_desc text-center'>
                {t('desc3')}
              </div>
              <div className="gallery_grid reverse">
                {images2.map((img, i) => (
                  <a
                    key={i}
                    href={img.src}
                    data-fancybox="gallery"
                    className="image_block relative block w-full h-[300px]"
                  >
                    <Image
                      src={img}
                      alt={`gallery-${i}`}
                      fill
                      style={{ objectFit: 'cover' }}
                      unoptimized
                    />
                  </a>
                ))}
              </div>
            </div>
            <div className='gallery_container'>
              <div className='section_title'>{t('activities')}</div>
              <div className='section_desc text-center'>
                {t('desc4')}
              </div>
              <div className="gallery_grid">
                {images.map((img, i) => (
                  <a
                    key={i}
                    href={img.src}
                    data-fancybox="gallery"
                    className="image_block relative block w-full h-[300px]"
                  >
                    <Image
                      src={img}
                      alt={`gallery-${i}`}
                      fill
                      style={{ objectFit: 'cover' }}
                      unoptimized
                    />
                  </a>
                ))}
              </div>
            </div>
            <div className='gallery_container'>
              <div className='section_title'>{t('media')}</div>
              <div className='section_desc text-center'>
                {t('desc5')}
              </div>
              <div className="gallery_grid reverse">
                {images2.map((img, i) => (
                  <a
                    key={i}
                    href={img.src}
                    data-fancybox="gallery"
                    className="image_block relative block w-full h-[300px]"
                  >
                    <Image
                      src={img}
                      alt={`gallery-${i}`}
                      fill
                      style={{ objectFit: 'cover' }}
                      unoptimized
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Gallery