import React from 'react'
import { AiOutlineMenu, AiOutlineClose, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'
import { BsFillPersonLinesFill } from 'react-icons/bs'

const Main = () => {
  return (
    <div className='w-full h-screen text-center'>
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
            <div>
                <p className='uppercase text-sm tracking-widest text-gray-600'>Lets build something together</p>
                <h1 className='py-4 text-gray-700'>Hi, Im <span className='text-[#5651e5]'>Marin</span></h1>
                <h1 className='py-2 text-gray-700'>A Frontend Developer</h1>
    	        <p className='py-4 text-gray-600 max-w-[70%] m-auto'>I`m a frontend developer specializing in building exceptional digital experiences. Currenlty, I`m focused on building responsive front-end web applications while learning back-end technologies.</p>
                <div className='flex items-center justify-between max-w-[330px] m-auto py-4'> 
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer
                        hover:scale-110 ease-in duration-300'>
                        <FaLinkedinIn />
                    </div>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer
                        hover:scale-110 ease-in duration-300'>
                        <FaGithub />
                    </div>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer
                        hover:scale-110 ease-in duration-300'>
                        <AiOutlineMail />
                    </div>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer
                        hover:scale-110 ease-in duration-300'>
                        <BsFillPersonLinesFill />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main