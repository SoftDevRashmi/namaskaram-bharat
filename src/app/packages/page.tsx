"use client";
import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';

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

export default function PackagesPage() {
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
      <Navbar onHomeClick={() => {}} />
      
      {/* Hero Section */}
      <header
        className="bg-cover bg-center h-96 flex flex-col justify-center items-center text-white"
        style={{ backgroundImage: `url('/images/maldives.jpg')` }}
      >
        <h1 className="text-4xl md:text-6xl font-bold drop-shadow-lg">Goa Tour Packages</h1>
        <p className="mt-2 text-lg md:text-2xl drop-shadow-lg">Discover the perfect adventure for you</p>
      </header>

      <main className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center">
                <div className="text-center text-white">
                  <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                  <p className="text-lg">{pkg.duration}</p>
                </div>
              </div>
              
              <div className="p-6">
                <div className="text-center mb-4">
                  <span className="text-3xl font-bold text-orange-500">₹{pkg.price.toLocaleString()}</span>
                  <span className="text-gray-500 ml-2">per person</span>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Highlights:</h4>
                  <ul className="space-y-1">
                    {pkg.inclusions.slice(0, 3).map((inclusion, i) => (
                      <li key={i} className="text-sm text-gray-600 flex items-center">
                        <svg className="w-4 h-4 text-orange-400 mr-2 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
                        </svg>
                        {inclusion}
                      </li>
                    ))}
                    {pkg.inclusions.length > 3 && (
                      <li className="text-sm text-orange-500 font-medium">+{pkg.inclusions.length - 3} more inclusions</li>
                    )}
                  </ul>
                </div>
                
                <button
                  onClick={() => setSelectedPackage(pkg)}
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-lg shadow transition-colors duration-300"
                >
                  View Details
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
      
      {/* Hero Section */}
      <header
        className="bg-cover bg-center h-96 flex flex-col justify-center items-center text-white"
        style={{ backgroundImage: `url('/images/maldives.jpg')` }}
      >
        <h1 className="text-4xl md:text-6xl font-bold drop-shadow-lg">{pkg.name}</h1>
        <p className="mt-2 text-lg md:text-2xl drop-shadow-lg">{pkg.duration} - Starting at ₹{pkg.price.toLocaleString()}</p>
        <button className="mt-6 bg-orange-500 hover:bg-orange-600 rounded px-6 py-3 font-semibold shadow-lg transition duration-300">
          Book Now
        </button>
      </header>

      <main className="container mx-auto px-6 py-12">
        {/* Package Inclusions */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-orange-500 border-b-4 border-orange-500 inline-block">
            Package Inclusions
          </h2>
          <ul className="space-y-3">
            {pkg.inclusions.map((item, i) => (
              <li key={i} className="bg-white p-4 rounded shadow flex items-center">
                <svg className="w-6 h-6 text-orange-400 mr-3 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
                </svg>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Itinerary */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-orange-500 border-b-4 border-orange-500 inline-block">
            Itinerary
          </h2>

          {Object.entries(pkg.itinerary).map(([dayKey, dayData]: [string, any], index) => (
            <div key={dayKey} className="bg-white rounded shadow p-6 mb-6">
              <h3 className="text-xl font-bold mb-2">Day {index + 1}</h3>
              
              {dayData.activities && (
                <ul className="list-disc list-inside mb-4">
                  {dayData.activities.map((act: string, i: number) => (
                    <li key={i}>{act}</li>
                  ))}
                </ul>
              )}
              
              {dayData.tour_type && (
                <p className="italic font-semibold mb-3">{dayData.tour_type} ({dayData.timing})</p>
              )}
              
              {dayData.places && (
                <ul className="list-disc list-inside columns-2 gap-4">
                  {dayData.places.map((place: string, i: number) => (
                    <li key={i}>{place}</li>
                  ))}
                </ul>
              )}
              
              {dayData.boat_party_includes && (
                <>
                  <h4 className="font-semibold mb-2">Boat Party Includes:</h4>
                  <ul className="list-disc list-inside columns-2 gap-4">
                    {dayData.boat_party_includes.map((inc: string, i: number) => (
                      <li key={i}>{inc}</li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          ))}
        </section>

        {/* Notes */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-orange-500 border-b-4 border-orange-500 inline-block">
            Important Notes
          </h2>
          <ul className="list-disc list-inside space-y-2 bg-white p-6 rounded shadow">
            {pkg.notes.map((note, i) => (
              <li key={i} className="text-gray-700">{note}</li>
            ))}
          </ul>
        </section>

        {/* Booking Form */}
        <section className="mb-12 max-w-md mx-auto bg-white p-8 rounded shadow">
          <h2 className="text-3xl font-semibold mb-6 text-orange-500 border-b-4 border-orange-500 inline-block text-center">Book Your Package</h2>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block font-semibold mb-1">Full Name</label>
              <input type="text" id="name" name="name" required className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"/>
            </div>
            <div>
              <label htmlFor="email" className="block font-semibold mb-1">Email</label>
              <input type="email" id="email" name="email" required className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"/>
            </div>
            <div>
              <label htmlFor="phone" className="block font-semibold mb-1">Phone Number</label>
              <input type="tel" id="phone" name="phone" required className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"/>
            </div>
            <button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded shadow transition-colors">
              Send Inquiry
            </button>
          </form>
        </section>
      </main>
    </div>
  );
} 