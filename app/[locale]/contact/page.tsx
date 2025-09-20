'use client';
import { useTranslations } from 'next-intl';
import contactsBanner from '@/public/images/contactsBanner.png'
import Image from 'next/image';
import React, { useState } from 'react'
import Link from 'next/link';
import toast from 'react-hot-toast';

function Contacts() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    contact: '',
    email: '',
    message: ''
  });

  const [formOne, setFormOne] = useState({
    fullname: '',
    email: '',
    phone: ''
  });

  const t = useTranslations();

  // handle form one change
  const handleFormOneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormOne({ ...formOne, [e.target.name]: e.target.value });
  };

  // handle form two change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // submit form one
  const handleFormOneSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch('https://admin.zepyur.am/api/contactMe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(formOne),
      });

      if (!res.ok) throw new Error('Something went wrong');
      toast.success('Message sent successfully!');
      setFormOne({ fullname: '', email: '', phone: '' });
    } catch (error: any) {
      toast.error(error.message || 'Failed to send message');
    } finally {
      setLoading(false);
    }
  };

  // submit form two
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch('https://admin.zepyur.am/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          surname: formData.surname,
          email: formData.email,
          phone: formData.contact,
          text: formData.message,
        }),
      });

      if (!res.ok) throw new Error('Something went wrong');
      toast.success('Email sent successfully!');
      setFormData({
        name: '',
        surname: '',
        contact: '',
        email: '',
        message: ''
      });
    } catch (error: any) {
      toast.error(error.message || 'Failed to send email');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='contacts_page relative'>
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
      <div className='relative decor_bg pb-[100px]'>
        <div className='custom_container'>
          {/* Contact Info */}
          <div className='contact_grid'>
            {/* phone */}
            <div className='contact_block'>
              <div className='title'>{t('contacts.question')}</div>
              <Link href={`tel:+37455106100`} className='value'>+374 55 106100</Link>
            </div>
            {/* email */}
            <div className='contact_block'>
              <div className='title'>{t('contacts.support')}</div>
              <Link href={`mailto:info@zepyur.am`} className='value'>info@zepyur.am</Link>
            </div>
            {/* address */}
            <div className='contact_block'>
              <div className='title'>{t('contacts.address')}</div>
              <div className='value'>Yerevan, Armenia</div>
            </div>
          </div>

          {/* Form One */}
          <div className='request_form'>
            <div className='title'>{t('contacts.title1')}</div>
            <form onSubmit={handleFormOneSubmit}>
              <input
                type="text"
                name="fullname"
                placeholder="Full Name"
                value={formOne.fullname}
                onChange={handleFormOneChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formOne.email}
                onChange={handleFormOneChange}
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                value={formOne.phone}
                onChange={handleFormOneChange}
                required
              />
              <button type="submit" className='submit_btn' disabled={loading}>
                {loading ? 'Sending...' : t('contacts.button1')}
              </button>
            </form>
          </div>

          {/* Form Two */}
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
                <button type="submit" className='submit_btn' disabled={loading}>
                  {loading ? 'Sending...' : t('contacts.button2')}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contacts
