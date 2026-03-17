import React from 'react';

const Projects = ({ darkMode }) => {
  const projects = [
    {
      title: "KantinKu",
      description: "Adalah aplikasi web untuk memesan makanan secara online dengan fitur pembayaran menggunakan Midtrans. Backend menggunakan PHP dan MySQL.",
      tags: ["HTML", "PHP", "JavaScript", "MySQL", "Bootstrap", "CSS"],
      icon: "🍽️",
      accent: "from-orange-500/20 to-amber-500/10",
      iconBg: darkMode => darkMode ? "bg-orange-900/40" : "bg-orange-50",
      iconColor: "text-orange-500",
    },
    {
      title: "MakanYuk (Android)",
      description: "Aplikasi android untuk memesan makanan dengan mengadaptasi konsep foodcourt.",
      tags: ["Java", "MySQL", "Material UI"],
      icon: "📱",
      accent: "from-green-500/20 to-emerald-500/10",
      iconBg: darkMode => darkMode ? "bg-green-900/40" : "bg-green-50",
      iconColor: "text-green-500",
    },
    {
      title: "Admin Dashboard",
      description: "Aplikasi dashboard admin untuk mengelola data pesanan makanan, serta CRUD untuk menambah dan menghapus daftar tenant dan makanan pada setiap tenant (terhubung dengan aplikasi MakanYuk).",
      tags: ["PHP", "JavaScript", "MySQL", "Bootstrap", "CSS"],
      icon: "🖥️",
      accent: "from-blue-500/20 to-sky-500/10",
      iconBg: darkMode => darkMode ? "bg-blue-900/40" : "bg-blue-50",
      iconColor: "text-blue-500",
    },
    {
      title: "WarkopNote (Android)",
      description: "Aplikasi catatan sederhana untuk mengelola daftar warkop. Aplikasi ini menggunakan spreadsheet untuk menyimpan data.",
      tags: ["Java", "Material UI", "Android Studio", "Spreadsheet"],
      icon: "📝",
      accent: "from-purple-500/20 to-violet-500/10",
      iconBg: darkMode => darkMode ? "bg-purple-900/40" : "bg-purple-50",
      iconColor: "text-purple-500",
    },
    {
      title: "Website Portofolio",
      description: "Portofolio pribadi yang menampilkan proyek dan keterampilan saya.",
      tags: ["React", "Next JS", "Tailwind CSS", "Framer Motion"],
      icon: "🌐",
      accent: "from-indigo-500/20 to-violet-500/10",
      iconBg: darkMode => darkMode ? "bg-indigo-900/40" : "bg-indigo-50",
      iconColor: "text-indigo-500",
    },
  ];

  return (
    <section id="proyek" className="py-20">
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-3">Proyek Saya</h2>
        <div className="w-16 h-1 bg-indigo-500 mx-auto mb-8"></div>
        <p className={`max-w-2xl mx-auto text-lg ${
          darkMode ? 'text-gray-400' : 'text-gray-600'
        }`}>
          Berikut adalah beberapa proyek yang telah saya kerjakan.
        </p>
      </div>

      {/* Project Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`group relative rounded-2xl p-6 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
              darkMode
                ? 'bg-gray-800/60 border border-gray-700 hover:border-indigo-500/40'
                : 'bg-white border border-gray-100 shadow-sm hover:border-indigo-200'
            }`}
          >
            {/* Gradient accent background */}
            <div className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}></div>

            {/* Content */}
            <div className="relative">
              {/* Icon */}
              <div className="flex items-center gap-4 mb-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl shrink-0 ${project.iconBg(darkMode)}`}>
                  {project.icon}
                </div>
                <h3 className="text-xl font-bold">{project.title}</h3>
              </div>

              {/* Description */}
              <p className={`mb-5 text-sm leading-relaxed ${
                darkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      darkMode
                        ? 'bg-gray-700 text-indigo-300 border border-gray-600'
                        : 'bg-indigo-50 text-indigo-600 border border-indigo-100'
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;