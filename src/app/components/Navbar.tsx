import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const Navbar: React.FC<{ onHomeClick?: () => void }> = ({ onHomeClick }) => {
  const router = useRouter();
  const [showDropdown, setShowDropdown] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-teal-800 shadow-md p-4">
      <div className="w-full pr-1">
        <div className="flex items-center justify-between h-24 sm:h-28 md:h-32 w-full">
          {/* Logo */}
          <div className="flex items-center cursor-pointer" onClick={() => router.push('/') }>
            <img
              src="/images/logo2.png"
              alt="Logo"
              className="h-24 sm:h-28 md:h-32 p-2 mr-1 flex-shrink-0"
            />
          </div>
          {/* Title */}
          <div className="flex-1 text-center">
            <span
              className="font-extrabold whitespace-normal leading-tight"
              style={{ fontSize: '2.5rem', letterSpacing: '0.04em' }}
            >
              <span style={{ color: '#FF9800' }}>नमस्कारम् </span>
              <span style={{ color: '#0A2342' }}>Bharat</span>
            </span>
          </div>
          {/* Menu Button (if present) remains at right */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-gray-300 focus:outline-none focus:text-gray-300"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
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
            <a
              href="#"
              className="text-lg sm:text-2xl text-white hover:text-gray-300 transition-colors duration-200"
            >
              About
            </a>
            <div className="relative group">
              <button
                className="text-lg sm:text-2xl text-white hover:text-gray-300 focus:outline-none transition-colors duration-200"
                onClick={(e) => {
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
                  className="absolute top-full left-0 bg-white min-w-[180px] shadow-lg rounded-lg z-[9999] py-2 mt-1"
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
                      onClick={() => {
                        setShowDropdown(false);
                        router.push(item.route);
                      }}
                      className="px-4 py-2 text-gray-800 text-base hover:bg-teal-50 cursor-pointer border-b border-gray-200 last:border-b-0 transition-colors duration-200"
                    >
                      {item.label}
                    </div>
                  ))}
                </div>
              )}
            </div>
            <a
              href="#"
              className="text-lg sm:text-2xl text-white hover:text-gray-300 transition-colors duration-200"
            >
              Blog
            </a>
            <a
              href="#"
              className="text-lg sm:text-2xl text-white hover:text-gray-300 transition-colors duration-200"
            >
              Contact
            </a>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 border-t border-teal-700 pt-4">
            <div className="rounded-3xl bg-gradient-to-br from-teal-200 via-teal to-blue-100 shadow-2xl px-4 py-6 mx-2 border border-teal-100">
              <div className="mb-4 text-center">
                <span className="text-xl font-bold text-teal-700 tracking-wide">
                  Menu
                </span>
              </div>
              <div className="flex gap-4 overflow-x-auto pb-2 hide-scrollbar">
                {[
                  { label: 'Home', route: '/', icon: '🏠' },
                  { label: 'About', route: '#', icon: 'ℹ️' },
                  { label: 'Blog', route: '#', icon: '📝' },
                  { label: 'Contact', route: '#', icon: '📞' },
                ].map((item) => (
                  <button
                    key={item.label}
                    onClick={() => {
                      router.push(item.route);
                      if (item.label === 'Home' && onHomeClick) onHomeClick();
                      setIsMenuOpen(false);
                    }}
                    className="min-w-[120px] rounded-2xl bg-white border border-teal-200 text-teal-800 font-bold shadow-md py-4 px-2 text-base flex flex-col items-center gap-2 hover:bg-teal-100 active:scale-95 transition-all duration-200"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    <span style={{ fontSize: '2rem' }}>{item.icon}</span>
                    <span>{item.label}</span>
                  </button>
                ))}
              </div>
              <div className="mt-6 mb-2 text-left">
                <span className="text-lg font-semibold text-teal-700 tracking-wide">
                  Popular Services
                </span>
              </div>
              <div className="flex gap-4 overflow-x-auto pb-2 hide-scrollbar">
                {[
                  { label: 'Hotel & Villa', route: '/hotels', icon: '🏨', img: '/images/hotel.jpg' },
                  { label: 'packages', route: '/', icon: '🎁', img: '/images/packages.jpg' },
                  { label: 'Water World', route: '/scuba', icon: '🌊', img: '/images/waterworld.jpg' },
                  { label: 'Moped Rental', route: '/', icon: '🛵', img: '/images/rentals.jpg' },
                  { label: 'Party & Events', route: '/', icon: '🎉', img: '/images/party.jpg' },
                  { label: 'Luxury Villas', route: '/hotels', icon: '🏡', img: '/images/villa.jpg' },
                ].map((item) => (
                  <div
                    key={item.label}
                    onClick={() => {
                      router.push(item.route);
                      setShowDropdown(false);
                      setIsMenuOpen(false);
                    }}
                    className="min-w-[160px] rounded-2xl bg-white border border-teal-200 text-teal-900 font-semibold py-2 px-2 flex flex-col items-center gap-2 shadow hover:bg-teal-100 active:scale-95 cursor-pointer transition-all duration-200"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    <img
                      src={item.img}
                      alt={item.label}
                      className="w-full h-20 object-cover rounded-xl mb-1 shadow"
                    />
                    <span style={{ fontSize: '1.4rem' }}>{item.icon}</span>
                    <span className="text-sm font-bold text-center">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <style>{`.hide-scrollbar::-webkit-scrollbar{display:none}`}</style>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
