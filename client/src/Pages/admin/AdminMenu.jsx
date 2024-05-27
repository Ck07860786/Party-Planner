import React from 'react'
import { NavLink } from 'react-router-dom'
import { IoDuplicateOutline } from "react-icons/io5";
import { FiBox } from "react-icons/fi";
import { PiHandshakeFill } from "react-icons/pi";
import { CgProfile } from "react-icons/cg";





function AdminMenu() {
  return (
    <div>
         <aside className=" bg-black text-white  ml-7 w-80 min-h-screen">
            <div className=" p-2  text-center font-Lato  mt-8">
                
                <ul>
                    <li>
                        <NavLink to="/dashboard/admin/create-category" className=" py-2 px-4 flex items-center  hover:bg-purple-400 hover:rounded-lg"><IoDuplicateOutline size={35} className=' text-purple-700 mr-2' />  Create Service Category</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/admin/create-service" className=" flex items-center py-2 px-4 hover:bg-purple-400 hover:rounded-lg"> <FiBox size={35}  className=' text-purple-600 mr-2'/> Create Service</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/admin/services" className=" py-2  flex items-center px-4  hover:bg-purple-400 hover:rounded-lg"> <PiHandshakeFill size={35} className=' text-purple-600 mr-2' />All Services</NavLink>
                    </li>
                    
                    <li>
                        <NavLink to="/dashboard/admin/profile" className="block py-2 flex items-center px-4 hover:bg-purple-400 hover:rounded-lg"> <CgProfile size={35} className=' text-purple-600  mr-2' /> Profile</NavLink>
                    </li>
                </ul>
            </div>
        </aside>
    </div>
  )
}

export default AdminMenu