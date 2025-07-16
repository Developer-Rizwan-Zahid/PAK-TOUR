import React from 'react'
import Navbar from './Navbar'
import Design from '../assets/design.png'
import Girl from '../assets/girl.png'
import redline from '../assets/redline.png'
import {  Play } from 'lucide-react'

const Hero = () => {
  return (
    <div style={{
      backgroundImage: `url(${Design})`,
      backgroundSize: 'cover',
      height: '672px',
      width: '100%',
      backgroundRepeat: 'no-repeat'
    }}  className="min-h-screen w-full">
      <Navbar />
      <div className='max-w-6xl mx-auto flex gap-10 md:gap-0 flex-col md:flex-row items-center justify-center px-6 mt-7'>
        <div className='md:space-y-7 space-y-4 lg:w-[630px] lg:h-[535px]'>
          <h3 className='font-bold text-[#013220] text-sm'>Peaceful Destinations Around The World</h3>
          <div className='relative'>
            <h1 className='lg:text-7xl text-5xl text-[#00008B] font-bold lg:w-[545px] volkhov-bold 
            z-50'>Explore the world, discover joy, and live completely</h1>
            <img src={redline} alt="" className='absolute top-10 lg:top-33 lg:-w-[385px] hidden sm:block lg:h-[12px] lg:left-60' />
          </div>
          <p className='text-[#SE6282] lg:w-[477px] poppins-meduim'>Discover breathtaking destinations with PIA Tours. Explore culture, nature, and adventure across Pakistan and beyond. Your perfect journey begins here—easy, affordable, unforgettable.</p>
          <div className='flex gap-7'>
            <button className='bg-green-900 text- text-white py-1 px-3 rounded-md'>Seacrh out more</button>
            <div className='flex gap-2 items-center'>
              <span className='bg-[#DF6951] rounded-full p-3'><Play fill='white' className='text-white w-3 h-3'/></span> 
              <p className='text-[#688077]'>Play Demo</p>
            </div>
          </div>
        </div>
        <img src={Girl} alt="" className='lg:w-[783px] lg:h-[764px] ' />
      </div>

    </div>
  )
}

export default Hero
