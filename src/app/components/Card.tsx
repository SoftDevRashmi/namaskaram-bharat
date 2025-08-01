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
      style={{
        width: '200px',
        height: '120px',
        border: '2px solid teal',
        borderRadius: '8px',
        cursor: 'pointer',
        backgroundColor: 'white',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Simple image with inline styles */}
      <img 
        src={card.img} 
        alt={card.title} 
        style={{
          width: '100%',
          height: '75%',
          objectFit: 'cover',
          display: 'block'
        }}
        onError={(e) => {
          console.error(`❌ Failed to load image: ${card.img}`);
          e.currentTarget.style.border = '2px solid red';
          e.currentTarget.style.backgroundColor = '#ffebee';
        }}
        onLoad={() => {
          console.log(`✅ Successfully loaded image: ${card.img}`);
        }}
      />
      
      {/* Text area with inline styles */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'white',
        textAlign: 'center',
        padding: '2px',
        borderBottomLeftRadius: '6px',
        borderBottomRightRadius: '6px'
      }}>
        <span style={{
          color: '#0d9488',
          fontWeight: 'bold',
          fontSize: '12px'
        }}>
          {card.title}
        </span>
      </div>
    </div>
  );
};

export default Card;