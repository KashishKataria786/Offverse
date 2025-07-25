import React, { useEffect } from 'react'
import { AiFillFacebook, AiFillInstagram, AiFillLinkedin, AiFillTwitterSquare } from 'react-icons/ai'
import {  FaPhone } from 'react-icons/fa'
import { FaLocationPin, FaSquareInstagram } from 'react-icons/fa6'
import { MdEmail } from 'react-icons/md'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Footer = () => {
  useEffect(()=>{
AOS.init();
},[])
  return (
    <>
    <div data-aos="fade-up" data-aos-delay='100' data-aos-duration="1000"  className='md:grid grid-cols-2'>
      <div className='p-6 space-y-8 col-span-1 text-left'>
        <h2  className='text-3xl md:text-6xl font-bold'>Lets <span className='text-blue-600'>Work Together</span></h2>
        <p>You bring the ideas—we’ll bring them to life. From first draft to final edit, we’ve got your back, handling the details so you can focus on doing what you love.</p>
        <ul className='space-y-4'>
          <li  className='flex gap-2 items-center'><FaPhone className='text-blue-600'size={30}/>+91 9485686863</li>
          <li  className='flex gap-2 items-center'><MdEmail className='text-blue-600' size={30}/>Offverse.business@gmail.com</li>
          <li  className='flex gap-2 items-center'><FaLocationPin className='text-blue-600'  size={30}/>Rohtak,Haryana,India</li>
        </ul>
      </div>
      {/* <div className='p-6 text-left'>
         <h2  className='text-3xl md:text-6xl font-bold'>Follow us </h2>
         <ul  className='py-4 flex gap-5  '>
          <li><FaSquareInstagram size={30} /></li>
          <li><AiFillTwitterSquare size={30}/></li>
          <li><AiFillLinkedin size={30}/></li>
          <li><AiFillFacebook size={30}/></li>
         </ul>
      </div> */}
    </div>
    <div className='text-[10px] font-light py-2 border-t-1 border-gray-900'>
      <h6>Copyright @offvers.co 2025</h6>
    </div>
    </>
  )
}

export default Footer
