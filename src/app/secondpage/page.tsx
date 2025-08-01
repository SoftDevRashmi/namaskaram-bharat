"use client";

import React from 'react';
import SecondPage from '../SecondPage';

// Mock card data for the SecondPage
const mockCard = {
  id: 1,
  title: "Our Services",
  img: "/images/hotel.jpg"
};

export default function SecondPageRoute() {
  return (
    <SecondPage 
      card={mockCard} 
      onBack={() => window.history.back()} 
    />
  );
} 