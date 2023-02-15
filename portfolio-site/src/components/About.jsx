import React from 'react'
import MarinImage from '../assets/marin.jpg'

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <p className='uppercase text-xl tracking-widest text-[#5651e5]'>About</p>
                <h2 className='py-4'>Who I am</h2>
                <p className='py-2 text-gray-600'>I am not your normal developer</p>
                <p className='py-2 text-gray-600'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur, asperiores reiciendis. Hic consequuntur esse, eius vitae nemo minima iusto, cupiditate sit, similique nesciunt nulla delectus consectetur tempore fugiat odio dicta.
                    Rerum mollitia quae a perferendis perspiciatis vel dolore fugit delectus, laboriosam maiores sequi velit animi iusto reprehenderit vero ex qui explicabo commodi at dolores numquam. Ipsa corporis dolore sapiente architecto.
                    Aliquid natus quia, ex iusto inventore sapiente nulla error similique culpa dolorum nam magnam odit voluptas velit sint exercitationem optio laborum totam, nihil reprehenderit. Excepturi repellendus fugiat amet eius! Ipsum.
                </p>
                <p className='py-2 text-gray-600'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur, asperiores reiciendis. Hic consequuntur esse, eius vitae nemo minima iusto, cupiditate sit, similique nesciunt nulla delectus consectetur tempore fugiat odio dicta.
                    Rerum mollitia quae a perferendis perspiciatis vel dolore fugit delectus, laboriosam maiores sequi velit animi iusto reprehenderit vero ex qui explicabo commodi at dolores numquam. Ipsa corporis dolore sapiente architecto.
                    Aliquid natus quia, ex iusto inventore sapiente nulla error similique culpa dolorum nam magnam odit voluptas velit sint exercitationem optio laborum totam, nihil reprehenderit. Excepturi repellendus fugiat amet eius! Ipsum.
                </p>
                <p className='py-2 text-gray-600 underline cursor-pointer'>
                    Check out some of my latest projects
                </p>
            </div>
            <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                <img className='rounded-xl' src={MarinImage} alt="Marin Zrvnar" />
            </div>
        </div>
    </div>
  )
}

export default About