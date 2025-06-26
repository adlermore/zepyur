'use client'
import Image from 'next/image'
import { useSearchParams, useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import homesBaner from '@/public/images/homesBaner.png'
import Iconfilter from '@/public/icons/Iconfilter'
import IconChecked from '@/public/icons/IconChecked'
import '@/styles/homes.scss'
import { Range } from 'react-range'
import apartament1 from '@/public/images/apartament1.png'
import IconClose from '@/public/icons/IconClose'
import Link from 'next/link'

const API_URL = 'https://admin.zepyur.am/api/searchLands'

const ROOMS = [
  { label: '1 room', value: '1' },
  { label: '2 room', value: '2' },
  { label: '3 room', value: '3' },
]

const LAND_AREAS = [
  { label: 'up to 50 m2', value: '1' },   // 1: ≤ 50
  { label: '50-100 m2', value: '2' },     // 2: ≤ 100
  { label: '100-150 m2', value: '3' },    // 3: ≤ 150
  { label: '150-200 m2', value: '4' },    // 4: ≤ 200
  { label: '200+ m2', value: '5' },       // 5: > 200
]

const RESIDENTIAL_AREAS = [
  { label: 'up to 50 m2', value: '1' },
  { label: '50-100 m2', value: '2' },
  { label: '100-150 m2', value: '3' },
  { label: '150-200 m2', value: '4' },
  { label: '200+ m2', value: '5' },
]

const PAYMENT_FORMS = [
  { label: 'cash', value: 'cash' },
  { label: 'mortgage', value: 'mortgage' },
]

const MIN_PRICE = 0
const MAX_PRICE = 1000000
const STEP = 10000
const PAGE_SIZE = 9

type LandItem = {
  id: number
  area: number
  price: number
  status: number
  apartment: {
    id: number
    room_count: number
    area: number
    price: number
    images: string[]
    type: {
      id: number
      name: string
    }
  }
  total_area: number
  total_price: number
}

async function fetchHomes(filters: any, page: number): Promise<{ lands: LandItem[], total: number }> {
  // Build query string
  const params = new URLSearchParams()
  if (filters.rooms.length) filters.rooms.forEach((v: string) => params.append('rooms[]', v))
  if (filters.landArea.length) filters.landArea.forEach((v: string) => params.append('land_area[]', v))
  if (filters.residentialArea.length) filters.residentialArea.forEach((v: string) => params.append('residential_area[]', v))
  // type is omitted as your UI does not support it yet
  if (filters.priceRange[0] > MIN_PRICE) params.append('price_from', filters.priceRange[0].toString())
  if (filters.priceRange[1] < MAX_PRICE) params.append('price_to', filters.priceRange[1].toString())
  params.append('offset', ((page - 1) * PAGE_SIZE).toString())
  params.append('limit', PAGE_SIZE.toString())
  // Payment form is not in API, so it's ignored

  const url = `${API_URL}?${params.toString()}`
  const res = await fetch(url)
  if (!res.ok) {
    throw new Error('Failed to fetch')
  }
  const data = await res.json()
  return { lands: data.lands ?? [], total: data.total ?? 0 }
}


function Homes() {
  const [activeFilter, setActiveFilter] = useState<boolean>(false)
  const [selected, setSelected] = useState<{
    priceRange: [number, number]
    rooms: string[]
    landArea: string[]
    residentialArea: string[]
    paymentForm: string[]
  }>({
    priceRange: [MIN_PRICE, MAX_PRICE],
    rooms: [],
    landArea: [],
    residentialArea: [],
    paymentForm: [],
  })

  const [page, setPage] = useState(1)
  const [homes, setHomes] = useState<LandItem[]>([])
  const [total, setTotal] = useState(0)
  const [loading, setLoading] = useState(false)
  const [hasMore, setHasMore] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Fetch homes on filters/page change
  useEffect(() => {
    let isCancelled = false
    setLoading(true)
    setError(null)
    fetchHomes(selected, page)
      .then(({ lands, total }) => {
        if (!isCancelled) {
          setHomes(prev => (page === 1 ? lands : [...prev, ...lands]))
          setTotal(total)
          setHasMore((page - 1) * PAGE_SIZE + lands.length < total)
          setLoading(false)
        }
      })
      .catch(() => {
        if (!isCancelled) {
          setError('Failed to load homes')
          setLoading(false)
        }
      })
    return () => { isCancelled = true }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selected, page])

  // Handlers
  const onPriceRangeChange = (e: React.ChangeEvent<HTMLInputElement>, idx: 0 | 1) => {
    const val = Number(e.target.value)
    setSelected(prev => {
      const next = [...prev.priceRange] as [number, number]
      next[idx] = val
      return { ...prev, priceRange: next }
    })
  }

  const onCheckboxChange = (type: keyof typeof selected, value: string) => {
    setSelected(prev => {
      const arr = prev[type] as string[]
      return {
        ...prev,
        [type]: arr.includes(value)
          ? arr.filter(v => v !== value)
          : [...arr, value],
      }
    })
  }

  const resetFilters = () => {
    setSelected({
      priceRange: [MIN_PRICE, MAX_PRICE],
      rooms: [],
      landArea: [],
      residentialArea: [],
      paymentForm: [],
    })
    setPage(1)
    setActiveFilter(false)
  }

  const applyFilters = () => {
    setPage(1)
  }

  const loadMore = () => setPage(p => p + 1)

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
      <div className='custom_container'>
        <button className='filter_toggle' onClick={handleFilterToggle}>Filter</button>

        <div className='homes_container'>

          <div className={`filter_block ${activeFilter ? 'filter_opened' : ''}`}>
            <form
              onSubmit={e => {
                e.preventDefault()
                applyFilters()
              }}
              className="filters_form"
            >
              <div className="filter_section">
                <div className='text-xl filter_close text-[#333333] mb-20'>Filter <span className='icon_closee' onClick={handleCloseFilter}><IconClose /></span></div>
                <span className="filter_label">Price</span>
                <div className="price_slider">
                  <div className="price_inputs">
                    <label>
                      Up to ${' '}
                      <input
                        type="number"
                        min={MIN_PRICE}
                        max={selected.priceRange[1]}
                        value={selected.priceRange[0]}
                        onChange={(e) => onPriceRangeChange(e, 0)}
                      />
                    </label>
                    <label>
                      From ${' '}
                      <input
                        type="number"
                        min={selected.priceRange[0]}
                        max={MAX_PRICE}
                        value={selected.priceRange[1]}
                        onChange={(e) => onPriceRangeChange(e, 1)}
                      />
                    </label>
                  </div>
                  <Range
                    step={STEP}
                    min={MIN_PRICE}
                    max={MAX_PRICE}
                    values={selected.priceRange}
                    onChange={(values) =>
                      setSelected((prev) => ({
                        ...prev,
                        priceRange: values as [number, number],
                      }))
                    }
                    renderTrack={({ props, children }) => (
                      <div
                        {...props}
                        className="range_track"
                        style={{
                          ...props.style,
                          height: '6px',
                          width: '100%',
                          background: `linear-gradient(to right, #ccc ${selected.priceRange[0] / MAX_PRICE * 100}%, #000 ${selected.priceRange[0] / MAX_PRICE * 100}%, #000 ${selected.priceRange[1] / MAX_PRICE * 100}%, #ccc ${selected.priceRange[1] / MAX_PRICE * 100}%)`,
                          borderRadius: '4px',
                          marginTop: '10px'
                        }}
                      >
                        {children}
                      </div>
                    )}
                    renderThumb={({ props }) => {
                      const { key, ...rest } = props
                      return (
                        <div
                          key={key}
                          {...rest}
                          className="range_thumb"
                          style={{
                            ...rest.style,
                            height: '20px',
                            width: '20px',
                            backgroundColor: '#000',
                            borderRadius: '50%',
                            boxShadow: '0 0 3px rgba(0,0,0,0.3)',
                          }}
                        />
                      )
                    }}
                  />
                </div>
              </div>
              <div className="filter_section">
                <span className="filter_label">Rooms</span>
                {ROOMS.map(opt => (
                  <label key={opt.value} className='checkbox_label'>
                    <input
                      type="checkbox"
                      checked={selected.rooms.includes(opt.value)}
                      onChange={() => onCheckboxChange('rooms', opt.value)}
                    />
                    <span className="square_block">
                      <span className='square_check'><IconChecked /></span>
                    </span>
                    <span className='checkbox_label_text'>
                      {opt.label}
                    </span>
                  </label>
                ))}
              </div>
              <div className="filter_section">
                <span className="filter_label">Land Area</span>
                {LAND_AREAS.map(opt => (
                  <label key={opt.value} className='checkbox_label'>
                    <input
                      type="checkbox"
                      checked={selected.landArea.includes(opt.value)}
                      onChange={() => onCheckboxChange('landArea', opt.value)}
                    />
                    <span className="square_block">
                      <span className='square_check'><IconChecked /></span>
                    </span>
                    <span className='checkbox_label_text'>
                      {opt.label}
                    </span>
                  </label>
                ))}
              </div>
              <div className="filter_section">
                <span className="filter_label">Residential Area</span>
                {RESIDENTIAL_AREAS.map(opt => (
                  <label key={opt.value} className='checkbox_label'>
                    <input
                      type="checkbox"
                      checked={selected.residentialArea.includes(opt.value)}
                      onChange={() => onCheckboxChange('residentialArea', opt.value)}
                    />
                    <span className="square_block">
                      <span className='square_check'><IconChecked /></span>
                    </span>
                    <span className='checkbox_label_text'>
                      {opt.label}
                    </span>
                  </label>
                ))}
              </div>
              <div className="filter_section">
                <span className="filter_label">Payment Form</span>
                {PAYMENT_FORMS.map(opt => (
                  <label key={opt.value} className='checkbox_label'>
                    <input
                      type="checkbox"
                      checked={selected.paymentForm.includes(opt.value)}
                      onChange={() => onCheckboxChange('paymentForm', opt.value)}
                    />
                    <span className="square_block">
                      <span className='square_check'><IconChecked /></span>
                    </span>
                    <span className='checkbox_label_text'>
                      {opt.label}
                    </span>
                  </label>
                ))}
              </div>
              <div className="filter_buttons">
                <button type="button" className="reset_btn" onClick={resetFilters}>
                  <Iconfilter />
                  Reset filters
                </button>
              </div>
            </form>
          </div>
          <div className='homes_results'>
            {error && <div className="error">{error}</div>}
            {loading && page === 1 ? (
              <div className="homes_loading">
                <span className="loading_spinner"></span>
              </div>
            ) : (
              <>
                <div className="homes_list">
                  {homes.length === 0 && !loading ? (
                    <div>No homes found</div>
                  ) : (
                    homes.map((home, i) => (
                      <Link href={`/home/${home.id}`} className="home_card" key={`home_card_${home.id + i}`}>
                        <div className='home_image_container'>
                          <div className='home_image'>
                            <Image
                              src={apartament1}
                              alt={`Home ${home.id}`}
                              fill
                              style={{ objectFit: 'cover' }}
                              unoptimized
                              className="home_image"
                            />
                          </div>
                          <div className='card_content'>
                            <div className='cart_title'>Price</div>
                            <div className='cart_price'>
                              <div className="home_price">
                                {home.total_price.toFixed(2)}  AMD
                              </div>
                              <div className='old_price'>
                                {home.total_price + 15000}  AMD
                              </div>
                            </div>
                            <div className='mortage_line'>
                              <div className='title'>Mortgage</div>
                              <div className='desc'>since 300 000 AMD / month</div>
                            </div>
                            <div className='home_type'>
                              <span className='type_name'>{home.apartment?.type?.name || 'Apartment'}</span>
                              <span className='type_name'>{home.apartment?.area} m²</span>
                              <span className='type_name'>
                                {home.apartment?.room_count || '-'} rooms
                              </span>
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))
                  )}
                </div>
                {hasMore && homes.length > 0 && (
                  <button className="load_more_btn more_btn" onClick={loadMore}>
                    {loading ? <span className="loading_spinner"></span> : 'Load More'}
                  </button>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Homes