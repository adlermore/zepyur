import IconClose from '@/public/icons/IconClose'
import React, { useEffect, useRef, useState } from 'react'
import '@/styles/book.scss'
import Image from 'next/image'
import z01type from '@/public/images/z01type.png'
import z02type from '@/public/images/z02type.png'
import SimpleAreaSlider from '../EmblaCarousel/SimpleAreaSlider'
import IconSleepRoom from '@/public/icons/IconSleepRoom'
import IconRoomWhash from '@/public/icons/IconRoomWhash'
import IconCar from '@/public/icons/IconCar'
import successImg from '@/public/images/successImg.png';
import Link from 'next/link'
import { useTranslations } from 'next-intl';

const AreaBook: React.FC<{ selectedArea: any; onClose: () => void }> = ({ selectedArea, onClose }) => {

  const t = useTranslations();

  const steps = [
    {
      key: "step1",
      content: (nextStep: () => void, prevStep: () => void, step: number) => (
        <div className='step_1'>
          <div className='book_title'>{t('book.chose')}</div>
          <div className='book_type'>
            <div className='area_number'>{selectedArea}</div>
            <span></span>
            <div className='title'>{t('book.options')}</div>
          </div>
          <div className='type_line'>
            {[z01type, z02type].map((img, idx) => (
              <div className='type_item' key={idx}>
                <div className='image'>
                  <Image
                    src={img}
                    alt="type1"
                    className="w-full h-auto"
                    unoptimized
                    width={112}
                    height={42}
                  />
                </div>
                <div className='type_desc'>
                  {t('book.area')} <br />
                  <span> 350.3</span>{t('book.sqm')} <br />
                  {t('book.liveArea')} <br />
                  <span> 92.6</span>{t('book.sqm')} <br />
                  <ul>
                    <li>{t('book.bedroom')} (x2)</li>
                    <li>{t('book.bathroom')} (x1)</li>
                    <li>{t('book.guestRoom')}</li>
                    <li>{t('book.ketchen')}</li>
                    <li>{t('book.parking')} (x2)</li>
                    <li>{t('book.beckarea')}</li>
                  </ul>
                  <div className='price'>
                    <span>52,918,447 ֏</span>
                  </div>
                </div>
                <button className='select_type' onClick={nextStep}>{t('book.more')}</button>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      key: "step2",
      content: (nextStep: () => void, prevStep: () => void, step: number) => (
        <div className='step_2 second_container'>
          <div className='book_type second_line'>
            <div className='area_number'>{selectedArea}</div>
            <Image
              src={z01type}
              alt="type1"
              unoptimized
              width={112}
              height={42}
            />
          </div>
          <div className='area_slider'>
            <SimpleAreaSlider />
          </div>
          <div className='property_line'>
            <div className='property_item areaSize'>
              <div>
                350.3 | 129.6
              </div>
              <span className='text-[#5B5D2C]'>{t('book.sqm')}</span>
            </div>
            <div className='property_item'>
              x3 <IconSleepRoom />
              x2 <IconRoomWhash />
              x2 <IconCar />
            </div>
          </div>
          <div className='step_desc'>
            {t('book.desc')}
            <br />
          </div>
          <button className='second_step_btn' onClick={nextStep}>
            {t('book.reserveYourHome')}
          </button>
        </div>
      ),
    },
    {
      key: "step3",
      content: (nextStep: () => void, prevStep: () => void, step: number) => (
        <div className='step_3'>
          <div className='book_title'>{t('book.chose')}</div>
          <div className='book_type'>
            <div className='area_number'>{selectedArea}</div>
            <span></span>
            <div className='title'>{t('book.options')}</div>
          </div>
          <div className='property_line third_line'>
            <div className='property_item areaSize'>
              <div>
                350.3 | 129.6
              </div>
              <span className='text-[#5B5D2C]'>{t('book.sqm')}</span>
              <div className='price'>58,743,689 <span>֏</span></div>
            </div>
          </div>
          <div className='mt-[40px] text-[13px] text-center px-[30px] step_3_desc'>
            {t('book.thanksDesc')}
          </div>
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
            <div className='step_footer'>
              {t('book.bookFooter')}
            </div>
          </div>
        </div>
      ),
    },
    {
      key: "step4",
      content: (_nextStep: () => void, prevStep: () => void, step: number) => (
        <div className='step_4'>
          <div className='last_image' >
            <Image
              src={successImg}
              alt="type1"
              unoptimized
              width={156}
              height={135}
            />
          </div>
          <div className='main_title'>{t('book.congrats')}</div>
          <div className='second_title'>{selectedArea}- {t('book.reserved')}</div>
          <div className='description'>
            {t('book.successInfo')}
          </div>
          <div className='button_line'>
            <button className='last_back' onClick={prevStep}>
              {t('book.back')}
            </button>
          </div>

          <div className='step_footer'>
            {t('book.bookFooter')}
          </div>
        </div>
      ),
    },
  ];

  const containerRef = useRef<HTMLDivElement>(null);


  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setStep(0);
        onClose();
      }
    };

    if (selectedArea) {
      document.addEventListener('mousedown', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [selectedArea]);

  const [step, setStep] = useState(0);
  const [fade, setFade] = useState(true);

  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    contact: '',
    email: '',
    message: ''
  });

  const handleChange = (e: { target: { name: any; value: any } }) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    // Handle form submission logic
    nextStep();
  };

  const goToStep = (n: number) => {
    setFade(false);
    setTimeout(() => {
      setStep(n);
      setFade(true);
    }, 250); 
  };

  const nextStep = () => {
    if (step < steps.length - 1) goToStep(step + 1);
  };

  const prevStep = () => {
    if (step > 0) goToStep(step - 1);
  };

  return (
    <div className={`area_book ${selectedArea ? "active" : ""}`}>
      <div className='book_container' ref={containerRef}>
        <div className='book_inner'>
          <button className='close_book' onClick={() => {
            setStep(0);
            onClose();
          }}>
            <IconClose />
          </button>
          <div className={`book_step book_fade ${fade ? "book_fade-in" : "book_fade-out"}`}>
            {steps[step].content(nextStep, prevStep, step)}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AreaBook