"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(false);
  const [label, setLabel] = useState("VIEW");

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    setEnabled(true);

    const updatePosition = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
      setVisible(true);
    };

    const handleHover = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      if (!target) {
        setLabel("");
        return;
      }

      const videoCard = target.closest("[data-video-card]");
      if (videoCard) {
        setLabel("PLAY");
        return;
      }

      const interactive = target.closest("a, button, [role='button']");
      if (interactive) {
        setLabel("VIEW");
        return;
      }

      setLabel("");
    };

    const hideCursor = () => setVisible(false);

    window.addEventListener("mousemove", updatePosition);
    window.addEventListener("mouseover", handleHover);
    window.addEventListener("mouseleave", hideCursor);

    return () => {
      window.removeEventListener("mousemove", updatePosition);
      window.removeEventListener("mouseover", handleHover);
      window.removeEventListener("mouseleave", hideCursor);
    };
  }, []);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="custom-cursor"
      animate={{
        x: position.x - 16,
        y: position.y - 16,
        opacity: visible ? 1 : 0,
        scale: label ? 1 : 0.7,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 24, mass: 0.4 }}
    >
      {label}
    </motion.div>
  );
}
