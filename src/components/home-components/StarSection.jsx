
import VideoEditorPic from "../../assets/videoeditor.webp"
 import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


const StarSection = () => {

  const Navigate=  useNavigate();
  useEffect(()=>{
    AOS.init();
  },[])

  return (
    <div className='md:grid grid-cols-2 text-left'>
        <div data-aos="fade-up" data-aos-delay='1400' data-aos-duration="1000"  className='px-6 py-3 space-y-3'>
            <h6 className='text--sm'>A <span className='text-blue-500'>Content Production </span>Agency </h6>
            <h2  className='text-4xl md:text-6xl font-bold'>We Make Videos Your Audience Will Remember.</h2>
            <h2  className='py-2 '>We are a team of enthusiastic individuals who help brands grow by unleashing the potential of social media</h2>
            <div  className='flex gap-2 text-sm  md:text-md '>
              <button onClick={()=>Navigate('/contact')}>
              Contact us
            </button>
            {/* <button>
              Download Borchure
            </button> */}
            </div>
        </div>  
        <div>
            <img  data-aos="fade-left" data-aos-delay='1400' data-aos-duration="1000" src={VideoEditorPic} alt='qwerty'/>
        </div>
    </div>
  )
}

export default StarSection