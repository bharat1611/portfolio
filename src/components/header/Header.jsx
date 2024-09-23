import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assests/me4.jpg'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header id = "head">
      <div className="container header__container">

        <h5>Hey there, I'm</h5>
        <h1>Bharat Upadhyay</h1>
        <h5 className= "text-light">A Software Developer from India</h5>
        <CTA/>
        <HeaderSocials/>
        <div className='me'>
          <img src = {ME} alt = ""/>
        </div>
        <a href = "#contact" className='scroll__down'>Scroll Down</a>

      </div>
    </header>
  )
}

export default Header
