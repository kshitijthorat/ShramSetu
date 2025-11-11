import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HiSearch, HiUserCircle } from 'react-icons/hi'
import { useTranslation } from "react-i18next";

const UserNavbar = () => {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isSmall, setIsSmall] = useState(false);

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

  return (
    <div
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 flex justify-center items-center gap-10 rounded-3xl 
      transition-all duration-500 ease-in-out shadow-lg border-3 backdrop-blur-md 
      border-white bg-white/70 overflow-hidden
      ${isSmall ? "w-[60%] shadow-[0_0_20px_#3b82f680]" : "w-[60%] shadow-[0_0_40px_#60a5fa80]"}`}
    >
      <h1
        className="font-serif font-bold text-[#0a66c2] transition-all duration-500 text-3xl"
      >
        ShramSetu
      </h1>

      <div
        className={`flex gap-10 items-center justify-center text-lg transition-all duration-500
        ${isSmall ? "p-1" : "p-3"}`}
      >
        <Link to="/userhome" className="hover:text-blue-600 transition active:scale-90">Home</Link>
         <div className='flex items-center justify-center flex-row'>
            <input className='border-1 border-gray-300 border-r-0 rounded-l-2xl h-[2rem] pl-2  shadow-lg overflow-hidden hover:shadow-2xl hover:shadow-gray-300 transition duration-300' placeholder='search' type="search" />
           <button className='flex h-[2rem] items-center justify-center border-1 border-gray-300 border-l-0 rounded-r-2xl bg-blue-400 hover:bg-blue-600 '>
               <Link to='/userprofile'><HiSearch className='text-white text-xl' /></Link> 
            </button>
            </div>

        <Link to='/userprofile' className='bg-blue-500 text-amber-50 w-fit text-center rounded-2xl active:scale-90'>
        <HiUserCircle className='text-white text-4xl'/>
       </Link>

      </div>
    </div>
  );
};

export default UserNavbar;
