import Link from "next/link";
import { useState, useEffect } from "react";

const navItems = ["beranda", "tentang", "proyek", "kemampuan", "kontak"];

const Header = ({ darkMode, toggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) setIsMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      const menu = document.getElementById("mobile-menu");
      const menuButton = document.getElementById("menu-button");

      if (
        menu &&
        menuButton &&
        !menu.contains(e.target) &&
        !menuButton.contains(e.target)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      {/* HEADER */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 border-b
        ${
          darkMode
            ? "bg-gray-900/90 md:bg-gray-900/70 md:backdrop-blur-xl border-gray-800"
            : "bg-white/90 md:bg-white/70 md:backdrop-blur-xl border-gray-200"
        }`}
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-xl font-bold text-indigo-500 group-hover:scale-105 transition">
              Sltnmsyffa
            </span>
            <span className={`${darkMode ? "text-gray-600" : "text-gray-300"}`}>
              []
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-2">
            {navItems.map((item) => (
              <Link
                key={item}
                href={`#${item}`}
                scroll={false}
                className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300
                ${
                  darkMode
                    ? "text-gray-400 hover:text-white hover:bg-gray-800"
                    : "text-gray-600 hover:text-black hover:bg-gray-100"
                }`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}

                {/* underline hover */}
                <span className="absolute left-3 right-3 -bottom-1 h-[2px] bg-indigo-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
              </Link>
            ))}
          </nav>

          {/* Right */}
          <div className="flex items-center gap-2">
            {/* Dark Mode */}
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-xl transition-all duration-300 ${
                darkMode
                  ? "bg-gray-800 text-yellow-400 hover:bg-gray-700"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {darkMode ? "☀️" : "🌙"}
            </button>

            {/* Hamburger */}
            <button
              id="menu-button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`md:hidden p-2 rounded-xl transition ${
                darkMode
                  ? "text-gray-400 hover:bg-gray-800"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              {isMenuOpen ? "✖" : "☰"}
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE MENU */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div
          className={`absolute inset-0 ${
            darkMode ? "bg-gray-900/95" : "bg-white/95"
          } backdrop-blur-xl`}
        >
          <nav className="flex flex-col items-center justify-center h-full gap-6">
            {navItems.map((item) => (
              <Link
                key={item}
                href={`#${item}`}
                onClick={() => setIsMenuOpen(false)}
                className={`text-xl font-semibold transition-all duration-300 ${
                  darkMode
                    ? "text-gray-300 hover:text-indigo-400"
                    : "text-gray-700 hover:text-indigo-500"
                }`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
