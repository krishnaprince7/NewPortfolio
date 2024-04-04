import React, { useState } from 'react';
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
} from 'react-icons/fa';
import { RiMenu3Line } from "react-icons/ri";
import { IoClose } from "react-icons/io5"; 
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';

import { Link } from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
      <div>
        <img src="/images/logoo.png" alt='Logo Image' style={{ width: '120px' }} />
      </div>

      {/* menu */}
      <ul className='hidden md:flex'>
        <li >
        <Link   to="home" spy={true}  smooth={true} offset={0} duration={1200}>Home</Link>
        </li>
        <li>
        <Link   to="about" spy={true}  smooth={true} offset={0} duration={1200}>About</Link>
        </li>
        <li>
        <Link   to="skils" spy={true}  smooth={true} offset={-70} duration={1200}>Skills</Link>
        </li>
        <li>
        <Link   to="project" spy={true}  smooth={true} offset={-150} duration={1200}>Project</Link>
        </li>
        <li>
        <Link   to="contact" spy={true}  smooth={true} offset={-90} duration={1200}>Contact</Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <RiMenu3Line size={35}/> : <IoClose size={35} />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? 'absolute top-0 left-[35cm] transition-all ease-in-out duration-[2s] w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center '
            : 'absolute top-0 left-0 w-full transition-all ease-in-out duration-1000 h-screen bg-[#0a192f] flex flex-col justify-center items-center '
        }
      >
        <li className='py-6 text-4xl'>
        <Link onClick={handleClick}  to="home" spy={true}  smooth={true} offset={0} duration={1200}>Home</Link>

        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick}   to="about" spy={true}  smooth={true} offset={0} duration={1200}>About</Link>

        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick}   to="skils" spy={true}  smooth={true} offset={-70} duration={1200}>Skills</Link>

        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick}  to="project" spy={true}  smooth={true} offset={-90} duration={1200}>Project</Link>

        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick}   to="contact" spy={true}  smooth={true} offset={-90} duration={1200}>Contact</Link>

        </li>
      </ul>

      {/* Social icons */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://www.linkedin.com/in/krishna-vishwakarma-485267291?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://github.com/krishnaprince7'
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='princekrishna5707@gmail.com'
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='/'
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
      
    </div>
  );
};

export default Navbar;