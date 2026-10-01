"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Play } from "lucide-react";

import { projects } from "@/src/data/projects";

export default function FeaturedVideo() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="section-space">
      <div className="section-shell">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
          whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-8 max-w-xl"
        >
          <p className="section-label">Featured edit</p>
          <h2 className="section-heading mt-3">FEATURED EDIT</h2>
        </motion.div>

        <motion.div
          className="featured-video-shell"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 24, scale: 0.98 }}
          whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="featured-video-media">
            <div className="featured-video-overlay" />
            <div className="featured-video-banner">
              <span>Watch the latest edit</span>
              <button type="button" className="featured-play-button" aria-label="Play featured video">
                <Play size={18} className="fill-current" />
              </button>
            </div>
            <video
              className="h-full w-full object-cover"
              muted
              playsInline
              autoPlay
              loop
              preload="metadata"
              poster={projects[0].thumbnail}
              src={projects[0].video}
              onError={(event) => {
                const target = event.currentTarget;
                target.style.display = "none";
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
