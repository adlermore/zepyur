import { useTranslations } from 'next-intl';
import React from 'react'

function Contacts() {
    const t = useTranslations('contacts');
  return (
    <div>
      <div className='title_text'>{t('title')}</div>
      <div className='description'>{t('description')}</div>
    </div>
  )
}

export default Contacts