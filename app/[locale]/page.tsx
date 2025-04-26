'use client'
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { EmblaOptionsType } from 'embla-carousel'
import EmblaCarousel from '@/components/EmblaCarousel/EmblaCarousel';

export default function HomePage() {
  const t = useTranslations('home');

  const OPTIONS: EmblaOptionsType = { align: 'start' }
  const SLIDE_COUNT = 6
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys())


  const SLIDE_COUNT2 = 7
  const SLIDES2 = Array.from(Array(SLIDE_COUNT2).keys())

  return (
    <div>
      <h1>{t('title')}</h1>Test

      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      <div className='custom_slide'>
        <EmblaCarousel slides={SLIDES2} options={OPTIONS} />
      </div>

      <Link href="/contact">{t('contact')}</Link>
    </div>
  );
}