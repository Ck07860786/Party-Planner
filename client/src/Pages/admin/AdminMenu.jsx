import React from 'react'
import { NavLink } from 'react-router-dom'



function AdminMenu() {
  return (
    <div>
         <aside className=" bg-black text-white  ml-7 w-80 min-h-screen">
            <div className=" p-2  text-center font-Lato  mt-8">
                
                <ul>
                    <li>
                        <NavLink to="/dashboard/admin/create-category" className=" py-2 px-4 flex items-center  hover:bg-purple-400 hover:rounded-lg"> Create Service Category</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/admin/create-service" className=" flex items-center py-2 px-4 hover:bg-purple-400 hover:rounded-lg">  Create Service</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/admin/services" className=" py-2  flex items-center px-4  hover:bg-purple-400 hover:rounded-lg">All Services</NavLink>
                    </li>
                    
                    <li>
                        <NavLink to="/dashboard/admin/profile" className="block py-2 flex items-center px-4 hover:bg-purple-400 hover:rounded-lg">Profile</NavLink>
                    </li>
                </ul>
            </div>
        </aside>
    </div>
  )
}

export default AdminMenu