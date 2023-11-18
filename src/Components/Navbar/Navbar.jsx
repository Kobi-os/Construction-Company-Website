import {FaBars, FaTimes} from 'react-icons/fa';
import { useRef } from 'react';
import './navbar.scss';
import React from 'react'

const Navbar = () => {
  const navRef = useRef(null);

  const showNav = () => {
    navRef.current.classList.toggle('responsiveNav');
  }
  return (
      <header>
        <img src="" width="50px" height="50px" alt="" />
        <nav ref={navRef}>
          <a href="#" className='links'>O MNIE</a>
          <a href="#" className='links'>USŁUGI</a>
          <a href="#" className='links'>REALIZACJE</a>
          <a href="#" className='contact'>KONTAKT</a>
        <button className='navBtn navCloseBtn' onClick={showNav}>
            <FaTimes/>
        </button>
        <button className='navBtn navOpenBtn' onClick={showNav}>
          <FaBars/>
        </button>
        </nav>

      </header>
      
  )
}

export default Navbar