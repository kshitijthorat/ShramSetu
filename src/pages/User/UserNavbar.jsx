import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HiSearch, HiUserCircle } from 'react-icons/hi'
import { useTranslation } from "react-i18next";

const UserNavbar = () => {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isSmall, setIsSmall] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    // Get current user from localStorage
    const user = JSON.parse(localStorage.getItem('currentUser'));
    setCurrentUser(user);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        // Scrolling down → shrink navbar
        setIsSmall(true);
      } else {
        // Scrolling up → expand navbar
        setIsSmall(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleSearch = (e) => {
    e.preventDefault();
    // Search functionality will be implemented
    console.log("Searching for:", searchQuery);
  };

  const getHomeLink = () => {
    if (!currentUser) return '/userhome';
    switch(currentUser.role) {
      case 'worker': return '/workerhome';
      case 'leader': return '/leaderhome';
      case 'ngo': return '/ngohome';
      default: return '/userhome';
    }
  };

  return (
    <div
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 flex justify-between items-center px-6 rounded-3xl 
      transition-all duration-500 ease-in-out shadow-lg border-3 backdrop-blur-md 
      border-white bg-white/70 overflow-hidden
      ${isSmall ? "w-[85%] shadow-[0_0_20px_#3b82f680]" : "w-[85%] shadow-[0_0_40px_#60a5fa80]"}`}
    >
      <h1
        className="font-serif font-bold text-[#0a66c2] transition-all duration-500 text-2xl"
      >
        ShramSetu
      </h1>

      <div
        className={`flex gap-6 items-center justify-center text-base transition-all duration-500
        ${isSmall ? "p-2" : "p-3"}`}
      >
        <Link to={getHomeLink()} className="hover:text-blue-600 transition active:scale-90">Home</Link>

        {currentUser ? (
          <div className="flex items-center gap-2">
            <Link to='/userprofile' className='flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-2xl active:scale-90 transition-all hover:bg-blue-600'>
              <HiUserCircle className='text-2xl'/>
              <span className="text-sm font-medium">{currentUser.fname}</span>
            </Link>
          </div>
        ) : (
          <Link to='/userprofile' className='bg-blue-500 text-amber-50 p-2 rounded-2xl active:scale-90'>
            <HiUserCircle className='text-white text-3xl'/>
          </Link>
        )}
      </div>
    </div>
  );
};

export default UserNavbar;
