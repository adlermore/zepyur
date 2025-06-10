import IconClose from '@/public/icons/IconClose'
import React, { useState } from 'react'
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


const AreaBook: React.FC<{ selectedArea: any; onClose: () => void }> = ({ selectedArea, onClose }) => {

  const steps = [
    {
      key: "step1",
      content: (nextStep: () => void, prevStep: () => void, step: number) => (
        <div className='step_1'>
          <div className='book_title'>ընտրեք ձեր տունը</div>
          <div className='book_type'>
            <div className='area_number'>{selectedArea}</div>
            <span></span>
            <div className='title'>ՏԱՐԲԵՐԱԿՆԵՐ</div>
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
                  Bհողամաս` <br />
                  <span> 350.3</span>քմ <br />
                  բնակելի մակերես` <br />
                  <span> 92.6</span>քմ <br />
                  <ul>
                    <li>ննջասենյակ (x2)</li>
                    <li>սանհանգույց(x1)</li>
                    <li>Հյուրասենյակ</li>
                    <li>խոհանոց</li>
                    <li>կայանատեղ (x2)</li>
                    <li>հետնաբակ</li>
                  </ul>
                  <div className='price'>
                    <span>52,918,447 ֏</span>
                  </div>
                </div>
                <button className='select_type' onClick={nextStep}>MORE</button>
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
              <span className='text-[#5B5D2C]'>քմ</span>
            </div>
            <div className='property_item'>
              x3 <IconSleepRoom />
              x2 <IconRoomWhash />
              x2 <IconCar />
            </div>
          </div>
          <div className='step_desc'>
            Հարմարավետ միջին չափի տուն` նախատեսված ժամանակա-կից ապրելու համար: Ունենալով երեք ննջասենյակ, ընդարձակ հյուրասենյակ և ճկուն խոհանոցային տարածք` այս տունը համա-պատասխանում է ժամանակակից ընտանիքի կարիքներին:
            <br />
          </div>
          <button className='second_step_btn' onClick={nextStep}>
            Reserve your home
          </button>
        </div>
      ),
    },
    {
      key: "step3",
      content: (nextStep: () => void, prevStep: () => void, step: number) => (
        <div className='step_3'>
          <div className='book_title'>ընտրեք ձեր տունը</div>
          <div className='book_type'>
            <div className='area_number'>{selectedArea}</div>
            <span></span>
            <div className='title'>ՏԱՐԲԵՐԱԿ</div>
          </div>
          <div className='property_line third_line'>
            <div className='property_item areaSize'>
              <div>
                350.3 | 129.6
              </div>
              <span className='text-[#5B5D2C]'>քմ</span>
              <div className='price'>58,743,689 <span>֏</span></div>
            </div>
          </div>
          <div className='mt-[40px] text-[13px] text-center px-[30px]'>
            Շնորհակալություն հետաքրքրության համար: Խնդրում ենք լրացնել և ուղարկել ստորև բերված ձևաթուղթը` Ձեր ամրագրումն ավարտելու համար:
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
              in case of further assistnace/guidance needed, please <Link href='/'>contact us</Link>
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
          <div className='main_title'>շնորհավոր</div>
          <div className='second_title'>{selectedArea}-ը վերապահված է ձեզ համար</div>
          <div className='description'>
            Մեր վաճառքի թիմը շուտով կապի մեջ կլինի Ձեզ հետ: Խնդրում ենք ներկայանալ առաջիկա երեք աշխատանքային օրվա ընթացքում և տրամադրել բոլոր անհրաժեշտ փաստաթղթերը` ամրագրման ընթացակարգն ավարտելու համար:
          </div>
          <div className='button_line'>
            <button className='last_back' onClick={prevStep}>
              BACK
            </button>
          </div>

          <div className='step_footer'>
            in case of further assistnace/guidance needed, please <Link href='/'>contact us</Link>
          </div>
        </div>
      ),
    },
  ];

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
    }, 250); // duration matches CSS
  };

  const nextStep = () => {
    if (step < steps.length - 1) goToStep(step + 1);
  };

  const prevStep = () => {
    if (step > 0) goToStep(step - 1);
  };

  return (
    <div className={`area_book ${selectedArea ? "active" : ""}`}>
      <div className='book_container'>
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