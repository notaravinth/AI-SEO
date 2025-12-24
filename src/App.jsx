import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Developers from './components/Developers'
import About from './components/About'
import Elevate from './components/Elevate'
import Clients from './components/Clients'
import Pricing from './components/Pricing'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App = () => {
  return (
    <section>
      <Navbar />
      <Hero/>
      <Developers/>
      <About/>
      <Elevate/>
      <Clients/>
      <Pricing/>
      <Contact/>
      <Footer/>
    </section>
  )
}

export default App
