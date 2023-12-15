import React from 'react'
import './about.scss'
import { motion } from 'framer-motion'

const About = () => {
  return (


    <motion.div className='about'
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7 }}
    >
    <h1 className='title'>O MNIE</h1>
      <p className='param'>Firma Marek Dobrzyl z powodzeniem od prawie 20 lat realizuje najbardziej wymagające zlecenia w branży Remontowo-Budowlanej. 
        Na podstawie gotowych projektów wykańczamy z najwiekszą starannością i dbałością o szczegóły. To w nich tkwi diabeł ;) 
        Doświadczenie zdobyte na rynku przekłada się na jakośc wykonanych prac i zaufanie naszych klientów, 
        Co otwiera drogi do pozyskania nowych. Bardzo się z tego faktu cieszymy, jednocześnie zapraszamy do współpracy 
      </p>
    </motion.div>

  )
}

export default About