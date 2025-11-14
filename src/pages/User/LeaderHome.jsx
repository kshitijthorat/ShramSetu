import React from 'react'
import UserNavbar from './UserNavbar'
import { FaPlus, FaUsers, FaTasks } from 'react-icons/fa';
import MorphingCard from '../../components/MorphingCard';
import { Link } from 'react-router-dom';

const LeaderHome = () => {
  const posts = [
    {
      id: 1,
      name: "Construction Corp",
      type: "Hiring Group",
      role: "Painting Team Needed",
      location: "Pune, Maharashtra",
      pincode: "411001",
      description: "Need a group of 5-7 painters for residential complex. 2 months project.",
      posted: "1 day ago",
      avatar: "https://i.pravatar.cc/150?img=20",
    },
    {
      id: 2,
      name: "Infrastructure Ltd",
      type: "Hiring Group",
      role: "Electrician Team Required",
      location: "Mumbai, Maharashtra",
      pincode: "400001",
      description: "Commercial building electrical work. Team of 10+ electricians needed.",
      posted: "3 days ago",
      avatar: "https://i.pravatar.cc/150?img=22",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f4f2ee]">
      <UserNavbar/>
      
      <div className="pt-20 px-6">
        {/* Leader Dashboard Header */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <div className="flex items-center gap-4">
            <FaUsers className="text-4xl text-blue-500" />
            <div>
              <h1 className="text-2xl font-bold text-gray-800">Group Leader Dashboard</h1>
              <p className="text-gray-600">Manage your team and find group work contracts</p>
            </div>
          </div>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-4 gap-4 mt-6">
            <div className="bg-blue-50 p-4 rounded-xl text-center">
              <p className="text-2xl font-bold text-blue-600">{posts.length}</p>
              <p className="text-sm text-gray-600">Group Contracts</p>
            </div>
            <div className="bg-green-50 p-4 rounded-xl text-center">
              <p className="text-2xl font-bold text-green-600">0</p>
              <p className="text-sm text-gray-600">Team Members</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-xl text-center">
              <p className="text-2xl font-bold text-purple-600">0</p>
              <p className="text-sm text-gray-600">Active Projects</p>
            </div>
            <div className="bg-orange-50 p-4 rounded-xl text-center">
              <p className="text-2xl font-bold text-orange-600">0</p>
              <p className="text-sm text-gray-600">Completed</p>
            </div>
          </div>
        </div>

        {/* Group Contract Listings */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <MorphingCard key={post.id} post={post} />
          ))}
        </div>
      </div>

      {/* Floating Action Button - Manage Group */}
      <div className="fixed bottom-6 right-6 z-50">
        <Link
          to="/userpost"
          className="bg-blue-500 hover:bg-blue-400 text-white p-4 rounded-full shadow-lg hover:shadow-xl active:scale-95 transition-all duration-200 flex items-center justify-center"
          title="Post group availability"
        >
          <FaPlus className="text-2xl" />
        </Link>
      </div>
    </div>
  )
}

export default LeaderHome
