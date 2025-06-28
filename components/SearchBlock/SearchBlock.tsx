import IconDown from '@/public/icons/IconDown'
import { useTranslations } from 'next-intl'
import { useRouter } from 'next/navigation'
import React, { useState, useRef } from 'react'

const DROPDOWNS = [
  {
    label: 'Property type',
    options: ['House', 'Apartment', 'Townhouse', 'Villa'],
    key: 'propertyType',
  },
  {
    label: 'Rooms',
    options: ['1', '2', '3', '4+'],
    key: 'rooms',
  },
  {
    label: 'Price Range',
    options: ['$0-100k', '$100k-300k', '$300k-600k', '$600k+'],
    key: 'priceRange',
  },
]

function SearchBlock() {
  const router = useRouter()
  const t = useTranslations('searchBlock')
  const [openedIndex, setOpenedIndex] = useState<null | number>(null)
  const [selected, setSelected] = useState<{ [key: string]: string }>({
    propertyType: '',
    rooms: '',
    priceRange: '',
  })

  // Close dropdowns on outside click
  const wrapperRef = useRef<HTMLDivElement>(null)
  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setOpenedIndex(null)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const handleDropdownToggle = (idx: number) => {
    setOpenedIndex((prev) => (prev === idx ? null : idx))
  }

  const handleSelect = (dropdownKey: string, value: string) => {
    setSelected((prev) => ({
      ...prev,
      [dropdownKey]: value,
    }))
    setOpenedIndex(null)
  }

  const handleSearch = () => {
    console.log('Selected values:', selected)
    const params = new URLSearchParams()

    Object.entries(selected).forEach(([key, value]) => {
      if (value) params.set(key, value)
    })

    const queryString = params.toString()
    router.push(`homes?${queryString}`)

  }

  return (
    <div className='search_block' ref={wrapperRef}>
      <div className='search_inner'>
        {DROPDOWNS.map((dropdown, idx) => (
          <div
            className={`search_dropdown${openedIndex === idx ? ' opened' : ''}`}
            key={dropdown.key}
          >
            <div
              className='drop_title'
              onClick={() => handleDropdownToggle(idx)}
              tabIndex={0}
              role='button'
            >
              <span className='drop_title_text'>
                {selected[dropdown.key] || dropdown.label}
              </span>
              <IconDown />
            </div>
            <div className='drop_list'>
              <ul>
                {dropdown.options.map((option) => (
                  <li
                    className={`drop_item${selected[dropdown.key] === option ? ' selected' : ''
                      }`}
                    key={option}
                    onClick={() => handleSelect(dropdown.key, option)}
                  >
                    {option}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
        <div className='search_button'>
          <button className='search_btn' onClick={handleSearch}>
            {t('button')}
          </button>
        </div>
      </div>
    </div>
  )
}

export default SearchBlock