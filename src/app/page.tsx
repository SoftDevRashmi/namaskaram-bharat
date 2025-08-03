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
import Footer from "./components/Footer";

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

  console.log("Current scubaPage state:", scubaPage);
  if (scubaPage) return <ScubaWaterSportsPage />;
  if (customisedPackagesPage) return <CustomisedPackagesPage onBack={handleHomeClick} />;
  if (selectedCard) return <SecondPage card={selectedCard} onBack={() => setSelectedCard(null)} />;

  return (
    <div className="min-h-screen overflow-y-auto relative">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="fixed inset-0 w-full h-full object-cover z-0"
        style={{
          objectFit: 'cover',
          objectPosition: 'center',
          minWidth: '100%',
          minHeight: '100%',
          width: 'auto',
          height: 'auto'
        }}
      >
        <source src="/images/backgroundImages/compressedBG.mp4" type="video/mp4" />
        <img 
          src="/images/backgroundImages/bg.jpg"
          alt="Page Background Fallback"
          className="fixed inset-0 w-full h-full object-cover"
        />
      </video>

      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <div className="relative md:min-h-screen">
                 <div className="relative z-10 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 pt-4 md:pt-16">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white text-center drop-shadow-lg leading-tight font-serif italic mb-8 md:mb-12" style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>
            Where Goa's tide meets your traveler's soul
          </h1>

                         {/* Cards (Top 3) */}
               <div className="max-w-7xl mx-auto w-full">
                 <div className="flex flex-col items-center">
                   <div className="grid grid-cols-3 gap-2 justify-center">
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
                           className="w-full max-w-[550px] h-[120px] md:h-[160px]"
                         />
                       </div>
                     ))}
                   </div>

                              {/* Bottom row: Always 2 cards */}
                <div className="grid grid-cols-2 gap-2 mt-4 justify-center">
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
                        className="w-full max-w-[550px] h-[120px] md:h-[160px]"
                      />
                    </div>
                  ))}
                </div>
            </div>
          </div>

          {/* Explore Button */}
          <div className="flex justify-center mt-6 sm:mt-12 px-4 sm:px-6 lg:px-8">
            <Link href="/hotels">
              <button
                className="px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-lg bg-white hover:bg-gray-50 text-teal-600 border-2 border-teal-500 cursor-pointer transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                style={{
                  background: 'linear-gradient(135deg, #ffffff 0%, #f0f9ff 100%)',
                  boxShadow: '0 4px 15px rgba(20, 184, 166, 0.2)'
                }}
              >
                Explore Hotels & Villas
              </button>
            </Link>
          </div>
        </div>
      </div>

             {/* Our Services Heading & 6 Cards */}
       <div className="max-w-7xl mx-auto px-2 sm:px-4 relative z-10">
         <h2 className="text-2xl sm:text-3xl md:text-4xl text-white text-center font-bold mt-6 md:mt-2 mb-4">
           Our Services
         </h2>
        <div
          className="py-4 md:py-8"
          style={{
            background: "rgba(20,184,166,0.07)",
            borderRadius: 18,
            boxShadow: "0 2px 12px 0 rgba(20,184,166,0.08)",
          }}
        >
          <div className="flex flex-col items-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 lg:gap-12 w-full max-w-5xl">
              {[
                { id: 1, title: "Hotel & Villa", img: "/images/hotel.jpg" },
                { id: 2, title: "packages", img: "/images/packages.jpg" },
                { id: 3, title: "Water World", img: "/images/waterworld.jpg" },
                { id: 4, title: "Moped Rental", img: "/images/rentals.jpg" },
                { id: 5, title: "Party & Events", img: "/images/party.jpg" },
              ].map((service) => (
                <Card
                  key={service.id}
                  card={service}
                  className="w-[200px] h-[120px] mx-auto md:w-[320px] md:h-[180px]"
                  onClick={() => {
                    console.log("Card clicked:", service.title);
                    console.log("Service ID:", service.id);
                    if (service.title === "Water World") {
                      console.log("Navigating to scuba page");
                      try {
                        router.push("/scuba");
                      } catch (error) {
                        console.error("Navigation error:", error);
                        window.location.href = "/scuba";
                      }
                    } else if (service.title === "Hotel & Villa") {
                      console.log("Navigating to hotels page");
                      try {
                        router.push("/hotels");
                      } catch (error) {
                        console.error("Navigation error:", error);
                        window.location.href = "/hotels";
                      }
                    } else if (service.title === "Luxury Villas") {
                      console.log("Navigating to luxury hotels page");
                      try {
                        router.push("/hotels?filter=luxury");
                      } catch (error) {
                        console.error("Navigation error:", error);
                        window.location.href = "/hotels?filter=luxury";
                      }
                    } else {
                      console.log("No specific handler for:", service.title);
                    }
                  }}
                />
              ))}
              
              {/* Luxury Villas Card - Robust Click Handling */}
              <div className="relative w-[200px] h-[120px] mx-auto md:w-[320px] md:h-[180px]">
                <Card
                  card={{ id: 6, title: "Luxury Villas", img: "/images/villa.jpg" }}
                  className="w-full h-full"
                  onClick={() => {
                    console.log("Luxury Villas card clicked - navigating to luxury hotels page");
                    window.location.href = "/luxury-hotels";
                  }}
                />
                {/* Fallback transparent button */}
                <button
                  className="absolute inset-0 w-full h-full bg-transparent z-10"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    console.log("Luxury Villas fallback button clicked");
                    window.location.href = "/luxury-hotels";
                  }}
                  style={{ pointerEvents: 'auto' }}
                >
                  <span className="sr-only">Luxury Villas</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />


    </div>
  );
}