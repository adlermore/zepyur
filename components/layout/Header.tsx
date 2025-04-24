'use client'
import React, { useEffect, useState } from 'react'
import { Twirl as Hamburger } from 'hamburger-react'

function Header() {

  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    if (document.body.classList.contains('menu_opened')) {
      setOpen(false)
    }
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.body.classList.add('menu_opened');
    } else {
      document.body.classList.remove('menu_opened');
      document.body.style.overflow = "visible";
    }

  }, [isOpen]);

  return (
    <header className='header'>
      <div className='' >

        <div className={isOpen ? 'menu-open ' : 'menu-close'}>

        </div>

        <div className="hidden">
          <Hamburger
            toggled={isOpen}
            toggle={setOpen}
            size={22}
            direction='right'
            color="#fff"
          />
        </div>
      </div>
    </header>
  )
}

export default Header