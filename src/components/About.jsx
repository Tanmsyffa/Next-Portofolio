import React from "react";
import { GraduationCap, Briefcase, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { personalInfo, education, experiences } from "@/data/portfolioData";
import { fadeUpVariant, staggerContainer } from "@/lib/animations";

export default function About() {
  return (
    <section id="tentang" className="py-12 sm:py-24 border-t border-border">
      <motion.div
        className="max-w-5xl mx-auto"
        variants={staggerContainer(0.08, 0.05)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
      >
        {/* Header */}
        <motion.div variants={fadeUpVariant} className="mb-8 sm:mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2">
            Tentang Saya
          </p>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-foreground">
            Latar belakang &amp; prinsip kerja
          </h2>
        </motion.div>

        {/* Top Bio Section - Full Width */}
        <motion.div
          variants={fadeUpVariant}
          className="rounded-xl border border-border bg-card p-5 sm:p-8 mb-5 sm:mb-6 hover:border-foreground/20 transition-colors"
        >
          <div className="max-w-3xl">
            <h3 className="text-base sm:text-lg font-bold text-foreground mb-3 sm:mb-4">
              Fokus pada kode yang bersih, scalable, dan fungsional.
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-3 sm:mb-4">
              Saya adalah mahasiswa Teknik Informatika yang mendalami pengembangan aplikasi web dan ekosistem Android. Saya percaya bahwa produk digital yang baik dibangun di atas arsitektur sistem yang solid, efisiensi database, dan antarmuka yang ramah bagi pengguna.
            </p>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Selama perkuliahan dan eksplorasi mandiri, saya terbiasa mengerjakan proyek end-to-end — mulai dari perancangan database relasional MySQL, pembuatan REST API dengan PHP / Node.js, hingga implementasi frontend modern dengan React / Next.js dan aplikasi mobile dengan Java di Android Studio.
            </p>
          </div>

          <div className="mt-5 sm:mt-6 pt-4 sm:pt-5 border-t border-border flex flex-wrap gap-2.5 sm:gap-4 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1.5 font-medium text-foreground bg-secondary px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg border border-border text-[11px] sm:text-xs">
              <CheckCircle className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-emerald-500" /> Clean Architecture
            </span>
            <span className="inline-flex items-center gap-1.5 font-medium text-foreground bg-secondary px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg border border-border text-[11px] sm:text-xs">
              <CheckCircle className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-emerald-500" /> Database Optimization
            </span>
            <span className="inline-flex items-center gap-1.5 font-medium text-foreground bg-secondary px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg border border-border text-[11px] sm:text-xs">
              <CheckCircle className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-emerald-500" /> Responsive UI
            </span>
          </div>
        </motion.div>

        {/* Bottom Cards: Education & Experiences - Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {/* Education Card */}
          <motion.div
            variants={fadeUpVariant}
            className="rounded-xl border border-border bg-card p-6 flex flex-col justify-between group hover:border-foreground/20 transition-colors"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-foreground group-hover:bg-foreground group-hover:text-background transition-colors">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <span className="text-xs font-mono text-muted-foreground bg-secondary px-2.5 py-1 rounded border border-border">
                  {education.period}
                </span>
              </div>
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5">
                Pendidikan Formal
              </p>
              <h4 className="text-base font-bold text-foreground mb-1">
                {education.degree}
              </h4>
              <p className="text-xs text-muted-foreground mb-3">{education.institution}</p>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {education.description}
              </p>
            </div>
          </motion.div>

          {/* Experience Cards */}
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              variants={fadeUpVariant}
              className="rounded-xl border border-border bg-card p-6 flex flex-col justify-between group hover:border-foreground/20 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-foreground group-hover:bg-foreground group-hover:text-background transition-colors">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono text-muted-foreground bg-secondary px-2.5 py-1 rounded border border-border text-right max-w-[140px] truncate">
                    {exp.period}
                  </span>
                </div>
                <div className="flex items-center justify-between mb-1.5">
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    {idx === 0 ? "Pengalaman Magang" : "Pengalaman Proyek"}
                  </p>
                </div>
                <h4 className="text-base font-bold text-foreground mb-1">
                  {exp.title}
                </h4>
                <p className="text-xs text-muted-foreground mb-4">
                  {exp.scope}
                </p>
                
                <ul className="space-y-2 text-xs text-muted-foreground">
                  {exp.highlights.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-foreground/40 select-none shrink-0 mt-0.5">•</span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}