import React, { useState } from 'react';
import Card from './components/Card'; // Import the Card component
import ScubaWaterSportsPage from './components/ScubaWaterSportsPage';
import { useRouter } from 'next/navigation';
import HotelsPage from './components/HotelsPage'; // Added import for HotelsPage
import Navbar from './components/Navbar'; // Import the Navbar component

interface Card {
  id: number;
  title: string;
  img: string;
}

interface SecondPageProps {
  card: Card;
  onBack: () => void;
}

// Define the services to display on the second page
const services = [
  { id: 1, title: "Hotel & Villa", img: "/images/hotel.jpg" },
  { id: 2, title: "packages", img: "/images/packages.jpg" },
  { id: 3, title: "Water World", img: "/images/waterworld.jpg" },
  { id: 4, title: "Moped Rental", img: "/images/rentals.jpg" },
  { id: 5, title: "Party & Events", img: "/images/party.jpg" },
  { id: 6, title: "Luxury Villas", img: "/images/villa.jpg" },
];

const SecondPage: React.FC<SecondPageProps> = ({ card, onBack }) => {
  const [showScuba, setShowScuba] = useState(false);
  const [showLuxuryVilla, setShowLuxuryVilla] = useState(false);
  const router = useRouter();
  if (showScuba) {
    return <ScubaWaterSportsPage />;
  }
  if (showLuxuryVilla) {
    return <HotelsPage filterHotelName="Hitai Beach Villa" />;
  }
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat bg-fixed"
      style={{
        backgroundImage: "url('/images/backgroundImages/newSecondpage.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: '100%',
        position: 'relative',
        margin: '0',
        padding: '0'
      }}
    >
      {/* Navbar */}
      <Navbar />
      
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 px-4 sm:px-8 pt-4 text-base text-cyan-100 font-medium">
        <a 
          href="/"
          className="text-teal-400 hover:text-teal-300 cursor-pointer transition-colors underline"
        >
          Home
        </a>
        <span className="text-blue-400 font-bold">&gt;</span>
        <span className="text-white opacity-90">Our Services</span>
      </nav>

      {/* Our Services Section */}
      <div className="py-4 px-4">
  <div className="flex flex-col items-center">
    <h3 className="text-2xl md:text-3xl lg:text-4xl text-white mt-0 font-bold">Our Services</h3>

    {/* Centered card grid wrapper */}
    <div className="mt-4 flex justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
        {services.map((service) => (
          <Card
            key={service.id}
            card={service}
            className="w-[280px] h-[80px] md:w-[300px] md:h-[170px] lg:w-[320px] lg:h-[180px]"
            onClick={() => {
              if (service.title === 'Water World') {
                setShowScuba(true);
              } else if (service.title === 'Hotel & Villa') {
                router.push('/hotels');
              } else if (service.title === 'Luxury Villas') {
                setShowLuxuryVilla(true);
              }
            }}
          />
        ))}
      </div>
    </div>
  </div>
</div>
      {/* Top Destinations Section */}
      <div className="py-12 px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-8">Top destinations</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Example destinations, replace with your own data/images */}
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
                img: 'https://unsplash.com/photos/rocky-beach-meets-the-ocean-under-a-blue-sky-YR365zEherY',
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

      {/* Recommended for you Section */}
      <div className="py-12 px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-8">Recommended for you</h2>
        {/* Filter Buttons */}
        <div className="flex justify-center gap-3 mb-8">
          {["Tour", "Hotel", "Rental", "Activity", "Car"].map((filter, idx) => (
            <button
              key={filter}
              className={`px-6 py-2 rounded-lg font-semibold transition ${
                idx === 0
                  ? "bg-blue-900 text-white"
                  : "bg-gray-800 text-gray-200 hover:bg-blue-900 hover:text-white"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
        {/* Recommended Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Example Card 1 */}
            <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-lg relative">
              <div className="absolute top-3 left-3 bg-red-600 text-white text-xs px-3 py-1 rounded-full font-bold z-10">Featured</div>
              <img src="https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=600&q=80" alt="North Goa tour" className="w-full h-48 object-cover" />
              <div className="p-4">
                <div className="font-bold text-lg text-white mb-1">North Goa tour</div>
                <div className="text-gray-400 text-sm mb-2">$0.00 <span className="ml-2">7 hours</span></div>
              </div>
            </div>
            {/* Example Card 2 */}
            <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-lg relative">
              <div className="absolute top-3 left-3 bg-red-600 text-white text-xs px-3 py-1 rounded-full font-bold z-10">Featured</div>
              <img src="https://i.imgur.com/2nCt3Sbl.jpg" alt="South Goa tour" className="w-full h-48 object-cover" />
              <div className="p-4">
                <div className="font-bold text-lg text-white mb-1">South Goa tour</div>
                <div className="text-gray-400 text-sm mb-2">$0.00 <span className="ml-2">7 hours</span></div>
              </div>
            </div>
            {/* Example Card 3 */}
            <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-lg relative">
              <div className="absolute top-3 left-3 bg-red-600 text-white text-xs px-3 py-1 rounded-full font-bold z-10">Featured</div>
              <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80" alt="Solo Adventure" className="w-full h-48 object-cover" />
              <div className="p-4">
                <div className="font-bold text-lg text-white mb-1">Solo Adventure: A 4-Day Getaway</div>
                <div className="text-gray-400 text-sm mb-2">$0.00 <span className="ml-2">4 Days 3 Nights</span></div>
              </div>
            </div>
          </div>
      </div>

      {/* Stories, tips, and guides Section */}
      <div className="py-12 px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-8">Stories, tips, and guides</h2>
        {/* Pagination */}
        <div className="flex justify-center gap-2 mb-8">
          {[1, 2, 3].map((num) => (
            <button
              key={num}
              className={`w-10 h-10 rounded-lg font-bold text-lg transition ${num === 1 ? 'bg-blue-900 text-white' : 'bg-gray-800 text-gray-200 hover:bg-blue-900 hover:text-white'}`}
            >
              {num}
            </button>
          ))}
          <button className="w-10 h-10 rounded-lg font-bold text-lg bg-gray-800 text-gray-200 hover:bg-blue-900 hover:text-white">&gt;</button>
        </div>
        {/* Stories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {/* Card 1 */}
            <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-lg flex flex-col">
              <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80" alt="Why Goa is Tourist’s Paradise?" className="w-full h-40 object-cover" />
              <div className="p-4 flex-1 flex flex-col">
                <div className="text-xs font-bold text-purple-400 mb-1">BOOKING</div>
                <div className="font-bold text-lg text-white mb-1">Why Goa is Tourist’s Paradise?</div>
                <div className="text-gray-400 text-sm flex-1">Goa, a tiny state nestled on India’s western coast, has carved a niche for itself as one of the country’s most sought-after tourist destinations...</div>
              </div>
            </div>
            {/* Card 2 */}
            <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-lg flex flex-col">
              <img src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80" alt="When is the Best Time to Visit Goa?" className="w-full h-40 object-cover" />
              <div className="p-4 flex-1 flex flex-col">
                <div className="text-xs font-bold text-blue-300 mb-1">STAYS</div>
                <div className="font-bold text-lg text-white mb-1">When is the Best Time to Visit Goa?</div>
                <div className="text-gray-400 text-sm flex-1">From the iconic to the unexpected, the city of San Francisco never ceases to surprise. Kick-start your effortlessly...</div>
              </div>
            </div>
            {/* Card 3 */}
            <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-lg flex flex-col">
              <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80" alt="Goa’s Island Gems: A Guide to the Top Islands" className="w-full h-40 object-cover" />
              <div className="p-4 flex-1 flex flex-col">
                <div className="text-xs font-bold text-purple-400 mb-1">BOOKING</div>
                <div className="font-bold text-lg text-white mb-1">Goa’s Island Gems: A Guide to the Top Islands</div>
                <div className="text-gray-400 text-sm flex-1">From the iconic to the unexpected, the city of San Francisco never ceases to surprise. Kick-start your effortlessly...</div>
              </div>
            </div>
            {/* Card 4 */}
            <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-lg flex flex-col">
              <img src="https://images.unsplash.com/photo-1465101178521-c1a9136a3b41?auto=format&fit=crop&w=600&q=80" alt="Goa’s Party Scene: A Guide to the Most Famous Spots" className="w-full h-40 object-cover" />
              <div className="p-4 flex-1 flex flex-col">
                <div className="text-xs font-bold text-purple-400 mb-1">BOOKING</div>
                <div className="font-bold text-lg text-white mb-1">Goa’s Party Scene: A Guide to the Most Famous Spots</div>
                <div className="text-gray-400 text-sm flex-1">From the iconic to the unexpected, the city of San Francisco never ceases to surprise. Kick-start your effortlessly...</div>
              </div>
            </div>
          </div>
      </div>

      {/* Newsletter Subscription Section */}
      <div className="mt-16 px-4 flex flex-col md:flex-row items-center justify-center max-w-5xl mx-auto bg-gray-900 rounded-2xl border border-gray-700 overflow-hidden mb-12">
        {/* Left: Image */}
        <div className="w-full md:w-1/2 h-64 md:h-80 flex-shrink-0">
          <img
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80"
            alt="Beach umbrella"
            className="w-full h-full object-cover rounded-none md:rounded-l-2xl"
          />
        </div>
        {/* Right: Content */}
        <div className="w-full md:w-1/2 p-8 flex flex-col items-center md:items-start">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 text-center md:text-left">Get special offers, and more from Traveler</h2>
          <p className="text-gray-300 mb-6 text-center md:text-left">Subscribe to see secret deals prices drop the moment you sign up!</p>
          <form className="flex w-full max-w-md">
            <input
              type="email"
              placeholder="Email Address"
              className="flex-1 px-4 py-2 rounded-l-lg bg-gray-800 text-white border border-gray-700 focus:outline-none"
            />
            <button
              type="submit"
              className="px-6 py-2 bg-blue-900 text-white font-semibold rounded-r-lg border border-blue-900 hover:bg-blue-800 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      {/* Footer Section */}
      <footer className="bg-black/20 backdrop-blur-sm text-white pt-3 md:pt-12 pb-2 md:pb-4 px-4 mt-8 border-t border-white/20 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Mobile Layout */}
          <div className="md:hidden">
            {/* Logo and Title - Centered */}
            <div className="flex flex-col items-center mb-3">
              <div className="flex items-center mb-1">
                <img src="/images/logo2.png" alt="Namaskaram Bharat" className="h-6 mr-2" />
                <span className="font-bold text-base text-white">Namaskaram Bharat</span>
              </div>
              <p className="text-xs text-center text-gray-300 max-w-xs">
                Your gateway to unforgettable experiences in the paradise of Goa.
              </p>
            </div>
            
            {/* Quick Links and Important Links - Centered */}
            <div className="flex flex-col items-center mb-3">
              <div className="text-center mb-4 ml-8">
                <h4 className="font-bold text-white mb-2 text-sm">Quick Links</h4>
                <ul className="space-y-1">
                  <li><a href="#" className="text-xs hover:text-white text-gray-300">Tour Package</a></li>
                  <li><a href="#" className="text-xs hover:text-white text-gray-300">Hotel Stays</a></li>
                  <li><a href="#" className="text-xs hover:text-white text-gray-300">Rented Villas</a></li>
                  <li><a href="#" className="text-xs hover:text-white text-gray-300">Cars & Bikes</a></li>
                  <li><a href="#" className="text-xs hover:text-white text-gray-300">About us</a></li>
                  <li><a href="#" className="text-xs hover:text-white text-gray-300">Blog</a></li>
                </ul>
              </div>
              <div className="text-center">
                <h4 className="font-bold text-white mb-2 text-sm">Important Links</h4>
                <ul className="space-y-1">
                  <li><a href="#" className="text-xs hover:text-purple-400 text-gray-300">Contact Us</a></li>
                  <li><a href="#" className="text-xs hover:text-white text-gray-300">Privacy Policy</a></li>
                  <li><a href="#" className="text-xs hover:text-white text-gray-300">Terms & Condition</a></li>
                  <li><a href="#" className="text-xs hover:text-white text-gray-300">Return & Refund</a></li>
                </ul>
              </div>
            </div>
            
            {/* Contact Info - Compact */}
            <div className="text-center mb-2">
              <h4 className="font-bold text-white mb-1 text-xs">Contact Us</h4>
              <div className="text-xs text-gray-300 space-y-0.5">
                <div>Near Poshak Mall, Pilerane, Bardez, Goa, 403521</div>
                <div>+91 79772 65548</div>
              </div>
            </div>
            
            {/* Social Icons - Centered */}
            <div className="flex justify-center gap-3 mb-4">
              <a href="#" className="text-gray-400 hover:text-white"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22.46 6c-.77.35-1.6.58-2.47.69a4.3 4.3 0 001.88-2.37 8.59 8.59 0 01-2.72 1.04A4.28 4.28 0 0016.11 4c-2.37 0-4.29 1.92-4.29 4.29 0 .34.04.67.11.99C7.69 9.13 4.07 7.38 1.64 4.7c-.37.64-.58 1.38-.58 2.17 0 1.5.76 2.82 1.92 3.6a4.28 4.28 0 01-1.94-.54v.05c0 2.1 1.5 3.85 3.5 4.25-.36.1-.74.16-1.13.16-.28 0-.54-.03-.8-.08.54 1.7 2.1 2.94 3.95 2.97A8.6 8.6 0 012 19.54a12.13 12.13 0 006.56 1.92c7.88 0 12.2-6.53 12.2-12.2 0-.19 0-.37-.01-.56A8.7 8.7 0 0024 4.59a8.48 8.48 0 01-2.54.7z" /></svg></a>
              <a href="#" className="text-gray-400 hover:text-white"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.04c-5.5 0-9.96 4.46-9.96 9.96 0 4.41 3.6 8.07 8.19 8.93.6.11.82-.26.82-.58v-2.02c-3.34.73-4.04-1.61-4.04-1.61-.54-1.37-1.32-1.74-1.32-1.74-1.08-.74.08-.73.08-.73 1.2.08 1.83 1.23 1.83 1.23 1.06 1.82 2.78 1.3 3.46.99.11-.77.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.97 0-1.32.47-2.39 1.24-3.23-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 016 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.87.12 3.17.77.84 1.24 1.91 1.24 3.23 0 4.64-2.8 5.67-5.47 5.97.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.82.58C20.36 20.07 24 16.41 24 12c0-5.5-4.46-9.96-9.96-9.96z" /></svg></a>
              <a href="#" className="text-gray-400 hover:text-white"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M21.54 7.2c-.13-.47-.52-.8-.99-.8h-2.13c-.47 0-.86.33-.99.8l-1.7 6.13c-.13.47.09.97.52 1.13.43.16.91-.02 1.13-.45l.36-.65h2.44l.36.65c.22.43.7.61 1.13.45.43-.16.65-.66.52-1.13l-1.7-6.13zM12 2C6.48 2 2 6.48 2 12c0 5.52 4.48 10 10 10s10-4.48 10-10c0-5.52-4.48-10-10-10zm0 18c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8z" /></svg></a>
              <a href="#" className="text-gray-400 hover:text-white"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184C18.403 2.403 16.946 2 15.385 2c-1.561 0-3.018.403-4.23 1.184C9.597 2.403 8.14 2 6.579 2 5.018 2 3.561 2.403 2.349 3.184A6.978 6.978 0 000 8.579c0 1.561.403 3.018 1.184 4.23C.403 14.403 0 15.86 0 17.421c0 1.561.403 3.018 1.184 4.23C2.403 21.597 3.86 22 5.421 22c1.561 0 3.018-.403 4.23-1.184C14.403 21.597 15.86 22 17.421 22c1.561 0 3.018-.403 4.23-1.184A6.978 6.978 0 0024 15.421c0-1.561-.403-3.018-1.184-4.23C23.597 9.597 24 8.14 24 6.579c0-1.561-.403-3.018-1.184-4.23zM12 20c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8z" /></svg></a>
            </div>
          </div>
          
          {/* Desktop Layout */}
          <div className="hidden md:flex md:flex-row justify-between gap-8">
            {/* Logo and Description */}
            <div className="flex-1 min-w-[220px] mb-8 md:mb-0">
              <div className="flex items-center mb-4">
                <img src="/images/logo2.png" alt="Namaskaram Bharat" className="h-20 mr-3" />
                <span className="font-extrabold whitespace-normal leading-tight text-lg sm:text-xl md:text-2xl lg:text-3xl">
                  <span
                    className="italic"
                    style={{
                      color: '#FF9800',
                      fontFamily: '"Crimson Text", "Playfair Display", Georgia, serif',
                      fontWeight: '600',
                      textShadow: '2px 2px 4px rgba(0,0,0,0.4)',
                      letterSpacing: '0.05em'
                    }}
                  >
                    नमस्कारम्
                  </span>
                  <span className="inline-block w-3 md:w-4"></span>
                  <span
                    className="text-blue-900 italic"
                    style={{
                      fontFamily: '"Crimson Text", "Playfair Display", Georgia, serif',
                      fontStyle: 'italic',
                      fontWeight: '600',
                      textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
                      letterSpacing: '0.05em'
                    }}
                  >
                    Bharat
                  </span>
                </span>
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
        </div>
        <div className="border-t border-gray-700 mt-2 md:mt-8 pt-1 md:pt-4 text-center text-gray-400 text-xs md:text-sm">
          Namaskaram Bharat © Copyright {new Date().getFullYear()}
        </div>
      </footer>
    </div>
  );
};

export default SecondPage; // Ensure this is a default export