import { useState } from 'react'
import Navbar from './components/Navbar'
import Main from './components/Main'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Property from './components/Property'

function App() {

  return (
    <div>
      <Navbar />
      <Main />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Property />
      
    </div>
  )
}

export default App
