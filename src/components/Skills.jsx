import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { skillCategories, additionalExpertise } from "@/data/portfolioData";
import { fadeUpVariant, staggerContainer } from "@/lib/animations";

export default function Skills() {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, staggerChildren: 0.08 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
  };

  return (
    <section id="kemampuan" className="py-12 sm:py-24 border-t border-border relative">
      <motion.div
        className="max-w-5xl mx-auto"
        variants={staggerContainer(0.08, 0.05)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
      >
        {/* Header */}
        <motion.div variants={fadeUpVariant} className="mb-8 sm:mb-14">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2">
            Kemampuan Teknis
          </p>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-foreground">
            Teknologi &amp; keahlian
          </h2>
        </motion.div>

        {/* Categories Grid — single column on mobile, 3 cols on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
          {skillCategories.map((category) => (
            <motion.div
              key={category.id}
              variants={cardVariants}
              className="rounded-xl sm:rounded-2xl border border-border bg-card/80 backdrop-blur-sm p-4 sm:p-6 flex flex-col justify-between shadow-sm relative overflow-hidden group"
            >
              {/* Subtle gradient hover effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-foreground/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-2 sm:mb-3 pb-3 sm:pb-4 border-b border-border/50">
                  <h3 className="text-xs sm:text-sm font-bold text-foreground">
                    {category.title}
                  </h3>
                  <span className="text-[10px] sm:text-xs font-mono text-muted-foreground bg-secondary px-2 py-0.5 rounded">
                    {category.skills.length} tools
                  </span>
                </div>
                <p className="text-[11px] sm:text-xs text-muted-foreground mb-4 sm:mb-6 leading-relaxed">
                  {category.description}
                </p>

                {/* Skill List */}
                <div className="space-y-2 sm:space-y-2.5">
                  {category.skills.map((skill, sIdx) => (
                    <motion.div
                      key={sIdx}
                      variants={itemVariants}
                      whileHover={{ scale: 1.02, backgroundColor: "hsl(var(--secondary))" }}
                      whileTap={{ scale: 0.98 }}
                      className="flex items-center justify-between p-2.5 sm:p-3 rounded-lg sm:rounded-xl bg-secondary/40 border border-border/60 hover:border-foreground/30 transition-all cursor-default"
                    >
                      <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
                        <div className="w-4 h-4 sm:w-5 sm:h-5 relative shrink-0 grayscale group-hover:grayscale-0 transition-[filter] duration-300">
                          <Image
                            src={skill.icon}
                            alt={skill.name}
                            fill
                            className="object-contain"
                            sizes="20px"
                          />
                        </div>
                        <span className="text-[11px] sm:text-xs font-semibold text-foreground truncate">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-[9px] sm:text-[10px] font-mono text-muted-foreground uppercase shrink-0 ml-2">
                        {skill.level}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Competencies List */}
        <motion.div
          variants={fadeUpVariant}
          className="rounded-xl sm:rounded-2xl border border-border bg-card/80 backdrop-blur-sm p-4 sm:p-6 md:p-8"
        >
          <h4 className="text-[11px] sm:text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4 sm:mb-5 pb-2 sm:pb-3 border-b border-border/50">
            Metodologi &amp; Standar Pengerjaan
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-5">
            {additionalExpertise.map((item, index) => (
              <motion.div 
                key={index} 
                whileHover={{ y: -2 }}
                className="p-3 sm:p-4 rounded-lg sm:rounded-xl bg-secondary/30 border border-border/50 hover:border-border transition-colors"
              >
                <p className="text-[11px] sm:text-xs font-bold text-foreground mb-1 sm:mb-1.5 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-foreground/40"></span>
                  {item.name}
                </p>
                <p className="text-[10px] sm:text-[11px] text-muted-foreground leading-relaxed ml-3.5">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
