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

function Footer() {
  const t = useTranslations();

  return (
    <div className='footer'>
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
            <Link href='/about'>{t('footer.about.faq')}</Link>
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
            <Link href='/gallery'>{t('footer.complex.event')}</Link>
            <Link href='/gallery'>{t('footer.complex.gallery')}</Link>
            <Link href='/gallery'>{t('footer.complex.calendar')}</Link>
            <Link href='/gallery'>{t('footer.complex.reservation')}</Link>
            <Link href='/gallery'>{t('footer.complex.support')}</Link>
          </div>

          <div className='footer_line inline'>
            <div>
              <div className='footer_title'>{t('footer.latest.title')}</div>
              <Link className='block' href='/'>{t('footer.latest.announcements')}</Link>
              <Link className='block' href='/'>{t('footer.latest.news')}</Link>
              <Link href='/'>{t('footer.latest.process')}</Link>
            </div>
            <div>
              <div className='footer_title secount'>{t('footer.contacts.title')}</div>
              <span>{t('footer.contacts.address')}</span>

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
            <Link href='/'><IconFb /></Link>
            <Link href='/'><IconInsta /></Link>
            <Link href='/'><IconYoutube /></Link>
            <Link href='/'><IconWhatsapp /></Link>
            <Link href='/'><IconTelegram /></Link>
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