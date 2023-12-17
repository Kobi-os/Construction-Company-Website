import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import About from './Components/About/About'
import Services from './Components/Services/Services'
import './App.scss'
import Contact from './Components/Contact/Contact'
import Slider from './Components/Slider/Slider'
import Gallery from './Components/Gallery/Gallery'

const App = () => {
  return (
    <div>

        <Navbar/>

        <Slider/>

        <About/>

        <Services/>

        <Gallery/>

        <Contact/>

    </div>
  )
}

export default App