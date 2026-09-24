import type { Role } from "@/types/content";

// Newest first. Add 2–4 `highlights` per role (impact + numbers) when ready —
// they render as bullet points automatically.
export const experience = [
  {
    company: "IBM (ISDL)",
    title: "Software Engineer",
    focus: "Full-Stack & On-Premises Engineering",
    location: "Bengaluru",
    start: "2025-05",
    summary:
      "Working on **Digital Asset Haven**, an enterprise digital-asset platform, across its on-premises and cloud-native side: deployment, observability and microservices.",
    stack: ["Kubernetes", "OpenShift", "Prometheus", "Grafana", "Microservices"],
  },
  {
    company: "Brillio",
    title: "Senior Engineer",
    location: "Bengaluru",
    start: "2023-08",
    end: "2025-05",
  },
  {
    company: "Infosys",
    title: "Senior System Engineer",
    location: "Bengaluru",
    start: "2021-11",
    end: "2023-04",
  },
  {
    company: "Go With DOT",
    title: "Frontend Web Developer",
    location: "Bengaluru",
    start: "2020-11",
    end: "2021-10",
  },
  {
    company: "Stackonet",
    title: "Web Developer",
    location: "Bengaluru",
    start: "2019-04",
    end: "2020-09",
    message: "init: where it all started ✦",
  },
] satisfies Role[];
