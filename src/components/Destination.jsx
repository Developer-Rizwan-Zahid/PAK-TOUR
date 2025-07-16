import React from 'react'
import Karachi from "../assets/karachi.jpg"
import Multan from '../assets/multan.jpg'
import Islambad from '../assets/islambad.jpg'

const TourImage = [
    {
        img: Karachi,
        name: "Karachi, Pakistan",
        price: "200k, 500k ",
        time: "20 Days Trip"
    },
    {
        img: Multan,
        name: "Multan, Pakistan",
        price: "100k, 200k ",
        time: "10 Days Trip"
    },
    {
        img: Islambad,
        name: "Islambad, Pakistan",
        price: "200k, 500k ",
        time: "5 Days Trip"
    }
]

const Destination = () => {
    return (
        <div className='mt-10'>
            <div className='max-w-7xl mx-auto relative'>
                <h3 className='text-sm text-center font-semibold text-[#5E6282]'>Trending Now</h3>
                <h1 className='text-center volkhov-bold text-[#14183E] text-3xl md:text-5xl mt-2'>Trending Getaways</h1>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-10 place-items-center my-14'>
                    {
                        TourImage.map((item, index) => {
                            return <div className='shadow-2xl rounded-2xl overflow-hidden w-full max-w-sm'>
                                <img src={item.img} alt="" className='w-full h-64 object-cover' />
                                <div className='p-4'>
                                    <h2 className='text-lg font-bold text-[#14183E]'>{item.name}</h2>
                                    <div className='flex justify-between'>
                                        <p className='text-sm text-gray-600'>{item.time}</p>
                                        <p className='text-sm text-[#5E6282] font-semibold mt-2'>Price: {item.price}</p>
                                    </div>
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Destination
