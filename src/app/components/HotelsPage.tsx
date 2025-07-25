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
  images?: string[]; // Added images property
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

  // Close modal on Escape key
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
    <div className="py-8 px-2 sm:px-4 bg-gray-50 min-h-screen">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 text-teal-900">Our Hotels & Villas</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
        {filteredHotels.map((hotel: Hotel, idx: number) => (
          <div
            key={hotel.name}
            className="w-full max-w-xs bg-white rounded-2xl shadow-lg border border-gray-200 cursor-pointer overflow-hidden relative transition-transform duration-200 hover:scale-105 hover:shadow-2xl"
            onClick={() => setSelectedHotel(hotel)}
          >
            <img
              src={getRandomImage()}
              alt={hotel.name}
              className="w-full h-44 object-cover rounded-t-2xl"
            />
            <div className="p-5 pb-8 relative">
              <h2 className="text-lg md:text-xl font-bold text-slate-800 mb-1">{hotel.name}</h2>
              <div className="text-sm text-slate-500 mb-2 font-medium">{hotel.location || 'Goa, India'}</div>
              {/* Price range for hotel card */}
              {hotel.room_types.length > 0 && (
                <div className="text-teal-600 font-semibold mb-1">
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
              <div className="text-xs text-gray-500 mb-2">
                {hotel.room_types.length} Room Types &bull; {hotel.facilities.basic.slice(0, 2).join(', ')}...
              </div>
              <button
                className="absolute bottom-3 right-3 bg-gradient-to-r from-blue-600 to-cyan-400 text-white rounded-md px-4 py-1.5 font-semibold text-sm shadow-md hover:from-blue-700 hover:to-cyan-500 transition"
                onClick={e => { e.stopPropagation(); alert('We will contact you with the best price!'); }}
              >
                Get Best Price
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Hotel Detail Modal */}
      {selectedHotel && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-2 sm:p-4 md:p-6 transition-all"
          onClick={() => setSelectedHotel(null)}
        >
          <div
            className="relative w-full max-w-7xl bg-white/98 rounded-2xl shadow-2xl border border-gray-200 p-3 sm:p-4 md:p-6 lg:p-8 overflow-y-auto max-h-[95vh] animate-fade-in"
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedHotel(null)}
              style={{
                position: 'absolute',
                top: 18,
                right: 18,
                background: 'rgba(30,41,59,0.08)',
                border: 'none',
                borderRadius: '50%',
                width: 38,
                height: 38,
                fontSize: 26,
                color: '#222',
                cursor: 'pointer',
                boxShadow: '0 2px 8px 0 rgba(0,0,0,0.08)',
                transition: 'background 0.2s',
              }}
              aria-label="Close"
              onMouseOver={e => (e.currentTarget.style.background = '#e2e8f0')}
              onMouseOut={e => (e.currentTarget.style.background = 'rgba(30,41,59,0.08)')}
            >
              &times;
            </button>
            <div style={{ flex: 1, minWidth: 220 }}>
              <div className="mb-6">
                <div className="w-full rounded-xl overflow-hidden">
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
                    {(selectedHotel.images && selectedHotel.images.length > 0
                      ? selectedHotel.images.map((img, i) => (
                          <div key={i}>
                            <img
                              src={`/images/Hotels pics/${selectedHotel.name}/${img}`}
                              alt={`${selectedHotel.name} - ${img}`}
                              className="w-full h-48 sm:h-64 md:h-80 object-cover rounded-xl shadow-md"
                              onError={(e) => {
                                // Fallback to placeholder if image fails to load
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
                              style={{ 
                                width: '100%', 
                                height: 300, 
                                objectFit: 'cover', 
                                borderRadius: 14, 
                                boxShadow: '0 2px 12px 0 rgba(0,0,0,0.10)' 
                              }}
                            />
                          </div>
                        ))
                    )}
                  </Slider>
                </div>
              </div>
              {/* Row: Left (name/location/price), Center (room types), Right (Get Best Price) below carousel */}
              <div className="flex flex-col md:flex-row justify-center items-start gap-4 md:gap-8 lg:gap-12 mb-6 w-full">
                {/* Left: Name, location, price */}
                <div className="w-full md:w-1/3 flex flex-col justify-center">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800 mb-1">{selectedHotel.name}</h2>
                  <div className="text-base sm:text-lg md:text-xl text-slate-500 mb-3 font-medium tracking-wide">{selectedHotel.location || 'Goa, India'}</div>
                  {selectedHotel.room_types.length > 0 && (
                    <div className="text-lg sm:text-xl md:text-2xl text-teal-600 font-bold">
                      {(() => {
                        const prices = selectedHotel.room_types.map(r => r.discounted_price);
                        const min = Math.min(...prices);
                        const max = Math.max(...prices);
                        return min === max
                          ? `₹${min} per night`
                          : `From ₹${min} to ₹${max} per night`;
                      })()}
                    </div>
                  )}
                </div>
                {/* Center: Room types */}
                <div className="w-full md:w-1/3 flex flex-col items-center">
                  <span className="text-lg sm:text-xl md:text-2xl font-semibold text-slate-700 mb-3">Room Types</span>
                  <ul className="w-full max-w-xs space-y-2">
                    {selectedHotel.room_types.map((room, i) => (
                      <li key={i} className="flex items-center justify-between gap-2 text-sm sm:text-base">
                        <b className="text-blue-600 font-semibold">{room.type}</b>
                        <div className="flex items-center gap-2">
                          <span className={room.discounted_price < room.price ? 'line-through text-gray-400 text-xs' : 'text-gray-500'}>₹{room.price}</span>
                          <span className="text-green-600 font-bold">₹{room.discounted_price}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                {/* Right: Get Best Price button */}
                <div style={{ minWidth: 180, textAlign: 'right', flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'flex-end', justifyContent: 'center' }}>
                  <button
                    style={{
                      background: 'linear-gradient(90deg, #2563eb 0%, #38bdf8 100%)',
                      color: '#fff',
                      border: 'none',
                      borderRadius: 8,
                      padding: '0.7rem 1.6rem',
                      fontWeight: 600,
                      fontSize: 19,
                      boxShadow: '0 2px 8px 0 rgba(30,41,59,0.10)',
                      cursor: 'pointer',
                      letterSpacing: 0.2,
                      transition: 'background 0.18s',
                    }}
                    onClick={() => setShowContactModal(true)}
                  >
                    Get Best Price
                  </button>
                </div>
              </div>
              {/* Facilities below */}
              <div style={{ borderTop: '1.5px solid #e2e8f0', margin: '12px 0 18px 0' }} />
              <span style={{ fontSize: 21, color: '#334155', fontWeight: 600, display: 'block', marginBottom: 10 }}>Facilities</span>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18 }}>
                {Object.entries(selectedHotel.facilities).map(([key, value]) => (
                  <div key={key} style={{ marginBottom: 8, background: '#f1f5f9', borderRadius: 8, padding: '10px 14px', boxShadow: '0 1px 4px 0 rgba(0,0,0,0.03)' }}>
                    <b style={{ textTransform: 'capitalize', fontSize: 16, color: '#475569', letterSpacing: 0.1 }}>{key.replace(/_/g, ' ')}:</b>
                    {Array.isArray(value) ? (
                      <ul style={{ margin: 0, paddingLeft: 18, fontSize: 16, color: '#222', marginTop: 4 }}>
                        {(value as string[]).map((v, i) => <li key={i} style={{ marginBottom: 2 }}>{v}</li>)}
                      </ul>
                    ) : (
                      <span style={{ fontSize: 16, marginLeft: 6, color: '#222' }}>{(value as { seating_capacity: string }).seating_capacity}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
      {/* Contact Modal */}
      <ContactModal open={showContactModal} onClose={() => setShowContactModal(false)} />
    </div>
  );
};

export default HotelsPage;
