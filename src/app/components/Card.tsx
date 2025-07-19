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
      className="relative cursor-pointer border rounded-lg shadow-lg transition-transform transform hover:scale-105"
      style={{ width: '250px', height: '150px' }} // Set fixed width and height
    >
      <img src={card.img} alt={card.title} className="w-full h-full object-cover rounded-lg" />
      <div className="absolute bottom-0 left-0 right-0 bg-teal-600 bg-opacity-50 text-white text-center p-2">
        {card.title}
      </div>
    </div>
  );
};

export default Card; // Ensure this is a default export