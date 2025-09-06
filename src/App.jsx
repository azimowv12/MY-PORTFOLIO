import React from 'react'
import Navbar from './components/navbar'
import Herooo from './components/hero'
import Skills from './components/Skill'
import About from './components/About'
import Work from './components/Work'
import Aloqa from './components/Aloqa'
import ScrollToTopButton from './components/Scrool'

export default function App() {
  return (
    <div className=''>
      <header>
        <Navbar />
        <Herooo />
        <ScrollToTopButton/>
      </header>
      <main>

        <About />
        <Skills />
        <Work/>
      </main>
      <Aloqa/>
    </div>
  )
}

