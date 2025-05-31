import React from 'react'
// import VideoEditorPic from "../../assets/VideoEditorPic.webp"
import VideoEditorPic from "../../assets/videoeditor.webp"
const StarSection = () => {
  return (
    <div className='md:grid grid-cols-2 text-left'>
        <div className='px-6  space-y-3'>
            <h6 className='text--sm'>A <span className='text-blue-500'>Content Production </span>Agency </h6>
            <h2 className='text-4xl md:text-6xl font-bold'>We Make Videos Your Audience Will Remember.</h2>
            <h2 className='py-2 '>We are a team of enthusiastic individuals who help brands grow by unleashing the potential of social media</h2>
            <div className='flex gap-2 text-sm  md:text-md '>
              <button>
              Contact us
            </button>
            <button>
              Download Borchure
            </button>
            </div>
        </div>  
        <div>
            <img src={VideoEditorPic} alt='qwerty'/>
        </div>
    </div>
  )
}

export default StarSection