import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import About from './Components/About/About'
import Services from './Components/Services/Services'
import './App.scss'
import Contact from './Components/Contact/Contact'
import Slider from './Components/Slider/Slider'
const App = () => {
  return (
    <div>

        <Navbar/>

        <Slider/>

        <About/>

        <Services/>

        <Contact/>

    </div>
  )
}

export default App