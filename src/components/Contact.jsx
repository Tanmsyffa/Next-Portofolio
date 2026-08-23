import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Mail, Phone, Copy, Check, ArrowUpRight, MessageCircle } from "lucide-react";
import { personalInfo } from "@/data/portfolioData";
import { fadeUpVariant, staggerContainer } from "@/lib/animations";

export default function Contact() {
  const [copiedType, setCopiedType] = useState(null);

  const handleCopy = async (text, type) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedType(type);
      setTimeout(() => setCopiedType(null), 2000);
    } catch {
      // Fallback for older browsers
      const textarea = document.createElement("textarea");
      textarea.value = text;
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setCopiedType(type);
      setTimeout(() => setCopiedType(null), 2000);
    }
  };

  const email = personalInfo.contact.email;
  const phone = personalInfo.contact.phone;
  const phoneDisplay = personalInfo.contact.phoneDisplay;
  const waUrl = "https://wa.me/6287721669168";

  return (
    <section id="kontak" className="py-16 sm:py-20 border-t border-border">
      <motion.div
        className="max-w-5xl mx-auto"
        variants={staggerContainer(0.08, 0.05)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
      >
        {/* Header */}
        <motion.div variants={fadeUpVariant} className="mb-10 sm:mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2">
            Kontak
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
            Hubungi saya secara langsung
          </h2>
          <p className="text-sm text-muted-foreground mt-2 max-w-lg">
            Terbuka untuk peluang kerja freelance, magang, full-time, maupun diskusi seputar proyek digital.
          </p>
        </motion.div>

        {/* Primary Contact Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-6">
          {/* Direct Email Card */}
          <motion.div
            variants={fadeUpVariant}
            className="rounded-xl border border-border bg-card p-6 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-border">
                <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Email
                </span>
                <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center text-foreground">
                  <Mail className="w-4 h-4" />
                </div>
              </div>
              <p className="text-xs text-muted-foreground mb-1">Kirim pesan langsung ke:</p>
              <a
                href={`mailto:${email}`}
                className="text-base font-bold text-foreground hover:underline break-all block mb-4"
              >
                {email}
              </a>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 pt-4 border-t border-border">
              <a
                href={`mailto:${email}`}
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-foreground text-background text-xs font-semibold hover:opacity-90 transition-opacity"
              >
                <span>Buka Aplikasi Email</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <button
                type="button"
                onClick={() => handleCopy(email, "email")}
                className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-lg border border-border text-xs font-medium text-foreground hover:bg-secondary transition-colors"
                title="Salin Alamat Email"
              >
                {copiedType === "email" ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-500" />
                    <span className="text-emerald-500 font-semibold">Tersalin</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Salin</span>
                  </>
                )}
              </button>
            </div>
          </motion.div>

          {/* Direct WhatsApp / Phone Card */}
          <motion.div
            variants={fadeUpVariant}
            className="rounded-xl border border-border bg-card p-6 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-border">
                <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  WhatsApp &amp; Telepon
                </span>
                <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center text-foreground">
                  <Phone className="w-4 h-4" />
                </div>
              </div>
              <p className="text-xs text-muted-foreground mb-1">Nomor kontak aktif:</p>
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-base font-bold text-foreground hover:underline block mb-4"
              >
                {phoneDisplay}
              </a>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 pt-4 border-t border-border">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-emerald-600 text-white text-xs font-semibold hover:bg-emerald-700 transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Chat di WhatsApp</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <button
                type="button"
                onClick={() => handleCopy(phone, "phone")}
                className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-lg border border-border text-xs font-medium text-foreground hover:bg-secondary transition-colors"
                title="Salin Nomor Telepon"
              >
                {copiedType === "phone" ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-500" />
                    <span className="text-emerald-500 font-semibold">Tersalin</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Salin</span>
                  </>
                )}
              </button>
            </div>
          </motion.div>
        </div>

        {/* Social Links Network Bar */}
        <motion.div
          variants={fadeUpVariant}
          className="rounded-xl border border-border bg-card p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-foreground mb-1">
              Profil &amp; Media Sosial
            </p>
            <p className="text-xs text-muted-foreground">
              Jelajahi aktivitas kode dan koneksi profesional saya.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
            {personalInfo.socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-secondary hover:bg-foreground hover:text-background text-foreground text-xs font-medium border border-border transition-colors flex-1 sm:flex-initial justify-center"
              >
                <div className="w-4 h-4 relative shrink-0">
                  <Image
                    src={social.icon}
                    alt={social.name}
                    fill
                    className="object-contain dark:invert"
                    sizes="16px"
                  />
                </div>
                <span>{social.name}</span>
                <ArrowUpRight className="w-3 h-3 text-muted-foreground" />
              </a>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}