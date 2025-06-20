'use client'
import Image from 'next/image'
import { useSearchParams, useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import homesBaner from '@/public/images/homesBaner.png'
import Iconfilter from '@/public/icons/Iconfilter'
import IconChecked from '@/public/icons/IconChecked'

const fetchHomes = async (filters: any, page: number) => {

  return new Promise<{ id: number; title: string; price: number; rooms: number }[]>(resolve => {
    setTimeout(() => {
      resolve(
        Array.from({ length: 6 }, (_, i) => ({
          id: i + 1 + (page - 1) * 6,
          title: `Home #${i + 1 + (page - 1) * 6}`,
          price: 100000 * (i + 1),
          rooms: (i % 3) + 1,
        }))
      )
    }, 700)
  })
}

const ROOMS = [
  { label: '1 room', value: '1' },
  { label: '2 room', value: '2' },
  { label: '3 room', value: '3' },
]

const LAND_AREAS = [
  { label: 'up to 50 m2', value: '0-50' },
  { label: '50-100 m2', value: '50-100' },
  { label: '100-150 m2', value: '100-150' },
  { label: '150-200 m2', value: '150-200' },
]

const RESIDENTIAL_AREAS = [
  { label: 'up to 50 m2', value: '0-50' },
  { label: '50-100 m2', value: '50-100' },
  { label: '100-150 m2', value: '100-150' },
  { label: '150-200 m2', value: '150-200' },
]

const PAYMENT_FORMS = [
  { label: 'cash', value: 'cash' },
  { label: 'mortgage', value: 'mortgage' },
]

const MIN_PRICE = 0
const MAX_PRICE = 1000000

function Homes() {
  const searchParams = useSearchParams()
  const router = useRouter()

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
  const [homes, setHomes] = useState<any[]>([])
  const [loading, setLoading] = useState(false)
  const [hasMore, setHasMore] = useState(true)

  // Prefill from search params on mount
  useEffect(() => {
    // (Optional: Add prefill from searchParams if needed)
  }, [])

  // Fetch homes on filters/page change
  useEffect(() => {
    let isCancelled = false
    setLoading(true)
    fetchHomes(selected, page).then(newHomes => {
      if (!isCancelled) {
        setHomes(prev =>
          page === 1 ? newHomes : [...prev, ...newHomes]
        )
        setHasMore(newHomes.length > 0)
        setLoading(false)
      }
    })
    return () => {
      isCancelled = true
    }
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
  }

  const applyFilters = () => {
    setPage(1)
  }

  const loadMore = () => setPage(p => p + 1)

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
        <div className='homes_container'>
          <div className='filter_block'>
            <form
              onSubmit={e => {
                e.preventDefault()
                applyFilters()
              }}
              className="filters_form"
            >
              <div className="filter_section">
                <span className="filter_label">Price</span>
                <div className="price_slider">
                  <label>
                    Up to ${' '}
                  </label>
                  <input
                    type="number"
                    min={MIN_PRICE}
                    max={selected.priceRange[1]}
                    value={selected.priceRange[0]}
                    onChange={e => onPriceRangeChange(e, 0)}
                  />
                  <span> - </span>
                  <label>
                    From ${' '}
                    <input
                      type="number"
                      min={selected.priceRange[0]}
                      max={MAX_PRICE}
                      value={selected.priceRange[1]}
                      onChange={e => onPriceRangeChange(e, 1)}
                    />
                  </label>
                </div>
              </div>
              <div className="filter_section">
                <span className="filter_label">Rooms</span>
                {ROOMS.map(opt => (
                  <label key={opt.value}>
                    <input
                      type="checkbox"
                      checked={selected.rooms.includes(opt.value)}
                      onChange={() => onCheckboxChange('rooms', opt.value)}
                    />
                    {opt.label}
                  </label>
                ))}
              </div>
              <div className="filter_section">
                <span className="filter_label">Land Area</span>
                {LAND_AREAS.map(opt => (
                  <label key={opt.value}>
                    <input
                      type="checkbox"
                      checked={selected.landArea.includes(opt.value)}
                      onChange={() => onCheckboxChange('landArea', opt.value)}
                    />
                    {opt.label}
                  </label>
                ))}
              </div>
              <div className="filter_section">
                <span className="filter_label">Residential Area</span>
                {RESIDENTIAL_AREAS.map(opt => (
                  <label key={opt.value}>
                    <input
                      type="checkbox"
                      checked={selected.residentialArea.includes(opt.value)}
                      onChange={() => onCheckboxChange('residentialArea', opt.value)}
                    />
                    {opt.label}
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
            {loading && page === 1 ? (
              <div className="loading">Fetching homes result...</div>
            ) : (
              <>
                <div className="homes_list">
                  {homes.length === 0 && !loading ? (
                    <div>No homes found</div>
                  ) : (
                    homes.map(home => (
                      <div className="home_card" key={home.id}>
                        <div className="home_title">{home.title}</div>
                        <div className="home_price">${home.price.toLocaleString()}</div>
                        <div className="home_rooms">{home.rooms} rooms</div>
                      </div>
                    ))
                  )}
                </div>
                {loading && page > 1 && (
                  <div className="loading">Loading more...</div>
                )}
                {hasMore && !loading && (
                  <button className="load_more_btn" onClick={loadMore}>
                    Load More
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