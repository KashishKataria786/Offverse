import React from 'react'
import Layout from './common/Layout'
import Graphic_404 from '../assets/404graphic.png'
import { Link } from 'react-router-dom'
import Service_card from './Service_card'
import ContactCard from './ContactCard'
const ContactSection = () => {
  return (
        <>
        <h2 className='text-4xl md:text-7xl font-bold text-left px-8 mt-10'><span className='text-blue-600'>Contact </span>us</h2>
        <div className='md:grid grid-cols-2 gap-10 space-y-10 text-left md:p-8  px-4 py-2'>
            <div className='space-y-3'>
            <p className=' text-md md:text-2xl font-semibold px-4'>Fill  out the below form</p>
            <button className='w-full md:w-auto'> Google Form </button>
            </div>
            <div className=' space-y-9 md:px-4'>

                <ContactCard head={"Google Form"} desc={"Fill out the below form"} index={0} form={true}/>
                <ContactCard head={"Text us At (Optional)"} desc={"+91 9485686863 or Offverse.business@gmail.com"} index={1} />
                <ContactCard head={"Wait 24-48 hours"} desc={"Our Team will Contact you within 24-48 hours! Rest Assured"} index={2} />

            </div>
        </div>
        </>
  )
}

export default ContactSection