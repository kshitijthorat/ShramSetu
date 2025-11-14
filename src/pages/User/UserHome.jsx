import React, { useState } from 'react'
import UserNavbar from './UserNavbar'
import { FaPlus, FaFilter } from 'react-icons/fa';
import UserCard from '../../components/UserCard';
import { Link } from 'react-router-dom';
import MorphingCard from '../../components/MorphingCard';


const UserHome = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterType, setFilterType] = useState("all");
  const [filterLocation, setFilterLocation] = useState("");

    const posts = [
  {
    id: 1,
    name: "Rahul Patil",
    type: "Looking for Work",
    role: "Electrician",
    location: "Pune",
    city: "Pune",
    pincode: "411001",
    description:
      "Experienced electrician available for residential and commercial work. Can handle wiring, repairs, and installations.",
    posted: "2 days ago",
    avatar: "https://i.pravatar.cc/150?img=1",
  },
  {
    id: 2,
    name: "Shakti Painters",
    type: "Group Available",
    role: "Painters",
    location: "Mumbai",
    city: "Mumbai",
    pincode: "400001",
    description:
      "Group of 5 skilled painters available for building and home painting contracts.",
    posted: "1 day ago",
    avatar: "https://i.pravatar.cc/150?img=5",
  },
  {
    id: 3,
    name: "Anita Joshi",
    type: "Hiring Worker",
    role: "Plumber",
    location: "Nashik",
    city: "Nashik",
    pincode: "422001",
    description:
      "Need a reliable plumber for a bathroom renovation project. Work for 2 weeks.",
    posted: "5 hours ago",
    avatar: "https://i.pravatar.cc/150?img=8",
  },
  {
    id: 4,
    name: "Manoj Kumar",
    type: "Looking for Work",
    role: "Mason",
    location: "Pune",
    city: "Pune",
    pincode: "411002",
    description:
      "Experienced mason with 10+ years in construction. Available for immediate work.",
    posted: "1 day ago",
    avatar: "https://i.pravatar.cc/150?img=10",
  },
  {
    id: 5,
    name: "Builder Group",
    type: "Hiring Worker",
    role: "Carpenter",
    location: "Mumbai",
    city: "Mumbai",
    pincode: "400002",
    description:
      "Need skilled carpenter for furniture work in new residential project.",
    posted: "3 days ago",
    avatar: "https://i.pravatar.cc/150?img=12",
  },
  {
    id: 6,
    name: "Suresh Electricals",
    type: "Group Available",
    role: "Electrician",
    location: "Pune",
    city: "Pune",
    pincode: "411003",
    description:
      "Team of 3 certified electricians available for commercial and residential projects.",
    posted: "4 hours ago",
    avatar: "https://i.pravatar.cc/150?img=14",
  },
  {
    id: 7,
    name: "Ramesh Welder",
    type: "Looking for Work",
    role: "Welder",
    location: "Nashik",
    city: "Nashik",
    pincode: "422002",
    description:
      "Professional welder with experience in industrial and construction welding.",
    posted: "2 days ago",
    avatar: "https://i.pravatar.cc/150?img=16",
  },
  {
    id: 8,
    name: "Clean Masters",
    type: "Group Available",
    role: "Cleaner",
    location: "Mumbai",
    city: "Mumbai",
    pincode: "400003",
    description:
      "Professional cleaning team of 8 members available for commercial and residential cleaning.",
    posted: "1 day ago",
    avatar: "https://i.pravatar.cc/150?img=18",
  },
];

  // Filter posts based on search query and filters
  const filteredPosts = posts.filter(post => {
    const matchesSearch = 
      post.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.pincode.includes(searchQuery) ||
      post.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesType = filterType === "all" || post.type === filterType;
    const matchesLocation = filterLocation === "" || 
      post.city.toLowerCase().includes(filterLocation.toLowerCase()) ||
      post.pincode.includes(filterLocation);

    return matchesSearch && matchesType && matchesLocation;
  });

  return (
    <div>
        <UserNavbar onSearch={setSearchQuery}/>
        <div className="min-h-screen bg-[#f4f2ee] text-gray-800 w-full flex flex-col pt-20 px-6">
          
          {/* Filter Bar */}
          <div className="bg-white rounded-2xl shadow-lg p-4 mb-6 flex flex-wrap gap-4 items-center">
            <FaFilter className="text-blue-500 text-xl" />
            
            <select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              className="border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-blue-400 outline-none"
            >
              <option value="all">All Types</option>
              <option value="Looking for Work">Looking for Work</option>
              <option value="Hiring Worker">Hiring Worker</option>
              <option value="Group Available">Group Available</option>
            </select>

            <input
              type="text"
              placeholder="Filter by location or pincode"
              value={filterLocation}
              onChange={(e) => setFilterLocation(e.target.value)}
              className="border border-gray-300 rounded-xl px-4 py-2 flex-1 min-w-[200px] focus:ring-2 focus:ring-blue-400 outline-none"
            />

            {(filterType !== "all" || filterLocation !== "") && (
              <button
                onClick={() => {
                  setFilterType("all");
                  setFilterLocation("");
                }}
                className="bg-red-500 text-white px-4 py-2 rounded-xl hover:bg-red-600 transition active:scale-95"
              >
                Clear Filters
              </button>
            )}

            <div className="ml-auto text-gray-600 font-medium">
              {filteredPosts.length} results found
            </div>
          </div>
          
          {/* Posts Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.length > 0 ? (
              filteredPosts.map((post) => (
                <MorphingCard key={post.id} post={post} />
              ))
            ) : (
              <div className="col-span-full text-center py-20">
                <p className="text-2xl text-gray-500">No results found</p>
                <p className="text-gray-400 mt-2">Try adjusting your search or filters</p>
              </div>
            )}
          </div>
        </div>
        
     <div className="fixed bottom-6 right-6 z-50">
  <Link
    to="/userpost"
    className="bg-blue-500 hover:bg-blue-400 text-white p-4 rounded-full shadow-lg hover:shadow-xl active:scale-95 transition-all duration-200 flex items-center justify-center"
    title="Post a job or requirement"
  >
    <FaPlus className="text-2xl" />
  </Link>
</div>

    </div>
  )
}

export default UserHome