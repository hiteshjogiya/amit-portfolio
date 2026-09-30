export type Service = {
  number: string;
  title: string;
  description: string;
};

export const services: Service[] = [
  {
    number: "01",
    title: "Video Editing",
    description: "Long-form and short-form editing designed for engagement, clear storytelling and viewer retention.",
  },
  {
    number: "02",
    title: "Social Media Content",
    description: "Reels, Shorts, TikToks and platform-first edits built to capture attention quickly.",
  },
  {
    number: "03",
    title: "Commercial Editing",
    description: "Polished edits for brands, products and campaigns with audience-first pacing.",
  },
  {
    number: "04",
    title: "Motion & Visual Effects",
    description: "Transitions, motion graphics and elevating visuals to add impact without slowing the story.",
  },
  {
    number: "05",
    title: "Color & Sound",
    description: "Color correction, grading and audio enhancement that brings a cinematic finish to the final cut.",
  },
];

export const processSteps = [
  { number: "01", title: "Understand", description: "Define the message, audience and creative direction before the first cut." },
  { number: "02", title: "Organize", description: "Sort footage, build structure and identify the strongest story beats." },
  { number: "03", title: "Edit", description: "Shape the emotional arc with pacing, rhythm and visual intent." },
  { number: "04", title: "Refine", description: "Dial in transitions, color, sound and the finishing cinematic touches." },
  { number: "05", title: "Deliver", description: "Final export with polished delivery for web, social and campaign-ready use." },
];
