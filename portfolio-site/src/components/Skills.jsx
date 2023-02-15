import React from 'react'
import LogoImage from '../assets/logo.png'
import HTMLImage from '../assets/skills/html.png'
import CSSImage from '../assets/skills/css.png'
import JavascriptImage from '../assets/skills/javascript.png'
import ReactImage from '../assets/skills/react.png'
import TailwindImage from '../assets/skills/tailwind.png'
import FirebaseImage from '../assets/skills/firebase.png'
import GitHubImage from '../assets/skills/github1.png'
import TypeScriptImage from '../assets/skills/Typescript_logo_2020.svg.png'
import SassImage from '../assets/skills/sass.png'

const Skills = () => {
  return (
    <div id='skills' className='w-full lg:h-screen p-2'>
        <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
            <p className='text-xl tracking-widest uppercase text-[#5651e5] py-4'>Skills</p>
            <h2 className='py-4'>What I can do</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>

                <div className='p-6 shadow-xl rounded-xl hover:bg-[#b2b0e4] hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <img width={64} height={64} src={HTMLImage} alt="html" />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>HTML</h3>
                        </div>
                    </div>
                </div>

                <div className='p-6 shadow-xl rounded-xl hover:bg-[#b2b0e4] hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <img width={64} height={64} src={CSSImage} alt="html" />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>CSS</h3>
                        </div>
                    </div>
                </div>

                <div className='p-6 shadow-xl rounded-xl hover:bg-[#b2b0e4] hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <img width={64} height={64} src={JavascriptImage} alt="html" />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>JavaScript</h3>
                        </div>
                    </div>
                </div>

                <div className='p-6 shadow-xl rounded-xl hover:bg-[#b2b0e4] hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <img width={64} height={64} src={TypeScriptImage} alt="html" />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Typescript</h3>
                        </div>
                    </div>
                </div>

                <div className='p-6 shadow-xl rounded-xl hover:bg-[#b2b0e4] hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <img width={64} height={64} src={ReactImage} alt="html" />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>React</h3>
                        </div>
                    </div>
                </div>

                <div className='p-6 shadow-xl rounded-xl hover:bg-[#b2b0e4] hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <img width={64} height={64} src={TailwindImage} alt="html" />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Tailwind</h3>
                        </div>
                    </div>
                </div>

                <div className='p-6 shadow-xl rounded-xl hover:bg-[#b2b0e4] hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <img width={64} height={64} src={SassImage} alt="html" />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>SASS</h3>
                        </div>
                    </div>
                </div>

                <div className='p-6 shadow-xl rounded-xl hover:bg-[#b2b0e4] hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <img width={64} height={64} src={FirebaseImage} alt="html" />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Firebase</h3>
                        </div>
                    </div>
                </div>

                <div className='p-6 shadow-xl rounded-xl hover:bg-[#b2b0e4] hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <img width={64} height={64} src={GitHubImage} alt="html" />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Github</h3>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Skills