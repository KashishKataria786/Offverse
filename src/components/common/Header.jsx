import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi"
import {  IoCloseSharp } from "react-icons/io5"
import graphiclogo from '../../assets/404graphic.png'
import { motion , AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const Header = () => {
const [open,setOpen] = useState(false);
  return (
    <>
    <div className='flex gap-10 justify-between items-center px-6 py-5    '>
        <h2 className='font-bold text-3xl flex gap-1'><img className="w-auto h-[40px]" src={graphiclogo}/>OFF<span className="text-blue-500">VERSE</span></h2>
        <div className="flex md:hidden" onClick={()=>setOpen(!open)}>
{
          open? <IoCloseSharp size={20}/>:<GiHamburgerMenu size={20}/>
        }
        </div>
        <ul className='hidden md:flex gap-9 px-8'>
           <li><Link to ='/'>Home</Link></li>
            <li><Link to ='/about'>About us</Link></li>
            <li><Link to ='/services'>Services</Link></li>
            <li><Link to ='/portfolio'>Portfolio</Link></li>
            <li><Link to ='/contact'>Contact</Link></li>
        </ul>
    </div>
       <AnimatePresence>
            {
          open ? 
          <motion.div
          key="menu"
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={`${open ? { duration: 0.6, ease: 'easeInOut' }:{ duration: 0.6, ease: 'easeOutIn' }}`}
              className="fixed top-0 left-0 w-[64%]  h-full bg-[#040404f6] shadow-lg z-50"
            >
              
          <div className="fixed p-8 left-0 top-0 bg-[#040404f6] text-white    h-[100%] w-[75%]">
  <h2 className='font-bold text-3xl flex gap-1 mb-10'>OFF<span className="text-blue-500">VERSE</span></h2>
            <ul className=' gap-9   text-left text-md md:text-md font-light space-y-2  '>
              
            <li className=""><Link to ='/'>Home</Link></li>
            <li><Link to ='/about'>About us</Link></li>
            <li><Link to ='/services'>Services</Link></li>
            <li><Link to ='/portfolio'>Portfolio</Link></li>
            <li><Link to ='/contact'>Contact</Link></li>
        </ul>
          </div>
          </motion.div>
          :""
        }

       </AnimatePresence>
  
        </>
  )
}

export default Header