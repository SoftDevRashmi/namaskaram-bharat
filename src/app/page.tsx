"use client";
import { useState } from "react";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import SecondPage from "./SecondPage";
import ScubaWaterSportsPage from "./components/ScubaWaterSportsPage";
import CustomisedPackagesPage from "./components/CustomisedPackagesPage";
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import ContactModal from "./components/ContactModal";

export interface CardType {
  id: number;
  title: string;
  img: string;
}

const cards: CardType[] = [
  { id: 1, title: "Pune to Goa", img: "/images/travel1.jpg" },
  { id: 2, title: "Mumbai to Goa", img: "/images/travel2.jpg" },
  { id: 3, title: "Hyderabad to Goa", img: "/images/travel3.jpg" },
  { id: 4, title: "Offers Voucher", img: "/images/travel4.jpg" },
  { id: 5, title: "Customised Packages", img: "/images/maldives.jpg" },
];

export default function HomePage() {
  const [selectedCard, setSelectedCard] = useState<CardType | null>(null);
  const [scubaPage, setScubaPage] = useState(false);
  const [customisedPackagesPage, setCustomisedPackagesPage] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);
  const router = useRouter();

  const handleHomeClick = () => {
    setSelectedCard(null);
    setScubaPage(false);
    setCustomisedPackagesPage(false);
  };

  if (scubaPage) return <ScubaWaterSportsPage />;
  if (customisedPackagesPage) return <CustomisedPackagesPage onBack={handleHomeClick} />;
  if (selectedCard) return <SecondPage card={selectedCard} onBack={() => setSelectedCard(null)} />;

  return (
    <div
      className="h-screen overflow-y-auto bg-cover bg-center"
      style={{ backgroundImage: "url('/images/travel1.jpg')" }}
    >
      <Navbar onHomeClick={handleHomeClick} />

      <div className="flex items-center justify-center h-24 sm:h-32 md:h-40 px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white text-center drop-shadow-lg leading-tight">
          Travel to the outside and inside the world
        </h1>
      </div>

      {/* Cards */}
      <div className="max-w-7xl mx-auto px-4 mt-12">
  <div className="flex flex-col items-center">

    {/* Top row: Always 3 cards */}
    <div className="grid grid-cols-3 gap-4 justify-center">
      {cards.slice(0, 3).map((card) => (
        <div key={card.id} className="flex justify-center">
          <Card
            card={card}
            onClick={() =>
              card.title.toLowerCase().includes("hotel")
                ? router.push("/hotels")
                : card.title === "Customised Packages"
                ? setCustomisedPackagesPage(true)
                : setSelectedCard(card)
            }
            className="w-full max-w-[280px] h-[200px]"
          />
        </div>
      ))}
    </div>

    {/* Bottom row: Always 2 cards */}
    <div className="grid grid-cols-2 gap-4 mt-6 justify-center">
      {cards.slice(3, 5).map((card) => (
        <div key={card.id} className="flex justify-center">
          <Card
            card={card}
            onClick={() =>
              card.title.toLowerCase().includes("hotel")
                ? router.push("/hotels")
                : card.title === "Customised Packages"
                ? setCustomisedPackagesPage(true)
                : setSelectedCard(card)
            }
            className="w-full max-w-[280px] h-[200px]"
          />
        </div>
      ))}
    </div>

  </div>
</div>

      {/* Explore Button */}
      <div className="flex justify-center my-8 sm:my-12 px-4 sm:px-6 lg:px-8">
        <Link href="/hotels">
          <button
            className="px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-lg bg-teal-500 hover:bg-teal-600 text-white border-none cursor-pointer transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Explore Hotels & Villas
          </button>
        </Link>
      </div>

      {/* Our Services */}
      <div
        className="max-w-7xl mx-auto py-12 px-1"
        style={{
          background: "rgba(20,184,166,0.07)",
          borderRadius: 18,
          margin: "2rem auto",
          boxShadow: "0 2px 12px 0 rgba(20,184,166,0.08)",
        }}
      >
        <div className="flex flex-col items-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-white text-center mt-4 font-bold">Our Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4 w-full max-w-3xl">
            {[
              { id: 1, title: "Hotel & Villa", img: "/images/hotel.jpg" },
              { id: 2, title: "packages", img: "/images/packages.jpg" },
              { id: 3, title: "Water World", img: "/images/waterworld.jpg" },
              { id: 4, title: "Moped Rental", img: "/images/rentals.jpg" },
              { id: 5, title: "Party & Events", img: "/images/party.jpg" },
              { id: 6, title: "Luxury Villas", img: "/images/villa.jpg" },
            ].map((service) => (
              <Card
                key={service.id}
                card={service}
                onClick={() => {
                  if (service.title === "Water World") {
                    setScubaPage(true);
                  } else if (service.title === "Hotel & Villa") {
                    router.push("/hotels");
                  } else if (service.title === "Luxury Villas") {
                    setSelectedCard({ id: 0, title: "Luxury Villas", img: "" });
                  }
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-teal-800 text-white pt-3 md:pt-12 pb-2 md:pb-4 px-4 sm:px-6 lg:px-8 mt-8 border-t border-teal-700 w-full">
        <div className="max-w-7xl mx-auto">
          {/* Mobile Layout */}
          <div className="md:hidden">
            {/* Logo and Title - Centered */}
            <div className="flex flex-col items-center mb-3">
              <div className="flex items-center mb-1">
                <img src="/images/logo2.png" alt="Namaskaram Bharat" className="h-6 mr-2" />
                <span className="font-bold text-base text-white">
                  <span className="text-orange-400">नमस्कारम </span>
                  <span className="text-blue-900">Bharat</span>
                </span>
              </div>
              <p className="text-xs text-center text-gray-300 max-w-xs">
                Your gateway to unforgettable experiences in the paradise of Goa.
              </p>
            </div>
            
            {/* Quick Links and Important Links - Side by Side */}
            <div className="grid grid-cols-2 gap-3 mb-3">
              <div>
                <h4 className="font-bold text-white mb-1 text-xs">Quick Links</h4>
                <ul className="space-y-0.5">
                  <li><a href="#" className="text-xs hover:text-orange-300 text-gray-300">Tour Package</a></li>
                  <li><a href="#" className="text-xs hover:text-orange-300 text-gray-300">Hotel Stays</a></li>
                  <li><a href="#" className="text-xs hover:text-orange-300 text-gray-300">Rented Villas</a></li>
                  <li><a href="#" className="text-xs hover:text-orange-300 text-gray-300">Cars & Bikes</a></li>
                  <li><a href="#" className="text-xs hover:text-orange-300 text-gray-300">About us</a></li>
                  <li><a href="#" className="text-xs hover:text-orange-300 text-gray-300">Blog</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-white mb-1 text-xs">Important Links</h4>
                <ul className="space-y-0.5">
                  <li><a href="#" onClick={() => setShowContactModal(true)} className="text-xs hover:text-orange-300 text-gray-300">Contact Us</a></li>
                  <li><a href="#" className="text-xs hover:text-orange-300 text-gray-300">Privacy Policy</a></li>
                  <li><a href="#" className="text-xs hover:text-orange-300 text-gray-300">Terms & Condition</a></li>
                  <li><a href="#" className="text-xs hover:text-orange-300 text-gray-300">Return & Refund</a></li>
                </ul>
              </div>
            </div>
            
            {/* Contact Info - Compact */}
            <div className="text-center mb-2">
              <h4 className="font-bold text-white mb-1 text-xs">Contact Us</h4>
              <div className="text-xs text-gray-300 space-y-0.5">
                <div>📍 Near Poshak Mall, Pilerane, Bardez, Goa, 403521</div>
                <div>📞 +91 8010357955 / 9022362693</div>
              </div>
            </div>
          </div>
          
          {/* Desktop Layout */}
          <div className="hidden md:flex md:flex-row justify-between gap-8">
            <div className="flex-1 min-w-[220px] mb-8 lg:mb-0">
              <div className="flex flex-col sm:flex-row items-center mb-4">
                <img src="/images/logo2.png" alt="Namaskaram Bharat" className="h-16 sm:h-20 mr-3 mb-2 sm:mb-0" />
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
              <p className="mb-2">📍 Near Poshak Mall, Pilerane, Bardez, Goa, 403521</p>
              <p>📞 +91 8010357955 / 9022362693</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-2 md:mt-8 pt-1 md:pt-4 text-center text-gray-400 text-xs md:text-sm">
          &copy; {new Date().getFullYear()} Namaskaram Bharat. All rights reserved.
        </div>

        <ContactModal open={showContactModal} onClose={() => setShowContactModal(false)} />
      </footer>
    </div>
  );
}
