'use client'
import React from 'react'
import Image from 'next/image';
import footerLogo from '@/public/images/footerLogo.png'
import Link from 'next/link';
import '@/styles/footer.scss'
import { useTranslations } from 'next-intl';
import IconPhone from '@/public/icons/IconPhone';
import IconMail from '@/public/icons/IconMail';
import IconFb from '@/public/icons/IconFb';
import IconInsta from '@/public/icons/IconInsta';
import IconYoutube from '@/public/icons/IconYoutube';
import IconWhatsapp from '@/public/icons/IconWhatsapp';
import IconTelegram from '@/public/icons/IconTelegram';
import ScrollProgress from '../ScrollToTop';

function Footer() {
  const t = useTranslations();

  return (
    <div className='footer'>
      <ScrollProgress />
      <div className='custom_container'>
        <div className='footer_menu'>
          <div className='footer_line py-[30px] mobile:py-[10px]'>
            <Image
              src={footerLogo}
              alt='footerLogo'
              className='footer_logo'
              priority
              width={142}
              height={150}
            />
          </div>
          <div className='footer_line'>
            <div className='footer_title'>{t('footer.about.title')}</div>
            <Link href='/about'>{t('footer.about.vision')}</Link>
            <Link href='/about'>{t('footer.about.team')}</Link>
            <Link href='/about'>{t('footer.about.partners')}</Link>
            <Link href='/faq'>{t('footer.about.faq')}</Link>
            <Link href='/policy'>{t('footer.about.privacy')}</Link>
            <Link href='/terms'>{t('footer.about.terms')}</Link>
          </div>

          <div className='footer_line'>
            <div className='footer_title'>{t('footer.homes.title')}</div>
            <Link href='/homes'>{t('footer.homes.private')}</Link>
            <Link href='/homes'>{t('footer.homes.townhouse')}</Link>
            <Link href='/homes'>{t('footer.homes.apartment')}</Link>
          </div>

          <div className='footer_line'>
            <div className='footer_title'>{t('footer.amenities.title')}</div>
            <Link href='/amenities'>{t('footer.amenities.supermarket')}</Link>
            <Link href='/amenities'>{t('footer.amenities.foodCourt')}</Link>
            <Link href='/amenities'>{t('footer.amenities.wellness')}</Link>
            <Link href='/amenities'>{t('footer.amenities.arena')}</Link>
            <Link href='/amenities'>{t('footer.amenities.gaming')}</Link>
            <Link href='/amenities'>{t('footer.amenities.cine')}</Link>
          </div>

          <div className='footer_line complex'>
            <div className='footer_title'>{t('footer.complex.title')}</div>
            <Link href='/gallery' className='pointer-events-none !opacity-30'>{t('footer.complex.event')}</Link>
            <Link href='/gallery'>{t('footer.complex.gallery')}</Link>
            {/* <Link href='/gallery'>{t('footer.complex.calendar')}</Link> */}
            <Link href='/'>{t('footer.complex.reservation')}</Link>
            <Link href='/contact'>{t('footer.complex.support')}</Link>
          </div>

          <div className='footer_line inline'>
            <div>
              <div className='footer_title'>{t('footer.latest.title')}</div>
              <Link className='block pointer-events-none !opacity-30' href='/'>{t('footer.latest.announcements')}</Link>
              <Link className='block pointer-events-none !opacity-30' href='/'>{t('footer.latest.news')}</Link>
              <Link href='/' className='pointer-events-none !opacity-30'>{t('footer.latest.process')}</Link>
            </div>
            <div>
              <div className='footer_title secount'>{t('footer.contacts.title')}</div>
              <Link href="https://www.google.com/maps/place/40%C2%B019'07.6%22N+44%C2%B033'13.5%22E/@40.318788,44.553739,829m/data=!3m2!1e3!4b1!4m4!3m3!8m2!3d40.318788!4d44.553739?entry=tts&g_ep=EgoyMDI1MDkxMC4wIPu8ASoASAFQAw%3D%3D&skid=459f0f5e-24f5-442c-bdb3-74b5fbbf1e8b" target='_blank'>{t('footer.contacts.address')}</Link>
              <div className='contact_inline'>
                <Link href='tel:+37455106100' className='footer_phone'>
                  <IconPhone /> {t('footer.contacts.phone')}
                </Link>
                <Link href='mailto:info@zepyur.am' className='footer_email'>
                  <IconMail /> {t('footer.contacts.email')}
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className='foorer_social mt-[50px] mobile:mt-[30px]'>
          <div className='social_list flex justify-center items-center'>
            <Link href='https://www.facebook.com/zepyur.am'><IconFb /></Link>
            <Link href='https://www.instagram.com/zepyur.am'><IconInsta /></Link>
            <Link href='https://youtube.com/@zepyurresidentialarea'><IconYoutube /></Link>
            <Link href='https://wa.me/+37455106100'><IconWhatsapp /></Link>
            {/* <Link href='https://t.me/'><IconTelegram /></Link> */}
            
          </div>
        </div>
        <div className='pt-[16px] mt-[30px] relative laptopHorizontal:mt-[30px]'>
          <div className='flex justify-center text-center items-center gap-20 laptopHorizontal:flex-col'>
            {`Copyright ©  ${new Date().getFullYear()}`}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer