// src/components/About.jsx
import React from 'react';
import { motion } from 'framer-motion';

const About = ({ darkMode }) => {
  return (
    <section id="tentang" className="py-20">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Bagian Gambar - Diperbaiki dengan efek modern */}
        <div className="flex justify-center">
          <motion.div 
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className={`absolute -inset-4 rounded-2xl bg-indigo-500 opacity-10 blur-xl`}></div>
            <div className={`relative rounded-xl overflow-hidden shadow-xl w-full max-w-md ${
              darkMode ? 'bg-gray-800' : 'bg-white'
            }`}>
              {/* Glow effect */}
              <div className={`absolute inset-0 rounded-xl ${
                darkMode 
                  ? 'bg-gradient-to-br from-indigo-900/20 to-purple-900/20' 
                  : 'bg-gradient-to-br from-indigo-100/30 to-purple-100/30'
              }`}></div>
              
              {/* Placeholder dengan animasi */}
              <div className="relative z-10">
                <div className="bg-gradient-to-r from-indigo-400 to-purple-500 w-full h-64 flex items-center justify-center">
                  <motion.div 
                    className="text-5xl font-bold text-white"
                    animate={{ opacity: [0.8, 1, 0.8] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    😎
                  </motion.div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className={`absolute -bottom-4 -right-4 w-16 h-16 rounded-full ${
              darkMode ? 'bg-indigo-600/30' : 'bg-indigo-300/50'
            }`}></div>
            <div className={`absolute -top-4 -left-4 w-10 h-10 rounded-full ${
              darkMode ? 'bg-purple-600/30' : 'bg-purple-300/50'
            }`}></div>
          </motion.div>
        </div>
        
        {/* Bagian Teks - Diperbaiki dengan tata letak lebih baik */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex items-center mb-6">
            <h2 className="text-3xl font-bold mr-4">Tentang Saya</h2>
            <div className="w-16 h-1 bg-indigo-500 flex-grow"></div>
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Pendidikan - Diperbaiki dengan card modern */}
            <motion.div 
              className={`p-5 rounded-xl ${
                darkMode 
                  ? 'bg-gray-800/50 border border-gray-700' 
                  : 'bg-white border border-gray-200 shadow-sm'
              }`}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center mb-3">
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
              <p className={darkMode ? 'text-gray-400' : 'text-gray-500'}>Teknik Informatika</p>
              <p className={darkMode ? 'text-gray-400' : 'text-gray-500'}>Universitas Budi Luhur</p>
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
              <div className="flex items-center mb-3">
                <div className={`w-8 h-8 rounded-full mr-3 flex items-center justify-center ${
                  darkMode ? 'bg-purple-900/50' : 'bg-purple-100'
                }`}>
                  <svg className={`w-4 h-4 ${darkMode ? 'text-purple-400' : 'text-purple-600'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="font-bold text-lg">Pengalaman</h3>
              </div>
              <p className={darkMode ? 'text-gray-400' : 'text-gray-500'}>Pengembangan website dan aplikasi android pada proyek kuliah</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;