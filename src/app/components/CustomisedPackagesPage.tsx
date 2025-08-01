"use client";
import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';

interface Package {
  name: string;
  price: number;
  duration: string;
  inclusions: string[];
  itinerary: any;
  notes: string[];
}

interface PackagesData {
  packages: Package[];
}

interface CustomisedPackagesPageProps {
  onBack: () => void;
}

// Helper function to get the appropriate image for each package
const getPackageImage = (packageName: string) => {
  switch (packageName) {
    case "Solo Goa Package":
      return "/images/packages/SOLO.JPEG.jpeg";
    case "Goa Honeymoon Package":
      return "/images/packages/HONEYMOON.JPEG.jpeg";
    case "Girls Special Goa Tour with Photoshoot":
      return "/images/beach.jpg"; // Using beach image for girls special tour
    default:
      return "/images/maldives.jpg";
  }
};

export default function CustomisedPackagesPage({ onBack }: CustomisedPackagesPageProps) {
  const [packages, setPackages] = useState<Package[]>([]);
  const [selectedPackage, setSelectedPackage] = useState<Package | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/data/packages.json')
      .then(res => res.json())
      .then((data: PackagesData) => {
        setPackages(data.packages);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error loading packages:', err);
        setLoading(false);
      });
  }, []);

  const handleBackClick = () => {
    setSelectedPackage(null);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-2xl text-gray-600">Loading packages...</div>
      </div>
    );
  }

  if (selectedPackage) {
    return <PackageDetail package={selectedPackage} onBack={handleBackClick} />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar onHomeClick={onBack} />
      
      {/* Hero Section */}
      <header
        className="bg-cover bg-center h-64 sm:h-80 md:h-96 flex flex-col justify-center items-center text-white relative px-4 sm:px-6 lg:px-8"
        style={{ backgroundImage: `url('/images/maldives.jpg')` }}
      >
        {/* Back Button */}
        <button
          onClick={onBack}
          className="absolute top-4 left-4 sm:top-6 sm:left-6 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 sm:p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
          aria-label="Go back"
        >
          <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold drop-shadow-lg text-center">Goa Tour Packages</h1>
        <p className="mt-2 text-base sm:text-lg md:text-xl lg:text-2xl drop-shadow-lg text-center">Discover the perfect adventure for you</p>
      </header>

             <main className="max-w-7xl mx-auto px-1 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1">
          {packages.map((pkg, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 max-w-sm mx-auto w-full">
              {/* Package Image */}
              <div className="h-48 sm:h-56 md:h-64 relative">
                <img 
                  src={getPackageImage(pkg.name)}
                  alt={pkg.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-1">{pkg.name}</h3>
                  <p className="text-sm sm:text-base md:text-lg opacity-90">{pkg.duration}</p>
                </div>
                {/* Price Badge */}
                <div className="absolute top-4 right-4 bg-orange-500 text-white px-2 sm:px-3 py-1 sm:py-2 rounded-full font-bold text-sm sm:text-base">
                  ₹{pkg.price.toLocaleString()}
                </div>
              </div>
              
              <div className="p-4 sm:p-6">
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800 mb-3 text-base sm:text-lg">Package Highlights:</h4>
                  <ul className="space-y-2">
                    {pkg.inclusions.slice(0, 4).map((inclusion, i) => (
                      <li key={i} className="text-xs sm:text-sm text-gray-600 flex items-start">
                        <svg className="w-3 h-3 sm:w-4 sm:h-4 text-orange-400 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
                        </svg>
                        <span>{inclusion}</span>
                      </li>
                    ))}
                    {pkg.inclusions.length > 4 && (
                      <li className="text-xs sm:text-sm text-orange-500 font-medium">
                        +{pkg.inclusions.length - 4} more inclusions
                      </li>
                    )}
                  </ul>
                </div>
                
                <button
                  onClick={() => setSelectedPackage(pkg)}
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 sm:py-3 rounded-lg shadow transition-colors duration-300 text-sm sm:text-base"
                >
                  View Full Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

function PackageDetail({ package: pkg, onBack }: { package: Package; onBack: () => void }) {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Navbar onHomeClick={onBack} />
      
      {/* Back Button */}
      <div className="absolute top-20 left-4 z-10">
        <button
          onClick={onBack}
          className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
          aria-label="Go back"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      </div>

      <main className="container mx-auto px-6 py-12">
        {/* Package Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">{pkg.name}</h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-6">{pkg.duration} - Starting at ₹{pkg.price.toLocaleString()}</p>
          <button className="bg-orange-500 hover:bg-orange-600 rounded px-8 py-4 font-semibold shadow-lg transition duration-300 text-lg text-white">
            Book Now
          </button>
        </div>

        {/* Image and Inclusions Section */}
        <section className="mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start max-w-6xl mx-auto">
            {/* Left Side - Full Image */}
            <div className="order-2 lg:order-1">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img 
                  src={getPackageImage(pkg.name)}
                  alt={pkg.name}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
            
            {/* Right Side - Package Inclusions */}
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-semibold mb-6 text-orange-500 border-b-4 border-orange-500 inline-block text-center">
                Package Inclusions
              </h2>
              <div className="space-y-4">
                {pkg.inclusions.map((item, i) => (
                  <div key={i} className="bg-white p-4 rounded-lg shadow-md flex items-start border-l-4 border-orange-400">
                    <svg className="w-6 h-6 text-orange-400 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Itinerary */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-semibold mb-6 text-orange-500 border-b-4 border-orange-500 inline-block">
              Detailed Itinerary
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            {Object.entries(pkg.itinerary).map(([dayKey, dayData]: [string, any], index) => (
              <div key={dayKey} className="bg-white rounded-lg shadow-md p-6 mb-6 border-l-4 border-orange-400">
                <h3 className="text-2xl font-bold mb-4 text-orange-600 text-center">Day {index + 1}</h3>
                
                {dayData.activities && (
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-800 mb-2 text-center">Activities:</h4>
                    <ul className="space-y-2">
                      {dayData.activities.map((act: string, i: number) => (
                        <li key={i} className="flex items-start">
                          <span className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span className="text-gray-700">{act}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {dayData.tour_type && (
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-800 mb-2 text-center">Tour Details:</h4>
                    <p className="text-orange-600 font-medium text-center">{dayData.tour_type}</p>
                    <p className="text-gray-600 text-sm text-center">Timing: {dayData.timing}</p>
                  </div>
                )}
                
                {dayData.places && (
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-800 mb-2 text-center">Places to Visit:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {dayData.places.map((place: string, i: number) => (
                        <div key={i} className="flex items-center">
                          <span className="w-2 h-2 bg-orange-400 rounded-full mr-2"></span>
                          <span className="text-gray-700">{place}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                {dayData.boat_party_includes && (
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-orange-800 mb-3 text-center">Boat Party Includes:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {dayData.boat_party_includes.map((inc: string, i: number) => (
                        <div key={i} className="flex items-center">
                          <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                          <span className="text-orange-700 text-sm">{inc}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Notes */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-semibold mb-6 text-orange-500 border-b-4 border-orange-500 inline-block">
              Important Notes
            </h2>
          </div>
          <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md border-l-4 border-orange-400">
            <ul className="space-y-3">
              {pkg.notes.map((note, i) => (
                <li key={i} className="flex items-start">
                  <span className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-gray-700">{note}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Booking Form */}
        <section className="mb-12">
          <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-semibold mb-6 text-orange-500 border-b-4 border-orange-500 inline-block text-center">Book Your Package</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block font-semibold mb-2 text-gray-700">Full Name</label>
                <input type="text" id="name" name="name" required className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"/>
              </div>
              <div>
                <label htmlFor="email" className="block font-semibold mb-2 text-gray-700">Email</label>
                <input type="email" id="email" name="email" required className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"/>
              </div>
              <div>
                <label htmlFor="phone" className="block font-semibold mb-2 text-gray-700">Phone Number</label>
                <input type="tel" id="phone" name="phone" required className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"/>
              </div>
              <button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-lg shadow transition-colors">
                Send Inquiry
              </button>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
} 