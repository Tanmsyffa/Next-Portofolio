import React from "react";
import Link from "next/link";
import { ArrowUp, Mail, Github, Linkedin } from "lucide-react";
import { personalInfo } from "@/data/portfolioData";
import { motion } from "framer-motion";
import { fadeUpVariant } from "@/lib/animations";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      if (window.__lenis) {
        window.__lenis.scrollTo(0, { duration: 1.2 });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
  };

  return (
    <footer className="pt-16 pb-8 border-t border-border bg-background relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[200px] bg-foreground/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Section: CTA & Big Name */}
        <div className="flex flex-col md:flex-row items-center md:items-end justify-between gap-8 mb-12">
          <div className="text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter text-foreground mb-2">
              Tertarik bekerja sama?
            </h2>
            <p className="text-sm text-muted-foreground max-w-md">
              Mari diskusikan ide, proyek, atau peluang kolaborasi. Saya selalu terbuka untuk tantangan baru dalam pengembangan teknologi.
            </p>
          </div>
          <Link href="#kontak">
            <button className="px-6 py-3 rounded-xl bg-foreground text-background font-semibold text-sm hover:opacity-90 transition-opacity">
              Mulai Percakapan
            </button>
          </Link>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-border/60 mb-8" />

        {/* Bottom Section: Links & Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-foreground rounded-lg flex items-center justify-center text-background font-bold text-sm">
              S
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xs text-foreground tracking-tight">
                {personalInfo.name}
              </span>
              <span className="text-[10px] text-muted-foreground font-mono">
                © {currentYear} All rights reserved.
              </span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a href="https://github.com/Tanmsyffa" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors" aria-label="GitHub">
              <Github className="w-4 h-4" />
            </a>
            <a href="https://www.linkedin.com/in/sultan-tammam-musyaffa-8a0a79280" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors" aria-label="LinkedIn">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="mailto:sultantammam3@gmail.com" className="p-2 rounded-lg text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors" aria-label="Email">
              <Mail className="w-4 h-4" />
            </a>
          </div>

          {/* Back to Top */}
          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors"
          >
            Kembali ke atas
            <span className="w-6 h-6 rounded flex items-center justify-center bg-secondary border border-border">
              <ArrowUp className="w-3 h-3" />
            </span>
          </button>
        </div>

      </div>
    </footer>
  );
}