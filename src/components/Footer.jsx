// src/components/Footer.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Footer = ({ darkMode }) => {
  const [currentYear] = useState(new Date().getFullYear());
  const [quoteIndex, setQuoteIndex] = useState(0);
  
  const quotes = [
    "Belajar adalah investasi terbaik untuk masa depan.",
    "Setiap baris kode adalah jejak kreativitas.",
    "Teknologi terbaik adalah yang menyelesaikan masalah nyata.",
    "Kesederhanaan adalah kecanggihan tertinggi.",
    "Setiap proyek adalah kesempatan untuk belajar sesuatu yang baru."
  ];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setQuoteIndex((prev) => (prev + 1) % quotes.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [quotes.length]);

  return (
    <footer
      className={`py-16 ${
        darkMode ? "border-t border-gray-800" : "border-t border-gray-200"
      }`}
    >
      {/* Quote Section - Centered */}
      <div className="flex flex-col items-center">

        {/* Decorative top line */}
        <div className="flex items-center gap-3 mb-8">
          <div className={`h-px w-12 ${darkMode ? 'bg-indigo-500/40' : 'bg-indigo-400/40'}`}></div>
          <svg className={`w-5 h-5 ${darkMode ? 'text-indigo-400' : 'text-indigo-500'}`} fill="currentColor" viewBox="0 0 24 24">
            <path d="M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16-.95.1-1.95.78-3 .53-.81 1.24-1.48 2.13-2.01L9.24 6c-.96.56-1.82 1.29-2.58 2.19-.76.89-1.29 1.86-1.6 2.9-.31 1.04-.37 2.06-.17 3.06.19.97.67 1.83 1.44 2.57.77.74 1.7 1.11 2.8 1.11.92 0 1.67-.28 2.26-.85.59-.57.88-1.3.88-2.21zm8.56 0c0-.88-.23-1.618-.69-2.217-.326-.42-.77-.692-1.327-.817-.56-.124-1.074-.13-1.54-.022-.16-.95.1-1.95.78-3 .53-.81 1.24-1.48 2.13-2.01L17.8 6c-.96.56-1.82 1.29-2.58 2.19-.76.89-1.29 1.86-1.6 2.9-.31 1.04-.37 2.06-.17 3.06.19.97.67 1.83 1.44 2.57.77.74 1.7 1.11 2.8 1.11.92 0 1.67-.28 2.26-.85.59-.57.88-1.3.88-2.21z"/>
          </svg>
          <div className={`h-px w-12 ${darkMode ? 'bg-indigo-500/40' : 'bg-indigo-400/40'}`}></div>
        </div>

        {/* Quote card */}
        <div className={`relative w-full max-w-xl rounded-2xl px-8 py-8 text-center ${
          darkMode
            ? 'bg-gray-800/40 border border-gray-700/60 backdrop-blur-sm'
            : 'bg-white border border-gray-100 shadow-md'
        }`}>

          {/* Glowing background blob */}
          <div className={`absolute inset-0 rounded-2xl pointer-events-none overflow-hidden`}>
            <div className={`absolute -top-6 -left-6 w-32 h-32 rounded-full blur-2xl opacity-20 ${
              darkMode ? 'bg-indigo-500' : 'bg-indigo-300'
            }`}></div>
            <div className={`absolute -bottom-6 -right-6 w-32 h-32 rounded-full blur-2xl opacity-20 ${
              darkMode ? 'bg-purple-500' : 'bg-purple-300'
            }`}></div>
          </div>

          {/* Quote text */}
          <div className="relative overflow-hidden" style={{ minHeight: '64px' }}>
            <AnimatePresence mode="wait">
              <motion.p
                key={quoteIndex}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.45, ease: 'easeInOut' }}
                className={`text-lg italic font-medium leading-relaxed ${
                  darkMode ? 'text-gray-200' : 'text-gray-700'
                }`}
              >
                {quotes[quoteIndex]}
              </motion.p>
            </AnimatePresence>
          </div>

          {/* Dot indicators */}
          <div className="flex justify-center mt-6 gap-2">
            {quotes.map((_, index) => (
              <button
                key={index}
                onClick={() => setQuoteIndex(index)}
                className={`rounded-full transition-all duration-300 ${
                  index === quoteIndex
                    ? 'w-6 h-2 bg-indigo-500'
                    : `w-2 h-2 ${darkMode ? 'bg-gray-600 hover:bg-gray-500' : 'bg-gray-300 hover:bg-gray-400'}`
                }`}
                aria-label={`Go to quote ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div
        className={`mt-12 pt-6 text-center text-sm ${
          darkMode
            ? 'border-t border-gray-800 text-gray-500'
            : 'border-t border-gray-200 text-gray-400'
        }`}
      >
        <p>© 2025 Sltnmsyffa.</p>
      </div>
    </footer>
  );
};

export default Footer;