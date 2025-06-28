'use client'
import React, { useEffect, useState } from 'react'
import { Twirl as Hamburger } from 'hamburger-react'
import "@/styles/header.scss"
import Image from 'next/image';
import headerLogo from '@/public/images/header_logo.png'
import { usePathname, useRouter } from 'next/navigation';
import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';

function Header() {

  const [isOpen, setOpen] = useState(false);

  const pathname = usePathname();
  const router = useRouter();
  const currentLocale = pathname.split('/')[1];
  const t = useTranslations();

  const switchLocale = (locale: string) => {
    const segments = pathname.split('/');
    segments[1] = locale;
    const newPath = segments.join('/') || '/';
    router.replace(newPath);
  };


  useEffect(() => {
    if (document.body.classList.contains('menu_opened')) {
      setOpen(false)
    }
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.body.classList.add('menu_opened');
    } else {
      document.body.classList.remove('menu_opened');
      document.body.style.overflow = "visible";
    }

  }, [isOpen, pathname]);

  return (
    <header className='header'>
      <div className='cover_container'>
        <div className='header_inner'>
          <div className='header_logo'>
            <Link href='/' className='z-20 mobile:mx-auto'>
              <Image
                width={258}
                height={65}
                src={headerLogo}
                alt="Ricardo portrait"
                priority={true}
                unoptimized
              />
            </Link>
          </div>
          <div className={isOpen ? 'menu-open menu_wrapper ' : 'menu-close menu_wrapper'}>
            <div className='header_menu'>
              <ul className='menu_list'>
                <li className='menu_item'>
                  <Link href="/about" className='menu_link'>{t('menu.about')}</Link>
                </li>
                <li className='menu_item'>
                  <Link href="/homes" className='menu_link'>{t('menu.homes')}</Link>
                </li>
                <li className='menu_item'>
                  <Link href="/amenities" className='menu_link'>{t('menu.amenities')}</Link>
                </li>
                <li className='menu_item disabled'>
                  <Link href="/zepyurComplex" className='menu_link'>{t('menu.complex')}</Link>
                </li>
                <li className='menu_item'>
                  <Link href="/gallery" className='menu_link'>{t('menu.gallery')}</Link>
                </li>
                <li className='menu_item disabled'>
                  <Link href="/" className='menu_link menu_btn'>{t('menu.community')}</Link>
                </li>
                <li className='menu_item disabled'>
                  <Link href="/" className='menu_link'>{t('menu.news')}</Link>
                </li>
                <li className='menu_item'>
                  <Link href="/contact" className='menu_link'>{t('menu.contacts')}</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className='lg_block'>
            <button
              onClick={() => switchLocale('am')}
              className={currentLocale === 'am' ? 'active' : ''}
            >
              ՀԱՅ
            </button>
            <span className='lg_decor'></span>
            <button
              onClick={() => switchLocale('en')}
              className={currentLocale === 'en' ? 'active' : ''}
            >
              ENG
            </button>
          </div>
          <div className="hamburger_block">
            <Hamburger
              toggled={isOpen}
              toggle={setOpen}
              size={22}
              direction='right'
              color="#fff"
            />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header