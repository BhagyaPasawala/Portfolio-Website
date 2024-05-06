import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import About from './components/About'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'

export default function page() {
  return (
    <div className='min-h-[680vh] bg-black overflow-hidden'>
      <div className='dark:bg-black bg-white dark:bg-grid-white/[0.02] bg-grid-black/[0.2] relative overflow-hidden'>
        <div className='max-w-7xl mx-auto p-5 mb-20'>
          <Navbar />
          <HeroSection />
        </div>
        <div className='h-10 xl:h-32 bg-gradient-to-t from-black absolute -bottom-5 left-0 xl:bottom-0 w-full'></div>
      </div>
      <div className='max-w-7xl mx-auto p-5 mt-38 bg-black'>
        <About />
      </div>
      <div className='max-w-7xl mx-auto p-5 mt-38 bg-black'>
        <Projects />
      </div>
      <div className='max-w-7xl mx-auto p-5 mt-38 bg-black'>
        <Experience />
      </div>
      <div className='w-full mx-auto p-5 mt-38 bg-black'>
        <Contact />
      </div>
    </div>
  )
}
