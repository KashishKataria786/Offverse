import React from 'react'
import Marquee from 'react-fast-marquee'
import { FaStarOfLife } from 'react-icons/fa'

const Marques = () => {
  return (
    <ul className='text-3xl font-bold text-gray-700 opacity-30 py-8 bg-gray-100 opacity-30'>
        <Marquee>
        <li className='flex gap-2 justify-center text-4xl'><FaStarOfLife/>Content Creation<FaStarOfLife/></li>
        <li className='flex gap-2 justify-center text-4xl'><FaStarOfLife/>Content Creation<FaStarOfLife/></li>
        <li className='flex gap-2 justify-center text-4xl'><FaStarOfLife/>Content Creation<FaStarOfLife/></li>
        <li className='flex gap-2 justify-center text-4xl'><FaStarOfLife/>Content Creation<FaStarOfLife/></li>

    </Marquee>
    </ul>
  )
}

export default Marques