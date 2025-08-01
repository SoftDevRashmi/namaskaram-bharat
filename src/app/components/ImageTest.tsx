import React from 'react';
import Image from 'next/image';

const ImageTest: React.FC = () => {
  const testImages = [
    '/images/travel1.jpg',
    '/images/travel2.jpg',
    '/images/travel3.jpg',
    '/images/travel4.jpg',
    '/images/maldives.jpg',
    '/images/logo2.png',
    '/images/backgroundImages/bg.jpg'
  ];

  return (
    <div className="p-4 bg-white">
      <h2 className="text-2xl font-bold mb-4">Image Loading Test</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {testImages.map((src, index) => (
          <div key={index} className="border p-2 rounded">
            <p className="text-xs mb-2">{src}</p>
            <Image
              src={src}
              alt={`Test image ${index + 1}`}
              width={200}
              height={150}
              className="w-full h-32 object-cover"
              unoptimized={true}
              onLoad={() => console.log(`✅ Loaded: ${src}`)}
              onError={(e) => {
                console.error(`❌ Failed to load: ${src}`);
                e.currentTarget.style.border = '2px solid red';
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageTest; 