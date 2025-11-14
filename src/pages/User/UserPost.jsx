import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import UserNavbar from "./UserNavbar";
import BackButton from "../../components/BackButton";
import { motion } from "framer-motion";

const UserPost = () => {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(null);
  const [postData, setPostData] = useState({
    type: "",
    title: "",
    skill: "",
    description: "",
    city: "",
    pincode: "",
    contact: "",
    experience: "",
    availability: "immediate",
    wage: "",
  });

  useEffect(() => {
    // Get current user
    const user = JSON.parse(localStorage.getItem('currentUser'));
    setCurrentUser(user);
    
    // Pre-fill some data based on user profile
    if (user) {
      setPostData(prev => ({
        ...prev,
        contact: user.phone,
        city: user.city || "",
        pincode: user.pincode || "",
        skill: user.skill || "",
      }));
    }
  }, []);

  const handleChange = (e) => {
    setPostData({ ...postData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newPost = {
      ...postData,
      id: Date.now(),
      postedBy: currentUser ? `${currentUser.fname} ${currentUser.lname}` : "Anonymous",
      postedAt: new Date().toISOString(),
      userRole: currentUser?.role || "user",
    };
    
    console.log("Post Data:", newPost);
    
    // Store post in localStorage
    const existingPosts = JSON.parse(localStorage.getItem('posts') || '[]');
    existingPosts.push(newPost);
    localStorage.setItem('posts', JSON.stringify(existingPosts));
    
    alert("Post submitted successfully!");
    navigate(-1);
  };

  const handleCancel = () => {
    navigate(-1);
  };

  const skillOptions = [
    "Electrician", "Plumber", "Mason", "Painter", "Carpenter",
    "Welder", "Driver", "Gardener", "Cleaner", "Helper", "Other"
  ];

  const getPostTypeOptions = () => {
    if (!currentUser) return [];
    
    switch(currentUser.role) {
      case 'worker':
        return ["Looking for Work"];
      case 'leader':
        return ["Group Available"];
      case 'ngo':
        return ["Worker Registration", "Group Available"];
      case 'user':
      default:
        return ["Hiring Worker", "Hiring Group"];
    }
  };

  return (
    <div>
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-blue-300 px-4 flex-col py-20">
        <BackButton to={-1} />
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white shadow-2xl rounded-3xl p-8 w-full max-w-3xl"
        >
          <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
            Create a New Post
          </h2>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Post Type */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Post Type *
                </label>
                <select
                  name="type"
                  value={postData.type}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-400 outline-none"
                >
                  <option value="">Select Type</option>
                  {getPostTypeOptions().map(opt => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Skill/Role *
                </label>
                <select
                  name="skill"
                  value={postData.skill}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-400 outline-none"
                >
                  <option value="">Select Skill</option>
                  {skillOptions.map(skill => (
                    <option key={skill} value={skill}>{skill}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Title */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Job Title *
              </label>
              <input
                type="text"
                name="title"
                value={postData.title}
                onChange={handleChange}
                placeholder="e.g., Experienced Electrician Available"
                required
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-400 outline-none"
              />
            </div>

            {/* Description */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Description *
              </label>
              <textarea
                name="description"
                value={postData.description}
                onChange={handleChange}
                rows="4"
                placeholder="Describe your work, experience, or requirements..."
                required
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-400 outline-none resize-none"
              ></textarea>
            </div>

            {/* Location Details */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  City *
                </label>
                <input
                  type="text"
                  name="city"
                  value={postData.city}
                  onChange={handleChange}
                  placeholder="e.g., Pune"
                  required
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-400 outline-none"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Pincode *
                </label>
                <input
                  type="tel"
                  name="pincode"
                  value={postData.pincode}
                  onChange={handleChange}
                  placeholder="6 digits"
                  required
                  maxLength="6"
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-400 outline-none"
                />
              </div>
            </div>

            {/* Experience and Wage */}
            <div className="grid grid-cols-3 gap-4">
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Experience (years)
                </label>
                <input
                  type="number"
                  name="experience"
                  value={postData.experience}
                  onChange={handleChange}
                  placeholder="0"
                  min="0"
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-400 outline-none"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Availability *
                </label>
                <select
                  name="availability"
                  value={postData.availability}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-400 outline-none"
                >
                  <option value="immediate">Immediate</option>
                  <option value="1-week">Within 1 week</option>
                  <option value="2-weeks">Within 2 weeks</option>
                  <option value="1-month">Within 1 month</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Expected Wage (₹/day)
                </label>
                <input
                  type="number"
                  name="wage"
                  value={postData.wage}
                  onChange={handleChange}
                  placeholder="Optional"
                  min="0"
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-400 outline-none"
                />
              </div>
            </div>

            {/* Contact */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Contact Number *
              </label>
              <input
                type="tel"
                name="contact"
                value={postData.contact}
                onChange={handleChange}
                placeholder="10 digit mobile number"
                required
                maxLength="10"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-400 outline-none"
              />
            </div>

            {/* Buttons */}
            <div className="flex justify-between pt-6">
              <button
                type="button"
                onClick={handleCancel}
                className="bg-gray-400 text-white px-8 py-3 rounded-xl hover:bg-gray-500 transition active:scale-95 font-medium"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-blue-500 text-white px-8 py-3 rounded-xl hover:bg-blue-600 transition active:scale-95 font-medium shadow-lg"
              >
                Post Now
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default UserPost;
