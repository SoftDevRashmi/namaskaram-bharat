import React from 'react';
import { useRouter } from 'next/navigation';

const Navbar: React.FC<{ onHomeClick?: () => void }> = ({ onHomeClick }) => {
  const router = useRouter();
  const [showDropdown, setShowDropdown] = React.useState(false);

  return (
    <nav className="flex items-center justify-between bg-teal-800 shadow-md p-4">
      <div className="flex items-center">
        <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }} onClick={() => router.push('/') }>
          <img src="/images/logo2.png" alt="Logo" className="h-26 p-2 mr-2" />
          <span className="text-3xl font-bold text-white">Namaskaram Bharat</span>
        </div>
      </div>
      <div className="flex space-x-4">
        <button
          onClick={() => {
            router.push('/');
            if (onHomeClick) onHomeClick();
          }}
          className="text-2xl text-white text-decoration:none focus:outline-none bg-transparent border-none cursor-pointer"
          style={{ background: 'none', border: 'none', padding: 0 }}
        >
          Home
        </button>
        <a href="#" className="text-2xl text-white hover:text-white-400">About</a>
        <div style={{ position: 'relative' }}>
          <button
            className="text-2xl text-white hover:text-blue-400 focus:outline-none bg-transparent border-none cursor-pointer"
            style={{ background: 'none', border: 'none', padding: 0 }}
            onClick={e => {
              e.preventDefault();
              setShowDropdown((prev) => !prev);
            }}
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
          >
            Services
          </button>
          {showDropdown && (
            <div
              onMouseEnter={() => setShowDropdown(true)}
              onMouseLeave={() => setShowDropdown(false)}
              style={{
                position: 'absolute',
                top: '100%',
                left: 0,
                background: '#fff',
                minWidth: 180,
                boxShadow: '0 4px 16px 0 rgba(30,41,59,0.13)',
                borderRadius: 10,
                zIndex: 100,
                padding: '0.5rem 0',
              }}
            >
              {[
                { label: 'Hotel & Villa', route: '/hotels' },
                { label: 'packages', route: '/' },
                { label: 'Water World', route: '/scuba' },
                { label: 'Moped Rental', route: '/' },
                { label: 'Party & Events', route: '/' },
                { label: 'Luxury Villas', route: '/hotels' },
              ].map((item) => (
                <div
                  key={item.label}
                  onClick={() => { setShowDropdown(false); router.push(item.route); }}
                  style={{
                    padding: '0.7rem 1.2rem',
                    color: '#0f172a',
                    fontSize: 17,
                    fontWeight: 500,
                    cursor: 'pointer',
                    borderBottom: '1px solid #e2e8f0',
                    background: 'none',
                  }}
                  onMouseDown={e => e.preventDefault()}
                  onMouseOver={e => (e.currentTarget.style.background = '#f0fdfa')}
                  onMouseOut={e => (e.currentTarget.style.background = 'none')}
                >
                  {item.label}
                </div>
              ))}
            </div>
          )}
        </div>
        <a href="#" className="text-2xl text-white hover:text-blue-400">Blog</a>
        <a href="#" className="text-2xl text-white hover:text-blue-400">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;