import React, { useRef } from 'react'
import "./services.scss"
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Services = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { triggerOnce: true })

  return (
    <div className='content'>
      <h2>USŁUGI</h2>
      <div className='services'>
        <motion.div className='box' 
            initial={{opacity: 0, y: 50}}
            animate={{opacity: 1, y:0}}
            transition={{duration: 1}}
            ref={ref}
            isInView={isInView}>
            <img src="/src/assets/images/paint.png" alt="Paint Roller" height="100px"  className="icon"/>
            <h3 className='title'>Usługi Wykończeniowe </h3>
            <ul className='list'>
              <li>Kafelkowanie i Montaż Spieków</li>
              <li>Sufity Podwieszane</li>
              <li>Zabudowy Gipsowo-Kartonowe</li>
              <li>Gładzie Szpachlowe</li>
              <li>Tapetowanie</li>
              <li>Malowanie</li>
            </ul>
        </motion.div>
        <motion.div className='box'
            initial={{opacity: 0, y: 50}}
            animate={{opacity: 1, y:0}}
            transition={{duration: 1}}
            ref={ref}
            isInView={isInView}>
            <img src="/src/assets/images/construction-hat.png" alt="Builder Helmet" height="100px" className="icon"/>
            <h3 className='title'>Usługi Budowlane</h3>
            <ul className='list'>
              <li>Struktury Ścienne</li>
              <li>Wylewki Samopoziomujące</li>
            </ul>
        </motion.div>
        <motion.div className='box'
            initial={{opacity: 0, y: 50}}
            animate={{opacity: 1, y:0}}
            transition={{duration: 1}}
            ref={ref}
            >
            <img src="/src/assets/images/wrench.png" alt="Wrench"  height="100px" className="icon"/>
            <h3 className='title'>Usługi Instalacyjne</h3>
            <ul className='list'>
              <li>Instalacje Wodno - Kanalizacyjne</li>
              <li>Ogrzewanie Podłogowe</li>
              <li>Instalacje Elektryczne</li>
            </ul>
        </motion.div>
      </div>
    </div>
  )
}

export default Services