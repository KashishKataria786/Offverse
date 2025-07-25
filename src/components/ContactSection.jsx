import React, { useEffect } from 'react'
import Layout from './common/Layout'
import Graphic_404 from '../assets/404graphic.png'
import { Link, useNavigate } from 'react-router-dom'
import Service_card from './Service_card'
import ContactCard from './ContactCard'
import AOS from 'aos';
import 'aos/dist/aos.css';
const ContactSection = () => {

  const navigate = useNavigate();
  useEffect(()=>{AOS.init()},[]);
  return (
        <>
        <h2 data-aos='fade-up' data-aos-delay="1200" data-aos-duration="1000" className='text-4xl md:text-7xl font-bold text-left px-8 mt-10'><span className='text-blue-600'>Contact </span>us</h2>
        <div data-aos='fade-up' data-aos-delay="1200" data-aos-duration="1000" className='md:grid grid-cols-2 gap-10 space-y-10 text-left md:p-8  px-4 py-2'>
            <div className='space-y-3'>
            <p className=' text-md md:text-2xl font-semibold px-4'>Fill  out the below form</p>
            <a href='https://forms.gle/uiUVkDmWgWooNJpL6'  target='blank'><button  className='w-full md:w-auto'> Google Form </button>  </a>
            </div>
            <div className=' space-y-9 md:px-4 py-8 md:py-0 '>

                <ContactCard head={"Google Form"} desc={"Fill out the below form"} index={0} form={true}/>
                <ContactCard head={"Text us At (Optional)"} desc={"+91 9485686863 or Offverse.business@gmail.com"} index={1} />
                <ContactCard head={"Wait 24-48 hours"} desc={"Our Team will Contact you within 24-48 hours! Rest Assured"} index={2} />

            </div>
        </div>
        </>
  )
}

export default ContactSection