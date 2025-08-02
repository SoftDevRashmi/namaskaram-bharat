import React, { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import ContactModal from './ContactModal';

const Navbar: React.FC<{ onHomeClick?: () => void }> = ({ onHomeClick }) => {
  const router = useRouter();
  const [showDropdown, setShowDropdown] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);
  const dropdownTimeout = useRef<NodeJS.Timeout | null>(null);

  // Open dropdown helper (cancels close timeout)
  const openDropdown = () => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setShowDropdown(true);
  };

  // Close dropdown helper (delayed to allow hover between button and menu)
  const closeDropdown = () => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    dropdownTimeout.current = setTimeout(() => setShowDropdown(false), 120);
  };

  return (
    <nav className="relative z-50 py-2" style={{ backgroundColor: 'transparent !important', background: 'none !important' }}>
      <div className="w-full" style={{ backgroundColor: 'transparent !important', background: 'none !important' }}>
        <div className="flex items-center justify-between h-16 sm:h-28 md:h-32 w-full relative" style={{ backgroundColor: 'transparent !important', background: 'none !important' }}>
          {/* Logo */}
          <div className="flex items-center cursor-pointer z-10" onClick={() => router.push('/') } style={{ backgroundColor: 'transparent !important', background: 'none !important' }}>
            <img
              src="/images/logo2.png"
              alt="Logo"
              className="h-12 sm:h-16 md:h-24 lg:h-28 flex-shrink-0"
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
          {/* Menu Button (Mobile) */}
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
            <div
              className="relative group"
              onMouseEnter={openDropdown}
              onMouseLeave={closeDropdown}
              onFocus={openDropdown}
              onBlur={closeDropdown}
              tabIndex={-1}
            >
              <button
                className="text-white bg-gradient-to-br from-green-300 to-blue-500 hover:bg-gradient-to-bl hover:from-green-200 hover:to-blue-400 focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-full text-sm px-6 py-2.5 text-center me-2 mb-2 transition-all duration-300 shadow-lg flex items-center gap-2"
                aria-haspopup="true"
                aria-expanded={showDropdown}
                onClick={(e) => {
                  e.preventDefault();
                  setShowDropdown((prev) => !prev);
                }}
                onFocus={openDropdown}
                onBlur={closeDropdown}
              >
                {/* ...icon... */}
                Services
              </button>
              {showDropdown && (
                <div
                  className="absolute top-full left-0 bg-teal-100/90 backdrop-blur-md min-w-[220px] shadow-2xl rounded-2xl z-[9999] py-3 mt-2 border border-teal-200/50 animate-in slide-in-from-top-2 duration-200"
                  onMouseEnter={openDropdown}
                  onMouseLeave={closeDropdown}
                  tabIndex={0}
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
                      className="px-4 py-3 text-white text-base hover:bg-teal-200/50 cursor-pointer transition-all duration-200 flex items-center gap-3 group"
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      <span className="text-lg group-hover:scale-110 transition-transform duration-200">
                        {item.icon}
                      </span>
                      <span className="font-medium group-hover:text-teal-900 transition-colors duration-200">
                        {item.label}
                      </span>
                      <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  ))}
                  <div className="px-4 py-2 mt-2 border-t border-teal-200/50">
                    <div className="text-xs text-white font-medium text-center">
                      Choose your adventure
                    </div>
                  </div>
                </div>
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
            <button
              onClick={() => setShowContactModal(true)}
              className="text-white bg-gradient-to-br from-green-300 to-blue-500 hover:bg-gradient-to-bl hover:from-green-200 hover:to-blue-400 focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-full text-sm px-6 py-2.5 text-center me-2 mb-2 transition-all duration-300 shadow-lg flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Contact
            </button>
          </div>
        </div>
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 relative z-50">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl mx-4 p-6 border border-white/20 max-h-[80vh] overflow-y-auto">
              {/* Main Menu Items */}
              <div className="space-y-3 mb-6">
                {[
                  { label: 'Home', route: '/', icon: '🏠' },
                  { label: 'About', route: '#', icon: 'ℹ️' },
                  { label: 'Blog', route: '#', icon: '📝' },
                  { label: 'Contact', route: '#', icon: '📞' },
                ].map((item) => (
                  <button
                    key={item.label}
                    onClick={() => {
                      if (item.label === 'Contact') {
                        setShowContactModal(true);
                        setIsMenuOpen(false);
                      } else {
                        router.push(item.route);
                        if (item.label === 'Home' && onHomeClick) onHomeClick();
                        setIsMenuOpen(false);
                      }
                    }}
                    className="w-full flex items-center gap-4 p-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <span className="text-2xl">{item.icon}</span>
                    <span className="text-lg">{item.label}</span>
                    <svg className="w-5 h-5 ml-auto opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                ))}
              </div>
              {/* Services Section */}
              <div className="border-t border-white/20 pt-4">
                <h3 className="text-white font-semibold text-lg mb-4 text-center">Our Services</h3>
                <div className="grid grid-cols-2 gap-3 pb-4">
                  {[
                    { label: 'Hotels', route: '/hotels', icon: '🏨' },
                    { label: 'Packages', route: '/', icon: '🎁' },
                    { label: 'Water Sports', route: '/scuba', icon: '🌊' },
                    { label: 'Rentals', route: '/', icon: '🛵' },
                    { label: 'Party & Events', route: '/', icon: '🎉' },
                    { label: 'Luxury Villas', route: '/hotels', icon: '🏡' },
                  ].map((item) => (
                    <button
                      key={item.label}
                      onClick={() => {
                        router.push(item.route);
                        setIsMenuOpen(false);
                      }}
                      className="flex flex-col items-center gap-2 p-4 rounded-xl bg-gradient-to-br from-white/15 to-white/5 hover:from-white/25 hover:to-white/15 text-white transition-all duration-300 hover:scale-105 active:scale-95"
                    >
                      <span className="text-3xl">{item.icon}</span>
                      <span className="text-sm font-medium text-center">{item.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      {/* Contact Modal */}
      {showContactModal && (
        <ContactModal 
          open={showContactModal} 
          onClose={() => setShowContactModal(false)} 
        />
      )}
    </nav>
  );
};

export default Navbar;