// src/components/About.jsx
import React from 'react';

const About = ({ darkMode }) => {
  return (
    <section id="tentang" className="py-20">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="flex justify-center">
          <div className="relative">
            <div className={`absolute -inset-4 rounded-2xl bg-indigo-500 opacity-10 blur-xl`}></div>
            <div className={`relative rounded-xl overflow-hidden shadow-xl w-full max-w-md ${
              darkMode ? 'bg-gray-800' : 'bg-white'
            }`}>
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-64" />
            </div>
          </div>
        </div>
        
        <div>
          <h2 className="text-3xl font-bold mb-2">Tentang Saya</h2>
          <div className="w-16 h-1 bg-indigo-500 mb-8"></div>
          
          <p className={`mb-6 text-lg ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Saya adalah mahasiswa jurusan Teknik Informatika yang memiliki minat besar dalam dunia pengembangan web dan android. 
            Dengan pengalaman dalam berbagai teknologi, saya berkomitmen
            untuk menciptakan web dan aplikasi android yang responsif dan menarik.
          </p>
          
          <p className={`mb-8 text-lg ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Selain itu, saya selalu mencari peluang untuk belajar dan berbagi pengetahuan.
            Saya percaya bahwa kolaborasi adalah kunci untuk menciptakan solusi yang 
            inovatif dan efektif.
          </p>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="font-bold text-lg mb-2">Pendidikan</h3>
              <p className={darkMode ? 'text-gray-400' : 'text-gray-500'}>Teknik Informatika</p>
              <p className={darkMode ? 'text-gray-400' : 'text-gray-500'}>Universitas Budi Luhur</p>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-2">Pengalaman</h3>
              <p className={darkMode ? 'text-gray-400' : 'text-gray-500'}>Pengembangan website dan aplikasi android pada proyek kuliah</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;