import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div id='home' className='w-full h-[78vh] sm:my-0 sm:pt-0 pt-[4.5cm] sm:h-screen bg-[#0a192f]'>

    <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
    <p className='text-pink-600'>Hi,  my name is</p>
    <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6fc]'>Krishna Vishwakarma</h1>
    <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a Full Stack Developer.</h2>
    <p className='text-[#8892b0] py-4 max-w-[700px]'>I'm a full-stack developer spacilizing in building (and occasionally
    designing) exceptional digital experiences.Currently, I'm focused on 
    building responsive full stack web applications.</p>
    <div>
      <Link className='text-white border-2 group flex w-[4cm] items-center py-3 pl-5 cursor-pointer hover:bg-pink-600 hover:border-pink-600' 
      to="project" spy={true}  smooth={true} offset={-150} duration={1200}>View work 
      <span className='group-hover:rotate-90 duration-300'>
      <HiArrowNarrowRight className='ml-3'/>
      </span>
      </Link>
    </div>

    </div>

    </div>
  )
}

export default Home