import React from 'react';
import Card from './components/Card';
import { useRouter } from 'next/navigation';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

interface Card {
  id: number;
  title: string;
  img: string;
}

interface SecondPageProps {
  card: Card;
  onBack: () => void;
}

const services = [
  { id: 1, title: "Hotel & Villa", img: "/images/hotel.jpg" },
  { id: 2, title: "Packages", img: "/images/packages.jpg" },
  { id: 3, title: "Water World", img: "/images/waterworld.jpg" },
  { id: 4, title: "Moped Rental", img: "/images/rentals.jpg" },
  { id: 5, title: "Party & Events", img: "/images/party.jpg" },
  { id: 6, title: "Luxury Villas", img: "/images/villa.jpg" },
];

const SecondPage: React.FC<SecondPageProps> = ({ card, onBack }) => {
  const router = useRouter();
  
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          poster="/images/backgroundImages/bg.jpg"
        >
          <source src="/images/backgroundImages/compressedBG.mp4" type="video/mp4" />
          {/* Fallback image if video fails to load */}
          <img 
            src="/images/backgroundImages/bg.jpg" 
            alt="Background" 
            className="w-full h-full object-cover"
          />
        </video>
      </div>
      
      {/* Content overlay */}
      <div className="relative z-10">
      <Navbar onHomeClick={onBack} />
      
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 px-4 sm:px-8 pt-4 text-base text-cyan-100 font-medium">
        <button 
          onClick={onBack}
          className="text-teal-400 hover:text-teal-300 cursor-pointer transition-colors underline bg-transparent border-none"
        >
          Home
        </button>
        <span className="text-blue-400 font-bold">&gt;</span>
        <span className="text-white opacity-90">Our Services</span>
      </nav>

      {/* Our Services Section */}
      <div className="py-12 px-4">
          <h3 className="text-3xl md:text-4xl lg:text-5xl text-white mt-8 mb-6 font-bold text-center drop-shadow-lg" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
            Our Services
          </h3>
        
        <div className="w-full max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 place-items-center">
            {services.map((service) => (
              <Card
                key={service.id}
                card={service}
        className="w-[240px] h-[120px] sm:w-[260px] sm:h-[140px] md:w-[280px] md:h-[160px] lg:w-[300px] lg:h-[180px]"
                onClick={() => {
                    console.log("SecondPage card clicked:", service.title);
                    if (service.title === 'Hotel & Villa') {
                      router.push('/hotels');
                    } else if (service.title === 'Water World') {
                      console.log("Navigating to scuba page from SecondPage");
                      router.push('/scuba');
                    } else if (service.title === 'Luxury Villas') {
                      console.log("Navigating to luxury hotels page from SecondPage");
                      router.push('/luxury-hotels');
                    }
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Top Destinations Section */}
      <div className="py-12 px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-8">Top destinations</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: 'Baga Beach',
                img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
                stats: '16 Activities · 12 Cars · 17 Hotels · 9 Rentals · 9 Tours',
                color: 'text-pink-300',
              },
              {
                name: 'Arambol Beach',
                img: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80',
                stats: '4 Activities · 1 Car · 3 Hotels · 6 Rentals · 15 Tours',
                color: 'text-blue-200',
              },
              {
                name: 'Vagator Beach',
                img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80',
                stats: '4 Activities · 10 Cars · 14 Hotels · 10 Rentals · 7 Tours',
                color: 'text-blue-200',
              },
              {
                name: 'Calangute Beach',
                img: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=600&q=80',
                stats: '13 Activities · 12 Cars · 16 Hotels · 8 Rentals · 9 Tours',
                color: 'text-blue-200',
              },
              {
                name: 'Palolem Beach',
                img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80',
                stats: '3 Activities · 2 Cars · 15 Hotels · 12 Rentals · 15 Tours',
                color: 'text-pink-300',
              },
              {
                name: 'Anjuna Beach',
                img: 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=600&q=80',
                stats: '7 Activities · 12 Cars · 5 Hotels · 10 Rentals · 9 Tours',
                color: 'text-pink-300',
              },
            ].map((dest, i) => (
              <div key={i} className="relative rounded-xl overflow-hidden shadow-lg group">
                <img src={dest.img} alt={dest.name} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="absolute inset-0 flex flex-col justify-end p-4">
                  <h3 className={`text-2xl font-bold mb-2 ${dest.color}`}>{dest.name}</h3>
                  <div className="text-sm text-blue-100 mb-1">{dest.stats}</div>
                </div>
              </div>
            ))}
          </div>
      </div>

        {/* Footer */}
        <Footer />
        </div>
    </div>
  );
};

export default SecondPage; 