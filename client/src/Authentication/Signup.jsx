import React, { useState } from 'react'
import PPlogo from './UserImage/PPlogo.png'
import { useNavigate } from 'react-router';
import axios from 'axios'
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { FaRegUser } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { CiLock } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { FaRegCircleQuestion } from "react-icons/fa6";





function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [answer, setAnswer] = useState("");
  const navigate = useNavigate();
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios
        .post("http://localhost:8080/api/v1/auth/register", {
          name,
          email,
          phone,
          password,
          answer,
        })
        .then((response) => {
          if (response.data.success) {
            toast.success(response.data.message);
            navigate("/login");
          } else {
            toast.error(response.data.message);
          }
        });
    } catch (error) {
      console.log(error);
      toast.error("somthing went wrong");
    }
  };

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
           
      
            <div className="relative w-full h-screen">
     
      <div className="absolute inset-0 flex items-center justify-center">
      <div className="flex min-h-full flex-1 flex-col justify-center px-6  mb-5 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm  ">
          <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <h2 className="mt-2 text-center text-3xl font-Lato font-bold leading-9 tracking-tight text-white">
            Register
          </h2>
        </div>

        <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium leading-6  ml-8 text-white">
                Your Name
              </label>
              <div className="mt-2 flex items-center">
              <FaRegUser className=' text-2xl  mr-4 text-blue-600' />
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  autoComplete="off"
                  required
                  className="block w-full outline-none rounded-md bg-transparent  py-1.5 text-white shadow-sm   placeholder:text-purple-400  hover:border-blue-700 border border-purple-500 ring-purple-500  sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="email" className="block text-sm  ml-8 font-medium leading-6 text-white">
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
                <label htmlFor="phone" className="block text-sm font-medium leading-6 ml-8 text-white">
                  Phone Number
                </label>
                
              </div>
              <div className="mt-2 flex items-center">
              <IoCallOutline  className=' text-2xl text-green-600 mr-4' />

                <input
                  id="phone"
                  name="phone"
                  type="number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  autoComplete="off"
                  required
                  className="block w-full rounded-md bg-transparent  py-1.5 text-white shadow-sm  outline-none border border-purple-500  placeholder:text-purple-400  hover:border-blue-700  sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <div className="flex items-center ml-8 justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-white">
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
              <div className="flex items-center justify-between">
                <label htmlFor="answer" className="block  ml-8 text-sm font-medium leading-6 text-white">
                Security question
                </label>
                
              </div>
              <div className="mt-2 flex items-center">
              <FaRegCircleQuestion className=' text-2xl mr-4 text-fuchsia-600' />

                <input
                  id="answer"
                  name="answer"
                  type="text"
                  value={answer}
                  onChange={(e) => setAnswer(e.target.value)}
                  autoComplete="off"
                  placeholder='What is your favourite colour ?'
                  required
                  className="block w-full rounded-md bg-transparent  py-1.5 text-white shadow-sm  outline-none border border-purple-500  placeholder:text-white  hover:border-blue-700  sm:text-sm sm:leading-6"
                />
              </div>
            </div>


            <div>
              <button
                type="submit"
                className="flex w-[350px] justify-center ml-9 rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Register
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Already have an account?{' '}
            <Link to='/login' className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              Login Now
            </Link>
          </p>
        </div>
      </div>
        
      </div>
    </div>
        
      </div>
    </div>
    </>
  )
}

export default Signup