"use client";
import { useState } from "react";
import Card from "./components/Card"; // Ensure this path is correct
import Navbar from "./components/Navbar"; // Ensure this path is correct
import SearchForm from "./components/SearchForm"; // Ensure this path is correct
import SecondPage from "./SecondPage"; // Ensure this path is correct
import ScubaWaterSportsPage from "./components/ScubaWaterSportsPage";
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export interface CardType {
  id: number;
  title: string;
  img: string;
}

const cards: CardType[] = [
  {
    id: 1,
    title: "Pune to Goa",
    img: "/images/travel1.jpg", // Keep your original image
  },
  {
    id: 2,
    title: "Mumbai to Goa",
    img: "/images/travel2.jpg", // Keep your original image
  },
  {
    id: 3,
    title: "Hyderabad to Goa",
    img: "/images/travel3.jpg", // Keep your original image
  },
  {
    id: 4,
    title: "Offers Voucher",
    img: "/images/travel4.jpg", // Keep your original image
  },
  {
    id: 5,
    title: "Customised Packages",
    img: "/images/maldives.jpg", // Keep your original image
  },
];

export default function HomePage() {
  const [selectedCard, setSelectedCard] = useState<CardType | null>(null);
  const [scubaPage, setScubaPage] = useState(false);
  const router = useRouter();

  const handleHomeClick = () => {
    setSelectedCard(null);
    setScubaPage(false);
  };

  if (scubaPage) {
    return <ScubaWaterSportsPage />;
  }
  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/travel1.jpg')", // Background image for the hero section
      }}
    >
      <Navbar onHomeClick={handleHomeClick} />
      {/* Hero Section */}
      {!selectedCard && (
        <div className="flex items-center justify-center h-32">
          <h1 className="text-4xl text-white text-center drop-shadow-lg">
            Travel to the outside and inside the world
          </h1>
        </div>
      )}
      {!selectedCard ? (
        <div className="flex flex-col items-center mt-4">
          {/* Card Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {cards.slice(0, 3).map((card) => (
              <Card
                key={card.id}
                card={card}
                onClick={() => {
                  if (card.title.toLowerCase().includes('hotel')) {
                    router.push('/hotels');
                  } else {
                    setSelectedCard(card);
                  }
                }}
              />
            ))}
          </div>
          <div className="flex justify-center gap-6 mt-6">
            {cards.slice(3).map((card) => (
              <Card
                key={card.id}
                card={card}
                onClick={() => setSelectedCard(card)}
              />
            ))}
          </div>
          <SearchForm />
          <div style={{ display: 'flex', justifyContent: 'center', margin: '2rem 0' }}>
            <Link href="/hotels">
              <button style={{ padding: '1rem 2rem', fontSize: 18, borderRadius: 8, background: '#007bff', color: '#fff', border: 'none', cursor: 'pointer' }}>
                Explore Hotels & Villas
              </button>
            </Link>
          </div>
          {/* Our Services Section (from SecondPage) */}
          <div className="py-12 px-4" style={{ background: 'rgba(20,184,166,0.07)', borderRadius: 18, margin: '2rem 0', boxShadow: '0 2px 12px 0 rgba(20,184,166,0.08)' }}>
            <div className="flex flex-col items-center">
              <h3 className="text-xl text-teal-800 mt-4" style={{ fontWeight: 700 }}>Our Services</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4">
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
                      if (service.title === 'Water World') {
                        setScubaPage(true);
                      } else if (service.title === 'Hotel & Villa') {
                        router.push('/hotels');
                      } else if (service.title === 'Luxury Villas') {
                        setSelectedCard({ id: 0, title: 'Luxury Villas', img: '' });
                      }
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
          {/* Footer Section (from SecondPage) */}
          <footer className="bg-gray-900 text-gray-300 pt-12 pb-4 px-4 mt-8 border-t border-gray-700">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-8">
              {/* Logo and Description */}
              <div className="flex-1 min-w-[220px] mb-8 md:mb-0">
                <div className="flex items-center mb-4">
                  <img src="/images/logo.jpeg" alt="Namaskaram Bharat" className="h-10 mr-3" />
                  <span className="font-bold text-lg text-white">Namaskaram Bharat</span>
                </div>
                <p className="text-sm">Your gateway to unforgettable experiences in the paradise of Goa. We offer everything you need for a perfect vacation, from luxurious stays to exciting tours and reliable transportation.</p>
              </div>
              {/* Quick Links and Important Links */}
              <div className="flex-[2] grid grid-cols-2 gap-8 min-w-[220px]">
                <div>
                  <h4 className="font-bold text-white mb-2">Quick Links</h4>
                  <ul className="space-y-1">
                    <li><a href="#" className="hover:text-white">Tour Package</a></li>
                    <li><a href="#" className="hover:text-white">Hotel Stays</a></li>
                    <li><a href="#" className="hover:text-white">Rented Villas</a></li>
                    <li><a href="#" className="hover:text-white">Cars & Bikes</a></li>
                    <li><a href="#" className="hover:text-white">About us</a></li>
                    <li><a href="#" className="hover:text-white">Blog</a></li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-white mb-2">Important Links</h4>
                  <ul className="space-y-1">
                    <li><a href="#" className="hover:text-purple-400">Contact Us</a></li>
                    <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                    <li><a href="#" className="hover:text-white">Terms & Condition</a></li>
                    <li><a href="#" className="hover:text-white">Return & Refund</a></li>
                  </ul>
                </div>
              </div>
              {/* Contact Info and Social Icons */}
              <div className="flex-1 min-w-[220px]">
                <h4 className="font-bold text-white mb-2">Contact Us</h4>
                <div className="flex items-start mb-2">
                  <svg className="w-5 h-5 mr-2 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 12.414a2 2 0 00-2.828 0l-4.243 4.243a8 8 0 1111.314 0z" /></svg>
                  <span>Near Poshak Mall, Pilerane, Bardez, Goa, 403521</span>
                </div>
                <div className="flex items-center mb-4">
                  <svg className="w-5 h-5 mr-2 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-9 4v8" /></svg>
                  <span>+91 79772 65548</span>
                </div>
                <div className="flex gap-3 mt-2">
                  <a href="#" className="text-gray-400 hover:text-white"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.46 6c-.77.35-1.6.58-2.47.69a4.3 4.3 0 001.88-2.37 8.59 8.59 0 01-2.72 1.04A4.28 4.28 0 0016.11 4c-2.37 0-4.29 1.92-4.29 4.29 0 .34.04.67.11.99C7.69 9.13 4.07 7.38 1.64 4.7c-.37.64-.58 1.38-.58 2.17 0 1.5.76 2.82 1.92 3.6a4.28 4.28 0 01-1.94-.54v.05c0 2.1 1.5 3.85 3.5 4.25-.36.1-.74.16-1.13.16-.28 0-.54-.03-.8-.08.54 1.7 2.1 2.94 3.95 2.97A8.6 8.6 0 012 19.54a12.13 12.13 0 006.56 1.92c7.88 0 12.2-6.53 12.2-12.2 0-.19 0-.37-.01-.56A8.7 8.7 0 0024 4.59a8.48 8.48 0 01-2.54.7z" /></svg></a>
                  <a href="#" className="text-gray-400 hover:text-white"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.04c-5.5 0-9.96 4.46-9.96 9.96 0 4.41 3.6 8.07 8.19 8.93.6.11.82-.26.82-.58v-2.02c-3.34.73-4.04-1.61-4.04-1.61-.54-1.37-1.32-1.74-1.32-1.74-1.08-.74.08-.73.08-.73 1.2.08 1.83 1.23 1.83 1.23 1.06 1.82 2.78 1.3 3.46.99.11-.77.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.97 0-1.32.47-2.39 1.24-3.23-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 016 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.87.12 3.17.77.84 1.24 1.91 1.24 3.23 0 4.64-2.8 5.67-5.47 5.97.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.82.58C20.36 20.07 24 16.41 24 12c0-5.5-4.46-9.96-9.96-9.96z" /></svg></a>
                  <a href="#" className="text-gray-400 hover:text-white"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M21.54 7.2c-.13-.47-.52-.8-.99-.8h-2.13c-.47 0-.86.33-.99.8l-1.7 6.13c-.13.47.09.97.52 1.13.43.16.91-.02 1.13-.45l.36-.65h2.44l.36.65c.22.43.7.61 1.13.45.43-.16.65-.66.52-1.13l-1.7-6.13zM12 2C6.48 2 2 6.48 2 12c0 5.52 4.48 10 10 10s10-4.48 10-10c0-5.52-4.48-10-10-10zm0 18c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8z" /></svg></a>
                  <a href="#" className="text-gray-400 hover:text-white"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184C18.403 2.403 16.946 2 15.385 2c-1.561 0-3.018.403-4.23 1.184C9.597 2.403 8.14 2 6.579 2 5.018 2 3.561 2.403 2.349 3.184A6.978 6.978 0 000 8.579c0 1.561.403 3.018 1.184 4.23C.403 14.403 0 15.86 0 17.421c0 1.561.403 3.018 1.184 4.23C2.403 21.597 3.86 22 5.421 22c1.561 0 3.018-.403 4.23-1.184C14.403 21.597 15.86 22 17.421 22c1.561 0 3.018-.403 4.23-1.184A6.978 6.978 0 0024 15.421c0-1.561-.403-3.018-1.184-4.23C23.597 9.597 24 8.14 24 6.579c0-1.561-.403-3.018-1.184-4.23zM12 20c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8z" /></svg></a>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Namaskaram Bharat. All rights reserved.
            </div>
          </footer>
        </div>
      ) : (
        <SecondPage card={selectedCard} onBack={() => setSelectedCard(null)} />
      )}
    </div>
  );
}