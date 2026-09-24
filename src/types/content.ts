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
