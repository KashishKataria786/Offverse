import React from 'react'
import Service_card from '../Service_card'
import { data } from 'react-router-dom'

const Data = [
    {id:1,
        heading:"Video Editing",
        description:"In today’s digital landscape, having a strong online presence is crucial. At [Your Company Name], we specialize in SEO strategies that boost your visibility, drive organic traffic, and increase your ROI. Whether you’re a startup or an established business, our tailored solutions help you dominate search engine results and connect with your target audience."
    },
    {id:2,
        heading:"Content Management",
        description:"In today’s digital landscape, having a strong online presence is crucial. At [Your Company Name], we specialize in SEO strategies that boost your visibility, drive organic traffic, and increase your ROI. Whether you’re a startup or an established business, our tailored solutions help you dominate search engine results and connect with your target audience."
    },
    {id:2,
        heading:"Youtube Management",
        description:"In today’s digital landscape, having a strong online presence is crucial. At [Your Company Name], we specialize in SEO strategies that boost your visibility, drive organic traffic, and increase your ROI. Whether you’re a startup or an established business, our tailored solutions help you dominate search engine results and connect with your target audience."
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