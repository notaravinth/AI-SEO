import { BarChart3, BellRing, LayoutDashboard, ListCheck, MousePointerClick, Sheet, Sparkle, Target, WandSparkles } from 'lucide-react'
import React from 'react'

const featuresList = [
    {
        title: "User-friendly dashboard",
        description: "Perform complex SEO audits and optimizations with a single click.",
        icon: <LayoutDashboard className='w-5 h-5'/>
    },
      {
        title: "Visual reports",
        description: "Visual insights into your site’s performance.",
        icon: <BarChart3 className='w-5 h-5'/>
    },
      {
        title: "Smart Keyword Generator",
        description: "Automatic suggestions and the best keywords to target.",
        icon: <Sparkle className='w-5 h-5'/>
    },
      {
        title: "Content evaluation",
        description: "Simple corrections for immediate improvemens.",
        icon: <ListCheck className='w-5 h-5'/>
    },
      {
        title: "SEO goal setting",
        description: "Helps you set and achieve SEO goals with guided assistance.",
        icon: <Target className='w-5 h-5'/>
    },
      {
        title: "Automated alerts",
        description: "Automatic notifications about your SEO health, including quick fixes.",
        icon: <BellRing className='w-5 h-5'/>
    },
      {
        title: "Link Optimization Wizard",
        description: "Guides you through the process of creating and managing links.",
        icon: <WandSparkles className='w-5 h-5'/>
    },
      {
        title: "One-click optimization",
        description: "Perform complex SEO audits and optimizations with a single click.",
        icon: <MousePointerClick className='w-5 h-5'/>
    },
      {
        title: "Competitor reports",
        description: "Provides insights into competitors’ keyword strategies and ranking.",
        icon: <Sheet className='w-5 h-5'/>
      }
]

const Elevate = () => {
  return (
    <section className='bg-[radial-gradient(circle_at_top_left,#1a0b2e_10%,#000000_100%)] pb-15'>
      <h1 className='text-white text-6xl mt-10 px-20 py-13'>Elevate your <br />SEO efforts</h1>
      <div className='grid grid-cols-3 text-white px-20'>
        {featuresList.map((feature,index)=>(
            <div key={index} className='flex flex-col'>
                <div className='flex gap-1 mt-5'>
                    {feature.icon}
                    <h3 className='font-bold line-clamp-2'>{feature.title}</h3>
                </div>
                <p className='text-gray-300 py-3 text-sm max-w-[280px] leading-relaxed'>{feature.description}</p>
            </div>
        ))}
      </div>
    </section>
  )
}

export default Elevate
