import React from 'react'
import UserNavbar from './UserNavbar'
import { FaPlus } from 'react-icons/fa';
import UserCard from '../../components/UserCard';
import { Link } from 'react-router-dom';


const UserHome = () => {

    const posts = [
  {
    id: 1,
    name: "Rahul Patil",
    type: "Looking for Work",
    role: "Electrician",
    location: "Pune, Maharashtra",
    description:
      "Experienced electrician available for residential and commercial work. Can handle wiring, repairs, and installations.",
    posted: "2 days ago",
    avatar: "https://i.pravatar.cc/150?img=1",
  },
  {
    id: 2,
    name: "Group: Shakti Painters",
    type: "Group Available",
    role: "Painters (5 Members)",
    location: "Mumbai, Maharashtra",
    description:
      "Group of 5 skilled painters available for building and home painting contracts.",
    posted: "1 day ago",
    avatar: "https://i.pravatar.cc/150?img=5",
  },
  {
    id: 3,
    name: "Anita Joshi",
    type: "Hiring Worker",
    role: "Plumber Needed",
    location: "Nashik, Maharashtra",
    description:
      "Need a reliable plumber for a bathroom renovation project. Work for 2 weeks.",
    posted: "5 hours ago",
    avatar: "https://i.pravatar.cc/150?img=8",
  },
  {
    id: 4,
    name: "Anita Joshi",
    type: "Hiring Worker",
    role: "Plumber Needed",
    location: "Nashik, Maharashtra",
    description:
      "Need a reliable plumber for a bathroom renovation project. Work for 2 weeks.",
    posted: "5 hours ago",
    avatar: "https://i.pravatar.cc/150?img=8",
  },
  {
    id: 5,
    name: "Anita Joshi",
    type: "Hiring Worker",
    role: "Plumber Needed",
    location: "Nashik, Maharashtra",
    description:
      "Need a reliable plumber for a bathroom renovation project. Work for 2 weeks.",
    posted: "5 hours ago",
    avatar: "https://i.pravatar.cc/150?img=8",
  },
  {
    id: 6,
    name: "Anita Joshi",
    type: "Hiring Worker",
    role: "Plumber Needed",
    location: "Nashik, Maharashtra",
    description:
      "Need a reliable plumber for a bathroom renovation project. Work for 2 weeks.",
    posted: "5 hours ago",
    avatar: "https://i.pravatar.cc/150?img=8",
  },
  {
    id: 7,
    name: "Anita Joshi",
    type: "Hiring Worker",
    role: "Plumber Needed",
    location: "Nashik, Maharashtra",
    description:
      "Need a reliable plumber for a bathroom renovation project. Work for 2 weeks.",
    posted: "5 hours ago",
    avatar: "https://i.pravatar.cc/150?img=8",
  },
  {
    id: 8,
    name: "Anita Joshi",
    type: "Hiring Worker",
    role: "Plumber Needed",
    location: "Nashik, Maharashtra",
    description:
      "Need a reliable plumber for a bathroom renovation project. Work for 2 weeks.",
    posted: "5 hours ago",
    avatar: "https://i.pravatar.cc/150?img=8",
  },
  {
    id: 9,
    name: "Anita Joshi",
    type: "Hiring Worker",
    role: "Plumber Needed",
    location: "Nashik, Maharashtra",
    description:
      "Need a reliable plumber for a bathroom renovation project. Work for 2 weeks.",
    posted: "5 hours ago",
    avatar: "https://i.pravatar.cc/150?img=8",
  },
  {
    id: 10,
    name: "Anita Joshi",
    type: "Hiring Worker",
    role: "Plumber Needed",
    location: "Nashik, Maharashtra",
    description:
      "Need a reliable plumber for a bathroom renovation project. Work for 2 weeks.",
    posted: "5 hours ago",
    avatar: "https://i.pravatar.cc/150?img=8",
  },
 
];

  return (
    <div>
        <UserNavbar/>
        <div className="min-h-screen bg-[#f4f2ee] text-gray-800 w-full flex flex-row">
          

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-25 ml-2">
        {posts.map((post) => (
          <UserCard key={post.id} post={post} />
        ))}
      </div>
      </div>
     <div className="fixed bottom-6 right-6 z-50">
  <Link
    to="/userpost"
    className="bg-blue-500 hover:bg-blue-400 text-white p-4 rounded-full shadow-lg hover:shadow-xl active:scale-95 transition-all duration-200 flex items-center justify-center"
  >
    <FaPlus className="text-2xl" />
  </Link>
</div>

    </div>
  )
}

export default UserHome