import React, { useState } from 'react'
import PPlogo from './UserImage/PPlogo.png'
import { useNavigate } from 'react-router'
import { useAuth } from '../context/auth'
import axios from 'axios'
import toast from 'react-hot-toast'
import { Link } from 'react-router-dom'
import { MdOutlineEmail } from "react-icons/md";
import { CiLock } from "react-icons/ci";


function Login() {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [auth,setAuth]= useAuth()
    const navigate = useNavigate();
  

    const handleSubmit=async(e)=>{
       
  
        e.preventDefault()
        try {
         
          const response = await axios.post('http://localhost:8080/api/v1/auth/login',{email,password}).then(response=>{
            
            if(response.data.success){
              toast.success(response.data.message)
              setAuth({
                ...auth,
                user:response.data.user,
                token:response.data.token,
              });
              localStorage.setItem('auth', JSON.stringify(response.data))
              navigate('/home')
            }
            else{
              toast.error(response.data.message)
            }
    
          })
          
        } catch (error) {
          console.log(error)
          toast.error('somthing went wrong')
          
        }
      }
  return (
    <>
           <div className='relative bg-black w-full h-full flex'>
            <div className='w-1/2 h-svh relative'>
                <img src={PPlogo} alt="login bg" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 flex flex-col justify-center items-center">
                    <h1 className='text-[98px] font-Lato font-semibold text-white'>Party <span className='text-purple-600 text-[98px] font-Lato font-semibold'>Planner</span></h1>
                    <p className=' text-white font-Lato text-xl'>Your Dreams, Our Expertise - Let's Party 🎉</p>
                 
                </div>
            </div>
            <div className='w-1/2 h-svh ' >
           
      
     
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-3xl font-Lato font-bold leading-9 tracking-tight text-white">
          Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit}>
            

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="email" className="block text-sm font-medium leading-6 ml-10 text-white">
                  Your Email
                </label>
                
              </div>
              <div className="mt-2 flex items-center">
              <MdOutlineEmail className=' text-3xl text-pink-600 mr-4' />
              
                <input
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  autoComplete="off"
                  required
                  className="block w-full rounded-md bg-transparent  py-1.5 text-white shadow-sm  outline-none border border-purple-500  placeholder:text-purple-400  hover:border-blue-700  sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            
            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium ml-10 leading-6 text-white">
                  Password
                </label>
                
              </div>
              <div className="mt-2 flex items-center">
              <CiLock className=' text-3xl mr-4 text-yellow-400' />

                <input
                  id="password"
                  name="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md bg-transparent  py-1.5 text-white shadow-sm  outline-none border border-purple-500  placeholder:text-purple-400  hover:border-blue-700  sm:text-sm sm:leading-6"
                />
              </div>
            </div>
           


            <div>
              <button
                type="submit"
                className="flex  w-[350px] ml-10 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
        Don't have an account?{' '}
        <Link to="/signup" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
          register now
        </Link>
      </p>
        </div>
      </div>
        
      </div>
    </div>
            
        
    </>
  )
}

export default Login