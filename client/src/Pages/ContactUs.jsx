import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function ContactUs() {
    const navigate= useNavigate
  return (
    <>
        <div className="min-h-screen w-full flex bg-black text-white">
      <div className="w-1/2 flex flex-col justify-center p-8 bg-gray-800">
        <h2 className="text-3xl font-bold mb-4">Get in touch</h2>
        <p className="text-gray-400 mb-6">
          Proin volutpat consequat porttitor cras nullam gravida at. Orci molestie a eu arcu. Sed ut tincidunt integer elementum id sem. Arcu sed malesuada et magna.
        </p>
        <div className="space-y-4">
          <p className="flex items-center">
            <svg className="w-6 h-6 mr-2 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C8.13401 2 5 5.13401 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13401 15.866 2 12 2ZM12 11.5C10.6193 11.5 9.5 10.3807 9.5 9C9.5 7.61929 10.6193 6.5 12 6.5C13.3807 6.5 14.5 7.61929 14.5 9C14.5 10.3807 13.3807 11.5 12 11.5Z" />
            </svg>
            545 Mavis Island, Chicago, IL 99191
          </p>
          <p className="flex items-center">
            <svg className="w-6 h-6 mr-2 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 3H4C2.897 3 2 3.897 2 5V19C2 20.103 2.897 21 4 21H20C21.103 21 22 20.103 22 19V5C22 3.897 21.103 3 20 3ZM20 19H4V8H20V19ZM20 6H4V5H20V6Z" />
            </svg>
            +1 (555) 234-5678
          </p>
          <p className="flex items-center">
            <svg className="w-6 h-6 mr-2 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.486 2 2 6.486 2 12C2 17.514 6.486 22 12 22C17.514 22 22 17.514 22 12C22 6.486 17.514 2 12 2ZM12 20C7.589 20 4 16.411 4 12C4 7.589 7.589 4 12 4C16.411 4 20 7.589 20 12C20 16.411 16.411 20 12 20ZM11 7H13V13H11V7ZM11 15H13V17H11V15Z" />
            </svg>
            hello@example.com
          </p>
        </div>
      </div>
      <div className="w-1/2 flex items-center justify-center p-8">
        <form className="w-full max-w-md">
          <div className="flex gap-4 mb-4">
            <div className="w-1/2">
              <label className="block text-sm font-semibold mb-2" htmlFor="first-name">First name</label>
              <input className="w-full px-4 py-2 bg-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-indigo-500" type="text" id="first-name" />
            </div>
            <div className="w-1/2">
              <label className="block text-sm font-semibold mb-2" htmlFor="last-name">Last name</label>
              <input className="w-full px-4 py-2 bg-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-indigo-500" type="text" id="last-name" />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2" htmlFor="email">Email</label>
            <input className="w-full px-4 py-2 bg-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-indigo-500" type="email" id="email" />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2" htmlFor="phone-number">Phone number</label>
            <input className="w-full px-4 py-2 bg-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-indigo-500" type="text" id="phone-number" />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2" htmlFor="message">Message</label>
            <textarea className="w-full px-4 py-2 bg-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-indigo-500" id="message" rows="4"></textarea>
          </div>
          <Link to='/home'><button className="w-full px-4 py-2 bg-indigo-600 rounded-md text-white hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500">Send message</button></Link>
        </form>
      </div>
    </div>
</>
  )
}

export default ContactUs