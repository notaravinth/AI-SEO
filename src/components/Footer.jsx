import React from 'react'
import logo from '../../public/navbar-logo.png'
import { Instagram, InstagramIcon, Twitter, TwitterIcon, Youtube, YoutubeIcon } from 'lucide-react'

const footerLinks = [
    {
        title:"Product",
        links:["Features, Integration, Updates, FAQ, Pricing"]
    },
     {
        title:"Company",
        links:["About, Blog, Careers, Manifesto, Press, Contract"]
    },
     {
        title:"Resources",
        links:["Examples, Community, Guides, Docs, Press"]
    },
     {
        title:"legal",
        links:["Privacy, Terms, Security"]
    },
]

const Footer = () => {
  return (
    <footer className="bg-black text-white py-20 px-10 sm:px-20 border-t border-white/10">
        <div className='grid grid-cols-[800px_150px_150px_150px_150px]'>
            <div className='grid grid-row'>
            <div className='flex gap-3 items-center'>
            <img src={logo} alt="" className='w-10 h-10'/>
            <p>AI Startup kit</p>
            </div>
            <div className='flex mt-60 gap-10'>
            <InstagramIcon className='text-gray-600 hover:text-white cursor-pointer'/>
            <TwitterIcon className='text-gray-600 hover:text-white cursor-pointer'/>
            <YoutubeIcon className='text-gray-600 hover:text-white cursor-pointer'/>
            </div> 
            </div>
            <div className='flex flex-col gap-5'>
                <h1 className='py-1'>Product</h1>
                <p className='text-gray-600 cursor-pointer hover:text-white'>Features</p>
                <p className='text-gray-600 cursor-pointer hover:text-white'>Integration</p>
                <p className='text-gray-600 cursor-pointer hover:text-white'>Updates</p>
                <p className='text-gray-600 cursor-pointer hover:text-white'>FAQ</p>
                <p className='text-gray-600 cursor-pointer hover:text-white'>Pricing</p>
            </div>
             <div className='flex flex-col gap-5'>
                <h1 className='py-1'>Company</h1>
                <p className='text-gray-600 cursor-pointer hover:text-white'>About</p>
                <p className='text-gray-600 cursor-pointer hover:text-white'>Blog</p>
                <p className='text-gray-600 cursor-pointer hover:text-white'>Career</p>
                <p className='text-gray-600 cursor-pointer hover:text-white'>Manifesto</p>
                <p className='text-gray-600 cursor-pointer hover:text-white'>Press</p>
                <p className='text-gray-600 cursor-pointer hover:text-white'>Contract</p>
            </div>
             <div className='flex flex-col gap-5'>
                <h1 className='py-1'>Resources</h1>
                <p className='text-gray-600 cursor-pointer hover:text-white'>Examples</p>
                <p className='text-gray-600 cursor-pointer hover:text-white'>Community</p>
                <p className='text-gray-600 cursor-pointer hover:text-white'>Guide</p>
                <p className='text-gray-600 cursor-pointer hover:text-white'>Docs</p>
                <p className='text-gray-600 cursor-pointer hover:text-white'>press</p>
            </div>
             <div className='flex flex-col gap-5'>
                <h1 className='py-1'>Product</h1>
                <p className='text-gray-600 cursor-pointer hover:text-white'>Privacy</p>
                <p className='text-gray-600 cursor-pointer hover:text-white'>terms</p>
                <p className='text-gray-600 cursor-pointer hover:text-white'>Security</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer
