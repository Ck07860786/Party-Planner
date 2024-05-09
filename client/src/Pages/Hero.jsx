import React from 'react'
import Heroimage from './PageImages/HeroImage.png'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <>
         <div className="relative w-full h-screen">
      <img src={Heroimage} alt='heroimage' className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 flex  mt-[250px] justify-center">
     
      <div>
      <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-purple-300 ring-1 ring-blue-500 hover:ring-purple-600">
              More services comming soon.{' '}
              
                <a className=' text-blue-100'>
                Read more <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
      
       <h1 className=' text-white text-center py-4 text-6xl font-Lato'>Expert Event <span className=' text-purple-300'>Services at</span>💫</h1>
       <h1 className=' text-white text-center text-6xl font-Lato'>Your Fingertips!</h1>
       <p className=' text-center  text-purple-100 font-Lato mt-6 text-lg leading-8'>Elevate your event with our premier services, meticulously crafted to delight and impress. Let our</p>
        <p className='text-center  text-purple-100 font-Lato text-lg leading-8'>stellar reviews guide you towards an experience that exceeds all expectations</p>
       <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link to='/login'>
              <button
              
              className="rounded-md   px-3.5 py-2.5 text-sm font-semibold border border-purple-500  hover:border-blue-600 text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Login as User
            </button>
              </Link>
              
              <Link to='/login'>
              <button   className="rounded-md  px-3.5 py-2.5 text-sm font-semibold border border-purple-500  hover:border-blue-600 text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                Login as Provider
              </button>
              </Link>
              
              
            </div>

      </div>
     
       
      </div>
    </div>
    </>
  )
}

export default Hero