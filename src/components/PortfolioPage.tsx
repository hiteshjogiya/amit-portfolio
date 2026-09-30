"use client";

import { AnimatePresence } from "framer-motion";
import { useState } from "react";

import type { Project } from "@/src/data/projects";

import About from "./About";
import CTA from "./CTA";
import CustomCursor from "./CustomCursor";
import Footer from "./Footer";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Process from "./Process";
import Services from "./Services";
import VideoModal from "./VideoModal";
import WorkSection from "./WorkSection";

export default function PortfolioPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="min-h-screen bg-black text-primary">
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <WorkSection onSelectProject={setSelectedProject} />
        <About />
        <Services />
        <Process />
        <CTA />
      </main>
      <Footer />

      <AnimatePresence>
        {selectedProject && <VideoModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
      </AnimatePresence>
    </div>
  );
}
