import React from 'react'
import Image from '../assets/logo.png'
import ProjectItem from './ProjectItem'

const Projects = () => {
  return (
    <div className='w-full'>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
            <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Projects</p>
            <h2 className='py-4'>What I`ve built</h2>
            <div className='grid md:grid-cols-2 gap-8'>

            <ProjectItem 
                title='Property Finder' 
                backgroundImg={Image} 
                projectUrl='neki url' 
            />
            <ProjectItem 
                title='Crypto App' 
                backgroundImg={Image} 
                projectUrl='neki url' 
            />
            <ProjectItem 
                title='Apartmenify' 
                backgroundImg={Image} 
                projectUrl='neki url' 
            />
            <ProjectItem 
                title='Apartmenify' 
                backgroundImg={Image} 
                projectUrl='neki url' 
            />

            </div>
        </div>
    </div>
  )
}

export default Projects