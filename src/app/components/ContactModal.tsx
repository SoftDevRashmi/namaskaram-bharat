import React, { useEffect } from 'react';

interface ContactModalProps {
  open: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ open, onClose }) => {
  // Handle Escape key press and focus management
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (open) {
      document.addEventListener('keydown', handleEscape);
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';
      
      // Focus the modal when it opens
      const modal = document.querySelector('[data-modal]');
      if (modal) {
        (modal as HTMLElement).focus();
      }
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      // Restore body scroll when modal is closed
      document.body.style.overflow = 'unset';
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-900/80 backdrop-blur-md z-[99999]"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4 pointer-events-none">
        <div 
          className="bg-white rounded-2xl p-6 sm:p-8 w-[90%] max-w-md shadow-2xl text-center relative pointer-events-auto"
          onClick={(e) => e.stopPropagation()}
          data-modal
          tabIndex={-1}
        >
          <button 
            onClick={onClose} 
            className="absolute top-4 right-4 text-2xl text-gray-500 hover:text-gray-700 transition-colors bg-white rounded-full w-8 h-8 flex items-center justify-center shadow-md"
            aria-label="Close"
          >
            ×
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
          <button
            onClick={onClose}
            className="mt-6 px-6 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </>
  );
};

export default ContactModal; 