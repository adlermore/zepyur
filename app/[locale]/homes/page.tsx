'use client'
import Image from 'next/image'
import { useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import homesBaner from '@/public/images/homesBaner.png'
import IconClose from '@/public/icons/IconClose'

const filterSubCategory = [
  'women',
  'men',
  'kids',
  'accessories'
]

const filterType = [
  'earring',
  'ring',
  'set',
  'pendant',
  'cross',
  'necklace',
  'chain',
  'hard_bracelet',
  'chain_bracelet',
  'bracelets',
  'accessories',
  'pendant',
  'watches',
  'brooch',
  'bars',
  'book',
  'other',
]

const filterFineness = [
  'g999',
  'g995',
  'g958',
  'g916',
  'g900',
  'g875',
  'g750',
]


const filterOrigin = [
  'armenian',
  'imported',
]

// colors=yellow,white,red,rose,two_tone,three_tone
const filterColors = [
  'gold_plated',
  'silver',
  'pink'
]


function Homes() {
  const searchParams = useSearchParams()

  const [selected, setSelected] = React.useState<{
    propertyType: string
    rooms: string
    priceRange: string
  }>({
    propertyType: '',
    rooms: '',
    priceRange: '',
  })

  useEffect(() => {
    const prefill = {
      propertyType: searchParams.get('propertyType') || '',
      rooms: searchParams.get('rooms') || '',
      priceRange: searchParams.get('priceRange') || '',
    }
    setSelected(prefill)
  }, [])


  const [activeFilter, setActiveFilter] = useState(false);

  const initialSubcategory = searchParams.get('subcategory') || '';
  const initialType = searchParams.get('type') || '';

  const [filters, setFilters] = useState({
    subcategory: initialSubcategory,
    type: initialType,
    origin: [],
    fineness: [],
    colors: [],
    stoneLine: []
  });

  useEffect(() => {
    if (initialSubcategory || initialType) {
      setFilters(prevFilters => ({
        ...prevFilters,
        subcategory: initialSubcategory,
        type: initialType,
      }));
    }
  }, [initialSubcategory, initialType]);

  const handleFilterChange = (filterType, value) => {
    setFilters(prevFilters => {
      if (filterType === 'origin' || filterType === 'fineness' || filterType === 'colors' || filterType === 'stoneLine') {
        const currentValues = prevFilters[filterType];
        if (currentValues.includes(value)) {
          return { ...prevFilters, [filterType]: currentValues.filter(item => item !== value) };
        } else {
          return { ...prevFilters, [filterType]: [...currentValues, value] };
        }
      } else {
        return { ...prevFilters, [filterType]: value };
      }
    });
  };

  const clearAllFilters = () => {
    setFilters({
      subcategory: '',
      type: '',
      origin: [],
      fineness: [],
      colors: [],
      stoneLine: []
    });
    setActiveFilter(false)
  };

  const handleFilterToggle = () => {
    setActiveFilter(!activeFilter)
  }

  const handleCloseFilter = () => {
    setActiveFilter(false)
  }



  return (
    <div className='homes_page'>
      <div className='banner_img'>
        <Image
          src={homesBaner}
          priority
          alt='Homes Banner'
          fill
          style={{ objectFit: 'cover' }}
          unoptimized
        />
        <div className='custom_container'>
          <h1>Homes</h1>
        </div>
      </div>
      <div className='homes_container'>
        <div className='product_page pb-[50px] laptopHorizontal:pb-[30px]'>
          <div className='cover_container !mt-[150px] tablet:!mt-[140px] tablet:text-[18px] laptopHorizontal:!mt-[120px] text-[24px] laptopHorizontal:text-[22px] laptop:!pl-[30px] laptopHorizontal:!pl-[280px] uppercase !pl-[335px]'>
            PRODUCTS
          </div>
          <button className='filter_toggle' onClick={handleFilterToggle}>Filter</button>
          <div className='cover_container laptop:flex-col-reverse relative flex gap-[25px] !mt-[70px] laptopHorizontal:!mt-[40px]'>
            <div className={`filter_block border border-1 border-[#F8F6F5] p-[25px] max-w-[290px] h-fit w-full ${activeFilter ? 'filter_opened' : ''}`}>
              <div className='mb-[30px]' >
                <div className='text-xl  inline_categoryy text-[#333333] mb-20'>Category <span className='icon_closee' onClick={handleCloseFilter}><IconClose /></span></div>
                {filterSubCategory.map((filter, index) => (
                  <div key={index} className="mb-[10px] filter_line radio_line">
                    <label htmlFor={`filter1${filter}`}>
                      <input type="radio" name='filterSubCategory'
                        checked={filters.subcategory === filter}
                        onChange={() => handleFilterChange('subcategory', filter)}
                        id={`filter1${filter}`} />
                      <span className="square_block">
                        <span className='opacity-0 duration-300'></span>
                      </span>
                      <span className="check_label ">{filter.charAt(0).toUpperCase() + filter.slice(1)}</span>
                    </label>
                  </div>
                ))}
              </div>
              <div className='mb-[30px]' >
                <div className='text-xl  text-[#333333] mb-20'>Type</div>
                {filterType.map((filter, index) => (
                  <div key={index} className="mb-[10px] filter_line radio_line">
                    <label htmlFor={`filter2${filter}`}>
                      <input type="radio" name='filterSubCategoryType'
                        checked={filters.type === filter}
                        onChange={() => handleFilterChange('type', filter)}
                        id={`filter2${filter}`} />
                      <span className="square_block">
                        <span className='opacity-0 duration-300'></span>
                      </span>
                      <span className="check_label ">{filter.charAt(0).toUpperCase() + filter.slice(1)}</span>
                    </label>
                  </div>
                ))}
              </div>
              <div className='mb-[30px]' >
                <div className='text-xl  text-[#333333] mb-20'>Origin</div>
                {filterOrigin.map((filter, index) => (
                  <div key={index} className="mb-[10px] filter_line">
                    <label htmlFor={`filter1${index}`}>
                      <input type="checkbox"
                        checked={filters.origin.includes(filter)}
                        onChange={() => handleFilterChange('origin', filter)}
                        id={`filter1${index}`} />
                      <span className="square_block">
                        <span className='opacity-0 duration-300'></span>
                      </span>
                      <span className="check_label ">{filter.charAt(0).toUpperCase() + filter.slice(1)}</span>
                    </label>
                  </div>
                ))}
              </div>
              <div className='mb-[30px]' >
                <div className='text-xl  text-[#333333] mb-20'>Fineness</div>
                {filterFineness.map((filter, index) => (
                  <div key={index} className="mb-[10px] filter_line">
                    <label htmlFor={`filterFienness${index}`}>
                      <input type="checkbox"
                        checked={filters.fineness.includes(filter)}
                        onChange={() => handleFilterChange('fineness', filter)}
                        id={`filterFienness${index}`} />
                      <span className="square_block">
                        <span className='opacity-0 duration-300'></span>
                      </span>
                      <span className="check_label ">{filter.charAt(0).toUpperCase() + filter.slice(1)}</span>
                    </label>
                  </div>
                ))}
              </div>
              <div className='mb-[30px]' >
                <div className='text-xl text-[#333333] mb-[25px]'>Color</div>
                <div className='filter_color_line'>
                  {filterColors.map((filter, index) => (
                    <div key={index} className="mb-[10px] ">
                      <label htmlFor={`filterColor${index}`}>
                        <input type="checkbox"
                          checked={filters.colors.includes(filter)}
                          onChange={() => handleFilterChange('colors', filter)}
                          id={`filterColor${index}`} />
                        <span className={`square_block ${filter}`}>
                          <span className=' duration-300'></span>
                        </span>
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              <div className='flex w-full btn_line'>
                <button className='clear_btn ' onClick={clearAllFilters}>Clear</button>
              </div>
            </div>
            <div className='w-full'>
              {/* <Suspense fallback={<PageLoader />}>
                <ProductList filters={filters} />
              </Suspense> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Homes