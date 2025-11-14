import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isSmall, setIsSmall] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        setIsSmall(true);
      } else {
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
        <Link to="/" className="hover:text-blue-600 transition">Home</Link>
        <Link to="/services" className="hover:text-blue-600 transition">Services</Link>

        <Link
          to="/login"
          className="bg-white text-blue-500 border border-blue-500 px-4 py-2 rounded-full active:scale-90 
          hover:bg-blue-800 hover:text-white transition"
        >
          Login
        </Link>

        <Link
          to="/register"
          className="bg-blue-500 text-white px-4 py-2 rounded-full active:scale-90 hover:bg-blue-600 transition"
        >
          Register
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
