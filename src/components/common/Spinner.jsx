import { useEffect, useState } from "react";
import graphiclogo from '../../assets/404graphic.png'


const Spinner = ({ isLoading, setLoading }) => {
  const[percentage,setPercentage]=useState(0);

  useEffect(()=>{
    if(percentage <100){
      const timer = setTimeout(()=>{
        setPercentage(prev=>prev+2);
      },15)
      return ()=>clearTimeout(timer);
    }else{
      const donetimer = setTimeout(()=>{
        setLoading(false);
      },1600)
      return ()=>clearTimeout(donetimer);
    }
  },[percentage])
  return (
    <>
    <div  >
        <img className="w-auto h-[40px]" src={graphiclogo}/>
    </div>
    <div
      className={`fixed transition-all duration-700 transform ${
        isLoading
          ? "inset-0 flex items-center justify-center bg-black opacity-100 scale-100 z-50"
          : "top-4 left-4 translate-x-0 translate-y-0 scale-50 opacity-0 pointer-events-none z-0"
      }`}
    >
      <div className="flex flex-col items-center space-x-2">
        <h1 className="text-blue-500 text-md">{percentage}%</h1>
        <h1 className=" font-bold text-md md:text-2xl px-2 text-white">OFF<span className="text-blue-500">VERSE</span></h1>
        
      </div>

    </div>
    </>
  );
};

export default Spinner;
