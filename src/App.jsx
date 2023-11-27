import React from 'react'

import Navbar from './Components/Navbar/Navbar'
import About from './Components/About/About'
import Services from './Components/Services/Services'
import './App.scss'
import Contact from './Components/Contact/Contact'
const App = () => {
  return (
    <div>

        <Navbar/>

        <About/>

        <Services/>

        <Contact/>

    </div>
  )
}

export default App