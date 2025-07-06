import React, { useEffect } from 'react'
import Layout from '../components/common/Layout'
import PortfolioCard from '../components/PortfolioCard.jsx'
import AOS from 'aos';
import 'aos/dist/aos.css';
import amit from '../assets/amit.jpg'
import motorburst from '../assets/motorburst.png'
import sukhmani from '../assets/sukhmani.png'
import kashverse from '../assets/kashverse.png'
const Data = [
  {
    id:0,
    typeArray:["Video", "Editing"],
    typeOfProject:"Influencer Management" ,
    imagz:amit,
    ProjectLink :"https://www.instagram.com/_aamitrana_/",
    projectDescription:"Influencing Management of a Sponsored Athelte. From Drafts to production ready Videos and Instagram Management!",
  },
   {
    id:1,
    typeArray:["Video", "Editing","Thumbnail Design"],
    typeOfProject:"Video Editing" ,
    ProjectLink :"https://drive.google.com/drive/u/5/folders/1VJfEqBjvl2stdU2iCZZq50-naJPMYeP2",
    imagz:sukhmani,
    projectDescription:"Capturing Little moments and Event ready production of Sukhmani's first Birthday!",
  },
   {
    id:2,
    typeArray:["Video", "Editing","Thumbnail Design"],
    typeOfProject:"Thumbnail Editing" ,
    ProjectLink :"https://www.youtube.com/@Kashverse786",
    ProjectLink :"https://www.youtube.com/@MOTORBURST",
    imagz:motorburst,
    projectDescription:"From YouTube Management to Full-Scale Production and SEO Optimization.",
  },
   {
    id:3,
    typeArray:["Video", "Editing","Thumbnail Design"],
    typeOfProject:"Vide Editing" ,
    
    ProjectLink :"https://www.youtube.com/@Kashverse786",
    imagz:kashverse,
    projectDescription:"From YouTube Management to Full-Scale Production and SEO Optimization.",
  },
  
 
]

const PortfolioPage = () => {
  useEffect(()=>{
    AOS.init();
  },[])
  return (
    <Layout>
      <div data-aos="fade-up" data-aos-delay='1200' data-aos-duration="1000"  className='py-4 md:px-8 px-4 mt-10'>
        <h4 className='text-left text-4xl font-bold md:text-7xl mb-10'>Our<span className='text-blue-600'> Portfolio</span> </h4>
      <div className='md:grid grid-cols-3 gap-5 space-y-10 py-5'>
        {Data?.map((item,index)=>{
            return (
                <PortfolioCard key={index} index={index} typeArray={item.typeArray} typeOfProject={item.typeOfProject}  ProjectLink={item.ProjectLink} projectDescription={item.projectDescription} imagz={item.imagz}/>
            )
        })}
      </div>
    </div>
    </Layout>
  )
}

export default PortfolioPage