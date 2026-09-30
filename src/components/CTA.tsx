"use client";

import { motion, useReducedMotion } from "framer-motion";
import { site } from "@/src/data/site";

export default function CTA() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="contact" className="section-space">
      <div className="section-shell">
        <motion.div
          className="cta-panel"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
        >
          <p className="section-label text-white/80">Let&apos;s create</p>
          <h2 className="mt-5 text-display text-4xl font-medium leading-none tracking-[-0.06em] text-white sm:text-5xl lg:text-[5rem]">
            HAVE A STORY
            <span className="block text-sky-300">TO TELL?</span>
            <span className="block">LET&apos;S EDIT IT.</span>
          </h2>
          <p className="mt-6 max-w-xl text-base leading-7 text-zinc-300 sm:text-lg">
            Have footage waiting to become something great? Let&apos;s create something worth watching.
          </p>

          <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="primary-action mt-8 inline-flex">
            {site.phone}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
