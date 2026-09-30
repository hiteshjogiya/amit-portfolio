"use client";

import { motion, useReducedMotion } from "framer-motion";

import { projects, type Project } from "@/src/data/projects";

import VideoCard from "./VideoCard";

type WorkSectionProps = {
  onSelectProject: (project: Project) => void;
};

export default function WorkSection({ onSelectProject }: WorkSectionProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="work" className="section-space">
      <div className="section-shell">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
          whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-12 max-w-3xl"
        >
          <p className="section-label">Selected work</p>
          <h2 className="section-heading mt-3">SELECTED WORK</h2>
          <p className="mt-4 max-w-xl text-base leading-7 text-zinc-300 sm:text-lg">
            A collection of edits crafted to capture attention, build emotion and tell stories through motion.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-5 xl:grid-cols-4">
          {projects.map((project) => (
            <VideoCard
              key={project.id}
              project={project}
              onSelect={onSelectProject}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
