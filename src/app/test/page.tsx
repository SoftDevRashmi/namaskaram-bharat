"use client";

export default function TestPage() {
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
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Image Test Page</h1>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {testImages.map((imgSrc, index) => (
            <div key={index} className="border rounded p-2 bg-white">
              <p className="text-xs mb-2 truncate">{imgSrc}</p>
              <img 
                src={imgSrc} 
                alt={`Test ${index + 1}`} 
                className="w-full h-32 object-cover rounded"
                onError={(e) => {
                  console.error(`Failed to load: ${imgSrc}`);
                  e.currentTarget.style.border = '2px solid red';
                  e.currentTarget.style.backgroundColor = '#ffebee';
                }}
                onLoad={() => {
                  console.log(`Successfully loaded: ${imgSrc}`);
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 