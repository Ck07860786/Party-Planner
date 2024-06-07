import React from 'react';
import { NavLink } from 'react-router-dom';
import { LuUserCircle } from "react-icons/lu";
import { PiHandshakeFill } from "react-icons/pi";

function UserMenu() {
  return (
    <div>
      <aside className="bg-black mt-10 text-white md:ml-10 w-full md:w-60 min-h-screen p-4">
        <div className="text-center md:text-left">
          <ul>
            <li className="mb-2">
              <NavLink
                to="/dashboard/user/services"
                className="py-2 flex items-center px-4 hover:bg-purple-400 hover:rounded-lg"
              >
                <PiHandshakeFill size={35} className="text-purple-600 mr-2" />
                <span className="hidden md:inline">All Services</span>
              </NavLink>
            </li>
            <li className="mb-2">
              <NavLink
                to="/dashboard/user/profile"
                className="py-2 flex items-center px-4 hover:bg-purple-400 hover:rounded-lg"
              >
                <LuUserCircle size={35} className="text-purple-600 mr-4" />
                <span className="hidden md:inline">Profile</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
}

export default UserMenu;
