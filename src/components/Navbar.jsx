import React from 'react'

const Navbar = () => {
  return (
    <nav className='fixed top-0 left-0 w-full px-8 py-5'>
      <div className='flex items-center justify-center gap-10'>
        <div className=''>
            <img src="/navbar-logo.png" alt="Logo" className='w-10 h-10'/>
        </div>
        <div className='center-items space-x-6 text-white border border-gray-600 border-rounded rounded-full px-6 py-3 backdrop-blur-md'>
          <a href="#" className='hover:text-gray-300'>Features</a>  
          <a href="#" className='hover:text-gray-300'>Developers</a>
          <a href="#" className='hover:text-gray-300'>Company</a>
          <a href="#" className='hover:text-gray-300'>Blog</a>
          <a href="#" className='hover:text-gray-300'>Changelog</a>
        </div>
        <button>
          <div className='border border-gray-500 px-1 py-1 rounded-xl'>            
          <div className='text-white border border-purple-500 rounded-xl px-2 py-1 bg-gradient-to-t from-purple-500 to-blue-500 cursor-pointer '>
            <span>
              Join Waitlist
            </span>
          </div>
          </div>
        </button>
      </div>
    </nav>
  )
}

export default Navbar
