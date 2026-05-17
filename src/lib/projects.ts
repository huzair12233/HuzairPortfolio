export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  stack: string[];
  github?: string;
  live?: string;
  image?: string;
  featured: boolean;
  isLive: boolean;
}

export const projects: Project[] = [
  {
    id: "smartsynth",
    title: "SmartSynth",
    tagline: "AI-Powered Synthetic Data Generator",
    description:
      "Full-stack platform combining SDV models for tabular data and Google Gemini for text generation. Includes JWT auth, multi-format export (CSV, JSON, Excel), and persistent download history. Built to accelerate ML training pipelines.",
    stack: ["FastAPI", "React", "MongoDB", "SDV", "Google Gemini API", "JWT"],
    github: "https://github.com/huzair12233/Synthetic_data_generator",
    featured: true,
    isLive: false,
  },
  {
    id: "grading",
    title: "Automated Grading System",
    tagline: "AI Exam Evaluator",
    description:
      "End-to-end platform that extracts handwritten answers via OCR and computer vision, then evaluates them using LLMs. Includes a collapsible dashboard showing per-student grading, OCR output, AI evaluations, and final scores.",
    stack: ["Python", "OCR", "Computer Vision", "LLM API", "Flask", "React"],
    github: "https://github.com/huzair12233/automated-grading-system",
    featured: true,
    isLive: false,
  },
  {
    id: "evdetection",
    title: "Emergency Vehicle Detection",
    tagline: "Computer Vision Pipeline",
    description:
      "Combined supervised object detection (YOLOv8) with zero-shot detection (GroundingDINO) to identify emergency vehicles in video streams. Designed for smart traffic systems and emergency response prioritization.",
    stack: ["Python", "YOLOv8", "GroundingDINO", "OpenCV"],
    github: "https://github.com/huzair12233/Emergency_Vehicle_Detection",
    featured: true,
    isLive: false,
  },
  {
    id: "alqalam",
    title: "Al-Qalam School",
    tagline: "Official School Website",
    description:
      "Designed, developed, and deployed the official website for Al-Qalam School. Currently live and serving real visitors. End-to-end ownership from design to deployment.",
    stack: ["JavaScript", "React", "Vercel"],
    live: "https://alqalamieschool.com/",
    image: "/images/school.PNG",
    featured: true,
    isLive: true,
  },
  {
    id: "aaassociate",
    title: "AA Associate",
    tagline: "Business Website",
    description:
      "Built and deployed a responsive business website for a client. Handled design, frontend development, and Vercel deployment.",
    stack: ["JavaScript", "React", "Vercel"],
    live: "https://aaassociate.vercel.app/",
    image: "/images/aaassociate-preview.png",
    featured: true,
    isLive: true,
  },
  {
    id: "academia",
    title: "Academia",
    tagline: "MERN E-Learning Platform",
    description:
      "Full-stack e-learning platform with real-time grading, course management, and authentication.",
    stack: ["MongoDB", "Express", "React", "Node.js", "Firebase", "JWT"],
    github: "https://github.com/huzair12233/academia",
    featured: false,
    isLive: false,
  },
  {
    id: "colormatrix",
    title: "ColorMatrix",
    tagline: "Interactive React Grid",
    description:
      "A 3x3 color matrix demonstrating React state management and DOM manipulation.",
    stack: ["React", "JavaScript"],
    github: "https://github.com/huzair12233/ColorMatrix",
    featured: false,
    isLive: false,
  },
  {
    id: "medicalcolorization",
    title: "MedicalColorization",
    tagline: "Medical Image Colorization",
    description:
      "Python-based image colorization pipeline for medical imaging applications.",
    stack: ["Python", "Computer Vision"],
    github: "https://github.com/huzair12233/MedicalColorization",
    featured: false,
    isLive: false,
  },
];
