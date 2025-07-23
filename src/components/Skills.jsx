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
      color: darkMode ? "#4F46E5" : "#6366F1"
    },
    {
      name: "Version Control (Git)",
      description: "Mengelola kode dengan Git & GitHub",
      icon: "🔧",
      color: darkMode ? "#7C3AED" : "#8B5CF6"
    },
    {
      name: "Testing & Debugging",
      description: "Memastikan kualitas kode dengan testing",
      icon: "🐛",
      color: darkMode ? "#059669" : "#10B981"
    },
    {
      name: "Android Development",
      description: "Pengembangan aplikasi mobile Android",
      icon: "📱",
      color: darkMode ? "#DC2626" : "#EF4444"
    },
    {
      name: "UI/UX Design",
      description: "Merancang antarmuka yang user-friendly",
      icon: "🎨",
      color: darkMode ? "#C026D3" : "#EC4899"
    }
  ];

  const firstRow = additionalExpertise.slice(0, Math.ceil(additionalExpertise.length / 2));
  const secondRow = additionalExpertise.slice(Math.ceil(additionalExpertise.length / 2));

  const ExpertiseCard = ({ name, description, icon, color }) => (
    <figure
      className={cn(
        "relative h-fit w-full max-w-[280px] cursor-pointer overflow-hidden rounded-xl border p-4 mb-3",
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
        darkMode ? "border-gray-50/[.1] bg-gray-50/[.10] hover:bg-gray-50/[.15]" : "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
      )}
    >
      <div className="flex flex-row items-center gap-3 mb-3">
        <div
          className="flex size-10 items-center justify-center rounded-2xl shadow-sm"
          style={{ backgroundColor: color }}
        >
          <span className="text-lg">{icon}</span>
        </div>
        <div className="flex flex-col">
          <figcaption className={`text-sm font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            {name}
          </figcaption>
        </div>
      </div>
      <blockquote className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
        {description}
      </blockquote>
    </figure>
  );

  return (
    <section id="kemampuan" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className={`text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
          Kemampuan Saya
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto mb-8"></div>
        <p className={`max-w-2xl mx-auto text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
          Saya memiliki berbagai keterampilan dalam pengembangan web,
          mulai dari HTML/CSS, JavaScript, hingga framework modern seperti React dan Next.js.
        </p>
      </div>

      <div className="max-w-6xl mx-auto">
        <div className={`rounded-3xl overflow-hidden ${darkMode ? 'bg-gradient-to-br from-gray-800 to-gray-900' : 'bg-gradient-to-br from-white to-gray-50'} shadow-2xl`}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            {/* Kiri: IconCloud */}
            <div className="p-8 md:p-10 border-b md:border-b-0 md:border-r border-gray-200 dark:border-gray-700 flex flex-col justify-between">
              <div>
                <h3 className={`text-2xl font-bold mb-6 pb-2 border-b-2 border-indigo-500 inline-block ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                  Kemampuan Teknis
                </h3>
              </div>
              <div className="flex justify-center items-center h-96 sm:h-[400px]">
                <div className="relative flex size-full max-w-md items-center justify-center overflow-hidden">
                  <IconCloud images={iconCloudImages} />
                </div>
              </div>
              <p className={`mt-8 text-center ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Interaktif 3D cloud menampilkan teknologi yang saya kuasai. Hover dan drag untuk menjelajahi!
              </p>
            </div>

            {/* Kanan: Keahlian Tambahan */}
            <div className="p-8 md:p-10 bg-gradient-to-br from-black-90 to-black-50 dark:black-900/20 dark:to-black/20">
              <h3 className={`text-2xl font-bold mb-6 pb-2 border-b-2 border-indigo-500 inline-block ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                Keahlian Tambahan
              </h3>

              <div className="relative h-auto max-h-[400px] w-full overflow-hidden rounded-xl">
                <div className="flex flex-col sm:flex-row h-full">
                  <div className="w-full sm:w-1/2 pr-0 sm:pr-2">
                    <div
                      className="marquee-vertical hover:pause"
                      style={{
                        '--duration': '15s',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1rem',
                        animation: 'marquee 15s linear infinite'
                      }}
                      onMouseEnter={(e) => e.target.style.animationPlayState = 'paused'}
                      onMouseLeave={(e) => e.target.style.animationPlayState = 'running'}
                    >
                      {[...firstRow, ...firstRow].map((item, idx) => (
                        <ExpertiseCard key={`first-${idx}`} {...item} />
                      ))}
                    </div>
                  </div>
                  <div className="w-full sm:w-1/2 pl-0 sm:pl-2 mt-6 sm:mt-0">
                    <div
                      className="marquee-vertical reverse"
                      style={{
                        '--duration': '15s',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1rem',
                        animation: 'marquee-reverse 15s linear infinite'
                      }}
                      onMouseEnter={(e) => e.target.style.animationPlayState = 'paused'}
                      onMouseLeave={(e) => e.target.style.animationPlayState = 'running'}
                    >
                      {[...secondRow, ...secondRow].map((item, idx) => (
                        <ExpertiseCard key={`second-${idx}`} {...item} />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Gradient overlays */}
                <div className={`pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b ${darkMode ? 'from-gray-800' : 'from-indigo-50'} z-10`}></div>
                <div className={`pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t ${darkMode ? 'from-gray-800' : 'from-indigo-50'} z-10`}></div>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
                <h4 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-indigo-200' : 'text-indigo-700'}`}>
                  Lebih dari sekadar keterampilan teknis
                </h4>
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Saya juga memiliki kemampuan dalam pemecahan masalah, komunikasi efektif, dan kolaborasi tim untuk memberikan solusi terbaik bagi setiap proyek.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
