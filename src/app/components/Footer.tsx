"use client";

import React, { useState } from 'react';
import ContactModal from './ContactModal';

const Footer: React.FC = () => {
  const [showContactModal, setShowContactModal] = useState(false);

  return (
    <>
      {/* Footer */}
      <footer className="bg-black/30 backdrop-blur-sm text-white pt-3 md:pt-8 pb-2 md:pb-3 px-4 sm:px-6 lg:px-8 mt-8 border-t border-white/20 w-full relative z-10">
        <div className="w-full max-w-none">
          {/* Mobile Layout */}
          <div className="md:hidden">
            {/* Logo and Title - Centered */}
            <div className="flex flex-col items-center mb-4">
              <div className="flex items-center mb-2">
                <img src="/images/logo2.png" alt="Namaskaram Bharat" className="h-12 mr-3" />
                <span className="font-bold text-xl text-white">
                  <span className="text-orange-400">नमस्कारम </span>
                  <span className="text-blue-900">Bharat</span>
                </span>
              </div>
              <p className="text-sm text-center text-white max-w-xs">
                Your gateway to unforgettable experiences in the paradise of Goa.
              </p>
            </div>
            
            {/* Quick Links and Important Links - Centered */}
            <div className="flex justify-center mb-4">
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center">
                  <h4 className="font-bold text-white mb-2 text-base">Quick Links</h4>
                  <ul className="space-y-1">
                    <li><a href="#" className="text-base hover:text-orange-300 text-white">Tour Package</a></li>
                    <li><a href="#" className="text-base hover:text-orange-300 text-white">Hotel Stays</a></li>
                    <li><a href="#" className="text-base hover:text-orange-300 text-white">Rented Villas</a></li>
                    <li><a href="#" className="text-base hover:text-orange-300 text-white">Cars & Bikes</a></li>
                    <li><a href="#" className="text-base hover:text-orange-300 text-white">About us</a></li>
                    <li><a href="#" className="text-base hover:text-orange-300 text-white">Blog</a></li>
                  </ul>
                </div>
                <div className="text-center">
                  <h4 className="font-bold text-white mb-2 text-base">Important Links</h4>
                  <ul className="space-y-1">
                    <li><a href="#" onClick={() => setShowContactModal(true)} className="text-base hover:text-orange-300 text-white">Contact Us</a></li>
                    <li><a href="#" className="text-base hover:text-orange-300 text-white">Privacy Policy</a></li>
                    <li><a href="#" className="text-base hover:text-orange-300 text-white">Terms & Condition</a></li>
                    <li><a href="#" className="text-base hover:text-orange-300 text-white">Return & Refund</a></li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Contact Info - Compact */}
            <div className="text-center mb-3">
              <h4 className="font-bold text-white mb-2 text-base">Contact Us</h4>
              <div className="text-base text-white space-y-1">
                <div>📍 Bliss Home Lane no 2, Karmabhumilohegaon, Pune 411047</div>
                <div>📞 +91 8010357955 / 9022362693</div>
              </div>
            </div>
          </div>
          
          {/* Desktop Layout */}
          <div className="hidden md:flex md:flex-row justify-between gap-8">
            <div className="flex-1 min-w-[220px] mb-8 lg:mb-0">
              <div className="flex flex-col sm:flex-row items-center mb-4">
                <img
                  src="/images/logo2.png"
                  alt="Namaskaram Bharat"
                  width={80}
                  height={80}
                  className="h-16 sm:h-20 md:h-28 lg:h-32 mr-3 mb-2 sm:mb-0"
                  loading="eager"
                  decoding="async"
                  style={{ objectFit: "contain" }}
                />
                <span className="text-xl sm:text-2xl font-bold text-center sm:text-left">
                  <span className="text-orange-400">नमस्कारम </span>
                  <span className="text-blue-900">Bharat</span>
                </span>
              </div>
              <p className="text-sm text-center sm:text-left">
                Your gateway to unforgettable experiences in the paradise of Goa. We offer everything you need for a perfect vacation.
              </p>
            </div>

            <div className="flex-[2] grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 min-w-[220px]">
              <div>
                <h4 className="font-bold mb-3 text-center sm:text-left">Quick Links</h4>
                <ul className="space-y-2 text-sm text-center sm:text-left">
                  <li><a href="#" className="hover:text-orange-300 transition-colors">Tour Package</a></li>
                  <li><a href="#" className="hover:text-orange-300 transition-colors">Hotel Stays</a></li>
                  <li><a href="#" className="hover:text-orange-300 transition-colors">Rented Villas</a></li>
                  <li><a href="#" className="hover:text-orange-300 transition-colors">Cars & Bikes</a></li>
                  <li><a href="#" className="hover:text-orange-300 transition-colors">About us</a></li>
                  <li><a href="#" className="hover:text-orange-300 transition-colors">Blog</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-3 text-center sm:text-left">Important Links</h4>
                <ul className="space-y-2 text-sm text-center sm:text-left">
                  <li><a href="#" onClick={() => setShowContactModal(true)} className="hover:text-orange-300 transition-colors">Contact Us</a></li>
                  <li><a href="#" className="hover:text-orange-300 transition-colors">Privacy Policy</a></li>
                  <li><a href="#" className="hover:text-orange-300 transition-colors">Terms & Condition</a></li>
                  <li><a href="#" className="hover:text-orange-300 transition-colors">Return & Refund</a></li>
                </ul>
              </div>
            </div>

            <div className="flex-1 min-w-[220px] text-sm text-center lg:text-left">
              <h4 className="font-bold mb-3">Contact Us</h4>
              <p className="mb-2">📍 Bliss Home Lane no 2, Karmabhumilohegaon, Pune 411047</p>
              <p>📞 +91 8010357955 / 9022362693</p>
            </div>
          </div>
        </div>

                 <div className="border-t border-gray-700 mt-2 md:mt-8 pt-1 md:pt-4 text-center text-gray-400 text-xs md:text-sm">
           &copy; {new Date().getFullYear()} namaskarambharat. All rights reserved.
         </div>
      </footer>

      {/* Contact Modal */}
      {showContactModal && (
        <ContactModal 
          open={showContactModal} 
          onClose={() => setShowContactModal(false)} 
        />
      )}
    </>
  );
};

export default Footer; 