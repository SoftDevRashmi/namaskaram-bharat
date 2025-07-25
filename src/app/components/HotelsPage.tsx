"use client";

import React, { useState, useEffect, useCallback } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
          className="hotel-modal"
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            background: 'rgba(30, 41, 59, 0.55)',
            backdropFilter: 'blur(6px)',
            WebkitBackdropFilter: 'blur(6px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            transition: 'background 0.3s',
            padding: '2vw', // add padding for mobile
            boxSizing: 'border-box',
          }}
          onClick={() => setSelectedHotel(null)}
        >
          <div
            style={{
              background: 'rgba(255,255,255,0.98)',
              borderRadius: 24,
              maxWidth: '1200px', // increased max width
              width: '100%',
              maxHeight: '95vh',
              overflowY: 'auto',
              boxShadow: '0 8px 40px 0 rgba(0,0,0,0.25)',
              position: 'relative',
              color: '#222',
              padding: 24,
              display: 'flex',
              flexDirection: 'row',
              gap: 36,
              fontFamily: 'Segoe UI, Arial, sans-serif',
              fontSize: 17,
              letterSpacing: 0.1,
              border: '1.5px solid #e2e8f0',
              animation: 'modalPopIn 0.3s cubic-bezier(.4,2,.6,1)',
              boxSizing: 'border-box',
              flexWrap: 'wrap',
            }}
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
              <div style={{ marginBottom: 18 }}>
                <div style={{ width: '100%', borderRadius: 14, overflow: 'hidden' }}>
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
                              style={{ 
                                width: '100%', 
                                height: 300, 
                                objectFit: 'cover', 
                                borderRadius: 14, 
                                boxShadow: '0 2px 12px 0 rgba(0,0,0,0.10)' 
                              }}
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
            </div>
            <div style={{ flex: 2, minWidth: 260 }}>
              <h2 style={{ marginTop: 0, fontSize: 28, fontWeight: 700, color: '#1e293b', marginBottom: 4 }}>{selectedHotel.name}</h2>
              <div style={{ color: '#64748b', marginBottom: 16, fontSize: 17, fontWeight: 500, letterSpacing: 0.2 }}>{selectedHotel.location || 'Goa, India'}</div>
              {/* Price range for modal */}
              {selectedHotel.room_types.length > 0 && (
                <div style={{ fontSize: 18, color: '#14b8a6', fontWeight: 700, marginBottom: 10 }}>
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
              <div style={{ borderTop: '1.5px solid #e2e8f0', margin: '12px 0 18px 0' }} />
              <div style={{ display: 'flex', alignItems: 'center', gap: 18, marginBottom: 10 }}>
                <span style={{ fontSize: 19, color: '#334155', fontWeight: 600 }}>Room Types</span>
                <span style={{ fontSize: 15, color: '#64748b', fontWeight: 400 }}>({selectedHotel.room_types.length} options)</span>
              </div>
              <ul style={{ margin: 0, paddingLeft: 20, marginBottom: 18 }}>
                {selectedHotel.room_types.map((room, i) => (
                  <li key={i} style={{ marginBottom: 8, fontSize: 16, display: 'flex', alignItems: 'center', gap: 8 }}>
                    <b style={{ color: '#2563eb', fontWeight: 600 }}>{room.type}</b>
                    <span style={{ textDecoration: room.discounted_price < room.price ? 'line-through' : 'none', color: '#888', fontSize: 15 }}>₹{room.price}</span>
                    <span style={{ color: '#27ae60', fontWeight: 700, fontSize: 16 }}>₹{room.discounted_price}</span>
                  </li>
                ))}
              </ul>
              <div style={{ borderTop: '1.5px solid #e2e8f0', margin: '12px 0 18px 0' }} />
              <span style={{ fontSize: 19, color: '#334155', fontWeight: 600, display: 'block', marginBottom: 10 }}>Facilities</span>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18 }}>
                {Object.entries(selectedHotel.facilities).map(([key, value]) => (
                  <div key={key} style={{ marginBottom: 8, background: '#f1f5f9', borderRadius: 8, padding: '10px 14px', boxShadow: '0 1px 4px 0 rgba(0,0,0,0.03)' }}>
                    <b style={{ textTransform: 'capitalize', fontSize: 15, color: '#475569', letterSpacing: 0.1 }}>{key.replace(/_/g, ' ')}:</b>
                    {Array.isArray(value) ? (
                      <ul style={{ margin: 0, paddingLeft: 18, fontSize: 15, color: '#222', marginTop: 4 }}>
                        {(value as string[]).map((v, i) => <li key={i} style={{ marginBottom: 2 }}>{v}</li>)}
                      </ul>
                    ) : (
                      <span style={{ fontSize: 15, marginLeft: 6, color: '#222' }}>{(value as { seating_capacity: string }).seating_capacity}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HotelsPage;
