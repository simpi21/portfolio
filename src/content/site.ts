import type { SiteConfig } from "@/types/content";

export const site = {
  name: "Simpi Singh",
  role: "Full-Stack Software Engineer",
  location: "Bengaluru, India",
  email: "simpisingh21@gmail.com",
  // Older résumé for now; replace public/resume.pdf when the updated one is ready.
  resume: { href: "/resume.pdf", fileName: "Simpi-Singh-Resume.pdf" },
  nav: [
    { label: "About", href: "/#about" },
    { label: "Experience", href: "/#experience" },
    { label: "Work", href: "/#projects" },
    { label: "Skills", href: "/#skills" },
    { label: "Contact", href: "/#contact" },
  ],
  socials: {
    linkedin: "https://www.linkedin.com/in/simpi-singh",
    github: "https://github.com/simpi21",
  },
} satisfies SiteConfig;
