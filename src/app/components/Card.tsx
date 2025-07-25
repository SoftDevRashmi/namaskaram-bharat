import React from 'react';

interface CardProps {
  card: {
    id: number;
    title: string;
    img: string;
  };
  onClick: () => void;
}

const Card: React.FC<CardProps> = ({ card, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="relative cursor-pointer border-2 border-teal-500 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl group overflow-hidden"
      style={{ width: '250px', height: '150px' }}
    >
      <img src={card.img} alt={card.title} className="w-full h-full object-cover rounded-lg group-hover:brightness-90 transition duration-300" />
      {/* Gradient overlay for better text visibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 bg-teal-600 bg-opacity-80 text-white text-center p-2 rounded-b-lg font-semibold text-lg tracking-wide z-10">
        {card.title}
      </div>
    </div>
  );
};

export default Card; // Ensure this is a default export