import { getImageUrl, getVideoUrl } from "@/src/data/media";

export type ProjectAspect = "portrait" | "landscape" | "square";

export type Project = {
  id: number;
  title: string;
  category: string;
  year: string;
  description: string;
  thumbnail: string;
  video: string;
  aspect: ProjectAspect;
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Brand Story",
    category: "Commercial",
    year: "2026",
    description: "A cinematic brand story edit built to land emotion before the first frame finishes.",
    thumbnail: getImageUrl("project-01-poster.jpg"),
    video: getVideoUrl("project-01.mp4"),
    aspect: "portrait",
  },
  {
    id: 2,
    title: "Fashion Campaign",
    category: "Editorial",
    year: "2026",
    description: "Fast-cut motion, polished pacing and rhythm designed for a luxury fashion drop.",
    thumbnail: getImageUrl("project-02-poster.jpg"),
    video: getVideoUrl("project-02.mp4"),
    aspect: "portrait",
  },
  {
    id: 3,
    title: "Social Media Reel",
    category: "Short Form",
    year: "2025",
    description: "A conversion-driven reel with sharp hooks, motion accents and punchy transitions.",
    thumbnail: getImageUrl("project-03-poster.jpg"),
    video: getVideoUrl("project-03.mp4"),
    aspect: "portrait",
  },
  {
    id: 4,
    title: "Product Commercial",
    category: "Brand Film",
    year: "2025",
    description: "A premium product story crafted to feel tactile, elevated and instantly memorable.",
    thumbnail: getImageUrl("project-04-poster.jpg"),
    video: getVideoUrl("project-04.mp4"),
    aspect: "portrait",
  },
  {
    id: 5,
    title: "Travel Film",
    category: "Documentary",
    year: "2025",
    description: "A warm, immersive journey weaving movement, atmosphere and place into a cohesive edit.",
    thumbnail: getImageUrl("project-05-poster.jpg"),
    video: getVideoUrl("project-05.mp4"),
    aspect: "portrait",
  },
  {
    id: 6,
    title: "Music Visual",
    category: "Concept Edit",
    year: "2024",
    description: "Visual storytelling shaped around sound, rhythm and emotional pacing.",
    thumbnail: getImageUrl("project-06-poster.jpg"),
    video: getVideoUrl("project-06.mp4"),
    aspect: "portrait",
  },
  {
    id: 7,
    title: "YouTube Content",
    category: "Creator Edit",
    year: "2024",
    description: "Engaging, platform-native storytelling with retention-first sequence design.",
    thumbnail: getImageUrl("project-07-poster.jpg"),
    video: getVideoUrl("project-07.mp4"),
    aspect: "portrait",
  },
  {
    id: 8,
    title: "Corporate Film",
    category: "Business Story",
    year: "2024",
    description: "Crisp corporate editing with clarity, trust and premium visual polish.",
    thumbnail: getImageUrl("project-08-poster.jpg"),
    video: getVideoUrl("project-08.mp4"),
    aspect: "portrait",
  },
  {
    id: 9,
    title: "Cinematic Short",
    category: "Narrative",
    year: "2024",
    description: "A mood-driven mini story balancing atmosphere, texture and cinematic pacing.",
    thumbnail: getImageUrl("project-09-poster.jpg"),
    video: getVideoUrl("project-09.mp4"),
    aspect: "portrait",
  },
];
