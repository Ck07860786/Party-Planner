import React from 'react'
import { NavLink } from 'react-router-dom'
import { LuUserCircle } from "react-icons/lu";
import { PiHandshakeFill } from "react-icons/pi";

function UserMenu() {
  return (
    <div>
         <aside className=" bg-black text-white ml-28 w-80 min-h-screen">
            <div className="p-4 text-center">
                <h1 className="text-xl font-semibold  text-black mb-4">User Panel</h1>
                <ul>
                    <li>
                        <NavLink to="/dashboard/user/services" className=" py-2 flex items-center px-4  hover:bg-purple-400 hover:rounded-lg"><PiHandshakeFill size={35}  className=' text-purple-600 mr-2' />All Services</NavLink>
                    </li>
    
                    <li>
                        <NavLink to="/dashboard/user/profile" className=" py-2 flex items-center px-4  hover:bg-purple-400 hover:rounded-lg"><LuUserCircle size={35}  className=' text-purple-600 mr-4' /> Profile</NavLink>
                    </li>
                </ul>
            </div>
        </aside>
    </div>
  )
}

export default UserMenu