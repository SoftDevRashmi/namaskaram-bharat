import React from 'react';

interface ContactModalProps {
  open: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
      background: 'rgba(30,41,59,0.55)', zIndex: 2000, display: 'flex', alignItems: 'center', justifyContent: 'center',
    }}>
      <div style={{
        background: '#fff', borderRadius: 18, padding: '2.5rem 2.5rem 2rem 2.5rem', minWidth: 340, maxWidth: 380,
        boxShadow: '0 8px 40px 0 rgba(0,0,0,0.18)', textAlign: 'center', position: 'relative',
      }}>
        <button onClick={onClose} style={{ position: 'absolute', top: 16, right: 16, background: 'none', border: 'none', fontSize: 26, color: '#888', cursor: 'pointer' }}>&times;</button>
        <h2 style={{ color: '#14b8a6', fontWeight: 700, fontSize: 26, marginBottom: 18 }}>Contact Us</h2>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14, fontSize: 18, color: '#222', justifyContent: 'center' }}>
          <span style={{ fontSize: 22 }}>📞</span>
          <span>+91 8010357955 / 9022362693</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14, fontSize: 18, color: '#222', justifyContent: 'center' }}>
          <span style={{ fontSize: 22 }}>🌐</span>
          <a href="https://www.namaskarambharat.com" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>www.namaskarambharat.com</a>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 10, fontSize: 18, color: '#222', justifyContent: 'center' }}>
          <span style={{ fontSize: 22 }}>✉️</span>
          <a href="mailto:namaskarambharat@gmail.com" style={{ color: '#2563eb', textDecoration: 'underline' }}>namaskarambharat@gmail.com</a>
        </div>
        <div style={{ marginTop: 18, color: '#64748b', fontSize: 15 }}>We will get back to you with the best price and details!</div>
      </div>
    </div>
  );
};

export default ContactModal; 