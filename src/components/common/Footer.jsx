import React from 'react'
import { AiFillFacebook, AiFillInstagram, AiFillLinkedin, AiFillTwitterSquare } from 'react-icons/ai'
import {  FaPhone } from 'react-icons/fa'
import { FaLocationPin, FaSquareInstagram } from 'react-icons/fa6'
import { MdEmail } from 'react-icons/md'

const Footer = () => {
  return (
    <>
    <div className='md:grid grid-cols-2'>
      <div className='p-6 space-y-8 col-span-1 text-left'>
        <h2 className='text-3xl md:text-6xl font-bold'>Lets Work Together</h2>
        <p>We Create Experiences That you and Youyr Audiencce wont ever forget</p>
        <ul className='space-y-4'>
          <li className='flex gap-2 items-center'><FaPhone/>+91 9485686833</li>
          <li className='flex gap-2 items-center'><MdEmail/>Offverse.business@gmail.com</li>
          <li className='flex gap-2 items-center'><FaLocationPin/>Golf Course Road, Gurugram, Haryana, 124001</li>
        </ul>
      </div>
      <div className='p-6 text-left'>
         <h2 className='text-3xl md:text-6xl font-bold'>Follow us </h2>
         <ul className='py-4 flex gap-5  '>
          <li><FaSquareInstagram size={30} /></li>
          <li><AiFillTwitterSquare size={30}/></li>
          <li><AiFillLinkedin size={30}/></li>
          <li><AiFillFacebook size={30}/></li>
         </ul>
      </div>
    </div>
    <div className='text-[10px] font-light py-2 border-t-1 border-gray-900'>
      <h6>Copyright @offvers.co 2025</h6>
    </div>
    </>
  )
}

export default Footer