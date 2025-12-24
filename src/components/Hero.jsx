import React from 'react'

const Hero = () => {
  return (
    <div className='pt-50 px text-center  py-50 bg-radial from-purple-950 to-black'>
        <div className='border rounded-full border-gray-500 max-w-max mx-auto px-3 py-1 flex gap-2 bg-black'>
        <span className='border rounded-full text-black bg-purple-500 px-1'>
            New
        </span>
        <h2 className='text-purple-500'>
            Latest Integration Just Arrived 
        </h2>
        </div>
        <div className='flex items-center justify-center mt-5 font-medium'>
            <h1 className='text-white text-8xl'> 
                Boost your <br /> <span className='bg-gradient-to-b from-white to-purple-400 bg-clip-text text-transparent'>rankings with AI</span>
            </h1>
        </div>
        <p className='text-white mt-8 text-xl'>Elevate your site's visibilty effortlessly with AI, where <br /> smart technology meets user-friendly SEO tools</p>
        <div className=''>
            <button className='bg-white border-rounded rounded-xl    cursor-pointer mt-5 px-2 py-2'>
                <span className='text-black'>Start for free</span>
            </button>
        </div>
        <div className=''>
            <img src="/graphs.png" alt="" className='-mt-10 [mask-image:linear-gradient(to_bottom,black_20%,transparent_80%)]' />
            <div></div>
        </div>
    </div>
  )
}

export default Hero
