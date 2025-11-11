import React from "react";
import { FaMapMarkerAlt, FaUser, FaUsers } from "react-icons/fa";
import { Link } from "react-router-dom";

const UserCard = ({ post }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-5 flex flex-col hover:shadow-xl transition">
      {/* Profile Section */}
      <div className="flex items-center gap-4 mb-3">
        <img
          src={post.avatar}
          alt={post.name}
          className="w-14 h-14 rounded-full object-cover border-2 border-blue-400"
        />
        <div>
          <h2 className="font-semibold text-lg flex items-center gap-2">
            {post.type === "Group Available" ? <FaUsers /> : <FaUser />}
            {post.name}
          </h2>
          <p className="text-sm text-gray-500">{post.role}</p>
        </div>
      </div>

      {/* Location & Posted */}
      <div className="flex justify-between items-center text-sm text-gray-500 mb-2">
        <div className="flex items-center gap-1">
          <FaMapMarkerAlt className="text-blue-500" />
          {post.location}
        </div>
        <span>{post.posted}</span>
      </div>

      {/* Description */}
      <p className="text-gray-700 text-sm mb-4 line-clamp-3">
        {post.description}
      </p>

      {/* CTA Button */}
      <Link to='/viewdetails' className="mt-auto bg-blue-500 text-white py-2 px-27 rounded-xl hover:bg-blue-600 transition">
        View Details
      </Link>
    </div>
  );
};

export default UserCard;
