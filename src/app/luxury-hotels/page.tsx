"use client";

import React from "react";
import HotelsPage from "../components/HotelsPage";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function LuxuryHotelsPage() {
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
        <HotelsPage filterType="luxury" />
        <Footer />
      </div>
    </div>
  );
} 