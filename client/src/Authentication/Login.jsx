import React, { useState } from 'react';
import PPlogo from './UserImage/PPlogo.png';
import { useNavigate } from 'react-router';
import { useAuth } from '../context/auth';
import axios from 'axios';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { MdOutlineEmail } from "react-icons/md";
import { CiLock } from "react-icons/ci";
import { BASE_URL } from '../Helper/PortUrl';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${BASE_URL}/api/v1/auth/login`, { email, password }).then(response => {
        if (response.data.success) {
          toast.success(response.data.message);
          setAuth({
            ...auth,
            user: response.data.user,
            token: response.data.token,
          });
          localStorage.setItem('auth', JSON.stringify(response.data));
          navigate('/home');
        } else {
          toast.error(response.data.message);
        }
      });
    } catch (error) {
      console.log(error);
      toast.error('Something went wrong');
    }
  };

  return (
    <div className="flex bg-black flex-col md:flex-row min-h-screen">
      <div className="relative w-full md:w-1/2 h-64 md:h-auto">
        <img src={PPlogo} alt="login bg" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-60">
          <h1 className="text-4xl md:text-6xl font-Lato font-semibold text-white">Party<span className="text-purple-600">Planner</span></h1>
          <p className="text-white font-Lato text-lg md:text-xl mt-2 text-center">Your Dreams, Our Expertise - Let's Party 🎉</p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center w-full md:w-1/2 p-6 md:p-12">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-3xl font-Lato font-bold leading-9 tracking-tight text-white">
            Sign in to your account
          </h2>
        </div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-md w-full">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-white">
                  Your Email
                </label>
                <div className="mt-2 flex items-center">
                  <MdOutlineEmail className="text-3xl text-pink-600 mr-4" />
                  <input
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    autoComplete="off"
                    required
                    className="block w-full rounded-md bg-transparent py-1.5 text-white shadow-sm outline-none border border-purple-500 placeholder:text-purple-400 hover:border-blue-700 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-white">
                  Password
                </label>
                <div className="mt-2 flex items-center">
                  <CiLock className="text-3xl mr-4 text-yellow-400" />
                  <input
                    id="password"
                    name="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    autoComplete="current-password"
                    required
                    className="block w-full rounded-md bg-transparent py-1.5 text-white shadow-sm outline-none border border-purple-500 placeholder:text-purple-400 hover:border-blue-700 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign in
                </button>
              </div>
            </div>
          </form>
          <p className="mt-10 text-center text-sm text-gray-500">
            Don't have an account?{' '}
            <Link to="/signup" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              Register now
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
