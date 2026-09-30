"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

import { getImageUrl } from "@/src/data/media";
import { site } from "@/src/data/site";

export default function About() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="about" className="section-space">
      <div className="section-shell">
        <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            className="about-visual"
            initial={shouldReduceMotion ? false : { opacity: 0, clipPath: "inset(10% 10% 10% 10%)" }}
            whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, clipPath: "inset(0% 0% 0% 0%)" }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative overflow-hidden rounded-[30px] border border-white/10 bg-zinc-900 shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
              <Image
                src={getImageUrl("editor-profile.jpg")}
                alt={`Portrait of ${site.name}`}
                width={720}
                height={900}
                className="h-full w-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 28 }}
            whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <p className="section-label">About</p>
            <h2 className="section-heading mt-3 text-4xl sm:text-5xl">I shape stories into motion.</h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-zinc-300 sm:text-lg">{site.bio}</p>

            <div className="mt-8 flex flex-wrap gap-3">
              {site.stats.map((stat) => (
                <div key={stat.label} className="stat-card">
                  <div className="text-display text-3xl font-medium tracking-[-0.06em] text-white">{stat.value}</div>
                  <div className="mt-1 text-[10px] uppercase tracking-[0.24em] text-zinc-400">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex items-center gap-3">
              <span className="inline-flex h-3 w-3 rounded-full bg-emerald-400 shadow-[0_0_20px_rgba(52,211,153,0.8)]" />
              <span className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-200">Available for freelance projects</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
