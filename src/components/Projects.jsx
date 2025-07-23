import React from 'react';

const Projects = ({ darkMode }) => {
  const projects = [
    {
      title: "KantinKu",
      description: "Adalah aplikasi web untuk memesan makanan secara online dengan fitur pembayaran menggunakan Midtrans. Backend menggunakan PHP dan MySQL.",
      tags: ["HTML", "PHP", "JavaScript", "MySQL", "Bootstrap", "CSS"],
    },
    {
      title: "MakanYuk (Android)",
      description: "Aplikasi android untuk memesan makanan dengan mengadaptasi konsep foodcourt.",
      tags: ["Java", "MySQL", "Material UI"],
    },
    {
      title: "Admin Dashboard",
      description: "Aplikasi dashboard admin untuk mengelola data pesanan makanan, serta CRUD untuk menambah dan menghapus daftar tenant dan makanan pada setiap tenant (terhubung dengan aplikasi MakanYuk).",
      tags: ["PHP", "JavaScript", "MySQL", "Bootstrap", "CSS"],
    },
    {
      title: "WarkopNote (Android)",
      description: "Aplikasi catatan sederhana untuk mengelola daftar warkop. Aplikasi ini menggunakan spreadsheet untuk menyimpan data.",
      tags: ["Java", "Material UI", "Android Studio", "Spreadsheet"],
    },
    {
      title: "Website Portofolio",
      description: "Portofolio pribadi yang menampilkan proyek dan keterampilan saya.",
      tags: ["React", "Next JS", "Tailwind CSS", "Framer Motion"],
    },
  ];

  return (
    <section id="proyek" className="py-20">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-2">Proyek Saya</h2>
        <div className="w-16 h-1 bg-indigo-500 mx-auto mb-8"></div>
        <p className={`max-w-2xl mx-auto text-lg ${
          darkMode ? 'text-gray-400' : 'text-gray-600'
        }`}>
          Berikut adalah beberapa proyek yang telah saya kerjakan.
          <br />
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className={`rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-2 ${
              darkMode ? 'bg-gray-800' : 'bg-white'
            }`}
          >
            <div className="bg-gray-200 border-2 border-dashed w-full h-48" />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className={`mb-4 ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <span 
                    key={tagIndex} 
                    className={`px-3 py-1 rounded-full text-sm ${
                      darkMode 
                        ? 'bg-gray-700 text-indigo-300' 
                        : 'bg-indigo-100 text-indigo-700'
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