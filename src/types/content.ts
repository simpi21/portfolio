export type NavItem = {
  label: string;
  href: `#${string}`;
};

export type SiteConfig = {
  name: string;
  role: string;
  location: string;
  email: string;
  /** Path to the résumé in `public/`. Leave undefined until the PDF is added. */
  resumeUrl?: string;
  nav: NavItem[];
  socials: {
    linkedin: string;
    github: string;
  };
};

export type Stat = {
  value: string;
  label: string;
};

export type TerminalTone = "prompt" | "key" | "string" | "dim";

export type TerminalLine = {
  /** Commands are typed character by character; output lines appear whole. */
  kind: "command" | "output";
  parts: Array<{ text: string; tone?: TerminalTone }>;
};

export type HeroContent = {
  availability: string;
  greeting: string;
  tagline: { before: string; highlight: string; after: string };
  stats: Stat[];
  stickers: { top: string; bottom: string };
  terminal: TerminalLine[];
};

export type AboutContent = {
  /** Paragraphs support `**bold**` emphasis. */
  paragraphs: string[];
  current: { company: string; detail: string };
  interests: string[];
};
