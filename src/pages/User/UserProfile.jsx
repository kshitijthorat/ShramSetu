import React from 'react'
import UserNavbar from './UserNavbar'
import HistoryCard from '../../components/HistoryCard'
import { Link, useNavigate } from 'react-router-dom';
import ProfileSidebar from '../../components/ProfileSidebar';
import { FaArrowLeft, FaPlus } from 'react-icons/fa';
import BackButton from '../../components/BackButton';


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

      {/* Main Layout */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <ProfileSidebar/>

        {/* Main Content Area */}
         <div className="flex-1 flex flex-col items-center overflow-y-auto max-h-[calc(100vh-4rem)] p-4">
          <div className="fixed top-6 right-6 z-50">
            <BackButton to="/userhome">
            </BackButton>
          </div>
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
