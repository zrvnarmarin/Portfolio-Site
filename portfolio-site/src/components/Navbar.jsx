import React, { useState, useEffect } from 'react'
import Logo from '../assets/logo.png'
import { AiOutlineMenu, AiOutlineClose, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'
import { BsFillPersonLinesFill } from 'react-icons/bs'

const Navbar = () => {
    const [toggleNavbar, setToggleNavbar] = useState(false)
    const handleTogleNavbar = () => setToggleNavbar(prev => !prev)

    const [shadow, setShadow] = useState(false)

    useEffect(() => {

      const handleShadow = () => {
        if (window.scrollY >= 90) {
            setShadow(true)
        } else {
            setShadow(false)
        }

    }
    window.addEventListener('scroll', handleShadow)

    }, [])
    

  return (
    <div className={shadow ? 'fixed w-full h-20 shadow-xl z-[100]' : 'fixed w-full h-20 z-[100]'}>
        <div className='flex justify-between items-center w-full h-full px-2 xl:px-16'>
            <a href="/">
                <img width="100" height="100" src={Logo} alt="logo-image" />
            </a>
            <div>
                <ul className='hidden md:flex'>
                    <a href="/#">
                        <li className='ml-10 text-sm uppercase hover:border-b'>Home</li>
                    </a>
                    <a href="/#about">
                        <li className='ml-10 text-sm uppercase hover:border-b'>About</li>
                    </a>
                    <a href="/#skills">
                        <li className='ml-10 text-sm uppercase hover:border-b'>Skills</li>
                    </a>
                    <a href="/#projects">
                        <li className='ml-10 text-sm uppercase hover:border-b'>Projects</li>
                    </a>
                    <a href="/#contact">
                        <li className='ml-10 text-sm uppercase hover:border-b'>Contact</li>
                    </a>
                </ul>
            </div>
            <div onClick={handleTogleNavbar}>
                <AiOutlineMenu size={25} />
            </div>
        </div>

        <div className={ 
                !toggleNavbar 
                ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' 
                : ''}>
            <div 
                className={ 
                    !toggleNavbar 
                    ? 'fixed left-0 top-0 w-3/4 sm:w-[60%] md-[45%] p-12 h-screen bg-[#ecf0f3] ease-in duration-500'
                    : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'}>
                <div>
                    <div className='flex w-full items-center justify-between'>
                        <img width={87} height={35} src={Logo} alt="logo" />
                        <div onClick={handleTogleNavbar} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
                            <AiOutlineClose  />
                        </div>
                    </div>
                    <div className='border-b border-gray-300 my-4'>
                        <p className='w-[85%] md-w-[90%] py-4'>Lets build something together</p>
                    </div>
                </div>
                <div className='py-4 flex flex-col'>
                    <ul className='uppercase'>
                        <li className='py-4 text-sm'>
                            <a>Home</a>
                        </li>
                        <li className='py-4 text-sm'>
                            <a>About</a>
                        </li>
                        <li className='py-4 text-sm'>
                            <a>Skills</a>
                        </li>
                        <li className='py-4 text-sm'>
                            <a>Projects</a>
                        </li>
                        <li className='py-4 text-sm'>
                            <a>Contact</a>
                        </li>
                    </ul>
                    <div className='pt-40'>
                        <p className='uppercase tracking-widest text-[#5651e5]'>Lets connect</p>
                        <div className='flex items-center justify-between my-4 w-full sm-[80%]'>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer
                             hover:scale-105 ease-in duration-300'>
                                <FaLinkedinIn />
                            </div>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer
                             hover:scale-105 ease-in duration-300'>
                                <FaGithub />
                            </div>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer
                             hover:scale-105 ease-in duration-300'>
                                <AiOutlineMail />
                            </div>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer
                             hover:scale-105 ease-in duration-300'>
                                <BsFillPersonLinesFill />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar