import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const Navbar: React.FC<{ onHomeClick?: () => void }> = ({ onHomeClick }) => {
  const router = useRouter();
  const [showDropdown, setShowDropdown] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
<nav className="bg-teal-800 shadow-md pl-1 pr-4 pt-4 pb-4">
<div className="w-full">
        <div className="flex items-center justify-between h-24 sm:h-28 md:h-32 w-full">
          {/* Logo */}
          <div className="flex items-center cursor-pointer" onClick={() => router.push('/') }>
            <img
              src="/images/logo2.png"
              alt="Logo"
              className="h-24 sm:h-28 md:h-32 p-1 flex-shrink-0"
              />
          </div>
          {/* Title */}
          <div className="flex-1 text-center">
          <span
  className="font-extrabold whitespace-normal leading-tight text-lg sm:text-xl md:text-3xl lg:text-[2.5rem]"
  style={{ letterSpacing: '0.04em' }}
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
                <>
                  {/* Invisible bridge to prevent dropdown from closing */}
                  <div 
                    className="absolute top-full left-0 w-full h-2 bg-transparent"
                    onMouseEnter={() => setShowDropdown(true)}
                    onMouseLeave={() => setShowDropdown(false)}
                  />
                  <div
                    onMouseEnter={() => setShowDropdown(true)}
                    onMouseLeave={() => setShowDropdown(false)}
                    className="absolute top-full left-0 bg-white/95 backdrop-blur-md min-w-[220px] shadow-2xl rounded-2xl z-[9999] py-3 mt-2 border border-teal-100/50 animate-in slide-in-from-top-2 duration-200"
                  >
                  {[
                    { label: 'Hotel & Villa', route: '/hotels', icon: '🏨' },
                    { label: 'packages', route: '/', icon: '🎁' },
                    { label: 'Water World', route: '/scuba', icon: '🌊' },
                    { label: 'Moped Rental', route: '/', icon: '🛵' },
                    { label: 'Party & Events', route: '/', icon: '🎉' },
                    { label: 'Luxury Villas', route: '/hotels', icon: '🏡' },
                  ].map((item, index) => (
                    <div
                      key={item.label}
                      onClick={() => {
                        setShowDropdown(false);
                        router.push(item.route);
                      }}
                      className="px-4 py-3 text-gray-700 text-base hover:bg-gradient-to-r hover:from-teal-50 hover:to-blue-50 cursor-pointer transition-all duration-200 flex items-center gap-3 group"
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      <span className="text-lg group-hover:scale-110 transition-transform duration-200">
                        {item.icon}
                      </span>
                      <span className="font-medium group-hover:text-teal-700 transition-colors duration-200">
                        {item.label}
                      </span>
                      <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                        <svg className="w-4 h-4 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  ))}
                  <div className="px-4 py-2 mt-2 border-t border-teal-100/50">
                    <div className="text-xs text-teal-600 font-medium text-center">
                      Choose your adventure
                    </div>
                  </div>
                  </div>
                </>
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
