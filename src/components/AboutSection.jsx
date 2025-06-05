import AOS from 'aos';
import 'aos/dist/aos.css';
import graphic404 from "../assets/404graphic.png";
import { useEffect } from 'react';
const AboutSection = () => {
  useEffect(()=>{AOS.init()},[]);
  return (
    <div  className="p-8 text-left md:space-y-4 space-y-2">
      <div data-aos="fade-up" data-aos-delay='1200' data-aos-duration="1000"   className="md:grid grid-cols-3 justify-start space-y-2">
        <div className="col-span-2 py-4">
          <h3 data-aos="fade-up" data-aos-delay='1100' data-aos-duration="300" className="text-4xl  md:text-8xl ">
            Behind Every <span className="text-blue-600">Great Brand </span>is{" "}
            <span>Greater Story</span>
          </h3>
        </div>
        <div className="md:py-12">
          <img data-aos="fade-left" data-aos-delay='1200' data-aos-duration="300" src={graphic404} alt="" />
          {/* <h3>this is ou0r only world to maek exciting nad best Video edintg Line in the workd</h3> */}
        </div>
      </div>
      <div className="md:grid  grid-cols-3 justify-center items-center space-y-4  ">
        <div className="col-span-2">
          <p data-aos="fade-up" data-aos-delay='400' data-aos-duration="300" className="text-justify font-light">
            What started as a shared passion among friends and family quickly
            grew into something bigger. Bound by creativity, trust, and a vision
            to bring ideas to life, we came together to build a studio focused
            on video and content creation. From home-grown projects to helping
            brands tell their stories, our journey has always been about
            collaboration, authenticity, and doing what we love—together. We’re
            not just a team—we’re a tight-knit group that treats every project
            with care, just like we do for each other. Whether you're a creator,
            business, or brand, we’re here to turn your vision into impactful,
            engaging content that connects.
          </p>
        </div>
        <div className="flex justify-center items-center">
          <button data-aos="fade-up" data-aos-delay='400' data-aos-duration="300" className="w-full md:w-auto ">Contact us Now </button>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
