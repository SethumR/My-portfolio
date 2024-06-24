import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Skills from './Components/Skills/Skills'
import Footer from './Components/Footer/Footer'
import Contact from './Components/Contact/Contact'
import Projects from './Components/Projects/Projects'
import Services from './Components/Services/Services'

function App() {
  return (
    <>
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Services/>
      <Projects/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
