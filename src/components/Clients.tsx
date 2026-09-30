"use client";

import { motion, useReducedMotion } from "framer-motion";

import { site } from "@/src/data/site";

export default function Clients() {
  const shouldReduceMotion = useReducedMotion();
  const clients = [...site.clients, ...site.clients];

  return (
    <section className="section-space pb-8">
      <div className="section-shell">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
          whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
          className="mb-8 text-center"
        >
          <p className="section-label">Brands I&apos;ve worked with</p>
          <h2 className="section-heading mt-3 text-3xl sm:text-4xl">BRANDS I&apos;VE WORKED WITH</h2>
        </motion.div>

        <div className="overflow-hidden rounded-full border border-white/10 bg-white/[0.02] py-4">
          <motion.div
            className="marquee-track"
            animate={shouldReduceMotion ? { x: 0 } : { x: [0, -1200] }}
            transition={{ duration: 28, ease: "linear", repeat: Infinity }}
          >
            {clients.map((client, index) => (
              <span key={`${client}-${index}`} className="marquee-item">
                {client}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
