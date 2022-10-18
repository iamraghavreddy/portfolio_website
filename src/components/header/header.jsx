import React from 'react'
import "./header.css"
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'
import ME from '../../assets/me1.png'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h4>Hello I'm</h4>
        <h1>Raghav</h1>
        <h4 className="text-light">Web Developer & Designer</h4>
        <CTA/>
        <HeaderSocials/>
        <div className='me'>
          <img src={ME} alt="me"/>
        </div>
        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header