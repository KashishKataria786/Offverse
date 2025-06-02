import React from 'react'
import Service_card from '../Service_card'
import { data } from 'react-router-dom'

const Data = [
    {id:1,
        heading:"Video Editing",
        description:"Your raw footage deserves more than just cuts and transitions. Our editors bring your vision to life with clean, modern editing, smooth pacing, sound design, subtitles, and custom graphics. Whether it's vlogs, tutorials, interviews, or reels—we edit to match your brand’s style and audience expectations."
    },
    {id:2,
        heading:"Content Management",
        description: "Staying consistent and relevant takes more than just great ideas—it needs a plan. We help you map out a content calendar, repurpose long-form videos into shorts, create scripts, and organize assets so your content flows smoothly across platforms. With us, your content is always a step ahead and ready to perform."
    },
    {id:2,
        heading:"Youtube Management",
        description:"We take the stress out of running a YouTube channel so you can focus on creating. From content strategy and SEO-optimized titles to custom thumbnails and upload scheduling—we handle everything. Our team ensures your channel grows consistently with engaging content, analytics tracking, and tailored growth strategies that actually work."
    },
    
]
const ServiceSection = () => {

  return (
    <>
    <div className='py-4 md:px-8 px-4 mt-10'>
        <h4 className='text-left text-4xl font-bold md:text-7xl mb-10'>Our<span className='text-blue-600'> Services</span> </h4>
      <div className='md:grid grid-cols-3 gap-5 space-y-10 py-5'>
        {Data?.map((item,index)=>{
            return (
                <Service_card key={index} index ={index} service_name={item.heading} service_desc={item.description}/>
            )
        })}
      </div>
    </div>
    </>
  )
}

export default ServiceSection