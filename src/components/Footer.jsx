// src/components/Footer.jsx
import React from 'react';

const Footer = ({ darkMode }) => {
  return (
    <footer className={`py-12 ${
      darkMode ? 'border-t border-gray-800' : 'border-t border-gray-200'
    }`}>
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="mb-6 md:mb-0">
          <div className="text-2xl font-bold">
            <span className="text-indigo-500">Sltnmsyffa</span>[]
          </div>
          <p className={`mt-2 ${
            darkMode ? 'text-gray-500' : 'text-gray-600'
          }`}>
            Frontend Developer
          </p>
        </div>
        
        <div className="flex space-x-6">
          {['github', 'instagram', 'telegram', 'linkedin'].map((platform) => (
            <a 
              key={platform}
              href="#" 
              className={`p-2 rounded-full transition-colors ${
                darkMode 
                  ? 'hover:bg-gray-800' 
                  : 'hover:bg-gray-100'
              }`}
              aria-label={platform}
            >
              <div className="bg-gray-200 border-2 border-dashed rounded-full w-6 h-6" />
            </a>
          ))}
        </div>
      </div>
      
      <div className={`mt-12 pt-6 text-center ${
        darkMode ? 'border-t border-gray-800 text-gray-500' : 'border-t border-gray-200 text-gray-600'
      }`}>
        <p>© {new Date().getFullYear()} Sltnmsyffa.</p>
      </div>
    </footer>
  );
};

export default Footer;