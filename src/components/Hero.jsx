import Image from 'next/image';
import Link from 'next/link';

const Hero = ({ darkMode }) => {
  return (
    <section id="beranda" className="py-20 md:py-32">
      <div className="grid md:grid-cols-2 gap-12 items-center">

        {/* Teks */}
        <div className="order-2 md:order-1">
          {/* Badge */}
          <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-6 ${
            darkMode
              ? 'bg-indigo-900/40 text-indigo-400 border border-indigo-700/50'
              : 'bg-indigo-50 text-indigo-500 border border-indigo-100'
          }`}>
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse"></span>
            Web & Android Developer
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            Halo, saya{' '}
            <span className="text-indigo-500">Sultan</span>
          </h1>

          <p className={`text-lg mb-8 max-w-lg leading-relaxed ${
            darkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Ini adalah portofolio saya, tempat saya menampilkan proyek-proyek yang telah saya kerjakan.
            Dibuat dengan{' '}
            <span className="text-indigo-500 font-medium">Next.js</span> dan{' '}
            <span className="text-indigo-500 font-medium">Tailwind CSS</span>.
          </p>

          <div className="flex flex-wrap gap-3">
            <Link
              href="#proyek"
              scroll={false}
              className="px-6 py-3 bg-indigo-500 text-white font-medium rounded-xl hover:bg-indigo-600 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-indigo-500/25"
            >
              Lihat Proyek
            </Link>
            <Link
              href="#kontak"
              scroll={false}
              className={`px-6 py-3 font-medium rounded-xl border transition-all duration-200 hover:-translate-y-0.5 ${
                darkMode
                  ? 'border-gray-700 hover:border-gray-500 hover:bg-gray-800/60 text-gray-300'
                  : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50 text-gray-700'
              }`}
            >
              Kontak Saya
            </Link>
          </div>
        </div>

        {/* Foto */}
        <div className="order-1 md:order-2 flex justify-center">
          <div className="relative">
            {/* Glow */}
            <div className="absolute -inset-6 rounded-full bg-indigo-500 opacity-10 blur-2xl"></div>

            {/* Decorative ring */}
            <div className={`absolute -inset-3 rounded-full border-2 border-dashed opacity-30 ${
              darkMode ? 'border-indigo-400' : 'border-indigo-400'
            }`}></div>

            {/* Profile image */}
            <div className={`relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 shadow-2xl ${
              darkMode ? 'border-gray-700' : 'border-white'
            }`}>
              <Image
                src="/images/profile.png"
                alt="Profile"
                width={320}
                height={320}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating badge bawah kanan */}
            <div className={`absolute -bottom-2 -right-2 px-3 py-2 rounded-xl text-xs font-semibold shadow-lg ${
              darkMode
                ? 'bg-gray-800 border border-gray-700 text-gray-200'
                : 'bg-white border border-gray-100 text-gray-700'
            }`}>
              <span className="text-indigo-500">✦</span> Open to Work
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;