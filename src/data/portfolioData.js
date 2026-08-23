export const personalInfo = {
  name: "Sultan Tammam Musyaffa",
  shortName: "Sultan",
  brandName: "Sltnmsyffa",
  role: "Web & Android Developer",
  status: "Open to Work & Collaboration",
  bio: "Mahasiswa Teknik Informatika yang berfokus pada pengembangan solusi digital web dan mobile yang responsif, terstruktur rapi, dan memiliki pengalaman pengguna tingkat tinggi.",
  subBio: "Menggabungkan arsitektur kode yang bersih dengan estetika visual modern, performa tinggi, serta interaktivitas yang mulus.",
  location: "Jakarta, Indonesia",
  profileImage: "/images/profile.png",
  contact: {
    email: "sultantammam3@gmail.com",
    phone: "+6287721669168",
    phoneDisplay: "+(62) 877-2166-9168",
    location: "Jakarta, ID",
  },
  socials: [
    {
      name: "GitHub",
      url: "https://github.com/Tanmsyffa",
      username: "@Tanmsyffa",
      icon: "/iconsContact/github.png",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/sultan-tammam-musyaffa-8a0a79280",
      username: "Sultan Tammam",
      icon: "/iconsContact/linkedin.png",
    },
    {
      name: "Instagram",
      url: "https://instagram.com/tanmsyffa_",
      username: "@tanmsyffa_",
      icon: "/iconsContact/instagram.png",
    },
  ],
};

export const stats = [
  { value: "5+", label: "Proyek Selesai", desc: "Web & Mobile Apps" },
  { value: "10+", label: "Teknologi Dikuasai", desc: "Modern Stack" },
  { value: "3+", label: "Tahun Eksplorasi", desc: "Software Development" },
  { value: "100%", label: "Komitmen Kualitas", desc: "Clean & Scalable Code" },
];

export const education = {
  degree: "S1 Teknik Informatika",
  institution: "Universitas Budi Luhur",
  period: "2023 — Sekarang",
  description: "Fokus pada Pengembangan Web, Rekayasa Perangkat Lunak, Struktur Data & Algoritma, Basis Data Relasional, dan Pengembangan Aplikasi Berorientasi Objek.",
};

export const experiences = [
  {
    title: "Web Developer Intern",
    scope: "PUSTEKINFO Setjen DPR RI",
    period: "Apr 2026 - Jul 2026",
    description: "Membangun web task management SIKERJA (Sistem Informasi Kolaborasi Kinerja) yang dilengkapi integrasi model AI Whisper.",
    highlights: [
      "Mengembangkan fitur manajemen task dengan status workflow (Draft, On Progress, Done)",
      "Mengimplementasikan model Whisper untuk fitur text-to-speech dan speech-to-text",
      "Merancang alur otentikasi aman dengan OTP dan sistem manajemen role (Supervisor & Employee)"
    ],
  },
  {
    title: "Pengembang Web & Android",
    scope: "Akademis & Proyek Independen",
    period: "2023 - sekarang",
    description: "Merancang dan membangun aplikasi full-stack, mulai dari arsitektur database, REST API, hingga aplikasi native Android.",
    highlights: [
      "Membangun web e-commerce kuliner lengkap dengan payment gateway Midtrans",
      "Mengembangkan aplikasi Android berbasis Java & Material UI",
      "Merancang sistem admin dashboard terpadu dengan CRUD data real-time",
    ],
  }
];

export const projectCategories = ["Semua", "Web", "Android", "Dashboard"];

export const projects = [
  {
    id: "sikerja",
    title: "SIKERJA (Sistem Informasi Kolaborasi Kinerja)",
    category: "Web",
    featured: true,
    year: "2026",
    description: "Sistem manajemen tugas kolaboratif untuk Setjen DPR RI dengan fitur Text-to-Speech & Speech-to-Text menggunakan model Whisper AI.",
    tags: ["React", "Node.js", "Whisper AI", "Task Management"],
    iconType: "briefcase",
    link: "#",
    github: "#",
  },
  {
    id: "phishdeep",
    title: "Phishdeep",
    category: "Web",
    featured: false,
    year: "2026",
    description: "Sistem deteksi situs web phising menggunakan pendekatan deep learning untuk keamanan siber yang lebih proaktif.",
    tags: ["Deep Learning", "Python", "Security"],
    iconType: "shield",
    link: "#",
    github: "https://github.com/Tanmsyffa/phishdeep",
  },
  {
    id: "splitz",
    title: "Splitz",
    category: "Android",
    featured: false,
    year: "2026",
    description: "Aplikasi manajemen tagihan bersama (split bill) yang menyederhanakan perhitungan dan pembagian pengeluaran grup.",
    tags: ["Flutter", "Supabase", "Finance"],
    iconType: "pie-chart",
    link: "#",
    github: "https://github.com/Tanmsyffa/Splitz",
  },
  {
    id: "prakiraan-cuaca-bmkg",
    title: "Prakiraan Cuaca BMKG",
    category: "Web",
    featured: false,
    year: "2025",
    description: "Aplikasi pemantau cuaca terintegrasi dengan API resmi BMKG untuk memberikan informasi iklim real-time dan akurat.",
    tags: ["API Integration", "Weather"],
    iconType: "cloud",
    link: "#",
    github: "https://github.com/Tanmsyffa/Prakiraan_cuaca_BMKG",
  },
  {
    id: "rempoa-weather",
    title: "Rempoa Weather Insight",
    category: "Web",
    featured: false,
    year: "2026",
    description: "Platform visualisasi metrik cuaca dan iklim lokal secara spesifik untuk kawasan Rempoa dan sekitarnya.",
    tags: ["Data Viz", "Weather"],
    iconType: "sun",
    link: "#",
    github: "https://github.com/Tanmsyffa/Rempoa_Weather_Insight",
  },
  {
    id: "arisan-kami",
    title: "Arisan Kami",
    category: "Web",
    featured: false,
    year: "2025",
    description: "Sistem pencatatan digital untuk memanajemen anggota arisan, iuran, dan jadwal pengundian secara transparan.",
    tags: ["Management", "Web"],
    iconType: "users",
    link: "#",
    github: "https://github.com/Tanmsyffa/Arisan-Kami",
  },
  {
    id: "info-kripto",
    title: "Info Kripto",
    category: "Web",
    featured: false,
    year: "2026",
    description: "Dashboard tracker sederhana untuk memantau fluktuasi harga dan informasi aset cryptocurrency secara real-time.",
    tags: ["Crypto", "API"],
    iconType: "activity",
    link: "#",
    github: "https://github.com/Tanmsyffa/Info-Kripto",
  },
  {
    id: "kantinku",
    title: "KantinKu",
    category: "Web",
    featured: true,
    year: "2025",
    description: "Platform web pemesanan makanan online terintegrasi dengan otomatisasi pembayaran Midtrans, manajemen keranjang belanja, dan notifikasi pesanan real-time.",
    longDescription: "Dibangun dengan arsitektur modular yang memisahkan logic transaksi, manajemen inventaris menu, dan modul checkout yang aman.",
    tags: ["PHP", "JavaScript", "MySQL", "Bootstrap", "Midtrans API"],
    iconType: "utensils",
    link: "#",
    github: "https://github.com/Tanmsyffa",
  },
  {
    id: "makanyuk-android",
    title: "MakanYuk (Android)",
    category: "Android",
    featured: true,
    year: "2025",
    description: "Aplikasi mobile Android untuk pemesanan makanan cepat saji dengan mengadaptasi alur multi-tenant foodcourt modern dan antarmuka Material Design.",
    tags: ["Java", "Android Studio", "MySQL", "Material UI"],
    iconType: "smartphone",
    link: "#",
    github: "https://github.com/Tanmsyffa",
  },
  {
    id: "admin-dashboard",
    title: "Admin Management Dashboard",
    category: "Dashboard",
    featured: true,
    year: "2025",
    description: "Sistem dashboard komprehensif untuk memonitor data transaksi makanan, laporan omset, serta pengelolaan CRUD tenant dan manajemen katalog produk.",
    tags: ["PHP", "JavaScript", "MySQL", "Tailwind CSS"],
    iconType: "dashboard",
    link: "#",
    github: "https://github.com/Tanmsyffa",
  },
  {
    id: "warkopnote-android",
    title: "WarkopNote (Android)",
    category: "Android",
    featured: false,
    year: "2025",
    description: "Aplikasi pencatatan operasional warkop berbasis cloud spreadsheet lightweight untuk sinkronisasi data transaksi dan stok secara praktis tanpa server berat.",
    tags: ["Java", "Android Studio", "Google Sheets API"],
    iconType: "pentool",
    link: "#",
    github: "https://github.com/Tanmsyffa",
  },
  {
    id: "personal-portfolio",
    title: "Interactive Web Portofolio",
    category: "Web",
    featured: true,
    year: "2026",
    description: "Portofolio digital interaktif mutakhir yang didukung oleh GSAP, Three.js 3D particles, Lenis smooth scrolling, dan arsitektur Next.js yang optimal.",
    tags: ["Next.js", "React", "GSAP", "Three.js", "Lenis", "Tailwind CSS"],
    iconType: "globe",
    link: "#",
    github: "https://github.com/Tanmsyffa",
  },
];

export const skillCategories = [
  {
    id: "frontend",
    title: "Frontend Development",
    description: "Membangun antarmuka web modern, responsif, dan interaktif.",
    skills: [
      { name: "React.js", level: "Advanced", icon: "/icons/react.png" },
      { name: "Next.js", level: "Advanced", icon: "/icons/nextjs.svg" },
      { name: "JavaScript (ES6+)", level: "Advanced", icon: "/icons/js.png" },
      { name: "Tailwind CSS", level: "Advanced", icon: "/icons/tailwind.png" },
      { name: "HTML5 / CSS3", level: "Expert", icon: "/icons/html.png" },
      { name: "Bootstrap", level: "Proficient", icon: "/icons/bootstrap.png" },
    ],
  },
  {
    id: "backend",
    title: "Backend & Database",
    description: "Mengembangkan logika server, API terstruktur, dan basis data relasional.",
    skills: [
      { name: "PHP", level: "Advanced", icon: "/icons/php.png" },
      { name: "MySQL", level: "Advanced", icon: "/icons/mysql.png" },
      { name: "Node.js", level: "Intermediate", icon: "/icons/node.png" },
      { name: "Supabase", level: "Intermediate", icon: "/icons/supabase.png" },
      { name: "RESTful APIs", level: "Advanced", icon: "/icons/js.png" },
    ],
  },
  {
    id: "mobile",
    title: "Mobile Development",
    description: "Membangun aplikasi Android fungsional dengan antarmuka yang ramah pengguna.",
    skills: [
      { name: "Flutter", level: "Intermediate", icon: "/icons/flutter.png" },
      { name: "Java", level: "Advanced", icon: "/icons/java.png" },
      { name: "Android Studio", level: "Advanced", icon: "/icons/android.png" },
    ],
  },
];

export const additionalExpertise = [
  {
    name: "Responsive & Adaptive Layouts",
    desc: "Tampilan presisi dan proporsional di seluruh resolusi layar (Mobile, Tablet, Desktop).",
  },
  {
    name: "Version Control & Git Workflow",
    desc: "Manajemen cabang, kolaborasi tim, dan dokumentasi repositori di GitHub.",
  },
  {
    name: "API & Payment Integration",
    desc: "Implementasi payment gateway seperti Midtrans dan konsumsi third-party REST API.",
  },
  {
    name: "Performance & SEO Optimization",
    desc: "Kecepatan muat cepat, asset optimization, semantic HTML, dan arsitektur metadata.",
  },
  {
    name: "Clean Code & Refactoring",
    desc: "Struktur kode modular, DRY (Don't Repeat Yourself), dan mudah dipelihara.",
  },
  {
    name: "UI/UX & Interactive Design",
    desc: "Desain visual fungsional berorientasi pada kemudahan navigasi dan estetika premium.",
  },
];

export const quotes = [
  {
    text: "Belajar adalah investasi terbaik untuk masa depan yang terus berkembang.",
    author: "Filosofi Belajar",
  },
  {
    text: "Setiap baris kode adalah perpaduan antara logika sistem dan seni kreativitas.",
    author: "Engineering Craft",
  },
  {
    text: "Teknologi terbaik adalah yang berhasil memecahkan masalah nyata manusia secara sederhana.",
    author: "User-Centric Goal",
  },
  {
    text: "Kesederhanaan dan kejelasan adalah tingkat kecanggihan yang paling tinggi.",
    author: "Design Principle",
  },
  {
    text: "Setiap tantangan teknis adalah ruang baru untuk tumbuh dan berinovasi.",
    author: "Growth Mindset",
  },
];
