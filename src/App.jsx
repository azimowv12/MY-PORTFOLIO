import React, { useState, useEffect } from 'react'
import Navbar from './components/navbar'
import Herooo from './components/hero'
import Skills from './components/Skill'
import About from './components/About'
import Work from './components/Work'
import Aloqa from './components/Aloqa'
import ScrollToTopButton from './components/Scrool'
import Welcome from './components/Welcome'

export default function App() {
  const [dark, setDark] = useState(false)

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark")   // butun sahifaga dark
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [dark])

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-500">
      <Welcome />

      <header>
        <Navbar dark={dark} setDark={setDark} /> {/* props berildi */}
        <Herooo dark={dark}/>
        <ScrollToTopButton />
      </header>

      <main>
        <About />
        <Skills />
        <Work />
      </main>

      <Aloqa />
    </div>
  )
}
