import Link from 'next/link';
import { useState, useEffect } from 'react';

const Header = ({ darkMode, toggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Tutup menu saat resize ke desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Tutup menu saat klik di luar area menu
  useEffect(() => {
    const handleClickOutside = (e) => {
      const menu = document.getElementById('mobile-menu');
      const menuButton = document.getElementById('menu-button');
      
      if (menu && menuButton && 
          !menu.contains(e.target) && 
          !menuButton.contains(e.target) &&
          isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen]);

  return (
    <>
      <header className={`py-6 px-4 flex justify-between items-center sticky top-0 z-50 bg-opacity-80 backdrop-blur-sm ${
        darkMode ? 'bg-gray-900/80' : 'bg-white/80'
      }`}>
        <Link href="/" className="text-2xl font-bold hover:opacity-80 transition-opacity">
          <span className="text-indigo-500">Sltnmsyffa</span>[]
        </Link>
        
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {['beranda', 'tentang', 'proyek', 'kemampuan', 'kontak'].map((item) => (
              <li key={item}>
                <Link 
                  href={`#${item}`}
                  className={`font-medium hover:text-indigo-500 transition-colors ${
                    darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}
                  scroll={false}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        
        <div className="flex items-center space-x-4">
          {/* Toggle Dark Mode Button */}
          <button 
            onClick={toggleDarkMode}
            className={`p-2 rounded-full transition-colors border ${
              darkMode 
                ? 'bg-gray-800 text-yellow-400 border-yellow-400 hover:bg-gray-700' 
                : 'bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200'
            }`}
            aria-label="Toggle dark mode"
          >
            {darkMode ? (
              // Icon Matahari (Heroicons)
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m8.66-9h-1M4.34 12h-1m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707M17.657 17.657l.707.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
              </svg>
            ) : (
              // Icon Bulan (Heroicons)
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M21 12.79A9 9 0 0111.21 3 7 7 0 0012 21a9 9 0 009-8.21z" />
              </svg>
            )}
          </button>

          {/* Toggle Menu (Mobile) */}
          <button 
            id="menu-button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden p-2 rounded-md ${
              darkMode 
                ? 'text-gray-300 hover:bg-gray-700' 
                : 'text-gray-700 hover:bg-gray-200'
            } transition-colors`}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div 
          id="mobile-menu"
          className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
            isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
          style={{ marginTop: '5.5rem' }} // Sesuai tinggi header
        >
          <div className={`absolute top-0 left-0 w-full h-full ${darkMode ? 'bg-gray-900/95' : 'bg-white/95'}`}>
            <nav className="pt-8 px-4">
              <ul className="space-y-4">
                {['beranda', 'tentang', 'proyek', 'kemampuan', 'kontak'].map((item) => (
                  <li key={item}>
                    <Link 
                      href={`#${item}`}
                      onClick={() => setIsMenuOpen(false)}
                      className={`block py-4 px-4 rounded-lg text-lg font-medium ${
                        darkMode 
                          ? 'text-gray-300 hover:bg-gray-800' 
                          : 'text-gray-700 hover:bg-gray-100'
                      } transition-colors`}
                      scroll={false}
                    >
                      {item.charAt(0).toUpperCase() + item.slice(1)}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;