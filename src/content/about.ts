import type { AboutContent } from "@/types/content";

export const about = {
  paragraphs: [
    "I'm a software engineer with almost **8 years** of experience building scalable applications. My core strength is frontend engineering: **React, TypeScript, JavaScript, Next.js and Vue.js**. I also build backend services with **Node.js, Express, Go and MongoDB**.",
    "At **IBM** I work on **Digital Asset Haven**, an enterprise digital-asset platform, on its on-premises and cloud-native side: Kubernetes, OpenShift, Prometheus, Grafana and microservices.",
    "I love working across the whole stack, from frontend experiences and backend services to infrastructure, deployment and observability — and I'm especially drawn to system design and distributed systems.",
  ],
  current: {
    company: "IBM",
    detail: "Digital Asset Haven · on-prem & cloud-native",
  },
  interests: ["System design", "Distributed systems", "Scalable products", "Observability"],
} satisfies AboutContent;
