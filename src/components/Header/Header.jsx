/** @format */

import React from 'react'
import CTA from './CTA'
import './Header.css'
import ME from '../../assets/ME.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header id='home'>
      <div className='container header__container'>
        <h5>Hello I'm</h5>
        <h1>Pavlo Ivashkiv</h1>
        <h5 className='text-light'>Full-stack developer</h5>
        <CTA />
        <HeaderSocials />
        <div className='me'>
          <img src={ME} alt='' />
        </div>
        <a href='#contact' className='scroll-down'>
          Scroll Down
        </a>
      </div>
    </header>
  )
}

export default Header
