import React from 'react'
import { Link } from 'react-router-dom'

const ProfileSidebar = () => {
  return (
    <div>
        {/* Sidebar */}
        <div className="w-[25rem] md:w-[20rem] lg:w-[25rem] h-[calc(107.5vh-4rem)] 
                        bg-gradient-to-b from-indigo-400 to-blue-800 
                        text-white sticky flex flex-col items-center p-2">
          
          {/* Profile Picture */}
          <div className="w-full flex justify-center mt-4">
            <img
              className="rounded-full object-cover border-4 border-white shadow-lg 
                         w-32 h-32 sm:w-36 sm:h-36 md:w-44 md:h-44 lg:w-48 lg:h-48"
              src="./images/pro1.png"
              alt="Profile"
            />
          </div>

          {/* Name */}
          <h2 className="text-2xl font-semibold mt-4 text-center">Kshitij thorat</h2>
          <p className="text-gray-300 text-center">Plumber</p>

          {/* Optional Sidebar Menu */}
          <div className="mt-8 w-full flex flex-col gap-3">
            
            <button className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition">
              Edit Profile
            </button>
            <Link to='/settings' className="px-[9.4rem] py-2 rounded-lg bg-white/10 hover:bg-white/20 transition">
              Settings
            </Link>
            <Link to='/login' className="px-[9.5rem] py-2 rounded-lg bg-white/10 hover:bg-red-500/70 hover:text-white transition">
              Logout
            </Link>
          </div>
        </div>
    </div>
  )
}

export default ProfileSidebar