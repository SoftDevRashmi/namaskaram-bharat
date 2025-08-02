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
      className={`rounded-lg cursor-pointer bg-white relative overflow-hidden ${className || 'w-[200px] h-[100px] md:w-[280px] md:h-[140px]'}`}
    >
      {/* Simple image with responsive sizing */}
      <img 
        src={card.img} 
        alt={card.title} 
        className="w-full h-3/4 object-cover block"
        onError={(e) => {
          console.error(`❌ Failed to load image: ${card.img}`);
          console.error(`Error details:`, e);
          // Try to load a fallback image
          e.currentTarget.src = '/images/logo2.png';
          e.currentTarget.style.border = '2px solid red';
          e.currentTarget.style.backgroundColor = '#ffebee';
        }}
        onLoad={() => {
          console.log(`✅ Successfully loaded image: ${card.img}`);
        }}
        crossOrigin="anonymous"
        loading="eager"
      />
      
      {/* Text area with responsive sizing */}
      <div className="absolute bottom-0 left-0 right-0 bg-white text-center p-1 md:p-2 rounded-b-md">
        <span className="text-teal-600 font-bold text-sm md:text-sm">
          {card.title}
        </span>
      </div>
    </div>
  );
};

export default Card;