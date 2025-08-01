import React from 'react';
import Image from 'next/image';

interface CardProps {
  card: {
    id: number;
    title: string;
    img: string;
  };
  onClick: () => void;
  className?: string; // Allow custom className
}

const Card: React.FC<CardProps> = ({ card, onClick, className }) => {
  return (
    <div
      onClick={onClick}
      className={`relative cursor-pointer bg-white border-2 border-teal-500 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl group overflow-hidden w-[200px] h-[120px] mx-auto ${className || ''}`}
    >
      <Image 
        src={card.img} 
        alt={card.title} 
        width={200}
        height={90}
        className="w-full h-3/4 object-cover rounded-t-lg group-hover:brightness-90 transition duration-300"
        priority={false}
        unoptimized={true}
        onError={(e) => {
          console.error(`Failed to load image: ${card.img}`);
          // Fallback to a default image if needed
          e.currentTarget.src = '/images/logo2.png';
        }}
      />
      {/* White background for text area */}
      <div className="absolute bottom-0 left-0 right-0 bg-white text-center py-0.5 px-1 rounded-b-lg z-10">
        <span 
          className="text-teal-600 font-semibold text-xs md:text-sm lg:text-lg xl:text-xl flex items-center justify-center w-full h-full"
          style={{
            fontFamily: '"Crimson Text", "Playfair Display", Georgia, serif',
            fontWeight: '600',
            letterSpacing: '-0.01em',
            textShadow: '1px 1px 2px rgba(0,0,0,0.1)',
            fontSize: 'clamp(0.6rem, 1.8vw, 1.25rem)',
            lineHeight: '1.1'
          }}
        >
          {card.title}
        </span>
      </div>
    </div>
  );
};

export default Card; // Ensure this is a default export