"use client";

import React, { useState } from 'react';
import activities from '../../data/activities.json';

interface Activity {
  title: string;
  img?: string;
  price: string | { with_watersports: string; without_watersports: string };
  time?: string;
  boat_time?: string;
  details?: string[];
  activities?: string[];
  tour_detail?: string[];
  sightseeing?: string[];
  include?: string[];
  exclusion?: string[];
  payment_policy?: string;
  terms_conditions?: string[] | string;
  transport?: string;
  desc?: string;
}

const Modal = ({ activity, onClose }: { activity: Activity, onClose: () => void }) => (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 transition-opacity animate-fade-in overflow-y-auto py-4">
    <div className="relative bg-white rounded-2xl shadow-2xl w-[95vw] sm:w-[90vw] md:w-[80vw] max-w-5xl flex flex-col overflow-hidden animate-fade-in-up m-auto">
      {/* Sticky header with close button */}
      <div className="sticky top-0 flex items-center justify-between bg-gradient-to-r from-teal-600 to-blue-500 px-4 sm:px-6 py-4 shadow-lg z-10">
        {/* Back button for mobile */}
        <button
          onClick={onClose}
          className="md:hidden flex items-center gap-2 text-white hover:text-gray-200 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          <span>Back</span>
        </button>
        <h3 className="text-xl sm:text-2xl font-bold text-white tracking-wide truncate text-center flex-1 md:flex-none">{activity.title}</h3>
        <button
          onClick={onClose}
          className="hidden md:block text-white text-4xl font-bold hover:text-red-300 focus:outline-none transition"
          aria-label="Close"
        >
          &times;
        </button>
      </div>
      {/* Main content: stack on mobile, side by side on desktop */}
      <div className="flex flex-col md:flex-row h-full w-full">
        {/* Left side: image, price, button */}
        <div className="w-full md:w-1/2 flex flex-col items-center justify-start bg-gray-50 p-4">
          <img 
            src={activity.img || '/images/waterworld.jpg'} 
            alt={activity.title} 
            className="w-full max-w-md aspect-video object-cover rounded-2xl mb-6 shadow-lg" />
          {activity.price && (
            <div className="w-full max-w-md bg-white rounded-xl shadow-sm p-4 mb-6">
              <div className="text-sm text-gray-600 mb-1">Package Price</div>
              {typeof activity.price === 'string' ? (
                <div className="text-2xl font-bold text-blue-700">{activity.price}</div>
              ) : (
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">With Watersports:</span>
                    <span className="text-xl font-bold text-blue-700">{activity.price.with_watersports}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Without Watersports:</span>
                    <span className="text-xl font-bold text-green-600">{activity.price.without_watersports}</span>
                  </div>
                </div>
              )}
            </div>
          )}
          <button className="w-full max-w-md bg-gradient-to-r from-teal-600 to-blue-500 text-white px-8 py-3 rounded-xl font-bold hover:from-teal-700 hover:to-blue-600 transition shadow-lg text-lg tracking-wide">
            Book Now
          </button>
        </div>
        {/* Right side: scrollable content */}
        <div className="w-full md:w-1/2 p-4 sm:p-6 overflow-y-auto flex-1 space-y-6 bg-gray-50/50">
          {activity.time && (
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-teal-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="font-semibold text-teal-700">Duration</span>
              </div>
              <div className="mt-2 text-gray-700">{activity.time}</div>
            </div>
          )}
          {activity.boat_time && (
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-teal-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
                <span className="font-semibold text-teal-700">Boat Time</span>
              </div>
              <div className="mt-2 text-gray-700">{activity.boat_time}</div>
            </div>
          )}
          {activity.details && Array.isArray(activity.details) && (
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <svg className="w-5 h-5 text-teal-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="font-semibold text-teal-700">Details</span>
              </div>
              <ul className="space-y-2">
                {activity.details.map((a: string, i: number) => (
                  <li key={i} className="flex items-start gap-2 text-gray-700">
                    <svg className="w-4 h-4 text-teal-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{a}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {activity.activities && Array.isArray(activity.activities) && (
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <svg className="w-5 h-5 text-teal-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="font-semibold text-teal-700">Activities</span>
              </div>
              <ul className="space-y-2">
                {activity.activities.map((a: string, i: number) => (
                  <li key={i} className="flex items-start gap-2 text-gray-700">
                    <svg className="w-4 h-4 text-teal-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{a}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {activity.tour_detail && Array.isArray(activity.tour_detail) && (
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <svg className="w-5 h-5 text-teal-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
                <span className="font-semibold text-teal-700">Tour Details</span>
              </div>
              <ul className="space-y-2 text-gray-700">
                {activity.tour_detail.map((a: string, i: number) => <li key={i}>{a}</li>)}
              </ul>
            </div>
          )}
          {activity.sightseeing && (
            <div>
              <span className="font-semibold text-teal-700">Sightseeing:</span>
              <ul className="list-disc ml-6 mt-1 text-sm text-gray-700">
                {activity.sightseeing.map((a: string, i: number) => <li key={i}>{a}</li>)}
              </ul>
            </div>
          )}
          {activity.include && (
            <div>
              <span className="font-semibold text-teal-700">Includes:</span>
              <ul className="list-disc ml-6 mt-1 text-sm text-gray-700">
                {activity.include.map((a: string, i: number) => <li key={i}>{a}</li>)}
              </ul>
            </div>
          )}
          {activity.exclusion && (
            <div>
              <span className="font-semibold text-teal-700">Exclusions:</span>
              <ul className="list-disc ml-6 mt-1 text-sm text-gray-700">
                {activity.exclusion.map((a: string, i: number) => <li key={i}>{a}</li>)}
              </ul>
            </div>
          )}
          {activity.payment_policy && (
            <div>
              <span className="font-semibold text-teal-700">Payment Policy:</span>
              <div className="text-sm text-gray-700 ml-2 mt-1">{activity.payment_policy}</div>
            </div>
          )}
          {activity.terms_conditions && (
            <div>
              <span className="font-semibold text-teal-700">Terms & Conditions:</span>
              {Array.isArray(activity.terms_conditions) ? (
                <ul className="list-disc ml-6 mt-1 text-sm text-gray-700">
                  {activity.terms_conditions.map((a: string, i: number) => <li key={i}>{a}</li>)}
                </ul>
              ) : (
                <div className="text-sm text-gray-700 ml-2 mt-1">{activity.terms_conditions}</div>
              )}
            </div>
          )}
          {activity.transport && (
            <div><span className="font-semibold text-teal-700">Transport:</span> <span className="text-gray-700">{activity.transport}</span></div>
          )}
          {activity.desc && <div className="text-gray-700 text-center mb-4 mt-2">{activity.desc}</div>}
        </div>
      </div>
    </div>
  </div>
);

const ScubaWaterSportsPage: React.FC = () => {
  const [modalIdx, setModalIdx] = useState<number | null>(null);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Navigation Bar */}
              <nav className="bg-transparent shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4  bg-transparent ">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <img src="/images/logo2.png" alt="Logo" className="h-12 sm:h-16 p-2" />
              <span className="text-lg sm:text-xl md:text-2xl font-bold text-white">Namaskaram Bharat</span>
            </div>
            <a 
              href="/"
              className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              <span className="hidden sm:inline">Back to Services</span>
              <span className="sm:hidden">Back</span>
            </a>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex-1 bg-gradient-to-b from-blue-100 to-white py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Scuba & Water Sports in Goa
            </h1>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
              Book the best scuba diving and water sports packages in Goa. Certified instructors, safe equipment, and unforgettable experiences await you!
            </p>
          </div>

          {/* Featured Activities Section */}
          <div className="py-12 px-4 md:px-16">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Featured Activities</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Render all cards except Offers Voucher and Customized Packages */}
              {activities.filter(a => a.title !== 'Offers Voucher' && a.title !== 'Customised Packages').map((activity, idx) => (
                <div
                  key={activity.title}
                  className="bg-white bg-opacity-90 rounded-lg shadow-lg overflow-hidden flex flex-col items-center relative group"
                >
                  <img
                    src={activity.img}
                    alt={activity.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="p-4 flex flex-col items-center w-full">
                    <h3 className="text-xl font-bold text-teal-700 mb-2 text-center">{activity.title}</h3>
                    <div className="text-lg font-semibold text-blue-700 mb-2 text-center">
                      {typeof activity.price === 'string'
                        ? activity.price
                        : <>
                            <div>With Watersports: {activity.price.with_watersports}</div>
                            <div>Without Watersports: {activity.price.without_watersports}</div>
                          </>
                      }
                    </div>
                    {activity.time && <div className="text-sm text-gray-600 mb-2">{activity.time}</div>}
                    {/* More Details Button */}
                    <button
                      className="mt-2 mb-2 px-4 py-1 bg-teal-600 text-white rounded hover:bg-teal-700 transition text-sm"
                      onClick={() => setModalIdx(idx)}
                    >
                      More Details
                    </button>
                    {/* Book Now Button */}
                    <button className="bg-gradient-to-r from-teal-600 to-blue-500 text-white px-4 py-2 rounded-lg font-semibold hover:from-teal-700 hover:to-blue-600 transition mt-2 w-full">Book Now</button>
                  </div>
                </div>
              ))}
            </div>
            {/* Separate grid for Offers Voucher and Customised Packages */}
            <div className="flex flex-col gap-8 w-full mt-8">
              {activities.filter(a => a.title === 'Offers Voucher' || a.title === 'Customised Packages').map((activity, idx) => (
                <div
                  key={activity.title}
                  className="bg-white bg-opacity-90 rounded-lg shadow-lg overflow-hidden flex flex-col items-center relative group w-full"
                >
                  <img
                    src={activity.img}
                    alt={activity.title}
                    className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="p-4 flex flex-col items-center w-full">
                    <h3 className="text-xl font-bold text-teal-700 mb-2 text-center">{activity.title}</h3>
                    <div className="text-lg font-semibold text-blue-700 mb-2 text-center">
                      {typeof activity.price === 'string'
                        ? activity.price
                        : <>
                            <div>With Watersports: {activity.price.with_watersports}</div>
                            <div>Without Watersports: {activity.price.without_watersports}</div>
                          </>
                      }
                    </div>
                    {activity.time && <div className="text-sm text-gray-600 mb-2">{activity.time}</div>}
                    {/* More Details Button */}
                    <button
                      className="mt-2 mb-2 px-4 py-1 bg-teal-600 text-white rounded hover:bg-teal-700 transition text-sm"
                      onClick={() => setModalIdx(idx)}
                    >
                      More Details
                    </button>
                    {/* Book Now Button */}
                    <button className="bg-gradient-to-r from-teal-600 to-blue-500 text-white px-4 py-2 rounded-lg font-semibold hover:from-teal-700 hover:to-blue-600 transition mt-2 w-full">Book Now</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Modal for More Details */}
      {modalIdx !== null && (
        <Modal activity={activities[modalIdx]} onClose={() => setModalIdx(null)} />
      )}

      {/* Newsletter Section */}
      <div className="bg-white bg-opacity-95 py-10 flex flex-col items-center mt-12">
        <h2 className="text-2xl font-bold text-teal-700 mb-4">Subscribe to Our Newsletter</h2>
        <p className="text-gray-700 mb-4 text-center">Get the latest updates on scuba diving and water sports offers in Goa.</p>
        <form className="flex flex-col sm:flex-row gap-4">
          <input type="email" placeholder="Enter your email" className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500" />
          <button className="bg-teal-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-teal-700 transition">Subscribe</button>
        </form>
      </div>

      {/* Footer */}
      <footer className="bg-transparent text-white py-6 text-center">
        <p>&copy; {new Date().getFullYear()} Namaskaram Bharat. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default ScubaWaterSportsPage;
