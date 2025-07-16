import React from 'react'
import SUb from '../assets/sub.png'
import { BiEnvelope } from 'react-icons/bi'
import Send from '../assets/send.png'

const Subscibe = () => {
    return (
        <div className='mt-20 mb-20 px-4'>
            <div className='rounded-2xl max-w-6xl mx-auto py-20 lg:px-48 px-12 relative' style={{
                backgroundImage:`url(${SUb})`,
                backgroundColor:'cover',
                height:"350px",
                width:'100%',
                backgroundRepeat:"no-repeat"

            }}>
                <h3 className='poppins-semibold text-white md:text-2xl text-center'>Subscribe now to get the latest updates, travel deals, and exclusive offers!</h3>
                <div className='flex gap-3 mt-10 justify-center'>
                    <div className='bg-white flex gap-2 items-center rounded-sm py-3 px-4 md:w-[300px] w-[200px]'>
                        <BiEnvelope className='w-6 h-6 text-gray-600'/>
                        <input type="text" placeholder='Enter your Mail' name="" id="" />

                    </div>
                    <button className='bg-amber-400 text-white px-4 py-2 rounded-sm '>Subscribe</button>
                </div>
                <img src={Send} alt="" className='absolute -top-5 -right-2 md:-right-5' />

            </div>
        </div>
    )
}

export default Subscibe
