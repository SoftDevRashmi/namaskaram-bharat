import React, { useState } from 'react';
import activities from '../../data/activities.json';

const Modal = ({ activity, onClose }: { activity: any, onClose: () => void }) => (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 transition-opacity animate-fade-in">
    <div className="relative bg-white rounded-2xl shadow-2xl w-[80vw] h-[80vh] max-w-5xl max-h-[95vh] flex flex-col overflow-hidden animate-fade-in-up">
      {/* Header with close button */}
      <div className="flex items-center justify-between bg-gradient-to-r from-teal-600 to-blue-500 px-6 py-4">
        <h3 className="text-2xl font-bold text-white tracking-wide truncate">{activity.title}</h3>
        <button
          onClick={onClose}
          className="text-white text-4xl font-bold hover:text-red-300 focus:outline-none transition absolute top-2 right-4 z-10"
          aria-label="Close"
          style={{ lineHeight: '1', background: 'none', border: 'none' }}
        >
          &times;
        </button>
      </div>
      {/* Main content row: left (image+price+button), right (details) */}
      <div className="flex flex-row h-full w-full">
        {/* Left side: image, price, button */}
        <div className="w-1/2 flex flex-col items-center justify-center bg-gray-50 p-4">
          <img src={activity.img || '/images/placeholder.jpg'} alt={activity.title} className="h-48 w-auto max-w-full object-cover rounded-2xl mb-6" />
          {activity.price && (
            <div className="text-2xl font-bold text-blue-700 mb-4 text-center">
              {typeof activity.price === 'string'
                ? activity.price
                : <>
                    <div>With Watersports: {activity.price.with_watersports}</div>
                    <div>Without Watersports: {activity.price.without_watersports}</div>
                  </>
              }
            </div>
          )}
          <button className="bg-gradient-to-r from-teal-600 to-blue-500 text-white px-8 py-3 rounded-lg font-bold hover:from-teal-700 hover:to-blue-600 transition shadow-lg text-lg tracking-wide">Book Now</button>
        </div>
        {/* Right side: scrollable content */}
        <div className="w-1/2 p-6 overflow-y-auto flex-1 space-y-4">
          {activity.time && <div><span className="font-semibold text-teal-700">Time:</span> <span className="text-gray-700">{activity.time}</span></div>}
          {activity.boat_time && <div><span className="font-semibold text-teal-700">Boat Time:</span> <span className="text-gray-700">{activity.boat_time}</span></div>}
          {activity.details && Array.isArray(activity.details) && (
            <div>
              <span className="font-semibold text-teal-700">Details:</span>
              <ul className="list-disc ml-6 mt-1 text-sm text-gray-700">
                {activity.details.map((a: string, i: number) => <li key={i}>{a}</li>)}
              </ul>
            </div>
          )}
          {activity.activities && (
            <div>
              <span className="font-semibold text-teal-700">Activities:</span>
              <ul className="list-disc ml-6 mt-1 text-sm text-gray-700">
                {activity.activities.map((a: string, i: number) => <li key={i}>{a}</li>)}
              </ul>
            </div>
          )}
          {activity.tour_detail && (
            <div>
              <span className="font-semibold text-teal-700">Tour Details:</span>
              <ul className="list-disc ml-6 mt-1 text-sm text-gray-700">
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
    <div className="min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('/images/sea.jpg')" }}>
      {/* Hero Section */}
      <div className="bg-white-400 bg-opacity-60 py-16 flex flex-col items-center justify-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center drop-shadow-lg">Scuba & Water Sports in Goa</h1>
        <p className="text-lg md:text-xl text-white text-center max-w-2xl mb-6">Book the best scuba diving and water sports packages in Goa. Certified instructors, safe equipment, and unforgettable experiences await you!</p>
      </div>

      {/* Featured Activities Section */}
      <div className="py-12 px-4 md:px-16">
        <h2 className="text-3xl font-bold text-center text-white mb-8">Featured Activities</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {activities.map((activity, idx) => (
            <div
              key={activity.title}
              className="bg-white bg-opacity-90 rounded-lg shadow-lg overflow-hidden w-80 flex flex-col items-center relative group"
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
      <footer className="bg-teal-800 text-white py-6 mt-8 text-center">
        <p>&copy; {new Date().getFullYear()} Namaskaram Bharat. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default ScubaWaterSportsPage; 