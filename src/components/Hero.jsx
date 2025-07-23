import Image from 'next/image';
import Link from 'next/link';

const Hero = ({ darkMode }) => {
  return (
    <section id="beranda" className="py-20 md:py-32">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Halo, saya <span className="text-indigo-500">Sultan</span>
          </h1>
          <p className={`text-lg mb-8 max-w-lg ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Ini adalah portofolio saya, tempat saya menampilkan proyek-proyek yang telah saya kerjakan.
            Dan dibuat dengan <span className="text-indigo-500">Next.js</span> dan <span className="text-indigo-500">Tailwind CSS</span>.
          </p>
          <div className="flex space-x-4">
            <Link 
              href="#proyek" 
              scroll={false}
              className="px-6 py-3 bg-indigo-500 text-white font-medium rounded-lg hover:bg-indigo-600 transition-colors"
            >
              Lihat Proyek
            </Link>
            <Link 
              href="#kontak" 
              scroll={false}
              className={`px-6 py-3 font-medium rounded-lg border-2 transition-colors ${
                darkMode 
                  ? 'border-gray-700 hover:bg-gray-800' 
                  : 'border-gray-200 hover:bg-gray-100'
              }`}
            >
              Kontak Saya
            </Link>
          </div>
        </div>
        
        <div className="order-1 md:order-2 flex justify-center">
          <div className="relative">
            <div className={`absolute -inset-4 rounded-2xl bg-indigo-500 opacity-20 blur-xl`}></div>
            <div className={`relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 ${
              darkMode ? 'border-gray-800' : 'border-white'
            } shadow-xl`}>
              <Image 
                src="/images/profile.png" 
                alt="Profile"
                width={320}
                height={320}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;