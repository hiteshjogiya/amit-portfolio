"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

import { getImageUrl } from "@/src/data/media";
import { site } from "@/src/data/site";

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const words = ["I EDIT", "STORIES", "THAT MOVE."];

  return (
    <section id="home" className="relative overflow-hidden pt-28 sm:pt-32">
      <div className="section-shell">
        <div className="hero-grid">
          <motion.div
            className="relative z-10 flex flex-col justify-center"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 36 }}
            animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <motion.div
              className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.24em] text-zinc-200/90"
              initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
              animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
              transition={{ delay: 0.08, duration: 0.5 }}
            >
              <span className="inline-block h-2 w-2 rounded-full bg-sky-400 shadow-[0_0_20px_rgba(125,211,252,0.8)]" />
              Available for select projects
            </motion.div>

            <div className="space-y-2">
              {words.map((word, index) => (
                <motion.h1
                  key={word}
                  className="text-display text-5xl font-medium leading-[0.85] tracking-[-0.06em] text-white sm:text-6xl lg:text-[8rem]"
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 42 }}
                  animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
                  transition={{ delay: 0.12 + index * 0.1, duration: 0.7 }}
                >
                  <span className={index === 2 ? "text-sky-300" : ""}>{word}</span>
                </motion.h1>
              ))}
            </div>

            <motion.p
              className="mt-6 max-w-lg text-base leading-7 text-zinc-300 sm:text-lg"
              initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
              animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.6 }}
            >
              <span className="font-medium text-white">{site.role}</span>
              <span className="block text-zinc-300">{site.subheadline}</span>
            </motion.p>

            <motion.div
              className="mt-8 flex flex-wrap gap-4"
              initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
              animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.6 }}
            >
              <a href="#work" className="primary-action">
                View My Work
              </a>
              <a href="#contact" className="secondary-action">
                Let&apos;s Work Together
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative"
            initial={shouldReduceMotion ? false : { opacity: 0, scale: 1.05 }}
            animate={shouldReduceMotion ? { opacity: 1, scale: 1 } : { opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            <div className="hero-visual">
              <div className="absolute inset-x-8 top-8 h-1/2 rounded-full bg-sky-400/20 blur-3xl" />
              <div className="relative aspect-[5/6] overflow-hidden rounded-[30px] border border-white/10 bg-zinc-900 shadow-[0_25px_100px_rgba(6,6,10,0.75)]">
                <Image
                  src={getImageUrl("editor-profile.jpg")}
                  alt="Cinematic video editing portfolio preview"
                  fill
                  priority
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="scroll-indicator"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
          animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <span>Scroll</span>
          <div className="scroll-line">
            <span />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
