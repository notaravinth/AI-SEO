import React from 'react'
import acme from '../assets/acme.png'
import apex from '../assets/apex.png'
import celestial from '../assets/celestial.png'
import echo from '../assets/echo.png'
import outside from '../assets/outside.png'
import pulse from '../assets/pulse.png'
import quantum from '../assets/quantum.png'
import twice from '../assets/twice.png'

const companies = [
    { id: 1, src: acme, name: "Acme" },
    { id: 2, src: echo, name: "Echo" },
    { id: 3, src: quantum, name: "Quantum" },
    { id: 4, src: pulse, name: "Pulse" },
    { id: 5, src: outside, name: "Outside" },
    { id: 6, src: apex, name: "Apex" },
    { id: 7, src: celestial, name: "Celestial" },
    { id: 8, src: twice, name: "Twice" },
]

const Developers = () => {
  return (
    <div className='bg-black py-20 px-4 -mt-130'>
      <div className='max-w-6xl mx-auto text-center mb-12'>
        <p className='text-gray-400 text-sm font-medium'>
          Trusted by the world's most innovative teams
        </p>
      </div>
      <div className='max-w-5xl mx-auto grid grid-cols-4 border-white gap-5'>
        {companies.map((company) => (
          <div key={company.id} className='flex items-center justify-center p-8 border border-white rounded-xl '>
            <img src={company.src} alt={company.name}/>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Developers