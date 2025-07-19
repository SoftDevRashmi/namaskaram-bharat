import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="flex items-center justify-between bg-gray-800 shadow-md p-4">
      <div className="flex items-center">
        <img src="path/to/your/logo.png" alt="Logo" className="h-10 mr-4" />
        <span className="text-xl font-bold text-white">Namaskaram Bharat</span>
      </div>
      <div className="flex space-x-4">
        <a href="#" className="text-white hover:text-blue-400">Home</a>
        <a href="#" className="text-white hover:text-blue-400">About</a>
        <a href="#" className="text-white hover:text-blue-400">Services</a>
        <a href="#" className="text-white hover:text-blue-400">Blog</a>
        <a href="#" className="text-white hover:text-blue-400">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar; // Ensure this is a default export