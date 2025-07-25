
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const navLinks = [
  { label: 'Home', route: '/' },
  { label: 'About', route: '#' },
  { label: 'Services', route: '#' },
  { label: 'Blog', route: '#' },
  { label: 'Contact', route: '#' },
];

const servicesDropdown = [
  { label: 'Hotel & Villa', route: '/hotels' },
  { label: 'Packages', route: '/' },
  { label: 'Water World', route: '/scuba' },
  { label: 'Moped Rental', route: '/' },
  { label: 'Party & Events', route: '/' },
  { label: 'Luxury Villas', route: '/hotels' },
];

const Navbar: React.FC<{ onHomeClick?: () => void }> = ({ onHomeClick }) => {
  const router = useRouter();
  const [showDropdown, setShowDropdown] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <nav className="w-full bg-teal-800 shadow-md px-4 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center cursor-pointer" onClick={() => router.push('/') }>
          <img src="/images/logo2.png" alt="Logo" className="h-12 w-12 p-1 mr-2 object-contain" />
          <span className="text-2xl md:text-3xl font-bold text-white whitespace-nowrap">Namaskaram Bharat</span>
        </div>
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-6">
          <button
            onClick={() => {
              router.push('/');
              if (onHomeClick) onHomeClick();
            }}
            className="text-lg text-white hover:text-teal-200 focus:outline-none bg-transparent border-none cursor-pointer"
          >
            Home
          </button>
          <a href="#" className="text-lg text-white hover:text-teal-200">About</a>
          {/* Services Dropdown */}
          <div className="relative">
            <button
              className="text-lg text-white hover:text-teal-200 focus:outline-none bg-transparent border-none cursor-pointer flex items-center"
              onClick={e => {
                e.preventDefault();
                setShowDropdown((prev) => !prev);
              }}
              onMouseEnter={() => setShowDropdown(true)}
              onMouseLeave={() => setShowDropdown(false)}
            >
              Services
              <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
            </button>
            {showDropdown && (
              <div
                className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg z-20 py-2"
                onMouseEnter={() => setShowDropdown(true)}
                onMouseLeave={() => setShowDropdown(false)}
              >
                {servicesDropdown.map((item) => (
                  <button
                    key={item.label}
                    onClick={() => { setShowDropdown(false); router.push(item.route); }}
                    className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-teal-50 hover:text-teal-700 text-base"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            )}
          </div>
          <a href="#" className="text-lg text-white hover:text-teal-200">Blog</a>
          <a href="#" className="text-lg text-white hover:text-teal-200">Contact</a>
        </div>
        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <button
            className="text-white focus:outline-none"
            onClick={() => setMobileMenu((prev) => !prev)}
            aria-label="Open menu"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {mobileMenu && (
        <div className="md:hidden bg-teal-900 text-white px-4 py-3 space-y-2 rounded-b-lg animate-fade-in">
          <button
            onClick={() => { setMobileMenu(false); router.push('/'); }}
            className="block w-full text-left py-2 text-lg hover:text-teal-200"
          >Home</button>
          <a href="#" className="block w-full text-left py-2 text-lg hover:text-teal-200">About</a>
          {/* Mobile Services Dropdown */}
          <div>
            <button
              className="block w-full text-left py-2 text-lg hover:text-teal-200 flex items-center"
              onClick={() => setShowDropdown((prev) => !prev)}
            >
              Services
              <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
            </button>
            {showDropdown && (
              <div className="bg-white rounded-lg shadow-lg z-20 py-2 mt-1">
                {servicesDropdown.map((item) => (
                  <button
                    key={item.label}
                    onClick={() => { setShowDropdown(false); setMobileMenu(false); router.push(item.route); }}
                    className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-teal-50 hover:text-teal-700 text-base"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            )}
          </div>
          <a href="#" className="block w-full text-left py-2 text-lg hover:text-teal-200">Blog</a>
          <a href="#" className="block w-full text-left py-2 text-lg hover:text-teal-200">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;