import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/img/me3.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header id='index'>
      <div className='container header__container'>
        <h5>Hello I'm</h5>
        <h1>Oybek Artikov</h1>
        <h5 className='text-light'>Software Engineer</h5>
        <CTA />
        <HeaderSocials />

        <div className='me'>
          <img src={ME} alt='Oybek Artikov' className='me-img'></img>
        </div>

        <a href='#contact' className='scroll__down'>Scroll down</a>
      </div>
    </header>
  )
}

export default Header