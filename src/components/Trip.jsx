import React from 'react'
import TourLogo from '../assets/tourlogo.png'
import Payment from '../assets/payment.png'
import Date from '../assets/date.png'
import trip from '../assets/trip.png'

const Trip = () => {
  return (
    <div>
      <div className='max-w-6xl mx-auto flex flex-col md:flex-row items-center'>
        <div className='space-y-6 lg:w-[800px] px-6 md:px-0'>
          <h3 className='poppins-medium text-[#5E6282] text-sm '>Quick and Simple Trick!</h3>
          <h1 className='volkhov-bold text-[#14184E] text-3xl md:text-5xl capitalize'>Your Next Adventure Starts <br />  in 3 Quick Steps!</h1>
          <div className='space-y-6 lg:w-[395px] lg:h-[289px]'>
            {/* 1st Item */}
            <div className='flex gap-3 items-start'>
              <img src={TourLogo} alt="" className='w-[70px] ' />
              <div>
                <h3 className='text-[#5E6282] poppins-bold text-base'>Dream Getaway</h3>
                <p className='text-[#5E6282] poppins-regular text-sm'>
                  Explore stunning places, book with ease, and travel your way.
                </p>
              </div>
            </div>

            {/* 2nd Item */}
            <div className='flex gap-3 items-start ml-3'>
              <img src={Date} alt="" className='w-[50px]' />
              <div>
                <h3 className='text-[#5E6282] poppins-bold text-base'>Select Date</h3>
                <p className='text-[#5E6282] poppins-regular text-sm'>
                  Choose the perfect time to begin your journey.
                </p>
              </div>
            </div>

            {/* 3rd Item */}
            <div className='flex gap-3 items-start ml-3'>
              <img src={Payment} alt="" className='w-[50px] ' />
              <div>
                <h3 className='text-[#5E6282] poppins-bold text-base'>Payment Method</h3>
                <p className='text-[#5E6282] poppins-regular text-sm'>
                  Select your preferred payment option easily and securely.
                </p>
              </div>
            </div>
          </div>

        </div>
        <div className='px-6 md:px-8'>
          <img src={trip} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Trip
