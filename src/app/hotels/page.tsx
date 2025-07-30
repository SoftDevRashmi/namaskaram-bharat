"use client";
import Navbar from '../components/Navbar';
import HotelsPage from '../components/HotelsPage';

export default function Hotels() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar onHomeClick={() => window.history.back()} />
      <HotelsPage />
    </div>
  );
} 

