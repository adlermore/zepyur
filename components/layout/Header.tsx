'use client'
import React, { useEffect, useState } from 'react'
import { Twirl as Hamburger } from 'hamburger-react'
import "@/styles/header.scss"
import Image from 'next/image';
import headerLogo from '@/public/images/header_logo.png'
import { usePathname } from 'next/navigation';
import { Link } from '@/i18n/navigation';

function Header() {

  const [isOpen, setOpen] = useState(false);
  const pathname = usePathname();
  const currentLocale = pathname.split('/')[1];


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

  }, [isOpen]);

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
          <div className={isOpen ? 'menu-open ' : 'menu-close'}>
            <div className='header_menu'>
              <ul className='menu_list'>
                <li className='menu_item'>
                  <Link href="/about" className='menu_link'>About Us</Link>
                </li>
                <li className='menu_item'>
                  <Link href="/homes" className='menu_link'>Homes</Link>
                </li>
                <li className='menu_item'>
                  <Link href="/" className='menu_link'>Amenities</Link>
                </li>
                <li className='menu_item'>
                  <Link href="/" className='menu_link'>Zepyur Complex</Link>
                </li>
                <li className='menu_item'>
                  <Link href="/" className='menu_link'>Gallery</Link>
                </li>
                <li className='menu_item'>
                  <Link href="/" className='menu_link menu_btn'>COMMUNITY</Link>
                </li>
                <li className='menu_item'>
                  <Link href="/" className='menu_link '>News</Link>
                </li>
                <li className='menu_item'>
                  <Link href="/" className='menu_link '>Contacts</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className='lg_block'>
            <Link href="/" locale="am" className={currentLocale === 'am' ? 'active' : ''}>ՀԱՅ</Link>
            <span className='lg_decor'></span>
            <Link href="/" locale="en" className={currentLocale === 'en' ? 'active' : ''}>ENG</Link>
          </div>
          <div className="hidden">
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