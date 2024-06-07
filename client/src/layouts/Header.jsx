import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../context/auth";
import { ChevronDownIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/20/solid';
import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import useCategory from "../hooks/useCategory";

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

function Header() {
  const [auth, setAuth] = useAuth();
  const categories = useCategory();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.clear('token');
    toast.success('Logout successfully');
  };

  return (
    <>
      <div className="w-full bg-black">
        <header />
        <div className="w-full border-b-2 border-purple-600 h-20 flex items-center justify-between px-4 md:px-8 lg:px-32 shadow-sm">
          <div>
            <h1 className="text-white text-2xl font-Lato">
              Party<span className="text-purple-700">Planner</span>
            </h1>
          </div>

          <div className="hidden md:flex text-white gap-4 lg:gap-8 font-Lato">
            <p>
              <Link to="/home">Home</Link>
            </p>
            <p>
              <Link to="/about">About</Link>
            </p>
            <p>
              <Link to="/contact">Contact</Link>
            </p>
            <p>
              <Link to="#">Services</Link>
            </p>
          </div>

          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-black px-3 py-2 text-sm font-semibold text-white border border-purple-600 shadow-sm outline-none">
                Categories
                <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
              </Menu.Button>
            </div>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-black border border-purple-600 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  <Menu.Item className='bg-black'>
                    {({ active }) => (
                      <NavLink to={`/categories`}
                        className={classNames(
                          active ? 'bg-purple-500 text-gray-900' : 'text-white',
                          'block px-4 py-2 text-sm'
                        )}
                      >
                        All Categories
                      </NavLink>
                    )}
                  </Menu.Item>
                  {categories?.map((c) => (
                    <Menu.Item className='bg-black text-white' key={c._id}>
                      {({ active }) => (
                        <NavLink to={`/category/${c.slug}`}
                          className={classNames(
                            active ? 'bg-purple-500 text-gray-900' : 'text-gray-700',
                            'block px-4 py-2 text-sm'
                          )}
                        >
                          {c.name}
                        </NavLink>
                      )}
                    </Menu.Item>
                  ))}
                </div>
              </Menu.Items>
            </Transition>
          </Menu>

          <div className="hidden md:flex gap-4 font-Lato">
            {
              !auth.user ? (
                <>
                  <Link to="/login">
                    <button className="rounded-md px-3.5 py-2.5 text-sm font-semibold border border-purple-500 hover:border-blue-600 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                      Login
                    </button>
                  </Link>
                  <Link to="/signup">
                    <button className="rounded-md px-3.5 py-2.5 text-sm font-semibold border border-purple-500 hover:border-blue-600 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                      Register
                    </button>
                  </Link>
                </>
              ) :
                (
                  <Menu as="div" className="relative inline-block text-left">
                    <div>
                      <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-purple-600 px-3 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-inset">
                        {auth?.user?.name}
                        <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
                      </Menu.Button>
                    </div>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-black text-white shadow-lg ring-1 ring-purple-600">
                        <div className="py-1">
                          <Menu.Item>
                            {({ active }) => (
                              <NavLink
                                to={`/dashboard/${auth?.user?.role === 1 ? "admin" : "user"}`}
                                className={classNames(
                                  active ? 'bg-purple-400 text-white' : 'text-purple-200',
                                  'block px-4 py-2 text-sm'
                                )}
                              >
                                Dashboard
                              </NavLink>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <NavLink onClick={handleLogout} to='/login'
                                className={classNames(
                                  active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                  'block px-4 py-2 text-sm'
                                )}
                              >
                                Logout
                              </NavLink>
                            )}
                          </Menu.Item>
                        </div>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                )
            }
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-white focus:outline-none">
              {mobileMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden flex flex-col bg-black border-t border-purple-600">
            <Link to="/home" className="text-white px-4 py-2">Home</Link>
            <Link to="/about" className="text-white px-4 py-2">About</Link>
            <Link to="/contact" className="text-white px-4 py-2">Contact</Link>
            <Link to="#" className="text-white px-4 py-2">Services</Link>
            
            {!auth.user ? (
              <>
                <Link to="/login" className="text-white px-4 py-2">Login</Link>
                <Link to="/signup" className="text-white px-4 py-2">Register</Link>
              </>
            ) : (
              <>
                <NavLink to={`/dashboard/${auth?.user?.role === 1 ? "admin" : "user"}`} className="text-white px-4 py-2">
                  Dashboard
                </NavLink>
                <NavLink onClick={handleLogout} to='/login' className="text-white px-4 py-2">
                  Logout
                </NavLink>
              </>
            )}
          </div>
        )}
      </div>
    </>
  );
}

export default Header;
