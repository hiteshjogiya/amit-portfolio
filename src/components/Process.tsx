"use client";

import { motion, useReducedMotion } from "framer-motion";

import { processSteps } from "@/src/data/services";

export default function Process() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="section-space">
      <div className="section-shell">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
          className="mb-10 max-w-2xl"
        >
          <p className="section-label">Creative process</p>
          <h2 className="section-heading mt-3">HOW I WORK</h2>
        </motion.div>

        <div className="grid gap-4 lg:grid-cols-5">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.number}
              className="process-card"
              initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
              whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.07, duration: 0.5, ease: "easeOut" }}
            >
              <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.2em] text-zinc-400">
                <span>{step.number}</span>
                <span className="h-px w-10 bg-white/10" />
              </div>
              <h3 className="mt-5 text-display text-2xl font-medium tracking-[-0.05em] text-white">{step.title}</h3>
              <p className="mt-4 text-sm leading-7 text-zinc-300">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
