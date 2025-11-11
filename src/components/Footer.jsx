import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-8 mt-10 ">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Left Section - Logo & Tagline */}
        <div className="text-center md:text-left">
          <h1 className="text-2xl font-bold tracking-wide">SkillConnect</h1>
          <p className="text-sm mt-2 text-blue-200">
            Empowering blue-collar workers with better opportunities 💼
          </p>
        </div>

        {/* Middle Section - Navigation Links */}
        <div className="flex flex-wrap justify-center gap-4">
          <a href="/" className="hover:text-blue-300 transition">Home</a>
          <a href="/about" className="hover:text-blue-300 transition">About</a>
          <a href="/services" className="hover:text-blue-300 transition">Services</a>
          <a href="/contact" className="hover:text-blue-300 transition">Contact</a>
        </div>

        {/* Right Section - Social Icons */}
        <div className="flex gap-4 justify-center">
          <a href="#" className="hover:text-blue-300 transition">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="hover:text-blue-300 transition">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="hover:text-blue-300 transition">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="#" className="hover:text-blue-300 transition">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>

      <hr className="border-blue-700 my-6" />

      {/* Bottom Section - Copyright */}
      <div className="text-center text-sm text-blue-300">
        © {new Date().getFullYear()} SkillConnect. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer