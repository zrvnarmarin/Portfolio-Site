import React from 'react'
import Image from '../assets/logo.png'
import { AiOutlineMenu, AiOutlineClose, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { HiOutlineChevronDoubleUp } from 'react-icons/hi'

const Contact = () => {
  return (
    <div id='contact' className='w-full lg:h-screen'>
        <div className='max-w-[1240px] m-auto px-2 py-16 w-full'>
            <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Contact</p>
            <h2 className='py-4'>Get In touch</h2>
            <div className='grid lg:grid-cols-5 gap-8'>
                {/* left */}
                <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
                    <div className='lg:p-4 h-full'>
                        <div>
                            <img className='rounded-xl hover:scale-105 ease-in duration-300' src={Image} alt="" />
                        </div>
                        <div>
                            <h2 className='py-2'>Marin Zrvnar</h2>
                            <p>Front-end Developer</p>
                            <p className='py-4'>I am available for full time positions. Contact me and let`s talk.</p>
                        </div>
                        <p className='pt-8 uppercase'>Connect with me</p>
                        <div className='flex items-center justify-between py-4'>
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
                        <div>
                        </div>
                    </div>
                </div>

                {/* right */}
                <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
                    <form>
                        <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                            <div className='flex flex-col'>
                                <label className='uppercase text-sm py-2'>Name</label>
                                <input type="text" className='border-2 rounded-lg p-3 flex border-gray-300' />
                            </div>
                            <div className='flex flex-col'>
                                <label className='uppercase text-sm py-2'>Phone Number</label>
                                <input type="text" className='border-2 rounded-lg p-3 flex border-gray-300' />
                            </div>
                        </div>
                        <div className='flex flex-col py-2'>
                            <label className='uppercase text-sm py-2'>Email</label>
                            <input type="email" className='border-2 rounded-lg p-3 flex border-gray-300' />
                        </div>
                        <div className='flex flex-col py-2'>
                            <label className='uppercase text-sm py-2'>Subject</label>
                            <input type="text" className='border-2 rounded-lg p-3 flex border-gray-300' />
                        </div>
                        <div className='flex flex-col py-2'>
                            <label className='uppercase text-sm py-2'>Message</label>
                            <textarea className='border-2 rounded-lg pt-3 border-gray-300' rows={10}></textarea>
                        </div>
                        <button className='w-full p-4 text-gray-100 mt-4'>Send Message</button>
                    </form>
                </div>

            </div>
            <div className='flex justify-center py-12'>
                <a href="/">
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer
                            hover:scale-110 ease-in duration-300'>
                        <HiOutlineChevronDoubleUp size={30} className='m-auto text-[#5651e5]' />
                    </div>
                </a>
            </div>
        </div>
    </div>
  )
}

export default Contact