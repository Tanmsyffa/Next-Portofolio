import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight, Mail, Github, Linkedin, MapPin } from "lucide-react";
import { personalInfo } from "@/data/portfolioData";
import { fadeUpVariant, staggerContainer } from "@/lib/animations";

export default function Hero() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section id="beranda" className="pt-6 pb-12 sm:pt-14 sm:pb-24">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-center">
        {/* Left Column: Text & Actions */}
        <motion.div
          className="md:col-span-7 flex flex-col items-start order-2 md:order-1"
          variants={staggerContainer(0.08, 0.05)}
          initial="hidden"
          animate="visible"
        >
          {/* Subtitle / Role */}
          <motion.p
            variants={fadeUpVariant}
            className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-2 sm:mb-3"
          >
            {personalInfo.role}
          </motion.p>

          {/* Main Headline */}
          <motion.h1
            variants={fadeUpVariant}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-[1.15] mb-4 sm:mb-5"
          >
            Membangun aplikasi web dan mobile yang fungsional, terstruktur, dan andal.
          </motion.h1>

          {/* Bio Description */}
          <motion.p
            variants={fadeUpVariant}
            className="text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed max-w-xl mb-6 sm:mb-8"
          >
            Halo, saya <span className="font-semibold text-foreground">{personalInfo.name}</span>. Mahasiswa Teknik Informatika di Universitas Budi Luhur yang berfokus pada pengembangan web full-stack dan aplikasi native Android.
          </motion.p>

          {/* Primary Action Buttons */}
          <motion.div
            variants={fadeUpVariant}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-6 sm:mb-8 w-full sm:w-auto"
          >
            <Link href="#proyek" className="w-full sm:w-auto">
              <button
                type="button"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-foreground text-background text-sm font-semibold hover:opacity-90 transition-opacity"
              >
                <span>Lihat Proyek</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </Link>

            <Link href="#kontak" className="w-full sm:w-auto">
              <button
                type="button"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg border border-border text-foreground text-sm font-medium hover:bg-secondary transition-colors"
              >
                <span>Hubungi Saya</span>
              </button>
            </Link>
          </motion.div>

          {/* Quick Social & Contact Badges */}
          <motion.div
            variants={fadeUpVariant}
            className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs text-muted-foreground pt-4 border-t border-border w-full"
          >
            <a
              href="https://github.com/Tanmsyffa"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-foreground transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
            <span className="text-border">•</span>
            <a
              href="https://www.linkedin.com/in/sultan-tammam-musyaffa-8a0a79280"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-foreground transition-colors"
            >
              <Linkedin className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>
            <span className="text-border hidden sm:inline">•</span>
            <a
              href="mailto:sultantammam3@gmail.com"
              className="inline-flex items-center gap-1.5 hover:text-foreground transition-colors basis-full sm:basis-auto"
            >
              <Mail className="w-3.5 h-3.5" />
              <span className="truncate">sultantammam3@gmail.com</span>
            </a>
          </motion.div>
        </motion.div>

        {/* Right Column: Profile Photo Card with Premium 3D Tilt */}
        <motion.div
          className="md:col-span-5 flex justify-center md:justify-end order-1 md:order-2"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          style={{ perspective: 1000 }}
        >
          <motion.div 
            className="relative w-full max-w-[240px] sm:max-w-[280px] md:max-w-[300px] rounded-2xl border border-border bg-card p-2.5 sm:p-3 shadow-sm"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              rotateX,
              rotateY,
              transformStyle: "preserve-3d",
            }}
          >
            <div 
              className="relative w-full aspect-[4/5] rounded-xl overflow-hidden bg-secondary"
              style={{ transform: "translateZ(30px)" }}
            >
              <Image
                src={personalInfo.profileImage}
                alt={personalInfo.name}
                fill
                className="object-cover object-top filter grayscale hover:grayscale-0 transition-[filter] duration-500"
                priority
                sizes="(max-width: 640px) 240px, (max-width: 768px) 280px, 300px"
              />
            </div>
            <div className="p-2.5 sm:p-3" style={{ transform: "translateZ(40px)" }}>
              <p className="font-bold text-sm text-foreground">{personalInfo.name}</p>
              <p className="text-xs text-muted-foreground mb-2">{personalInfo.role}</p>
              <div className="flex items-center justify-between pt-2 border-t border-border text-[10px] sm:text-[11px] text-muted-foreground">
                <span className="inline-flex items-center gap-1">
                  <MapPin className="w-3 h-3" />
                  <span>Jakarta, ID</span>
                </span>
                <span>Univ. Budi Luhur</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
