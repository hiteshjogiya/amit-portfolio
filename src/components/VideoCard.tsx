"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Play } from "lucide-react";
import { useRef } from "react";

import type { Project } from "@/src/data/projects";

type VideoCardProps = {
  project: Project;
  onSelect: (project: Project) => void;
};

export default function VideoCard({ project, onSelect }: VideoCardProps) {
  const shouldReduceMotion = useReducedMotion();
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handlePlayPreview = async () => {
    const video = videoRef.current;
    if (!video) return;
    try {
      video.muted = true;
      await video.play();
    } catch {
      // Ignore playback failures for non-interacting previews.
    }
  };

  const handlePausePreview = () => {
    const video = videoRef.current;
    if (!video) return;
    video.pause();
  };

  return (
    <motion.div
      className="min-w-0"
      initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
      whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <button
        type="button"
        onClick={() => onSelect(project)}
        data-video-card
        className="group relative block w-full aspect-[9/16] overflow-hidden rounded-[28px] border border-white/10 bg-zinc-950 text-left transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/90"
        aria-label={`Open project: ${project.title}`}
        onMouseEnter={handlePlayPreview}
        onMouseLeave={handlePausePreview}
        onFocus={handlePlayPreview}
        onBlur={handlePausePreview}
      >
        <div className="absolute inset-0">
          <video
            ref={videoRef}
            className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
            src={project.video}
            muted
            loop
            playsInline
            preload="metadata"
            poster={project.thumbnail}
            onError={(event) => {
              const target = event.currentTarget;
              target.style.display = "none";
            }}
          />

          <div className="absolute inset-0 bg-black/20 transition duration-500 group-hover:bg-black/35" />

          <div className="absolute inset-0 z-10 flex items-center justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/30 bg-black/35 text-white shadow-[0_10px_30px_rgba(0,0,0,0.4)] backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
              <Play size={22} className="fill-current" />
            </div>
          </div>
        </div>
      </button>
    </motion.div>
  );
}
