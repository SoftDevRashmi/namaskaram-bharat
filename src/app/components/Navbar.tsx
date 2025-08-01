import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const Navbar: React.FC<{ onHomeClick?: () => void }> = ({ onHomeClick }) => {
  const router = useRouter();
  const [showDropdown, setShowDropdown] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
<nav className="bg-transparent py-2 relative z-10">
<div className="w-full">
        <div className="flex items-center justify-between h-16 sm:h-28 md:h-32 w-full relative">
          {/* Logo */}
          <div className="flex items-center cursor-pointer z-10" onClick={() => router.push('/') }>
            <img
              src="/images/logo2.png"
              alt="Logo"
              className="h-12 sm:h-16 md:h-20 flex-shrink-0"
              />
          </div>
          {/* Title */}
          <div className="flex-1 text-center absolute inset-0 md:relative md:inset-auto flex items-center justify-center">
          <span
  className="font-extrabold whitespace-normal leading-tight text-lg sm:text-xl md:text-3xl lg:text-[2.5rem]"
  style={{ letterSpacing: '0.04em' }}
>
  <span 
    className="italic" 
    style={{ 
      color: '#FF9800', 
      fontFamily: '"Crimson Text", "Playfair Display", Georgia, serif', 
      fontWeight: '600',
      textShadow: '2px 2px 4px rgba(0,0,0,0.4)',
      letterSpacing: '0.05em'
    }}
  >
    नमस्कारम् 
  </span>
  <span className="inline-block w-3 md:w-4"></span>
  <span 
    className="text-blue-900 italic" 
    style={{ 
      fontFamily: '"Crimson Text", "Playfair Display", Georgia, serif', 
      fontStyle: 'italic',
      fontWeight: '600',
      textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
      letterSpacing: '0.05em'
    }}
  >
    Bharat
  </span>
</span>
          </div>
          {/* Menu Button (if present) remains at right */}
          <div className="md:hidden absolute right-2 z-10">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-gray-300 focus:outline-none"
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
          <div className="hidden md:flex md:items-center md:space-x-2">
            <button
              onClick={() => {
                router.push('/');
                if (onHomeClick) onHomeClick();
              }}
              className="text-white bg-gradient-to-br from-green-300 to-blue-500 hover:bg-gradient-to-bl hover:from-green-200 hover:to-blue-400 focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-full text-sm px-6 py-2.5 text-center me-2 mb-2 transition-all duration-300 shadow-lg flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Home
            </button>
            <a
              href="#"
              className="text-white bg-gradient-to-br from-green-300 to-blue-500 hover:bg-gradient-to-bl hover:from-green-200 hover:to-blue-400 focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-full text-sm px-6 py-2.5 text-center me-2 mb-2 transition-all duration-300 shadow-lg flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              About
            </a>
            <div className="relative group">
              <button
                className="text-white bg-gradient-to-br from-green-300 to-blue-500 hover:bg-gradient-to-bl hover:from-green-200 hover:to-blue-400 focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-full text-sm px-6 py-2.5 text-center me-2 mb-2 transition-all duration-300 shadow-lg flex items-center gap-2"
                onClick={(e) => {
                  e.preventDefault();
                  setShowDropdown((prev) => !prev);
                }}
                onMouseEnter={() => setShowDropdown(true)}
                onMouseLeave={() => setShowDropdown(false)}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
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
              className="text-white bg-gradient-to-br from-green-300 to-blue-500 hover:bg-gradient-to-bl hover:from-green-200 hover:to-blue-400 focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-full text-sm px-6 py-2.5 text-center me-2 mb-2 transition-all duration-300 shadow-lg flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
              Blog
            </a>
            <a
              href="#"
              className="text-white bg-gradient-to-br from-green-300 to-blue-500 hover:bg-gradient-to-bl hover:from-green-200 hover:to-blue-400 focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-full text-sm px-6 py-2.5 text-center me-2 mb-2 transition-all duration-300 shadow-lg flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Contact
            </a>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 border-t border-transparent pt-4">
            <div className="rounded-3xl bg-transparent shadow-2xl px-4 py-6 mx-2 border border-transparent">
              <div className="mb-4 text-center">
                <span className="text-xl font-bold text-white tracking-wide">
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
                    className="min-w-[120px] rounded-2xl bg-white/20 backdrop-blur-sm border border-white/30 text-white font-bold shadow-md py-4 px-2 text-base flex flex-col items-center gap-2 hover:bg-white/30 active:scale-95 transition-all duration-200"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    <span style={{ fontSize: '2rem' }}>{item.icon}</span>
                    <span>{item.label}</span>
                  </button>
                ))}
              </div>
              <div className="mt-6 mb-2 text-left">
                <span className="text-lg font-semibold text-white tracking-wide">
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
                    className="min-w-[160px] rounded-2xl bg-white/20 backdrop-blur-sm border border-white/30 text-white font-semibold py-2 px-2 flex flex-col items-center gap-2 shadow hover:bg-white/30 active:scale-95 cursor-pointer transition-all duration-200"
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
