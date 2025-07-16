import React from 'react'
import Logo1 from '../assets/logo1.png'
import Logo2 from '../assets/logo2.png'
import Logo3 from '../assets/logo3.png'
import Logo4 from '../assets/logo4.webp'
import Logo5 from '../assets/logo5.png'

const Company = () => {
  return (
    <div>
      <div className='max-w-6xl mx-auto flex flex-wrap w-full items-center md:gap-20 gap-4 justify-center px-6 md:px-0'>
        <img src={Logo1} alt="" className='lg:w-[150px] lg:h-[70px] grayscale hover:grayscale-0' />
          <img src={Logo2} alt="" className='lg:w-[150px] lg:h-[70px] grayscale hover:grayscale-0' />
            <img src={Logo3} alt="" className='lg:w-[150px] lg:h-[70px] grayscale hover:grayscale-0' />
              <img src={Logo4} alt="" className='lg:w-[150px] lg:h-[70px] grayscale hover:grayscale-0' />
                <img src={Logo5} alt="" className='lg:w-[150px] lg:h-[70px] grayscale hover:grayscale-0' />
      </div>
    </div>
  )
}

export default Company
