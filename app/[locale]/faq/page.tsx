'use client'

import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { useMessages } from 'next-intl';
import Image from 'next/image';
import faqimage from '@/public/images/faqimage.png';

export default function FAQPage() {

  const t = useTranslations();
  const messages = useMessages();
  const faqs = (messages.faq?.questions ?? []) as { q: string; a: string }[];
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="relative  antialiased">
      <div className='banner_img'>
        <Image
          src={faqimage}
          priority
          alt='faq Banner'
          fill
          style={{ objectFit: 'cover' }}
          unoptimized
        />
        <div className='custom_container'>
          <h1>{t('faq.title')}</h1>
        </div>
      </div>

      <main className="relative custom_container flex flex-col justify-center overflow-hidden">
        <div className="w-full max-w-2xl mx-auto px-4 md:px-6 py-[60px] ">
          {/* Accordion component */}
          <div className="divide-slate-200">
            {faqs.map((faq, idx) => {
              const isOpen = expandedIndex === idx;
              return (
                <div key={idx} className="py-2">
                    <button
                      type="button"
                      className="flex items-center cursor-pointer border-[#D9D9D9] rounded-[5px]  px-[15px] py-[15px] bg-[#FBFCFF] border-1 justify-between w-full text-left font-semibold"
                      onClick={() => toggle(idx)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-text-${idx}`}
                    >
                      <span>{faq.q}</span>
                      <svg
                        className="fill-indigo-500 shrink-0 ml-8"
                        width="16"
                        height="16"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          y="7"
                          width="16"
                          height="2"
                          rx="1"
                          className={`transform origin-center transition duration-200 ease-out ${isOpen ? '!rotate-180' : ''}`}
                        />
                        <rect
                          y="7"
                          width="16"
                          height="2"
                          rx="1"
                          className={`transform origin-center rotate-90 transition duration-200 ease-out ${isOpen ? '!rotate-180' : ''}`}
                        />
                      </svg>
                    </button>
                  <div
                    id={`faq-text-${idx}`}
                    role="region"
                    aria-labelledby={`faq-title-${idx}`}
                    className={`grid text-sm  p-[20px] pt-[5px] text-slate-600 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100 py-2' : 'grid-rows-[0fr] opacity-0'
                      }`}
                  >
                    <div className="overflow-hidden">
                      <p className="pb-3 whitespace-pre-line">{faq.a}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
}
