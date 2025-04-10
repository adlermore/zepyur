import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

export default function HomePage() {
  const t = useTranslations('home');
  return (
    <div>
      <h1>{t('title')}</h1>
      <Link href="/" locale="am">Հայերեն</Link>
      <Link href="/" locale="en">English</Link>

      <Link href="/contact">{t('contact')}</Link>
    </div>
  );
}