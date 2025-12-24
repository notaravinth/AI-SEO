import React from 'react'
import grid from '../assets/grid.png'

const Contact = () => {
  return (
    <div className='px-12 relative bg-black py-20'>
      <div className='relative z-10 border rounded-2xl border-gray-800 flex flex-col items-center justify-center bg-black/20 backdrop-blur-[2px] py-20 overflow-hidden' style={{ backgroundImage: `url(${grid})` }}>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-purple-600/40 blur-[100px] rounded-full pointer-events-none -mt-50" />
        <div className="relative z-10 flex flex-col items-center">
          <h1 className='text-white text-6xl text-center font-bold'>
              AI-driven SEO <br />for everyone
          </h1>
          
          <div className='text-center py-3 mt-8'>
            <input type="text" className='text-white border border-gray-400 bg-white/5 rounded-xl w-64 h-10 px-4 focus:outline-none' placeholder='Your Email'/>
            <button className='bg-white border-none h-10 px-6 rounded-xl font-bold -ml-4 cursor-pointer hover:bg-gray-200 transition-colors text-black'>
              Join Waitlist
            </button>
            <br />
            <p className='text-gray-500 py-5'>No credit card required · 7-days free trial</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact