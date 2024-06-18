import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Skills from './Components/Skills/Skills'
import Footer from './Components/Footer/Footer'
import Contact from './Components/Contact/Contact'
import Projects from './Components/Projects/Projects'

function App() {
  return (
    <>
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
