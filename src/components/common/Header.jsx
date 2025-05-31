import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi"
import {  IoCloseSharp } from "react-icons/io5"
import graphiclogo from '../../assets/404graphic.png'

const Header = () => {
const [open,setOpen] = useState(false);
  return (
    <>
    <div className='flex gap-10 justify-between items-center px-6 py-8  '>
        <h2 className='font-bold text-3xl flex gap-1'><img className="w-auto h-[40px]" src={graphiclogo}/>OFF<span className="text-blue-500">VERSE</span></h2>
        <div className="flex md:hidden" onClick={()=>setOpen(!open)}>
{
          open? <IoCloseSharp size={20}/>:<GiHamburgerMenu size={20}/>
        }
        </div>
        <ul className='hidden md:flex gap-9 px-8'>
            <li>Home</li>
            <li>About</li>
            <li>Portfolio</li>
            <li>Contact</li>
        </ul>
    </div>
    {
          open ? <div className="fixed p-8 left-0 top-0 bg-[#040404f6]  bg-white h-[100%] w-[75%]">

            <ul className=' gap-9  text-black text-left text-xl md:text-md space-y-2  '>
            <li>Home</li>
            <li>About</li>
            <li>Portfolio</li>
            <li>Contact</li>
        </ul>
          </div>:""
        }
        </>
  )
}

export default Header