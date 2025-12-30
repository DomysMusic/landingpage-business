import Image from 'next/image'
import React from 'react'

const Home = () => {
  return (
    <section className='flex flex-col justify-center items-center p-16'>
      <div className='max-w-2xl text-center'>
        <h2 className='text-white text-4xl font-bold'>Where <span className='text-[#AEA1EA]'>Everything You Need</span> Comes <span className='text-[#AEA1EA]'>Together</span></h2>

        <p className='text-gray-500 text-2xl'>Craft, develop, and deploy stunning, cohesive web interfaces that propel  your brand's growth through engaging user experiences and consistent design.</p>
      </div>

      <div className='mt-10'>
        <Image alt='Image' src='/Rectangle 1.png'  
        width={800}
        height={360}/>
      </div>

      <div className='flex gap-8 mt-5'>
        <button className='px-10 py-3 bg-violet-400 text-white rounded-md'>Get Start</button>
        <button className='px-10 py-3 bg-white text-black rounded-md'>Learn More</button>
      </div>
    </section>
  )
}

export default Home