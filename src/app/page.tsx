"use client";
import { useState } from "react";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import SecondPage from "./SecondPage";
import ScubaWaterSportsPage from "./components/ScubaWaterSportsPage";
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
  const [showContactModal, setShowContactModal] = useState(false);
  const router = useRouter();

  const handleHomeClick = () => {
    setSelectedCard(null);
    setScubaPage(false);
  };

  if (scubaPage) return <ScubaWaterSportsPage />;
  if (selectedCard) return <SecondPage card={selectedCard} onBack={() => setSelectedCard(null)} />;

  return (
    <div
      className="h-screen overflow-y-auto bg-cover bg-center"
      style={{ backgroundImage: "url('/images/travel1.jpg')" }}
    >
      <Navbar onHomeClick={handleHomeClick} />

      <div className="flex items-center justify-center h-32">
        <h1 className="text-4xl text-white text-center drop-shadow-lg">
          Travel to the outside and inside the world
        </h1>
      </div>

      {/* Cards */}
      <div className="flex flex-col items-center mt-4 px-2 sm:px-4 md:px-0 w-full">
        <div className="w-full flex flex-col items-center">
          {/* Top row: 3 cards */}
          <div className="grid grid-cols-3 gap-2 justify-center w-auto">
            {cards.slice(0, 3).map((card) => (
              <div key={card.id} className="flex justify-center">
                <Card
                  card={card}
                  onClick={() =>
                    card.title.toLowerCase().includes("hotel")
                      ? router.push("/hotels")
                      : setSelectedCard(card)
                  }
                  className="w-[90px] h-[110px] sm:w-[130px] sm:h-[150px] md:w-[220px] md:h-[160px]"
                />
              </div>
            ))}
          </div>
          {/* Bottom row: 2 cards */}
          <div className="grid grid-cols-2 gap-2 justify-center w-auto mt-2">
            {cards.slice(3).map((card) => (
              <div key={card.id} className="flex justify-center">
                <Card
                  card={card}
                  onClick={() => setSelectedCard(card)}
                  className="w-[90px] h-[110px] sm:w-[130px] sm:h-[150px] md:w-[220px] md:h-[160px]"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Explore Button */}
      <div style={{ display: "flex", justifyContent: "center", margin: "2rem 0" }}>
        <Link href="/hotels">
          <button
            style={{
              padding: "1rem 2rem",
              fontSize: 18,
              borderRadius: 8,
              background: "#14b8a6",
              color: "#fff",
              border: "none",
              cursor: "pointer",
            }}
          >
            Explore Hotels & Villas
          </button>
        </Link>
      </div>

      {/* Our Services */}
      <div
        className="py-12 px-4"
        style={{
          background: "rgba(20,184,166,0.07)",
          borderRadius: 18,
          margin: "2rem 0",
          boxShadow: "0 2px 12px 0 rgba(20,184,166,0.08)",
        }}
      >
        <div className="flex flex-col items-center">
          <h2 className="text-xl text-white text-center mt-4 font-bold">Our Services</h2>
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
      <footer className="bg-teal-800 text-white pt-12 pb-4 px-4 mt-8 border-t border-teal-700 w-full">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-8">
          <div className="flex-1 min-w-[220px] mb-8 md:mb-0">
            <div className="flex items-center mb-4">
              <img src="/images/logo2.png" alt="Namaskaram Bharat" className="h-20 mr-3" />
              <span className="text-2xl font-bold ml-2">
                <span className="text-orange-400">नमस्कारम </span>
                <span className="text-blue-900">Bharat</span>
              </span>
            </div>
            <p className="text-sm text-center">
              Your gateway to unforgettable experiences in the paradise of Goa. We offer everything you need for a perfect vacation.
            </p>
          </div>

          <div className="flex-[2] grid grid-cols-2 gap-8 min-w-[220px]">
            <div>
              <h4 className="font-bold mb-2">Quick Links</h4>
              <ul className="space-y-1 text-sm">
                <li><a href="#">Tour Package</a></li>
                <li><a href="#">Hotel Stays</a></li>
                <li><a href="#">Rented Villas</a></li>
                <li><a href="#">Cars & Bikes</a></li>
                <li><a href="#">About us</a></li>
                <li><a href="#">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-2">Important Links</h4>
              <ul className="space-y-1 text-sm">
                <li><a href="#" onClick={() => setShowContactModal(true)}>Contact Us</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms & Condition</a></li>
                <li><a href="#">Return & Refund</a></li>
              </ul>
            </div>
          </div>

          <div className="flex-1 min-w-[220px] text-sm">
            <h4 className="font-bold mb-2">Contact Us</h4>
            <p>📍 Near Poshak Mall, Pilerane, Bardez, Goa, 403521</p>
            <p>📞 +91 8010357955 / 9022362693</p>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Namaskaram Bharat. All rights reserved.
        </div>

        <ContactModal open={showContactModal} onClose={() => setShowContactModal(false)} />
      </footer>
    </div>
  );
}
