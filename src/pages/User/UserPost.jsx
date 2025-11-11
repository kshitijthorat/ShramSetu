import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import UserNavbar from "./UserNavbar";
import BackButton from "../../components/BackButton";

const UserPost = () => {
  const navigate = useNavigate();
  const [postData, setPostData] = useState({
    type: "",
    title: "",
    description: "",
    location: "",
    contact: "",
  });

  const handleChange = (e) => {
    setPostData({ ...postData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // stops page reload
    console.log("Post Data:", postData);
    alert("Post submitted successfully!");
    // You can send data to backend here
  };

  const handleCancel = () => {
    navigate("/userhome"); // redirects to homepage
  };

  return (
    <div>

    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4 flex-col">
      <BackButton to="/userhome" />
      <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-lg">
        <h2 className="text-2xl font-bold text-center mb-4 text-gray-800">
          Create a New Post
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">

          {/* Post Type */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Post Type
            </label>
            <select
              name="type"
              value={postData.type}
              onChange={handleChange}
              required
              className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400"
            >
              <option value="">Select Type</option>
              <option value="Individual Worker">Individual Worker</option>
              <option value="Group Leader">Group Leader</option>
              <option value="NGO">NGO</option>
            </select>
          </div>

          {/* Title */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Job Title / Role
            </label>
            <input
              type="text"
              name="title"
              value={postData.title}
              onChange={handleChange}
              placeholder="e.g. Looking for Electrician Work"
              required
              className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Description
            </label>
            <textarea
              name="description"
              value={postData.description}
              onChange={handleChange}
              rows="4"
              placeholder="Write a short description of your work or group..."
              required
              className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400"
            ></textarea>
          </div>

          {/* Location */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Location
            </label>
            <input
              type="text"
              name="location"
              value={postData.location}
              onChange={handleChange}
              placeholder="e.g. Pune, Maharashtra"
              required
              className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400"
            />
          </div>
           {/* pincode */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Pincode
            </label>
            <input
              type="number"
              name="pincode"
              value={postData.pincode}
              onChange={handleChange}
              required
              className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Contact */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Contact Number
            </label>
            <input
              type="tel"
              name="contact"
              value={postData.contact}
              onChange={handleChange}
              placeholder="e.g. 9876543210"
              required
              className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-between pt-4">
            <button
              type="button"
              onClick={handleCancel}
              className="bg-gray-400 text-white px-6 py-2 rounded-lg hover:bg-gray-500 transition active:scale-95"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition active:scale-95"
            >
              Post
            </button>
          </div>
        </form>
      </div>
    </div>
    </div>
  );
};

export default UserPost;
