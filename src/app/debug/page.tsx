"use client";
import { useState, useEffect } from 'react';

export default function DebugPage() {
  const [imageStatus, setImageStatus] = useState<{[key: string]: string}>({});
  
  const testImages = [
    '/images/travel1.jpg',
    '/images/travel2.jpg',
    '/images/travel3.jpg',
    '/images/travel4.jpg',
    '/images/maldives.jpg',
    '/images/logo2.png',
    '/images/backgroundImages/bg.jpg'
  ];

  useEffect(() => {
    testImages.forEach(imgSrc => {
      const img = new Image();
      img.onload = () => {
        setImageStatus(prev => ({ ...prev, [imgSrc]: '✅ Loaded' }));
      };
      img.onerror = () => {
        setImageStatus(prev => ({ ...prev, [imgSrc]: '❌ Failed' }));
      };
      img.src = imgSrc;
    });
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Image Debug Page</h1>
        
        <div className="bg-white rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Image Status</h2>
          <div className="space-y-2">
            {testImages.map(imgSrc => (
              <div key={imgSrc} className="flex items-center space-x-4 p-2 border rounded">
                <span className="font-mono text-sm">{imgSrc}</span>
                <span className={`font-bold ${imageStatus[imgSrc]?.includes('✅') ? 'text-green-600' : 'text-red-600'}`}>
                  {imageStatus[imgSrc] || '⏳ Testing...'}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Image Display Test</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {testImages.map(imgSrc => (
              <div key={imgSrc} className="border rounded p-2">
                <p className="text-xs mb-2 truncate">{imgSrc}</p>
                <img 
                  src={imgSrc} 
                  alt="Test" 
                  className="w-full h-32 object-cover rounded"
                  onError={(e) => {
                    e.currentTarget.style.border = '2px solid red';
                    e.currentTarget.style.backgroundColor = '#ffebee';
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 