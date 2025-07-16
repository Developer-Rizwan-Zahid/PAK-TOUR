import React from 'react'
import Mic from '../assets/mic.png'
import Setting from '../assets/setting.png'
import Rectangle from '../assets/Rectangle.png'
import Plane from '../assets/plane.png'
import Radar from '../assets/radar.png'

const Service = () => {
    return (
        <div className='lg:mt-48 mt-80 relative '>
            <div className='max-w-7xl mx-auto pb-1 relative'>
                <h3 className='text-sm text-center font-semibold text-[#5E6282]'>CATEGORY</h3>
                <h1 className='text-center volkhov-bold text-[#14183E] text-3xl md:text-5xl  mt-2'>We offer the best deals just for you!</h1>  
                <div className='grid grid-cols-2 lg:grid-cols-4 gap-0 mt-20 mb-20 place-items-center'>
                    <div className='flex flex-col gap-3 items-center w-[190px] h-[227px]'>
                        <img src={Mic} alt="" />
                        <h1 className='font-sns font-semibold text-lg '>Event Vibes</h1>
                        <p className='text-center text-[#5E6282] popins-medium text-sm px-4'>Event Vibes brings you exciting local events, fun, and unforgettable moments!</p>
                    </div>
                    <div className='flex flex-col gap-3 items-center w-[267px] h-[300px] bg-white lg:shadow-2xl lg:rounded-2xl lg:p-9'>
                        <img src={Plane} alt="" />
                        <h1 className='font-sns font-semibold text-lg '>Air Escape</h1>
                        <p className='text-center text-[#5E6282] popins-medium text-sm px-4'>Air Escape offers stress-free flights, great deals, and unforgettable travel experiences.</p>
                    </div>
                    <div className='flex flex-col  bg-white gap-3 items-center w-[190px] h-[227px]'>
                        <img src={Setting} alt="" />
                        <h1 className='font-sns font-semibold text-lg'>Personalized</h1>
                        <p className='text-center text-[#5E6282] popins-medium text-sm px-4'>Personalized services designed to fit your style, needs, and lifestyle perfectly.</p>
                    </div>
                    <div className='flex flex-col gap-3 items-center w-[190px] h-[227px]'>
                        <img src={Radar} alt="" />
                        <h1 className='font-sns font-semibold text-lg '>Forecast Finder</h1>
                        <p className='text-center text-[#5E6282] popins-medium text-sm px-4'>Forecast Finder helps you track weather accurately anytime, anywhere you go.</p>
                    </div>
                </div>
                <img src={Rectangle} alt="" className='absolute bottom-10 left-72 -z-10 hidden sm:block'/>
            </div>

        </div>
    )
}

export default Service
