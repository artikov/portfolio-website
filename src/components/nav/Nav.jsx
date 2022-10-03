import React from 'react'
import './nav.css'
import {BiHome} from 'react-icons/bi'
import {BiUser} from 'react-icons/bi'
import {BiBook} from 'react-icons/bi'
import {BiNetworkChart} from 'react-icons/bi'
import {BiChat} from 'react-icons/bi'
import { useState } from 'react'


const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href='#index' 
        onClick={() => setActiveNav('#')}
        className={activeNav === '#' ? 'active' : ''}><BiHome /></a>
      <a href='#about' 
        onClick={() => setActiveNav('#about')} 
        className={activeNav === '#about' ? 'active' : ''}><BiUser /></a>
      <a href='#experience'
        onClick={() => setActiveNav('#experience')} 
        className={activeNav === '#experience' ? 'active' : ''}><BiBook /></a>
      <a href='#services'
        onClick={() => setActiveNav('#services')} 
        className={activeNav === '#services' ? 'active' : ''}><BiNetworkChart /></a>
      <a href='#contact'
        onClick={() => setActiveNav('#contact')} 
        className={activeNav === '#contact' ? 'active' : ''}><BiChat /></a>
    </nav>
  )
}

export default Nav