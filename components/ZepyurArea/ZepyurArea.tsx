import React from 'react'
import zepyurArea from '@/public/images/zepyurArea.png'
import Image from 'next/image'

function ZepyurArea() {
  return (
    <div className='zepyur_area h-[800px]'>
      <Image
        src={zepyurArea}
        alt="zepyurArea"
        className="w-full h-auto"
        unoptimized
        fill
        style={{ objectFit: 'cover'  }}
      />
    </div>
  )
}

export default ZepyurArea