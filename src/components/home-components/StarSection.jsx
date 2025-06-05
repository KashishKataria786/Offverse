
import VideoEditorPic from "../../assets/videoeditor.webp"
 import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";


const StarSection = () => {

  useEffect(()=>{
    AOS.init();
  },[])

  return (
    <div className='md:grid grid-cols-2 text-left'>
        <div className='px-6 py-3 space-y-3'>
            <h6 data-aos="fade-up" data-aos-delay='1200' data-aos-duration="300" className='text--sm'>A <span className='text-blue-500'>Content Production </span>Agency </h6>
            <h2 data-aos="fade-up" data-aos-delay='1400'data-aos-duration= "800" className='text-4xl md:text-6xl font-bold'>We Make Videos Your Audience Will Remember.</h2>
            <h2 data-aos="fade-up" data-aos-delay='1500'data-aos-duration= "1000"  className='py-2 '>We are a team of enthusiastic individuals who help brands grow by unleashing the potential of social media</h2>
            <div data-aos="fade-up" data-aos-delay='1400'data-aos-duration= "1300" className='flex gap-2 text-sm  md:text-md '>
              <button>
              Contact us
            </button>
            <button>
              Download Borchure
            </button>
            </div>
        </div>  
        <div>
            <img  data-aos="fade-left" data-aos-delay='1000' src={VideoEditorPic} alt='qwerty'/>
        </div>
    </div>
  )
}

export default StarSection