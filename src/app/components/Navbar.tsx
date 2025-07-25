
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const Navbar: React.FC<{ onHomeClick?: () => void }> = ({ onHomeClick }) => {
  const router = useRouter();
  const [showDropdown, setShowDropdown] = React.useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-teal-800 shadow-md p-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center">
          <div className="flex flex-shrink items-center cursor-pointer max-w-[75%]" onClick={() => router.push('/')}>
            <img src="/images/logo2.png" alt="Logo" className="h-12 sm:h-16 md:h-20 p-2 mr-2 flex-shrink-0" />
            <span className="text-lg sm:text-xl md:text-3xl font-bold text-white whitespace-normal leading-tight">Namaskaram Bharat</span>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-gray-300 focus:outline-none focus:text-gray-300"
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <button
              onClick={() => {
                router.push('/');
                if (onHomeClick) onHomeClick();
              }}
              className="text-lg sm:text-2xl text-white hover:text-gray-300 focus:outline-none transition-colors duration-200"
            >
              Home
            </button>
            <a href="#" className="text-lg sm:text-2xl text-white hover:text-gray-300 transition-colors duration-200">About</a>
            <div className="relative group">
              <button
                className="text-lg sm:text-2xl text-white hover:text-gray-300 focus:outline-none transition-colors duration-200"
                onClick={e => {
                  e.preventDefault();
                  setShowDropdown((prev) => !prev);
                }}
                onMouseEnter={() => setShowDropdown(true)}
                onMouseLeave={() => setShowDropdown(false)}
              >
                Services
          </button>
              {showDropdown && (
                <div
                  onMouseEnter={() => setShowDropdown(true)}
                  onMouseLeave={() => setShowDropdown(false)}
                  className="absolute top-full left-0 bg-white min-w-[180px] shadow-lg rounded-lg z-50 py-2 mt-1"
                >
                  {[
                    { label: 'Hotel & Villa', route: '/hotels' },
                    { label: 'packages', route: '/' },
                    { label: 'Water World', route: '/scuba' },
                    { label: 'Moped Rental', route: '/' },
                    { label: 'Party & Events', route: '/' },
                    { label: 'Luxury Villas', route: '/hotels' },
                  ].map((item) => (
                    <div
                      key={item.label}
                      onClick={() => { setShowDropdown(false); router.push(item.route); }}
                      className="px-4 py-2 text-gray-800 text-base hover:bg-teal-50 cursor-pointer border-b border-gray-200 last:border-b-0 transition-colors duration-200"
                    >
                      {item.label}
                    </div>
                  ))}
                </div>
              )}
            </div>
            <a href="#" className="text-lg sm:text-2xl text-white hover:text-gray-300 transition-colors duration-200">Blog</a>
            <a href="#" className="text-lg sm:text-2xl text-white hover:text-gray-300 transition-colors duration-200">Contact</a>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 border-t border-teal-700 pt-4">
            <div className="flex flex-col space-y-3">
              <button
                onClick={() => {
                  router.push('/');
                  if (onHomeClick) onHomeClick();
                  setIsMenuOpen(false);
                }}
                className="text-lg text-white hover:text-gray-300 focus:outline-none transition-colors duration-200"
              >
                Home
              </button>
              <a href="#" className="text-lg text-white hover:text-gray-300 transition-colors duration-200">About</a>
              <button
                className="text-lg text-white hover:text-gray-300 focus:outline-none text-left transition-colors duration-200"
                onClick={() => setShowDropdown(!showDropdown)}
              >
                Services {showDropdown ? '▼' : '▶'}
              </button>
              {showDropdown && (
                <div className="pl-4 flex flex-col space-y-2">
                  {[
                    { label: 'Hotel & Villa', route: '/hotels' },
                    { label: 'packages', route: '/' },
                    { label: 'Water World', route: '/scuba' },
                    { label: 'Moped Rental', route: '/' },
                    { label: 'Party & Events', route: '/' },
                    { label: 'Luxury Villas', route: '/hotels' },
                  ].map((item) => (
                    <div
                      key={item.label}
                      onClick={() => {
                        router.push(item.route);
                        setShowDropdown(false);
                        setIsMenuOpen(false);
                      }}
                      className="text-gray-300 text-base hover:text-white cursor-pointer transition-colors duration-200"
                    >
                      {item.label}
                    </div>
                  ))}
                </div>
              )}
              <a href="#" className="text-lg text-white hover:text-gray-300 transition-colors duration-200">Blog</a>
              <a href="#" className="text-lg text-white hover:text-gray-300 transition-colors duration-200">Contact</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;