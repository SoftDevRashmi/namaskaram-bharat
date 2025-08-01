import React from 'react';

interface CardProps {
  card: {
    id: number;
    title: string;
    img: string;
  };
  onClick: () => void;
  className?: string;
}

const Card: React.FC<CardProps> = ({ card, onClick, className }) => {
  console.log(`Card ${card.id}: Loading image from ${card.img}`);
  
  return (
    <div
      onClick={onClick}
      className={`relative cursor-pointer bg-white border-2 border-teal-500 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl group overflow-hidden w-[200px] h-[120px] mx-auto ${className || ''}`}
    >
      {/* Simple image without any complex handling */}
      <img 
        src={card.img} 
        alt={card.title} 
        className="w-full h-3/4 object-cover rounded-t-lg"
        style={{ display: 'block' }}
        onError={(e) => {
          console.error(`❌ Failed to load image: ${card.img}`);
          e.currentTarget.style.border = '2px solid red';
          e.currentTarget.style.backgroundColor = '#ffebee';
        }}
        onLoad={() => {
          console.log(`✅ Successfully loaded image: ${card.img}`);
        }}
      />
      
      {/* Text area */}
      <div className="absolute bottom-0 left-0 right-0 bg-white text-center py-0.5 px-1 rounded-b-lg z-10">
        <span className="text-teal-600 font-semibold text-xs md:text-sm lg:text-lg xl:text-xl flex items-center justify-center w-full h-full">
          {card.title}
        </span>
      </div>
    </div>
  );
};

export default Card;