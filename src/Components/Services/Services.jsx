import React from 'react'
import "./services.scss"

const Services = () => {
  return (
    <div className='about'>
      <h2>USŁUGI</h2>
      <div className='services'>
        <div className='box'>
            <img src="" alt="" />
            <h3 className='title'>USŁUGI WYKOŃCZENIOWE</h3>
            <ul>
              <li>Kafelkowanie i Montaż Spieków</li>
              <li>Sufity Podwieszane</li>
              <li>Zabudowy Gipsowo-Kartonowe</li>
              <li>Gładzie Szpachlowe</li>
              <li>Tapetowanie</li>
              <li>Malowanie</li>
            </ul>
        </div>
        <div className='box'>
            <img src="" alt="" />
            <h3 className='title'>Usługi Budowlane</h3>
            <ul>
              <li>Struktury Ścienne</li>
              <li>Wylewki Samopoziomujące</li>
            </ul>
        </div>
        <div className='box'>
            <img src="" alt="" />
            <h3 className='title'>Usługi Instalacyjne</h3>
            <ul>
              <li>Instalacje Wodno - Kanalizacyjne</li>
              <li>Ogrzewanie Podłogowe</li>
              <li>Instalacje Elektryczne</li>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Services