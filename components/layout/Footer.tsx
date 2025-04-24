'use client'
import React from 'react'

function Footer() {
  return (
    <div className='footer'>
      <div className='custom_container '>
        <div className='flex footer_menu'>

        </div>
        <div className='pt-[16px] mt-[60px] relative laptopHorizontal:mt-[30px]'>
          <div className='flex justify-center text-center items-center gap-20 laptopHorizontal:flex-col'>
            {`Copyright ©  ${new Date().getFullYear()}`}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer