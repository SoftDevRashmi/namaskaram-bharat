"use client";

import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function About() {
  return (
    <div className="min-h-screen relative">
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
        <div className="flex flex-col items-center justify-center px-4 py-12 min-h-screen">
          {/* Hero Section */}
          <div className="w-full max-w-4xl bg-white/90 backdrop-blur-sm shadow-xl rounded-2xl p-8 md:p-14 border border-teal-200 flex flex-col items-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-6 tracking-tight drop-shadow" style={{ fontFamily: '"Dancing Script", "Great Vibes", "Pacifico", cursive' }}>
              About <span className="text-orange-600">Namaskaram</span> <span className="text-blue-900">Bharat</span>
            </h1>
            <div className="text-lg md:text-xl text-gray-800 text-center leading-relaxed space-y-6">
              <p>
                Welcome to <span className="font-semibold text-teal-600">Namaskaram Bharat</span> — your gateway to discovering the incredible soul of India, with a special focus on the vibrant land of Goa.
              </p>
              <p>
                While we celebrate the diverse beauty of India — from mountains to deserts, temples to tea gardens — our heart beats a little louder for Goa. From its golden beaches and Portuguese charm to hidden waterfalls, food trails, and local culture, we dive deep into everything that makes Goa more than just a tourist spot — it's an experience.
              </p>
              <p>
                Whether you're planning a weekend escape, a cultural exploration, or an offbeat adventure, we're here to guide you with honest stories, helpful tips, and real traveler insights.
              </p>
              <p className="font-semibold text-teal-700">
                Namaskaram is a warm Indian greeting — and with that, we invite you to explore Goa and beyond, one story at a time.
              </p>
            </div>
            <a
              href="/"
              className="mt-10 inline-block px-8 py-3 bg-gradient-to-r from-teal-600 to-blue-600 text-white text-lg rounded-full font-bold shadow-lg hover:from-teal-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              Start Your Journey
            </a>
          </div>
          

        </div>
        <Footer />
      </div>
    </div>
  );
}