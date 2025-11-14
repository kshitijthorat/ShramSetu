import React from 'react'
import UserNavbar from './UserNavbar'
import { FaPlus, FaHandsHelping, FaChartLine } from 'react-icons/fa';
import MorphingCard from '../../components/MorphingCard';
import { Link } from 'react-router-dom';

const NGOHome = () => {
  const posts = [
    {
      id: 1,
      name: "Ramesh Kumar",
      type: "Looking for Work",
      role: "Mason",
      location: "Pune, Maharashtra",
      pincode: "411001",
      description: "Experienced mason looking for work. Registered under our NGO skill program.",
      posted: "1 day ago",
      avatar: "https://i.pravatar.cc/150?img=25",
    },
    {
      id: 2,
      name: "Sita Group",
      type: "Group Available",
      role: "Cleaning Team (8 Members)",
      location: "Mumbai, Maharashtra",
      pincode: "400001",
      description: "Trained cleaning team under NGO supervision. Available for contracts.",
      posted: "2 days ago",
      avatar: "https://i.pravatar.cc/150?img=28",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f4f2ee]">
      <UserNavbar/>
      
      <div className="pt-20 px-6">
        {/* NGO Dashboard Header */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <div className="flex items-center gap-4">
            <FaHandsHelping className="text-4xl text-blue-500" />
            <div>
              <h1 className="text-2xl font-bold text-gray-800">NGO Dashboard</h1>
              <p className="text-gray-600">Manage and promote workers under your supervision</p>
            </div>
          </div>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-4 gap-4 mt-6">
            <div className="bg-blue-50 p-4 rounded-xl text-center">
              <p className="text-2xl font-bold text-blue-600">0</p>
              <p className="text-sm text-gray-600">Registered Workers</p>
            </div>
            <div className="bg-green-50 p-4 rounded-xl text-center">
              <p className="text-2xl font-bold text-green-600">{posts.length}</p>
              <p className="text-sm text-gray-600">Active Posts</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-xl text-center">
              <p className="text-2xl font-bold text-purple-600">0</p>
              <p className="text-sm text-gray-600">Placements</p>
            </div>
            <div className="bg-orange-50 p-4 rounded-xl text-center">
              <p className="text-2xl font-bold text-orange-600">0</p>
              <p className="text-sm text-gray-600">Training Programs</p>
            </div>
          </div>
        </div>

        {/* Worker Listings */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <MorphingCard key={post.id} post={post} />
          ))}
        </div>
      </div>

      {/* Floating Action Button - Register Worker */}
      <div className="fixed bottom-6 right-6 z-50">
        <Link
          to="/userpost"
          className="bg-blue-500 hover:bg-blue-400 text-white p-4 rounded-full shadow-lg hover:shadow-xl active:scale-95 transition-all duration-200 flex items-center justify-center"
          title="Register new worker"
        >
          <FaPlus className="text-2xl" />
        </Link>
      </div>
    </div>
  )
}

export default NGOHome
