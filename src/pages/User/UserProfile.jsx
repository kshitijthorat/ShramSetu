import React from 'react'
import UserNavbar from './UserNavbar'
import HistoryCard from '../../components/HistoryCard'
import { Link } from 'react-router-dom';

const userHistory = [
  {
    id: 1,
    title: "Looking for Electrician Work",
    type: "Job Request",
    date: "15 Sep 2025",
    status: "Accepted",
  },
  {
    id: 2,
    title: "Hiring a Painter",
    type: "Hiring Post",
    date: "25 Sep 2025",
    status: "Rejected",
  },
  {
    id: 3,
    title: "Mason Work for Site",
    type: "Job Request",
    date: "5 Oct 2025",
    status: "Pending",
  },
];


const UserProfile = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 w-full flex flex-col">
      {/* Navbar */}
      <UserNavbar />

      {/* Main Layout */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <div className="w-[25rem] md:w-[20rem] lg:w-[25rem] h-[calc(100vh-4rem)] 
                        bg-gradient-to-b from-indigo-400 to-blue-800 
                        text-white sticky top-[4rem] flex flex-col items-center p-6">
          
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
          <h2 className="text-2xl font-semibold mt-4 text-center">John Doe</h2>
          <p className="text-gray-300 text-center">@johndoe</p>

          {/* Optional Sidebar Menu */}
          <div className="mt-8 w-full flex flex-col gap-3">
            
            <button className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition">
              Edit Profile
            </button>
            <button className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition">
              Settings
            </button>
            <Link to='/login' className="px-[9.5rem] py-2 rounded-lg bg-white/10 hover:bg-red-500/70 hover:text-white transition">
              Logout
            </Link>
          </div>
        </div>

        {/* Main Content Area */}
         <div className="flex-1 flex flex-col items-center overflow-y-auto max-h-[calc(100vh-4rem)] p-4">
        <div className="mt-3 flex flex-col w-full max-w-[60rem] bg-white rounded-2xl shadow-md p-4">
        <h2 className="text-xl font-bold mb-3">📜 History</h2>

        <div className="flex flex-col gap-3">
          {userHistory.length > 0 ? (
            userHistory.map((item) => (
              <HistoryCard key={item.id} history={item} />
            ))
          ) : (
            <p className="text-gray-500 italic">No history available</p>
          )}
        </div>
      </div>
      </div>
      </div>
    </div>
  )
}

export default UserProfile
