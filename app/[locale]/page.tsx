'use client'
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { EmblaOptionsType } from 'embla-carousel'
import EmblaCarousel from '@/components/EmblaCarousel/EmblaCarousel';
import '../globals.css'

export default function HomePage() {
  const t = useTranslations('home');

  const OPTIONS: EmblaOptionsType = { align: 'start' }
  const SLIDE_COUNT = 6
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

  return (
    <div>
      <h1>{t('title')}</h1>
      <Link href="/" locale="am">Հայերեն</Link>
      <Link href="/" locale="en">English</Link>

      <EmblaCarousel slides={SLIDES} options={OPTIONS} />

      <Link href="/contact">{t('contact')}</Link>
    </div>
  );
}