"use client";

import { motion } from "framer-motion";
import { X } from "lucide-react";
import { useEffect, useRef } from "react";

import type { Project } from "@/src/data/projects";

type VideoModalProps = {
  project: Project;
  onClose: () => void;
};

export default function VideoModal({ project, onClose }: VideoModalProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    const video = videoRef.current;
    if (video) {
      video.volume = 1;
      video.muted = false;
      video.play().catch(() => {
        // Browsers may block autoplay in some contexts; the user can still use the video controls.
      });
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [onClose, project.video]);

  return (
    <motion.div
      className="fixed inset-0 z-[70] flex items-center justify-center bg-black/70 p-3 backdrop-blur-sm sm:p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="relative w-[min(92vw,420px)] max-h-[88vh] rounded-[28px] border border-white/10 bg-zinc-950/90 p-2 shadow-[0_20px_90px_rgba(0,0,0,0.6)] sm:p-3"
        initial={{ opacity: 0, y: 32, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.98 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          className="absolute -right-2 -top-2 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-black/60 text-white/90 shadow-lg transition hover:bg-white/10 sm:right-2 sm:top-2"
          aria-label="Close video modal"
          onClick={onClose}
        >
          <X size={18} />
        </button>

        <div className="overflow-hidden rounded-[22px] border border-white/10 bg-black">
          <video
            ref={videoRef}
            controls
            autoPlay
            playsInline
            preload="metadata"
            className="aspect-[9/16] max-h-[82vh] w-full bg-black object-cover"
            src={project.video}
            onError={(event) => {
              const target = event.currentTarget;
              target.style.display = "none";
            }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
}
