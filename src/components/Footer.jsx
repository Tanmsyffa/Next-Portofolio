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
      className={`py-12 ${
        darkMode ? "border-t border-gray-800" : "border-t border-gray-200"
      }`}
    >
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="mb-6 md:mb-0">
          <div className="text-2xl font-bold">
            <span className="text-indigo-500">Sltnmsyffa</span>[]
          </div>
          <p className={`mt-2 ${darkMode ? "text-gray-500" : "text-gray-600"}`}>
            Mahasiswa
          </p>
        </div>

        <div className="flex justify-center w-full md:w-auto my-8 md:my-0">
          <div className={`relative rounded-xl p-5 max-w-md w-full ${
            darkMode 
              ? "bg-gray-800/50 border border-gray-700 backdrop-blur-sm" 
              : "bg-white border border-gray-200 shadow-sm"
          }`}>
   
            <div className="absolute top-0 left-0 w-16 h-16 opacity-10">
              <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
                <path d="M7 17h10m-7-8h4m-8 0H4a1 1 0 00-1 1v10a1 1 0 001 1h16a1 1 0 001-1V10a1 1 0 00-1-1h-4l-4-4H4a1 1 0 00-1 1v10a1 1 0 001 1z" 
                      stroke={darkMode ? "#818cf8" : "#4f46e5"} 
                      strokeWidth="1.5" />
              </svg>
            </div>
            
            <div className="flex items-start">
              <div className={`mr-3 mt-1 text-3xl ${darkMode ? "text-indigo-400" : "text-indigo-500"}`}>
                “
              </div>
              
              <div className="overflow-hidden h-16">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={quoteIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className={`text-lg italic font-medium ${
                      darkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    {quotes[quoteIndex]}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            <div className="flex justify-center mt-4 space-x-2">
              {quotes.map((_, index) => (
                <button 
                  key={index}
                  onClick={() => setQuoteIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === quoteIndex 
                      ? (darkMode ? "bg-indigo-500" : "bg-indigo-500 scale-125") 
                      : (darkMode ? "bg-gray-600" : "bg-gray-300")
                  }`}
                  aria-label={`Go to quote ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div
        className={`mt-12 pt-6 text-center ${
          darkMode
            ? "border-t border-gray-800 text-gray-500"
            : "border-t border-gray-200 text-gray-600"
        }`}
      >
        <p>© {new Date().getFullYear()} Sltnmsyffa.</p>
      </div>
    </footer>
  );
};

export default Footer;