import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Developers from './components/Developers'
import About from './components/About'
import Elevate from './components/Elevate'

const App = () => {
  return (
    <section>
      <Navbar />
      <Hero/>
      <Developers/>
      <About/>
      <Elevate/>
    </section>
  )
}

export default App
