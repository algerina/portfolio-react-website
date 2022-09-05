import React from 'react'
import './header.css'
import CTA from './CTA'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Amel Khiri</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA />
      </div>
      
    </header>
  )
}

export default Header