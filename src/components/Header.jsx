import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi"
import {  IoCloseSharp } from "react-icons/io5"


const Header = () => {
const [open,setOpen] = useState(false);
  return (
    <div className='flex gap-10 justify-between items-center px-6 py-8'>
        <h2 className='font-bold text-3xl'>OFFVERSE</h2>
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
        {
          open ? <div className="fixed  left-0 top-20 bg-black text-white h-[100%] w-[100%]">
            <ul className=' gap-9 px-8 text-white text-left text-xl md:text-md space-y-2'>
            <li>Home</li>
            <li>About</li>
            <li>Portfolio</li>
            <li>Contact</li>
        </ul>
          </div>:""
        }
        
    </div>
  )
}

export default Header