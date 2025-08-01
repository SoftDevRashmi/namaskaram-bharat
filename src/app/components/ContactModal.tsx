import React from 'react';

interface ContactModalProps {
  open: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-[2000] flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4">
      <div className="bg-white rounded-2xl p-6 sm:p-8 w-[90%] max-w-md shadow-2xl text-center relative">
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-2xl text-gray-500 hover:text-gray-700 transition-colors"
          aria-label="Close"
        >
          &times;
        </button>
        <h2 className="text-2xl sm:text-3xl font-bold text-teal-600 mb-6">Contact Us</h2>
        <div className="flex items-center justify-center gap-3 mb-4 text-base sm:text-lg text-slate-700">
          <span className="text-xl sm:text-2xl">📞</span>
          <span>+91 8010357955 / 9022362693</span>
        </div>
        <div className="flex items-center justify-center gap-3 mb-4 text-base sm:text-lg text-slate-700">
          <span className="text-xl sm:text-2xl">🌐</span>
          <a 
            href="https://www.namaskarambharat.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-blue-600 hover:text-blue-700 underline"
          >
            www.namaskarambharat.com
          </a>
        </div>
        <div className="flex items-center justify-center gap-3 mb-4 text-base sm:text-lg text-slate-700">
          <span className="text-xl sm:text-2xl">✉️</span>
          <a 
            href="mailto:namaskarambharat@gmail.com" 
            className="text-blue-600 hover:text-blue-700 underline break-all"
          >
            namaskarambharat@gmail.com
          </a>
        </div>
        <div className="mt-6 text-sm sm:text-base text-slate-500">
          We will get back to you with the best price and details!
        </div>
      </div>
    </div>
  );
};

export default ContactModal; 