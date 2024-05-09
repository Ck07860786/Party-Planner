import React from 'react'
import { NavLink } from 'react-router-dom'

function UserMenu() {
  return (
    <div>
         <aside className=" bg-black text-white ml-28 w-80 min-h-screen">
            <div className="p-4 text-center">
                <h1 className="text-xl font-semibold  text-black mb-4">User Panel</h1>
                <ul>
                    <li>
                        <NavLink to="/dashboard/user/services" className=" py-2 px-4 flex items-center  hover:bg-purple-400 hover:rounded-lg">All Services</NavLink>
                    </li>
    
                    <li>
                        <NavLink to="/dashboard/user/profile" className="block py-2 flex items-center px-4  hover:bg-purple-400 hover:rounded-lg">Profile</NavLink>
                    </li>
                </ul>
            </div>
        </aside>
    </div>
  )
}

export default UserMenu