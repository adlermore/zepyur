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
          <h1>Contact Us</h1>
        </div>
      </div>
      <div className='custom_container'>
        <div className='contact_grid'>
          <div className='contact_block'>
            <div className='icon'><IconPhone /></div>
            <div className='title'>Have A Question </div>
            <div className='value'>+374 00 00 00 00</div>
          </div>
          <div className='contact_block'>
            <div className='icon'><IconMail /></div>
            <div className='title'>Need Support </div>
            <div className='value'>zepyur@gmail.com</div>
          </div>
          <div className='contact_block'>
            <div className='icon'><IconPhone /></div>
            <div className='title'>Have A Question </div>
            <div className='value'>+374 00 00 00 00</div>
          </div>
        </div>
        <div className='form_container_line'>
          <div className='form_container'>
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
              <button type="submit" className='submit_btn'>SUBMIT</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contacts