// src/components/Navbar.js
import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <a href="#hero" className="text-2xl font-bold text-indigo-600">Zul Yatman</a>
        <div className="space-x-4 hidden md:flex">
          <a href="#about" className="text-gray-700 hover:text-indigo-600 transition-colors duration-300">About</a>
          <a href="#portfolio" className="text-gray-700 hover:text-indigo-600 transition-colors duration-300">Experience</a>
          <a href="#skills" className="text-gray-700 hover:text-indigo-600 transition-colors duration-300">Skills</a>
          <a href="#contact" className="text-gray-700 hover:text-indigo-600 transition-colors duration-300">Contact</a>
        </div>
        {/* Mobile menu icon - bisa ditambahkan fungsionalitas di sini */}
        <button className="md:hidden text-gray-700 focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
