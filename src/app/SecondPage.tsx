import React from 'react';
import Card from './components/Card'; // Import the Card component

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
  { id: 1, title: "Hotel", img: "https://via.placeholder.com/150?text=Hotel" },
  { id: 2, title: "Packages", img: "https://via.placeholder.com/150?text=Packages" },
  { id: 3, title: "Water World", img: "https://via.placeholder.com/150?text=Water+World" },
  { id: 4, title: "Moped Rental", img: "https://via.placeholder.com/150?text=Moped+Rental" },
  { id: 5, title: "Party & Events", img: "https://via.placeholder.com/150?text=Party+%26+Events" },
  { id: 6, title: "Villa & Apartment", img: "https://via.placeholder.com/150?text=Villa+%26+Apartment" },
  { id: 7, title: "Investment", img: "https://via.placeholder.com/150?text=Investment" },
];

const SecondPage: React.FC<SecondPageProps> = ({ card, onBack }) => {
  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/travel1.jpg')", // Use the same background image
      }}
    >
      <button onClick={onBack} className="bg-blue-600 text-white p-2 m-4">← Back</button>
      <div className="flex flex-col items-center">
        <h2 className="text-3xl text-white mt-4">{card.title}</h2>
        <img src={card.img} alt={card.title} className="mt-2 rounded-lg w-1/2" />
        <p className="text-white mt-4 text-center">
          Experience the beauty and culture of {card.title}. Enjoy your trip with our exclusive offers and packages!
        </p>
        <h3 className="text-xl text-white mt-4">Our Services</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4">
          {services.map((service) => (
            <Card key={service.id} card={service} onClick={() => {}} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SecondPage; // Ensure this is a default export