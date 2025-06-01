import React from 'react'
import Layout from '../components/common/Layout'
import PortfolioCard from '../components/PortfolioCard.jsx'

const Data = [
  {
    id:0,
    typeArray:["Video", "Editing","Thumbnail Design"],
    typeOfProject:"Influencer Editing" ,
    ProjectLink :"/about",
    projectDescription:"Sanjay's captivating Ad video for his SEO course. Edited with attractive animations and to-the-tee transcribing",
  },
   {
    id:1,
    typeArray:["Video", "Editing","Thumbnail Design"],
    typeOfProject:"Vide Editing" ,
    ProjectLink :"/about",
    projectDescription:"Sanjay's captivating Ad video for his SEO course. Edited with attractive animations and to-the-tee transcribing",
  },
   {
    id:3,
    typeArray:["Video", "Editing","Thumbnail Design"],
    typeOfProject:"Thumbnai Editing" ,
    ProjectLink :"/about",
    projectDescription:"Sanjay's captivating Ad video for his SEO course. Edited with attractive animations and to-the-tee transcribing",
  },
]

const PortfolioPage = () => {
  return (
    <Layout>
      <div className='py-4 md:px-8 px-4 mt-10'>
        <h4 className='text-left text-4xl font-bold md:text-7xl mb-10'>Our<span className='text-blue-600'> Portfolio</span> </h4>
      <div className='md:grid grid-cols-3 gap-5 space-y-10 py-5'>
        {Data?.map((item,index)=>{
            return (
                <PortfolioCard key={index} index={index} typeArray={item.typeArray} typeOfProject={item.typeOfProject}  ProjectLink={item.ProjectLink} projectDescription={item.projectDescription}/>
            )
        })}
      </div>
    </div>
    </Layout>
  )
}

export default PortfolioPage