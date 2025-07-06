import { Link } from 'react-router-dom';
import {BiRightArrow } from 'react-icons/bi';

const PortfolioCard = ({typeArray, typeOfProject , ProjectLink, projectDescription , index , imagz}) => {
  return (
    <div className='p-4   rounded-sm border-black shadow-xl   space-y-3 text-left'>
        
        <div className='relative '>
            <img className='w-full ' src={imagz} ></img>
            <p className='absolute -top-20 left-0 text-blue-800 opacity-70 font-bold text-[200px] z-40 '>{index+1}</p>
        </div>
        <div className='space-y-2'>
            <ul className='flex gap-2'>
                {typeArray?.map((item,index)=>{
                    return(
                         <li key={index} className='bg-gray-400 opacity-100 font-semibold text-white rounded-xl px-3  p-1 text-[14px]    '  >{item}</li>
               
                    )
                })}
                </ul>
                <h3 className='text-xl font-bold text-blue-600'>{typeOfProject}</h3>
                <p className='text-xl font-light text-justify'>{projectDescription}</p>
                
        </div>
        <div>
            <Link className=' flex gap-4  items-center animate-pulse text-blue-600 text-md' to ={ProjectLink}>See Project <BiRightArrow/></Link>
        </div>
    </div>
  )
}

export default PortfolioCard