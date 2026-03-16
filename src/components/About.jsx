// src/components/About.jsx
import React from 'react';
import { motion } from 'framer-motion';

const About = ({ darkMode }) => {
  return (
    <section id="tentang" className="py-20">
      <div className="flex justify-center">

        
        {/* Bagian Teks - Diperbaiki dengan tata letak lebih baik */}
        <motion.div
          className="flex flex-col items-center text-center w-full max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex flex-col items-center mb-6">
            <h2 className="text-3xl font-bold mb-3">Tentang Saya</h2>
            <div className="w-16 h-1 bg-indigo-500"></div>
          </div>
          
          <motion.p 
            className={`mb-6 text-lg ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}
            whileHover={{ x: 5 }}
          >
            Saya adalah mahasiswa jurusan Teknik Informatika yang memiliki minat besar dalam dunia pengembangan web dan android. 
            Dengan pengalaman dalam berbagai teknologi, saya berkomitmen
            untuk menciptakan web dan aplikasi android yang responsif dan menarik.
          </motion.p>
          
          <motion.p 
            className={`mb-8 text-lg ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}
            whileHover={{ x: 5 }}
          >
            Selain itu, saya selalu mencari peluang untuk belajar dan berbagi pengetahuan.
            Saya percaya bahwa kolaborasi adalah kunci untuk menciptakan solusi yang 
            inovatif dan efektif.
          </motion.p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
            {/* Pendidikan - Diperbaiki dengan card modern */}
            <motion.div 
              className={`p-5 rounded-xl ${
                darkMode 
                  ? 'bg-gray-800/50 border border-gray-700' 
                  : 'bg-white border border-gray-200 shadow-sm'
              }`}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center mb-3 justify-center">
                <div className={`w-8 h-8 rounded-full mr-3 flex items-center justify-center ${
                  darkMode ? 'bg-indigo-900/50' : 'bg-indigo-100'
                }`}>
                  <svg className={`w-4 h-4 ${darkMode ? 'text-indigo-400' : 'text-indigo-600'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                  </svg>
                </div>
                <h3 className="font-bold text-lg">Pendidikan</h3>
              </div>
              <p className={`text-center ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Teknik Informatika</p>
              <p className={`text-center ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Universitas Budi Luhur</p>
            </motion.div>
            
            {/* Pengalaman - Diperbaiki dengan card modern */}
            <motion.div 
              className={`p-5 rounded-xl ${
                darkMode 
                  ? 'bg-gray-800/50 border border-gray-700' 
                  : 'bg-white border border-gray-200 shadow-sm'
              }`}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center mb-3 justify-center">
                <div className={`w-8 h-8 rounded-full mr-3 flex items-center justify-center ${
                  darkMode ? 'bg-purple-900/50' : 'bg-purple-100'
                }`}>
                  <svg className={`w-4 h-4 ${darkMode ? 'text-purple-400' : 'text-purple-600'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="font-bold text-lg">Pengalaman</h3>
              </div>
              <p className={`text-center ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Pengembangan website dan aplikasi android pada proyek kuliah</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;