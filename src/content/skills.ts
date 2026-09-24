import type { SkillGroup } from "@/types/content";

export const skills = [
  {
    key: "frontend",
    label: "frontend",
    items: ["React", "TypeScript", "JavaScript", "Next.js", "Vue.js"],
  },
  { key: "backend", label: "backend", items: ["Node.js", "Express", "Go", "MongoDB"] },
  { key: "cloud", label: "cloud & infra", items: ["Kubernetes", "OpenShift", "Microservices"] },
  { key: "observability", label: "observability", items: ["Prometheus", "Grafana"] },
] satisfies SkillGroup[];

/** Extra line shown at the end of the code view. */
export const superpower = "turning designs into delightful UIs ♡";
