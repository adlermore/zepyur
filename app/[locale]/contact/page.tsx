'use client';
import { useTranslations } from 'next-intl';
import contactsBanner from '@/public/images/contactsBanner.png'
import Image from 'next/image';
import React, { useState } from 'react'
import IconPhone from '@/public/icons/IconPhone';
import IconMail from '@/public/icons/IconMail';

function Contacts() {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    contact: '',
    email: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: { target: { name: any; value: any } }) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    // Handle form submission logic
    return
    setLoading(true);
    try {
      const res = fetch('https://admin.zepyur.am/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: formData?.name,
          surname: formData?.surname,
          phone: formData?.contact,
          email: formData?.email,
          message: formData?.message,
          apartment_id: "Z01",
        }),
      });

      const data = res.then(response => response.json());
      console.log('Form submission response:', data);

    } catch (error: any) {
      console.error(error.message || 'Unknown error');
    } finally {
      setLoading(false);
    }
  };

  const t = useTranslations();

  return (
    <div className='contacts_page'>
      <div className='banner_img'>
        <Image
          src={contactsBanner}
          priority
          alt='Homes Banner'
          fill
          style={{ objectFit: 'cover' }}
          unoptimized
        />
        <div className='custom_container'>
          <h1>{t('contacts.mainTitle')}</h1>
        </div>
      </div>
      <div className='custom_container'>
        <div className='contact_grid'>
          <div className='contact_block'>
            <div className='icon'>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={19}
                height={18}
                fill="none"
              >
                <path
                  stroke="#000"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M1.25 3.042c0 7.847 6.361 14.208 14.208 14.208q.531 0 1.053-.038c.399-.03.598-.044.78-.149a.97.97 0 0 0 .368-.396c.091-.189.091-.409.091-.849v-2.582c0-.37 0-.556-.061-.714a.9.9 0 0 0-.254-.364c-.129-.111-.303-.174-.65-.3l-2.94-1.07c-.405-.147-.607-.22-.8-.208a.9.9 0 0 0-.47.167c-.157.111-.267.296-.489.665l-.753 1.255a11.1 11.1 0 0 1-5.5-5.5l1.255-.753c.37-.222.554-.332.665-.49a.9.9 0 0 0 .167-.47c.012-.192-.061-.394-.208-.799l-1.07-2.94c-.126-.347-.189-.521-.3-.65a.9.9 0 0 0-.364-.254C5.82.75 5.634.75 5.264.75H2.682c-.44 0-.66 0-.849.091a.97.97 0 0 0-.396.368c-.105.182-.12.381-.149.78a14 14 0 0 0-.038 1.053"
                />
              </svg>
            </div>
            <div className='title'>{t('contacts.question')}</div>
            <div className='value'>+374 00 00 00 00</div>
          </div>
          <div className='contact_block'>
            <div className='icon'>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={23}
                height={22}
                fill="none"
              >
                <path
                  stroke="#000"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.75 7.333-3.264 1.813c-1.82 1.011-2.73 1.517-3.693 1.715a6.4 6.4 0 0 1-2.586 0c-.963-.198-1.873-.704-3.693-1.715L3.25 7.333m2.933 10.083h10.634c1.026 0 1.54 0 1.932-.2.345-.175.625-.456.801-.8.2-.393.2-.906.2-1.933V7.516c0-1.026 0-1.54-.2-1.932a1.83 1.83 0 0 0-.801-.801c-.392-.2-.906-.2-1.932-.2H6.183c-1.026 0-1.54 0-1.932.2a1.83 1.83 0 0 0-.801.801c-.2.392-.2.906-.2 1.932v6.967c0 1.027 0 1.54.2 1.932.176.345.456.626.801.802.392.2.906.2 1.932.2"
                />
              </svg>
            </div>
            <div className='title'>{t('contacts.support')}</div>
            <div className='value'>zepyur@gmail.com</div>
          </div>
          <div className='contact_block'>
            <div className='icon'> <svg
              xmlns="http://www.w3.org/2000/svg"
              width={23}
              height={22}
              fill="none"
            >
              <path
                fill="#000"
                d="M11.497.685c-4.168 0-7.561 3.393-7.561 7.561 0 7.335 7.135 12.911 7.135 12.911a.69.69 0 0 0 .858 0s7.135-5.576 7.135-12.91c0-4.17-3.398-7.562-7.567-7.562m0 1.375a6.18 6.18 0 0 1 6.192 6.186c0 6-5.433 10.742-6.187 11.384-.749-.64-6.191-5.38-6.191-11.384a6.175 6.175 0 0 1 6.186-6.186"
              />
              <path
                fill="#000"
                d="M11.497 4.81a3.445 3.445 0 0 0-3.435 3.436 3.45 3.45 0 0 0 3.435 3.441c1.89 0 3.441-1.55 3.441-3.44a3.45 3.45 0 0 0-3.44-3.436m0 1.376c1.148 0 2.066.913 2.066 2.06a2.057 2.057 0 0 1-2.066 2.066 2.053 2.053 0 0 1-2.06-2.066c0-1.147.913-2.06 2.06-2.06"
              />
            </svg></div>
            <div className='title'>{t('contacts.address')}</div>
            <div className='value'>Yerevan, Armenia</div>
          </div>
        </div>
        <div className='request_form'>
          <div className='title'>{t('contacts.title1')}</div>
          <form>
            <input
              type="text"
              name="full"
              placeholder="Full Name"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              required
            />
            <button type="submit" className='submit_btn '>{t('contacts.button1')}</button>
          </form>

        </div>
        <div className='form_container_line'>
          <div className='form_container'>
            <div className='contact_title'>{t('contacts.title2')}</div>
            <form onSubmit={handleSubmit}>
              <div className='form_row'>
                <input
                  type="text"
                  name="name"
                  placeholder="Name*"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="surname"
                  placeholder="Surname*"
                  value={formData.surname}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className='form_row'>
                <input
                  type="tel"
                  name="contact"
                  placeholder="📱 contact number*"
                  value={formData.contact}
                  onChange={handleChange}
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="✉️ email*"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <textarea
                name="message"
                placeholder="your remarks/message"
                value={formData.message}
                onChange={handleChange}
              />
              <button type="submit" className='submit_btn'>{t('contacts.button2')}</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contacts