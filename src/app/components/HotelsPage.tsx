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
    <div className="hotels-page" style={{ padding: '2rem', background: '#f8f9fa' }}>
      {/* Title Section */}
      <div style={{ textAlign: 'center', marginBottom: '2rem', fontSize: 32, fontWeight: 800, color: '#14b8a6', letterSpacing: 0.5 }}>
        Our Hotels & Villas
      </div>
      <div className="hotel-list" style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'center' }}>
        {filteredHotels.map((hotel: Hotel, idx: number) => {
          // Determine image paths for each hotel
          let images: string[] = [];
          let mainImage = getRandomImage();
          if (hotel.name === 'Hitai Beach Villa') {
            images = [
              '/images/Hotels pics/Hitai Beach Villa/Hitai Beach Villa seating area2.jpeg',
              '/images/Hotels pics/Hitai Beach Villa/Hitai Beach Villa seating area3.jpeg',
              '/images/Hotels pics/Hitai Beach Villa/Hitai Beach Villa seating area1.jpeg',
              '/images/Hotels pics/Hitai Beach Villa/Hitai Beach Villa bedroom4.jpeg',
              '/images/Hotels pics/Hitai Beach Villa/Hitai Beach Villa swimming pool1.jpeg',
              '/images/Hotels pics/Hitai Beach Villa/Hitai Beach Villa dinning area1.jpeg',
            ];
            mainImage = '/images/Hotels pics/Hitai Beach Villa/Hitai Beach Villa seating area4.jpeg';
          } else if (hotel.name === 'Japs Villa') {
            images = [
              '/images/Hotels pics/Japs Villa/Japs Villa 1BHK bedroom1.jpeg',
              '/images/Hotels pics/Japs Villa/Japs Villa 1BHK bedroom2.jpeg',
              '/images/Hotels pics/Japs Villa/Japs Villa 1BHK seating area.jpeg',
              '/images/Hotels pics/Japs Villa/Japs Villa 2BHK bedroom1.jpeg',
              '/images/Hotels pics/Japs Villa/Japs Villa 2BHK seating area.jpeg',
              '/images/Hotels pics/Japs Villa/Japs Villa 3BHK swimming pool.jpeg',
            ];
            mainImage = '/images/Hotels pics/Japs Villa/Japs Villa 3BHK swimming pool.jpeg';
          } else if (hotel.name === 'The Goa Courtiyard') {
            images = [
              '/images/Hotels pics/The Goa Courtiyard/The Goa Coutiyard front view.jpeg',
              '/images/Hotels pics/The Goa Courtiyard/The Goa Coutiyard backyard.jpeg',
              '/images/Hotels pics/The Goa Courtiyard/The Goa Coutiyard bedroom1.jpeg',
              '/images/Hotels pics/The Goa Courtiyard/The Goa Coutiyard bedrrom2.jpeg',
              '/images/Hotels pics/The Goa Courtiyard/The Goa Coutiyard swimming pool.jpeg',
              '/images/Hotels pics/The Goa Courtiyard/The Goa Coutiyard seating area.jpeg',
            ];
            mainImage = '/images/Hotels pics/The Goa Courtiyard/The Goa Coutiyard front view.jpeg';
          } else {
            while (images.length < 5) {
              images.push(getRandomImage());
            }
          }
          // Only show the main image on the card
          return (
            <div
              key={hotel.name}
              className="hotel-card"
              style={{
                width: '100%', maxWidth: 340, minWidth: 220, margin: '0 auto',
                background: '#fff',
                borderRadius: 20,
                boxShadow: '0 4px 24px 0 rgba(30,41,59,0.10)',
                cursor: 'pointer', 
                overflow: 'hidden',
                transition: 'transform 0.18s, box-shadow 0.18s',
                border: '1.5px solid #e2e8f0',
                position: 'relative',
              }}
              onMouseOver={e => {
                (e.currentTarget as HTMLDivElement).style.transform = 'scale(1.035)';
                (e.currentTarget as HTMLDivElement).style.boxShadow = '0 8px 32px 0 rgba(30,41,59,0.18)';
              }}
              onMouseOut={e => {
                (e.currentTarget as HTMLDivElement).style.transform = 'scale(1)';
                (e.currentTarget as HTMLDivElement).style.boxShadow = '0 4px 24px 0 rgba(30,41,59,0.10)';
              }}
              onClick={() => setSelectedHotel(hotel)}
            >
              {/* Only one image on the card */}
              <div style={{ width: '100%', height: 180, borderTopLeftRadius: 20, borderTopRightRadius: 20, overflow: 'hidden' }}>
                <img
                  src={mainImage}
                  alt={hotel.name + ' main image'}
                  style={{ width: '100%', height: 180, objectFit: 'cover', borderTopLeftRadius: 20, borderTopRightRadius: 20 }}
                />
              </div>
              <div style={{ padding: '1.2rem 1.2rem 1.6rem 1.2rem', position: 'relative' }}>
                <h2 style={{ margin: 0, fontSize: 23, fontWeight: 700, color: '#1e293b' }}>{hotel.name}</h2>
                <div style={{ color: '#64748b', fontSize: 15, margin: '0.5rem 0 0.7rem 0', fontWeight: 500 }}>
                  {hotel.location || 'Goa, India'}
                </div>
                {/* Price range for hotel card */}
                {hotel.room_types.length > 0 && (
                  <div style={{ fontSize: 16, color: '#14b8a6', fontWeight: 600, marginBottom: 6 }}>
                    {(() => {
                      const prices = hotel.room_types.map(r => r.discounted_price);
                      const min = Math.min(...prices);
                      const max = Math.max(...prices);
                      return min === max
                        ? `\u20b9${min} per night`
                        : `\u20b9${min} - \u20b9${max} per night`;
                    })()}
                  </div>
                )}
                <div style={{ fontSize: 15, color: '#555', marginBottom: 10 }}>
                  {hotel.room_types.length} Room Types &bull; {hotel.facilities.basic.slice(0, 2).join(', ')}...
                </div>
                <button
                  style={{
                    position: 'absolute',
                    bottom: 18,
                    right: 18,
                    background: 'linear-gradient(90deg, #2563eb 0%, #38bdf8 100%)',
                    color: '#fff',
                    border: 'none',
                    borderRadius: 8,
                    padding: '0.5rem 1.2rem',
                    fontWeight: 600,
                    fontSize: 15,
                    boxShadow: '0 2px 8px 0 rgba(30,41,59,0.10)',
                    cursor: 'pointer',
                    letterSpacing: 0.2,
                    transition: 'background 0.18s',
                  }}
                  onClick={e => { e.stopPropagation(); setShowContactModal(true); }}
                >
                  Get Best Price
                </button>
              </div>
            </div>
          );
        })}
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
            <div style={{ width: '100%' }}>
              {/* Carousel at the very top, large and full width */}
              <div style={{ width: '100%', maxWidth: 1100, margin: '0 auto', borderRadius: 18, overflow: 'hidden', marginBottom: 32 }}>
                {(() => {
                  let modalImages: string[] = [];
                  if (selectedHotel.name === 'Hitai Beach Villa') {
                    modalImages = [
                      '/images/Hotels pics/Hitai Beach Villa/Hitai Beach Villa seating area2.jpeg',
                      '/images/Hotels pics/Hitai Beach Villa/Hitai Beach Villa seating area3.jpeg',
                      '/images/Hotels pics/Hitai Beach Villa/Hitai Beach Villa seating area1.jpeg',
                      '/images/Hotels pics/Hitai Beach Villa/Hitai Beach Villa bedroom4.jpeg',
                      '/images/Hotels pics/Hitai Beach Villa/Hitai Beach Villa swimming pool1.jpeg',
                      '/images/Hotels pics/Hitai Beach Villa/Hitai Beach Villa dinning area1.jpeg',
                    ];
                  } else if (selectedHotel.name === 'Japs Villa') {
                    modalImages = [
                      '/images/Hotels pics/Japs Villa/Japs Villa 1BHK bedroom3.jpeg',
                      '/images/Hotels pics/Japs Villa/Japs Villa 1BHK bedroom2.jpeg',
                      '/images/Hotels pics/Japs Villa/Japs Villa 1BHK seating area.jpeg',
                      '/images/Hotels pics/Japs Villa/Japs Villa 2BHK bedroom1.jpeg',
                      '/images/Hotels pics/Japs Villa/Japs Villa 2BHK seating area.jpeg',
                      '/images/Hotels pics/Japs Villa/Japs Villa 3BHK swimming pool.jpeg',
                    ];
                  } else if (selectedHotel.name === 'The Goa Courtiyard') {
                    modalImages = [
                      '/images/Hotels pics/The Goa Courtiyard/The Goa Coutiyard front view.jpeg',
                      '/images/Hotels pics/The Goa Courtiyard/The Goa Coutiyard backyard.jpeg',
                      '/images/Hotels pics/The Goa Courtiyard/The Goa Coutiyard bedroom1.jpeg',
                      '/images/Hotels pics/The Goa Courtiyard/The Goa Coutiyard bedrrom2.jpeg',
                      '/images/Hotels pics/The Goa Courtiyard/The Goa Coutiyard swimming pool.jpeg',
                      '/images/Hotels pics/The Goa Courtiyard/The Goa Coutiyard seating area.jpeg',
                    ];
                  }
                  while (modalImages.length < 6) {
                    modalImages.push(getRandomImage());
                  }
                  const modalSliderSettings = {
                    dots: true,
                    arrows: true,
                    infinite: true,
                    speed: 500,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 5000, // slow
                    pauseOnHover: true,
                  };
                  return (
                    <Slider {...modalSliderSettings}>
                      {modalImages.slice(0, 6).map((img, i) => (
                        <div key={i}>
                          <img
                            src={img}
                            alt={selectedHotel.name + ' image ' + (i+1)}
                            style={{ width: '100%', height: 400, objectFit: 'cover', borderRadius: 18, boxShadow: '0 2px 12px 0 rgba(0,0,0,0.10)' }}
                          />
                        </div>
                      ))}
                    </Slider>
                  );
                })()}
              </div>
              {/* Row: Left (name/location/price), Center (room types), Right (Get Best Price) below carousel */}
              <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-start', gap: 48, marginBottom: 24, width: '100%' }}>
                {/* Left: Name, location, price */}
                <div style={{ minWidth: 260, textAlign: 'left', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <h2 style={{ marginTop: 0, fontSize: 36, fontWeight: 700, color: '#1e293b', marginBottom: 4 }}>{selectedHotel.name}</h2>
                  <div style={{ color: '#64748b', marginBottom: 12, fontSize: 22, fontWeight: 500, letterSpacing: 0.2 }}>{selectedHotel.location || 'Goa, India'}</div>
                  {selectedHotel.room_types.length > 0 && (
                    <div style={{ fontSize: 22, color: '#14b8a6', fontWeight: 700, marginBottom: 0 }}>
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
                <div style={{ minWidth: 260, textAlign: 'center', flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <span style={{ fontSize: 23, color: '#334155', fontWeight: 600, display: 'block', marginBottom: 10 }}>Room Types</span>
                  <ul style={{ margin: '0 auto', paddingLeft: 0, marginBottom: 0, display: 'inline-block', textAlign: 'left' }}>
                    {selectedHotel.room_types.map((room, i) => (
                      <li key={i} style={{ marginBottom: 8, fontSize: 20, display: 'flex', alignItems: 'center', gap: 8 }}>
                        <b style={{ color: '#2563eb', fontWeight: 600 }}>{room.type}</b>
                        <span style={{ textDecoration: room.discounted_price < room.price ? 'line-through' : 'none', color: '#888', fontSize: 18 }}>₹{room.price}</span>
                        <span style={{ color: '#27ae60', fontWeight: 700, fontSize: 20 }}>₹{room.discounted_price}</span>
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