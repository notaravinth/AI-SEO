import circular from '../assets/circular-thing.png'
import conical from '../assets/conical-thing.png'
import graph1 from '../assets/graph1.png'
import graph2 from '../assets/graph2.png'

export default function Features() {
  return (
    <section className="bg-black pt-5 text-white">
      <h2 className="text-center text-3xl font-medium">
        Harness the power of AI, making <br />search engine optimization intuitive <br />and effective for all skill levels.
      </h2>
      <div className="grid grid-cols-12 gap-3 px-24 pt-8">
        <div className="col-span-4 rounded-2xl border border-white/10 p-8 text-center items-center justify-center">
        <div className='flex  items-center justify-center'>
            <img src={circular}/>
        </div>
        <h2 className='font-bold'>SEO Goal Setting</h2>
        <p className='pt-3'>Helps you set and achieve SEO <br /> goals with guided assistance.</p>
        </div>
        <div style={{ backgroundImage: `url(${graph1})` }} className='h-100 w-full col-span-8 border border-white/10 rounded rounded-3xl bg-gradient-to-br from-[#1a0b2e] to-[#0a0a0a]'>
          <div className='absolute px-8 py-8 pt-60'>
            <h2 className='font-bold'>User-friendly dashboard</h2>
            <p className='pt-3'>Perform complex SEO audits and <br />optimizations with a single click.</p>
          </div>
        </div>
        <div style={{ backgroundImage: `url(${graph2})` }}className='w-full col-span-8 border border-white/10 rounded rounded-3xl bg-gradient-to-br from-[#1a0b2e] to-[#0a0a0a]'>
          <div className='absolute px-8 py-8 pt-67'>
            <h2 className='font-bold'>User-friendly dashboard</h2>
            <p className='pt-3'>Perform complex SEO audits and <br />optimizations with a single click.</p>
          </div>
        </div>
         <div className="col-span-4 rounded-2xl border border-white/10 p-8 text-center">
        <div className='flex justify-center text-center'>
            <img src={conical}/>
        </div>
        <h2 className='font-bold'>Smart Keyword Generator</h2>
        <p className='pt-3'>Automatic suggestions and <br />the best keywords to target.</p>
        </div>
      </div>
    </section>
  )
}