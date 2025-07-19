"use client";
import { useState } from "react";
import Card from "./components/Card"; // Ensure this path is correct
import Navbar from "./components/Navbar"; // Ensure this path is correct
import SearchForm from "./components/SearchForm"; // Ensure this path is correct
import SecondPage from "./SecondPage"; // Ensure this path is correct

export interface CardType {
  id: number;
  title: string;
  img: string;
}

const cards: CardType[] = [
  {
    id: 1,
    title: "Pune to Goa",
    img: "/images/travel1.jpg", // Keep your original image
  },
  {
    id: 2,
    title: "Mumbai to Goa",
    img: "/images/travel2.jpg", // Keep your original image
  },
  {
    id: 3,
    title: "Hyderabad to Goa",
    img: "/images/travel3.jpg", // Keep your original image
  },
  {
    id: 4,
    title: "Offers Voucher",
    img: "/images/travel4.jpg", // Keep your original image
  },
  {
    id: 5,
    title: "Customised Packages",
    img: "/images/maldives.jpg", // Keep your original image
  },
];

export default function HomePage() {
  const [selectedCard, setSelectedCard] = useState<CardType | null>(null);

  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/travel1.jpg')", // Background image for the hero section
      }}
    >
      <Navbar />
      {/* Hero Section */}
      <div className="flex items-center justify-center h-32">
        <h1 className="text-4xl text-white text-center drop-shadow-lg">
          Travel to the outside and inside the world
        </h1>
      </div>
      {!selectedCard ? (
        <div className="flex flex-col items-center mt-4">
          {/* Card Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {cards.map((card) => (
              <Card
                key={card.id}
                card={card}
                onClick={() => setSelectedCard(card)}
              />
            ))}
          </div>
          <SearchForm />
        </div>
      ) : (
        <SecondPage card={selectedCard} onBack={() => setSelectedCard(null)} />
      )}
    </div>
  );
}