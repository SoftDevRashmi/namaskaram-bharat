import React, { useState } from 'react';
import ContactModal from './ContactModal';

interface LuxuryVilla {
  name: string;
  roomTypes: Array<{
    type: string;
    price: number;
    discountedPrice: number;
  }>;
  images: string[];
  facilities: string[];
}

const luxuryVillas: LuxuryVilla[] = [
  {
    name: "Acron Seawinds Baga-Arpora",
    roomTypes: [
      { type: "2BHK", price: 7500, discountedPrice: 7000 }
    ],
    images: [
      "/images/Hotels pics/Acron/acronEntry.jpeg",
      "/images/Hotels pics/Acron/acronBedroom.jpeg",
      "/images/Hotels pics/Acron/acronSwimPool.jpeg",
      "/images/Hotels pics/Acron/acronBalconyView.jpeg"
    ],
    facilities: [
      "Swimming Pool", "Private Bar", "Gym Facility", "Television",
      "Air Conditioning", "Free Wi-Fi", "Parking", "Housekeeping"
    ]
  },
  {
    name: "Happy Moon Boutique Villa",
    roomTypes: [
      { type: "4BHK", price: 22000, discountedPrice: 20000 }
    ],
    images: [
      "/images/Hotels pics/Happymoon/happymoonFront.jpeg",
      "/images/Hotels pics/Happymoon/happymoonBedroom.jpeg",
      "/images/Hotels pics/Happymoon/happymoonSwimpool.jpeg",
      "/images/Hotels pics/Happymoon/happymoonSeating.jpeg"
    ],
    facilities: [
      "Private Swimming Pool", "Private Bar", "Television",
      "Air Conditioning", "Free Wi-Fi", "Parking", "Housekeeping"
    ]
  }
];

interface LuxuryVillasModalProps {
  open: boolean;
  onClose: () => void;
}

const LuxuryVillasModal: React.FC<LuxuryVillasModalProps> = ({ open, onClose }) => {
  const [selectedVilla, setSelectedVilla] = useState<LuxuryVilla | null>(null);
  const [showContactModal, setShowContactModal] = useState(false);

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-teal-500 to-blue-600 text-white p-6 rounded-t-2xl">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl md:text-3xl font-bold">Luxury Villas</h2>
            <button
              onClick={onClose}
              className="text-white hover:text-gray-200 text-2xl font-bold"
            >
              ×
            </button>
          </div>
          <p className="text-teal-100 mt-2">Experience the finest luxury accommodations in Goa</p>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {luxuryVillas.map((villa, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                {/* Villa Images */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={villa.images[0]}
                    alt={villa.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src = '/images/logo2.png';
                    }}
                  />
                  <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    LUXURY
                  </div>
                </div>

                {/* Villa Details */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{villa.name}</h3>
                  
                  {/* Room Types and Pricing */}
                  <div className="mb-4">
                    {villa.roomTypes.map((room, roomIndex) => (
                      <div key={roomIndex} className="flex justify-between items-center mb-2">
                        <span className="text-gray-600 font-medium">{room.type}</span>
                        <div className="text-right">
                          <span className="text-gray-400 line-through text-sm">₹{room.price}</span>
                          <span className="text-teal-600 font-bold ml-2">₹{room.discountedPrice}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Facilities */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Key Facilities:</h4>
                    <div className="flex flex-wrap gap-2">
                      {villa.facilities.slice(0, 4).map((facility, facilityIndex) => (
                        <span
                          key={facilityIndex}
                          className="bg-teal-100 text-teal-800 text-xs px-2 py-1 rounded-full"
                        >
                          {facility}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <button
                      onClick={() => setSelectedVilla(villa)}
                      className="flex-1 bg-teal-600 text-white py-2 px-4 rounded-lg hover:bg-teal-700 transition-colors duration-200 font-medium"
                    >
                      View Details
                    </button>
                    <button
                      onClick={() => setShowContactModal(true)}
                      className="flex-1 bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition-colors duration-200 font-medium"
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Villa Detail Modal */}
        {selectedVilla && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-60 p-4">
            <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="sticky top-0 bg-gradient-to-r from-teal-500 to-blue-600 text-white p-6 rounded-t-2xl">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-bold">{selectedVilla.name}</h2>
                  <button
                    onClick={() => setSelectedVilla(null)}
                    className="text-white hover:text-gray-200 text-2xl font-bold"
                  >
                    ×
                  </button>
                </div>
              </div>

              <div className="p-6">
                {/* Image Gallery */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  {selectedVilla.images.map((image, imageIndex) => (
                    <div key={imageIndex} className="h-32 rounded-lg overflow-hidden">
                      <img
                        src={image}
                        alt={`${selectedVilla.name} - Image ${imageIndex + 1}`}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.currentTarget.src = '/images/logo2.png';
                        }}
                      />
                    </div>
                  ))}
                </div>

                {/* Room Types */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Room Types & Pricing</h3>
                  {selectedVilla.roomTypes.map((room, roomIndex) => (
                    <div key={roomIndex} className="bg-gray-50 p-4 rounded-lg mb-3">
                      <div className="flex justify-between items-center">
                        <div>
                          <h4 className="font-semibold text-gray-800">{room.type}</h4>
                          <p className="text-sm text-gray-600">Luxury accommodation</p>
                        </div>
                        <div className="text-right">
                          <p className="text-gray-400 line-through text-sm">₹{room.price}</p>
                          <p className="text-2xl font-bold text-teal-600">₹{room.discountedPrice}</p>
                          <p className="text-xs text-gray-500">per night</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* All Facilities */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">All Facilities</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {selectedVilla.facilities.map((facility, facilityIndex) => (
                      <div key={facilityIndex} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                        <span className="text-gray-700">{facility}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Book Now Button */}
                <div className="text-center">
                  <button
                    onClick={() => {
                      setSelectedVilla(null);
                      setShowContactModal(true);
                    }}
                    className="bg-orange-500 text-white py-3 px-8 rounded-lg hover:bg-orange-600 transition-colors duration-200 font-semibold text-lg"
                  >
                    Book This Villa Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Contact Modal */}
        {showContactModal && (
          <ContactModal
            open={showContactModal}
            onClose={() => setShowContactModal(false)}
          />
        )}
      </div>
    </div>
  );
};

export default LuxuryVillasModal; 