import React from 'react';
import { IconCloud } from "@/components/magicui/icon-cloud";
import { cn } from "@/lib/utils";

const Skills = ({ darkMode }) => {
  const iconCloudImages = [
    "/icons/html.png",
    "/icons/js.png",
    "/icons/java.png",
    "/icons/php.png",
    "/icons/bootstrap.png",
    "/icons/react.png",
    "/icons/nextjs.svg",
    "/icons/tailwind.png",
    "/icons/node.png",
    "/icons/mysql.png"
  ];

  const additionalExpertise = [
    {
      name: "Responsive Design",
      description: "Mendesain website yang adaptif di semua perangkat",
      icon: "📱",
      color: "#6366F1"
    },
    {
      name: "Version Control (Git)",
      description: "Mengelola kode dengan Git & GitHub",
      icon: "🔧",
      color: "#8B5CF6"
    },
    {
      name: "Testing & Debugging",
      description: "Memastikan kualitas kode dengan testing",
      icon: "🐛",
      color: "#10B981"
    },
    {
      name: "Android Development",
      description: "Pengembangan aplikasi mobile Android",
      icon: "🤖",
      color: "#EF4444"
    },
    {
      name: "UI/UX Design",
      description: "Merancang antarmuka yang user-friendly",
      icon: "🎨",
      color: "#EC4899"
    }
  ];

  const firstRow = additionalExpertise.slice(0, Math.ceil(additionalExpertise.length / 2));
  const secondRow = additionalExpertise.slice(Math.ceil(additionalExpertise.length / 2));

  const ExpertiseCard = ({ name, description, icon, color }) => (
    <figure
      className={cn(
        "relative w-full cursor-pointer overflow-hidden rounded-2xl p-4 mb-3",
        "transition-all duration-300 ease-out hover:-translate-y-0.5",
        darkMode
          ? "bg-gray-900/80 border border-gray-700/60 hover:border-gray-500"
          : "bg-white border border-gray-200/80 hover:border-gray-300 hover:shadow-sm",
      )}
    >
      {/* Color accent bar on left */}
      <div
        className="absolute left-0 top-3 bottom-3 w-0.5 rounded-full"
        style={{ backgroundColor: color + '90' }}
      ></div>

      <div className="flex flex-row items-center gap-3 mb-2 pl-2">
        <div
          className="flex size-9 items-center justify-center rounded-xl shrink-0"
          style={{ backgroundColor: color + '18' }}
        >
          <span className="text-base">{icon}</span>
        </div>
        <figcaption className={`text-sm font-semibold tracking-tight ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>
          {name}
        </figcaption>
      </div>
      <blockquote className={`text-xs leading-relaxed pl-14 ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>
        {description}
      </blockquote>
    </figure>
  );

  return (
    <section id="kemampuan" className="py-20">

      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-3">Kemampuan Saya</h2>
        <div className="w-16 h-1 bg-indigo-500 mx-auto mb-8"></div>
        <p className={`max-w-2xl mx-auto text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          Saya memiliki berbagai keterampilan dalam pengembangan web,
          mulai dari HTML/CSS, JavaScript, hingga framework modern seperti React dan Next.js.
        </p>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Kiri: IconCloud */}
        <div className={`rounded-2xl p-8 flex flex-col border ${
          darkMode
            ? 'bg-gray-900/60 border-gray-700/60'
            : 'bg-gray-50 border-gray-200'
        }`}>
          <div className="mb-4">
            <p className={`text-xs font-semibold uppercase tracking-widest mb-1 ${
              darkMode ? 'text-indigo-400' : 'text-indigo-500'
            }`}>Tech Stack</p>
            <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
              Kemampuan Teknis
            </h3>
          </div>

          <div className="flex justify-center items-center flex-1 h-72 my-4">
            <div className="relative flex size-full max-w-xs items-center justify-center overflow-hidden">
              <IconCloud images={iconCloudImages} />
            </div>
          </div>

          <p className={`text-center text-xs ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>
            Hover dan drag untuk menjelajahi
          </p>
        </div>

        <div className={`rounded-2xl p-8 flex flex-col border ${
          darkMode
            ? 'bg-gray-900/60 border-gray-700/60'
            : 'bg-gray-50 border-gray-200'
        }`}>
          <div className="mb-5">
            <p className={`text-xs font-semibold uppercase tracking-widest mb-1 ${
              darkMode ? 'text-indigo-400' : 'text-indigo-500'
            }`}>Soft Skills</p>
            <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
              Keahlian Tambahan
            </h3>
          </div>

          <div className="relative overflow-hidden rounded-xl" style={{ height: '320px' }}>
            <div className="flex flex-row h-full gap-3">
              <div className="w-1/2 overflow-hidden">
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    animation: 'marquee 14s linear infinite'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.animationPlayState = 'paused'}
                  onMouseLeave={(e) => e.currentTarget.style.animationPlayState = 'running'}
                >
                  {[...firstRow, ...firstRow].map((item, idx) => (
                    <ExpertiseCard key={`first-${idx}`} {...item} />
                  ))}
                </div>
              </div>

              <div className="w-1/2 overflow-hidden">
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    animation: 'marquee-reverse 14s linear infinite'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.animationPlayState = 'paused'}
                  onMouseLeave={(e) => e.currentTarget.style.animationPlayState = 'running'}
                >
                  {[...secondRow, ...secondRow].map((item, idx) => (
                    <ExpertiseCard key={`second-${idx}`} {...item} />
                  ))}
                </div>
              </div>
            </div>

            {/* Gradient fade top & bottom */}
            <div className={`pointer-events-none absolute inset-x-0 top-0 h-10 bg-gradient-to-b z-10 ${
              darkMode ? 'from-gray-900/90' : 'from-gray-50'
            }`}></div>
            <div className={`pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t z-10 ${
              darkMode ? 'from-gray-900/90' : 'from-gray-50'
            }`}></div>
          </div>

          <div className={`mt-5 pt-5 border-t text-xs leading-relaxed ${
            darkMode ? 'border-gray-700/60 text-gray-500' : 'border-gray-200 text-gray-400'
          }`}>
            Terbiasa bekerja dalam tim, komunikasi efektif, dan pemecahan masalah secara kreatif.
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;