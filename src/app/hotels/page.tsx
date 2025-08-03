"use client";

import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import HotelsPage from '../components/HotelsPage';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

function HotelsContent() {
  const searchParams = useSearchParams();
  const filter = searchParams.get('filter');

  return (
    <div className="min-h-screen relative">
      {/* Background Image */}
      <div
        className="fixed inset-0 w-full h-full object-cover z-0"
        style={{
          backgroundImage: `url('/images/backgroundImages/lightAquabg.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      <div className="relative z-10">
        <Navbar onHomeClick={() => window.location.href = "/"} />
        <HotelsPage filterType={filter} />
        <Footer />
      </div>
    </div>
  );
}

export default function HotelsPageWrapper() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-teal-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading hotels...</p>
        </div>
      </div>
    }>
      <HotelsContent />
    </Suspense>
  );
} 

