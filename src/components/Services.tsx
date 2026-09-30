"use client";

import { motion, useReducedMotion } from "framer-motion";

import { services } from "@/src/data/services";

export default function Services() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="services" className="section-space">
      <div className="section-shell">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
          whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-12 max-w-2xl"
        >
          <p className="section-label">Services</p>
          <h2 className="section-heading mt-3">WHAT I DO</h2>
        </motion.div>

        <div className="space-y-4">
          {services.map((service) => (
            <motion.article
              key={service.number}
              className="service-card"
              initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
              whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <div className="service-number">{service.number}</div>
              <div className="flex-1">
                <div className="service-header">
                  <h3>{service.title}</h3>
                  <div className="service-line" />
                </div>
                <p>{service.description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
