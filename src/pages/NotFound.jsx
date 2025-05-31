import { Link } from 'react-router-dom'
import Layout from '../components/common/Layout.jsx'
import Graphic_404 from '../assets/404graphic.png';
const NotFound = () => {
  return (
    <Layout>
        <div className='flex flex-col justify-center items-center h-130 gap-5'>
          <img className='md:w-[50%] h-auto absolute ' style={{ filter: 'drop-shadow(0 0 10px rgba(59, 130, 246, 0.8))' }} src={Graphic_404} alt="4040image"/>
           <div className=' relative'>
             <h2 className='text-5xl '>Error 404 </h2>
            <h3>Page Not Found</h3><p>Go back to <Link className='animate-pulse' to={'/'}>Home</Link></p>
           </div>
            
        </div>
    </Layout>
  )
}

export default NotFound