import Link from 'next/link';
import { useState, useEffect } from 'react';

const navItems = ['beranda', 'tentang', 'proyek', 'kemampuan', 'kontak'];

const Header = ({ darkMode, toggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) setIsMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
      <header className={`py-4 px-6 flex justify-between items-center sticky top-0 z-50 backdrop-blur-md border-b transition-colors ${
        darkMode
          ? 'bg-gray-900/80 border-gray-800'
          : 'bg-white/80 border-gray-100'
      }`}>

        {/* Logo */}
        <Link href="/" className="flex items-center gap-1.5 hover:opacity-80 transition-opacity">
          <span className="text-xl font-bold text-indigo-500">Sltnmsyffa</span>
          <span className={`text-xl font-bold ${darkMode ? 'text-gray-500' : 'text-gray-300'}`}>[]</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-1">
            {navItems.map((item) => (
              <li key={item}>
                <Link
                  href={`#${item}`}
                  scroll={false}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:text-indigo-500 ${
                    darkMode
                      ? 'text-gray-400 hover:bg-gray-800'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-2">
          {/* Dark mode toggle */}
          <button
            onClick={toggleDarkMode}
            className={`p-2 rounded-xl transition-all duration-200 ${
              darkMode
                ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
            aria-label="Toggle dark mode"
          >
            {darkMode ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m8.66-9h-1M4.34 12h-1m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707M17.657 17.657l.707.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M21 12.79A9 9 0 0111.21 3 7 7 0 0012 21a9 9 0 009-8.21z" />
              </svg>
            )}
          </button>

          {/* Mobile hamburger */}
          <button
            id="menu-button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden p-2 rounded-xl transition-all duration-200 ${
              darkMode
                ? 'text-gray-400 hover:bg-gray-800'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
          className={`fixed inset-0 z-40 md:hidden`}
          style={{ marginTop: '5rem' }}
        >
          <div className={`absolute top-0 left-0 w-full h-full ${
            darkMode ? 'bg-gray-900/97' : 'bg-white/97'
          }`}>
            <nav className="pt-6 px-4">
              <ul className="space-y-1">
                {navItems.map((item, index) => (
                  <li key={item}>
                    <Link
                      href={`#${item}`}
                      onClick={() => setIsMenuOpen(false)}
                      scroll={false}
                      className={`flex items-center gap-3 py-3.5 px-4 rounded-xl text-base font-medium transition-all duration-200 ${
                        darkMode
                          ? 'text-gray-300 hover:bg-gray-800 hover:text-indigo-400'
                          : 'text-gray-700 hover:bg-gray-50 hover:text-indigo-500'
                      }`}
                    >
                      <span className={`text-xs font-mono ${darkMode ? 'text-gray-600' : 'text-gray-300'}`}>
                        0{index + 1}
                      </span>
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