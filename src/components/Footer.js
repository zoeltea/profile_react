// src/components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 px-8">
      <div className="container mx-auto text-center">
        <p className="mb-4">&copy; {new Date().getFullYear()} Zul Yatman. All rights reserved.</p>
        {/* <div className="flex justify-center space-x-6">
          <a href="#about" className="text-gray-400 hover:text-white transition-colors duration-300">About</a>
          <a href="#portfolio" className="text-gray-400 hover:text-white transition-colors duration-300">Profile</a>
          <a href="#contact" className="text-gray-400 hover:text-white transition-colors duration-300">Contact</a>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
