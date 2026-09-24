export type NavItem = {
  label: string;
  /** Root-relative so links also work from other pages, e.g. the 404 page. */
  href: `/#${string}`;
};

export type Resume = {
  href: string;
  fileName: string;
};

export type SiteConfig = {
  name: string;
  role: string;
  location: string;
  email: string;
  /** Résumé in `public/`; `fileName` is what the download is saved as. Omit to hide the buttons. */
  resume?: Resume;
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
  /** `after` follows the highlight directly, so include its leading space or punctuation. */
  tagline: { before: string; highlight: string; after: string };
  stats: Stat[];
  stickers: { top: string; bottom: string };
  terminal: TerminalLine[];
};

/** Year and month, e.g. "2025-05". */
export type YearMonth = `${number}-${number}`;

export type Role = {
  company: string;
  title: string;
  /** Extra detail after the title, e.g. "Full-Stack & On-Premises Engineering". */
  focus?: string;
  location: string;
  start: YearMonth;
  /** Omit for the current role. */
  end?: YearMonth;
  /** Short description; supports `**bold**`. */
  summary?: string;
  /** Impact bullet points; support `**bold**`. */
  highlights?: string[];
  stack?: string[];
  /** Playful commit message shown in mono, e.g. for the first role. */
  message?: string;
};

export type SkillGroup = {
  /** Identifier used as the property name in the code view. */
  key: string;
  label: string;
  items: string[];
};

export type AboutContent = {
  /** Paragraphs support `**bold**` emphasis. */
  paragraphs: string[];
  current: { company: string; detail: string };
  interests: string[];
};
