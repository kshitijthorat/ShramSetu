import React, { useState } from 'react'
import UserNavbar from './UserNavbar'
import { FaPlus, FaBriefcase, FaCheckCircle } from 'react-icons/fa';
import MorphingCard from '../../components/MorphingCard';
import { Link } from 'react-router-dom';

const WorkerHome = () => {
  const [filter, setFilter] = useState('all');

  const posts = [
    {
      id: 1,
      name: "Ram Kumar",
      type: "Hiring Worker",
      role: "Electrician Needed",
      location: "Pune, Maharashtra",
      pincode: "411001",
      description: "Need experienced electrician for house wiring work. Duration: 1 week.",
      posted: "2 hours ago",
      avatar: "https://i.pravatar.cc/150?img=12",
    },
    {
      id: 2,
      name: "Sita Enterprises",
      type: "Hiring Worker",
      role: "Plumber Required",
      location: "Mumbai, Maharashtra",
      pincode: "400001",
      description: "Commercial building plumbing work. Team of 2-3 plumbers needed.",
      posted: "5 hours ago",
      avatar: "https://i.pravatar.cc/150?img=15",
    },
    {
      id: 3,
      name: "Anita Contractors",
      type: "Hiring Worker",
      role: "Mason Needed",
      location: "Nashik, Maharashtra",
      pincode: "422001",
      description: "Construction project requires skilled masons. Long-term work.",
      posted: "1 day ago",
      avatar: "https://i.pravatar.cc/150?img=18",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f4f2ee]">
      <UserNavbar/>
      
      <div className="pt-20 px-6">
        {/* Worker Dashboard Header */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <div className="flex items-center gap-4">
            <FaBriefcase className="text-4xl text-blue-500" />
            <div>
              <h1 className="text-2xl font-bold text-gray-800">Worker Dashboard</h1>
              <p className="text-gray-600">Find daily wage work opportunities in your area</p>
            </div>
          </div>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-4 mt-6">
            <div className="bg-blue-50 p-4 rounded-xl text-center">
              <p className="text-2xl font-bold text-blue-600">{posts.length}</p>
              <p className="text-sm text-gray-600">Available Jobs</p>
            </div>
            <div className="bg-green-50 p-4 rounded-xl text-center">
              <p className="text-2xl font-bold text-green-600">0</p>
              <p className="text-sm text-gray-600">Applications</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-xl text-center">
              <p className="text-2xl font-bold text-purple-600">0</p>
              <p className="text-sm text-gray-600">Completed</p>
            </div>
          </div>
        </div>

        {/* Job Listings */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <MorphingCard key={post.id} post={post} />
          ))}
        </div>
      </div>

      {/* Floating Action Button - Create Profile/Post */}
      <div className="fixed bottom-6 right-6 z-50">
        <Link
          to="/userpost"
          className="bg-blue-500 hover:bg-blue-400 text-white p-4 rounded-full shadow-lg hover:shadow-xl active:scale-95 transition-all duration-200 flex items-center justify-center"
          title="Update your profile or create post"
        >
          <FaPlus className="text-2xl" />
        </Link>
      </div>
    </div>
  )
}

export default WorkerHome
