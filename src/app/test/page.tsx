"use client";
import ImageTest from '../components/ImageTest';

export default function TestPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold text-center mb-8">Image Loading Test Page</h1>
        <ImageTest />
      </div>
    </div>
  );
} 