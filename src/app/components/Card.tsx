import React from 'react';

interface CardProps {
  card: {
    id: number;
    title: string;
    img: string;
  };
  onClick: (e?: React.MouseEvent) => void;
  className?: string;
}

const Card: React.FC<CardProps> = ({ card, onClick, className }) => {
  console.log(`Card ${card.id}: Loading image from ${card.img}`);
  
  const handleClick = (e: React.MouseEvent) => {
    console.log(`Card ${card.id} (${card.title}) clicked!`);
    
    // Prevent any default behavior
    e.preventDefault();
    e.stopPropagation();
    
    // Add a brief visual feedback
    const target = e.currentTarget as HTMLElement;
    target.style.transform = 'scale(0.98)';
    
    // Reset the transform after a short delay
    setTimeout(() => {
      target.style.transform = '';
    }, 150);
    
    onClick(e);
  };
  
  return (
    <div
      onClick={handleClick}
      className={`rounded-lg cursor-pointer bg-white relative overflow-hidden transition-all duration-200 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50 ${className || 'w-[140px] h-[140px] md:w-[280px] md:h-[140px]'}`}
      style={{ pointerEvents: 'auto', zIndex: 10 }}
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
      <div className="absolute bottom-0 left-0 right-0 bg-white text-center p-1 md:p-2 rounded-b-md flex items-center justify-center min-h-[2rem] md:min-h-[2rem]">
        <span className="text-teal-600 font-bold text-xs md:text-base px-1 md:px-0 leading-tight">
          {card.title}
        </span>
      </div>
    </div>
  );
};

export default Card;