import type { HeroContent } from "@/types/content";

export const hero = {
  availability: "Open to new opportunities",
  greeting: "hi there, i'm",
  tagline: {
    before: "Frontend-first full-stack engineer crafting",
    highlight: "pixel-perfect interfaces",
    after: "with React, TypeScript, Node.js & Go.",
  },
  stats: [
    { value: "~8", label: "years building" },
    { value: "5", label: "companies" },
    { value: "IBM (ISDL)", label: "currently" },
  ],
  stickers: { top: "✦ React · TypeScript · Node.js", bottom: "⎈ cloud-native & on-prem" },
  terminal: [
    { kind: "command", parts: [{ text: "whoami" }] },
    {
      kind: "output",
      parts: [{ text: "simpi singh", tone: "string" }, { text: " · full-stack engineer ✦" }],
    },
    { kind: "command", parts: [{ text: "cat " }, { text: "about.json", tone: "key" }] },
    { kind: "output", parts: [{ text: "{", tone: "dim" }] },
    {
      kind: "output",
      parts: [
        { text: '  "role"', tone: "key" },
        { text: ": ", tone: "dim" },
        { text: '"Software Engineer @ IBM (ISDL)"', tone: "string" },
        { text: ",", tone: "dim" },
      ],
    },
    {
      kind: "output",
      parts: [
        { text: '  "experience"', tone: "key" },
        { text: ": ", tone: "dim" },
        { text: '"~8 years"', tone: "string" },
        { text: ",", tone: "dim" },
      ],
    },
    {
      kind: "output",
      parts: [
        { text: '  "frontend"', tone: "key" },
        { text: ": ", tone: "dim" },
        { text: '["React", "TypeScript", "Next.js"]', tone: "string" },
        { text: ",", tone: "dim" },
      ],
    },
    {
      kind: "output",
      parts: [
        { text: '  "backend"', tone: "key" },
        { text: ": ", tone: "dim" },
        { text: '["Node.js", "Go", "MongoDB"]', tone: "string" },
        { text: ",", tone: "dim" },
      ],
    },
    {
      kind: "output",
      parts: [
        { text: '  "cloud"', tone: "key" },
        { text: ": ", tone: "dim" },
        { text: '["Kubernetes", "OpenShift"]', tone: "string" },
        { text: ",", tone: "dim" },
      ],
    },
    {
      kind: "output",
      parts: [
        { text: '  "focus"', tone: "key" },
        { text: ": ", tone: "dim" },
        { text: '"system design & distributed systems"', tone: "string" },
      ],
    },
    { kind: "output", parts: [{ text: "}", tone: "dim" }] },
  ],
} satisfies HeroContent;
