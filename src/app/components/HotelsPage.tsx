"use client";

import React, { useState, useEffect, useCallback } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ContactModal from './ContactModal';

// Type definitions
interface RoomType {
  type: string;
  price: number;
  discounted_price: number;
}

interface Facilities {
  basic: string[];
  general_services: string[];
  kitchen: string[];
  dining_area: { seating_capacity: string };
  room: string[];
  bathroom: string[];
  food_and_drinks: string[];
  safety_and_security: string[];
  caretaker_responsibilities: string[];
}

interface Hotel {
  name: string;
  location: string;
  room_types: RoomType[];
  facilities: Facilities;
  images?: string[];
}

interface HotelsPageProps {
  filterHotelName?: string;
}

const placeholderImages = [
  '/images/hotel.jpg',
  '/images/villa.jpg',
  '/images/beach.jpg',
  '/images/sea.jpg',
];

function getRandomImage() {
  return placeholderImages[Math.floor(Math.random() * placeholderImages.length)];
}

const HotelsPage: React.FC<HotelsPageProps> = ({ filterHotelName }) => {
  const [hotels, setHotels] = useState<Hotel[]>([]);
  const [selectedHotel, setSelectedHotel] = useState<Hotel | null>(null);
  const [showContactModal, setShowContactModal] = useState(false);

  useEffect(() => {
    fetch('/data/hotels.json')
      .then(res => res.json())
      .then(data => setHotels(data.hotels));
  }, []);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') setSelectedHotel(null);
  }, []);

  useEffect(() => {
    if (selectedHotel) {
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }
  }, [selectedHotel, handleKeyDown]);

  const filteredHotels = filterHotelName
    ? hotels.filter(hotel => hotel.name.toLowerCase() === filterHotelName.toLowerCase())
    : hotels;

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="py-8 px-2 sm:px-4">
        {/* Beautiful Back Button */}
        <div className="max-w-7xl mx-auto mb-8">
        <button
          onClick={() => window.history.back()}
          className="group relative inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 border border-teal-400/30 backdrop-blur-sm"
        >
          {/* Animated Arrow */}
          <div className="relative">
            <svg 
              className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform duration-300" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
            {/* Glow effect */}
            <div className="absolute inset-0 w-5 h-5 bg-teal-300 rounded-full blur-sm opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
          </div>
          
          {/* Text with gradient */}
          <span className="relative z-10 font-medium tracking-wide">
            Back to Previous
          </span>
          
          {/* Decorative elements */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          {/* Ripple effect on click */}
          <div className="absolute inset-0 rounded-full bg-white/30 scale-0 group-active:scale-100 transition-transform duration-150"></div>
        </button>
      </div>
      
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 text-teal-900">
        Our Hotels & Villas
      </h1>
      
      <div className="w-full px-4 max-w-7xl mx-auto">
  <div className="flex flex-wrap justify-between gap-6">
           {filteredHotels.map((hotel: Hotel) => (
                     <div
             key={hotel.name}
             className="w-full sm:max-w-full lg:max-w-[320px] xl:max-w-[360px] mx-auto bg-white rounded-2xl shadow-lg border border-gray-200 cursor-pointer overflow-hidden relative transition-transform duration-200 hover:scale-105 hover:shadow-2xl"

             onClick={() => setSelectedHotel(hotel)}
           >
                         <img
               src={getRandomImage()}
               alt={hotel.name}
               className="w-full h-48 sm:h-52 md:h-56 object-cover rounded-t-2xl"
             />
                         <div className="p-3 sm:p-5 pb-8 sm:pb-10 relative flex flex-col h-full">
                                <div className="flex-1">
                   <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-800 mb-2 line-clamp-2">
                     {hotel.name}
                   </h2>
                   <div className="text-sm sm:text-base text-slate-500 mb-3 font-medium">
                     {hotel.location || 'Goa, India'}
                   </div>
                                    {hotel.room_types.length > 0 && (
                     <div className="text-teal-600 font-semibold text-base sm:text-lg mb-2">
                       {(() => {
                         const prices = hotel.room_types.map(r => r.discounted_price);
                         const min = Math.min(...prices);
                         const max = Math.max(...prices);
                         return min === max
                           ? `₹${min} per night`
                           : `₹${min} - ₹${max} per night`;
                       })()}
                     </div>
                   )}
                   <div className="text-sm text-gray-500 mb-4">
                     {hotel.room_types.length} Room Types &bull; {hotel.facilities.basic.slice(0, 2).join(', ')}...
                   </div>
               </div>
                                                            <button
                 className="absolute bottom-3 sm:bottom-4 right-3 sm:right-4 bg-gradient-to-r from-blue-600 to-cyan-400 text-white rounded-lg px-4 sm:px-5 py-2 sm:py-2.5 font-semibold text-sm sm:text-base shadow-md hover:from-blue-700 hover:to-cyan-500 transition-all duration-200 transform hover:scale-105"
                 onClick={e => {
                   e.stopPropagation();
                   setShowContactModal(true);
                 }}
               >
                 Get Best Price
               </button>
                         </div>
           </div>
         ))}
         </div>
       </div>

      {selectedHotel && (
        <div
          className="fixed inset-0 z-50 flex flex-col bg-slate-900/80 backdrop-blur-sm transition-all overflow-y-auto"
          onClick={() => setSelectedHotel(null)}
        >
          <div className="sticky top-0 left-0 right-0 bg-gradient-to-b from-slate-900/90 to-slate-900/0 p-2 sm:p-4">
            <div className="max-w-7xl mx-auto w-full flex justify-between items-center">
              <button
                onClick={() => setSelectedHotel(null)}
                className="flex items-center gap-2 px-4 py-2 bg-white/90 hover:bg-white text-slate-700 rounded-lg shadow-lg transition-colors group"
              >
                <span className="text-xl group-hover:-translate-x-1 transition-transform">←</span>
                <span className="font-medium hidden sm:inline">Back to Hotels & Villas</span>
                <span className="font-medium sm:hidden">Back</span>
              </button>
              <button
                onClick={() => setSelectedHotel(null)}
                className="bg-white/90 hover:bg-white text-slate-700 rounded-full w-10 h-10 flex items-center justify-center text-2xl font-bold shadow-lg transition-colors"
                aria-label="Close"
              >
                &times;
              </button>
            </div>
          </div>

          <div className="flex-1 flex items-start justify-center p-2 sm:p-4 md:p-6 mt-4">
            <div
              className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl border border-gray-200 p-4 sm:p-6 md:p-8 animate-fade-in"
              onClick={e => e.stopPropagation()}
            >
              <div className="flex flex-col min-w-[220px]">
                <div className="mb-6">
                  <div className="w-full rounded-xl overflow-hidden shadow-lg">
                    <Slider
                      dots={true}
                      arrows={true}
                      infinite={true}
                      speed={500}
                      slidesToShow={1}
                      slidesToScroll={1}
                      autoplay={true}
                      autoplaySpeed={3000}
                      pauseOnHover={true}
                    >
                      {selectedHotel.images && selectedHotel.images.length > 0
                        ? selectedHotel.images.map((img, i) => (
                            <div key={i}>
                              <img
                                src={`/images/Hotels pics/${selectedHotel.name}/${img}`}
                                alt={`${selectedHotel.name} - ${img}`}
                                className="w-full h-64 sm:h-80 md:h-96 lg:h-[500px] object-cover rounded-xl shadow-md"
                                onError={(e) => {
                                  (e.target as HTMLImageElement).src = getRandomImage();
                                }}
                              />
                            </div>
                          ))
                        : placeholderImages.map((img, i) => (
                            <div key={i}>
                              <img
                                src={img}
                                alt={`${selectedHotel.name} placeholder ${i + 1}`}
                                className="w-full h-64 sm:h-80 md:h-96 lg:h-[500px] object-cover rounded-xl shadow-md"
                              />
                            </div>
                          ))}
                    </Slider>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row justify-center items-start gap-6 md:gap-8 lg:gap-12 mb-6 w-full">
                  <div className="w-full md:w-1/3 flex flex-col justify-center bg-slate-50/50 rounded-xl p-4 shadow-sm">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-800 mb-2">
                      {selectedHotel.name}
                    </h2>
                    <div className="flex items-center gap-2 text-base sm:text-lg text-slate-600 mb-3">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span className="font-medium">{selectedHotel.location || 'Goa, India'}</span>
                    </div>
                    {selectedHotel.room_types.length > 0 && (
                      <div className="mt-auto">
                        <div className="text-sm text-slate-600 mb-1">Starting from</div>
                        <div className="text-2xl sm:text-3xl text-teal-600 font-bold">
                          {(() => {
                            const prices = selectedHotel.room_types.map(r => r.discounted_price);
                            const min = Math.min(...prices);
                            return `₹${min}`;
                          })()}
                          <span className="text-base font-medium text-slate-500 ml-1">per night</span>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="w-full md:w-1/3 flex flex-col">
                    <div className="bg-slate-50/50 rounded-xl p-4 shadow-sm">
                      <div className="flex items-center gap-2 mb-4">
                        <svg className="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                        <span className="text-lg sm:text-xl font-semibold text-slate-700">Available Room Types</span>
                      </div>
                      <ul className="w-full space-y-3">
                        {selectedHotel.room_types.map((room, i) => (
                          <li key={i} className="bg-white rounded-lg p-3 shadow-sm">
                            <div className="flex justify-between items-start gap-4">
                              <b className="text-blue-600 font-semibold">{room.type}</b>
                              <div className="flex flex-col items-end">
                                {room.discounted_price < room.price && (
                                  <span className="line-through text-gray-400 text-xs">₹{room.price}</span>
                                )}
                                <span className="text-green-600 font-bold text-lg">₹{room.discounted_price}</span>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="w-full md:w-1/4 flex flex-col gap-4">
                    <div className="bg-slate-50/50 rounded-xl p-4 shadow-sm flex flex-col items-center text-center">
                      <button
                        className="w-full bg-gradient-to-r from-blue-600 to-cyan-400 hover:from-blue-700 hover:to-cyan-500 text-white rounded-lg px-6 py-3 font-semibold text-lg shadow-md transition-all"
                        onClick={() => setShowContactModal(true)}
                      >
                        Get Best Price
                      </button>
                      <p className="text-sm text-slate-600 mt-3">
                        Contact us for special discounts and customized packages
                      </p>
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-200 my-6" />

                <div className="flex items-center gap-2 mb-6">
                  <svg className="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                  <span className="text-xl font-semibold text-slate-700">Amenities & Facilities</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {Object.entries(selectedHotel.facilities).map(([key, value]) => (
                    <div key={key} className="bg-slate-50/50 rounded-xl p-4 shadow-sm">
                      <div className="flex items-center gap-2 mb-3">
                        <b className="capitalize text-slate-700 text-base md:text-lg font-semibold">
                          {key.replace(/_/g, ' ')}
                        </b>
                      </div>
                      {Array.isArray(value) ? (
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {(value as string[]).map((v, i) => (
                            <li key={i} className="flex items-center gap-2 text-sm text-slate-600">
                              <svg className="w-4 h-4 text-teal-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                              {v}
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <div className="flex items-center gap-2 text-sm text-slate-600">
                          <svg className="w-4 h-4 text-teal-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {(value as { seating_capacity: string }).seating_capacity}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {showContactModal && (
        <ContactModal 
          open={true} 
          onClose={() => setShowContactModal(false)} 
        />
      )}
      </div>
    </div>
  );
};

export default HotelsPage;
