import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className='bg-black w-full h-screen flex items-center justify-center'>
      <main className="text-center px-6 py-24 lg:px-8">
        <div>
          <p className="font-semibold text-8xl font-Lato  text-purple-600">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-purple-900 sm:text-5xl">Page not found</h1>
          <p className="mt-6 text-base leading-7 text-gray-600">Sorry, we couldn’t find the page you’re looking for.</p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              to='/home'
              className="rounded-md bg-purple-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Go back home
            </Link>
            <a href="#" className="text-sm font-semibold text-purple-600">
              Contact support <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}

export default NotFound;
