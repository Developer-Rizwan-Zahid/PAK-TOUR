import React from 'react'
import { FaFacebook, FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'
import Google from '../assets/Google.png'
import Play from '../assets/Play.png'

const Footer = () => {
    return (
        <div className='mb-10'>
            <div className='max-w-6xl mx-auto grid grid-cols-1 px-6 md:px-0 lg:grid-cols-5 my-16 gap-5 md:gap-0'>
                <div>
                    <h1 className='poppins-medium text-4xl mb-5'>PKR LINES</h1>
                    <p className='poppins-medium text-sm text-[#5E6282]'>Book your trip in minute get full control for much longer</p>

                </div>
                <div className='lg:pl-10'>
                    <h1 className='poppins-bold text-lg pb-5'>Company</h1>
                    <ul className='text-[#5E6282] space-y-2 poppins-medium'>
                        <li>About</li>
                        <li>Career</li>
                        <li>Mobile</li>
                    </ul>
                </div>
                <div className='lg:pl-10'>
                    <h1 className='poppins-bold text-lg mb-5'>Contact</h1>
                    <ul className='text-[#5E6282] space-y-2 poppins-medium'>
                        <li>Help</li>
                        <li>Press</li>
                        <li>Affliate</li>
                    </ul>
                </div>
                <div className='lg:pl-10'>
                    <h1 className='poppins-bold text-lg mb-5'>More</h1>
                    <ul className='text-[#5E6282] space-y-2 poppins-medium'>
                        <li>Airline</li>
                        <li>Airlinefees</li>
                        <li>Low fare trip</li>
                    </ul>
                </div>
                <div className='space-y-3'>
                    <div className='flex gap-3 items-center'>
                        <span className='bg-white shadow rounded-full p-3'><FaFacebookF /></span>
                        <span className='bg-white shadow rounded-full p-3'><FaInstagram /></span>
                        <span className='bg-white shadow rounded-full p-3'><FaTwitter /></span>

                    </div>
                    <p className='text-[#5E6282] poppins-medium text-lg'>Discover our app</p>
                    <div className='flex gap-2'>
                        <img src={Google} alt="" className='w-[107px] h-[35px]' />
                         <img src={Play} alt="" className='w-[107px] h-[35px]' />
                    </div>
                </div>
            </div>
            <p className='text-center poppins-medium text-[#5E6282]'>All right reservedpkrline.com</p>

        </div>
    )
}

export default Footer
