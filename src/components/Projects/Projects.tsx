import type { ReactNode } from "react";
import { Button } from "@/components/ui/Button/Button";
import { Card } from "@/components/ui/Card/Card";
import { SectionHeading } from "@/components/ui/SectionHeading/SectionHeading";
import { site } from "@/content/site";
import styles from "./Projects.module.css";

// "Coming soon" state until case studies are ready. Swap the ghost cards for
// real project cards (driven by src/content/projects.ts) when they are.
export function Projects() {
  return (
    <section id="projects" className="container section">
      <SectionHeading index={3} label="selected work">
        Things I&apos;ve <em className="accent">built</em>.
      </SectionHeading>

      <Card tone="rose" className={`reveal ${styles.status}`}>
        <p className={styles.git} aria-hidden="true">
          <span className={styles.prompt}>❯</span> git checkout -b feature/case-studies
          <br />
          <span className={styles.dim}>
            Switched to a new branch &apos;feature/case-studies&apos; ✦
          </span>
        </p>
        <h3 className={`display ${styles.title}`}>
          Case studies are <em className="accent">brewing</em>.
        </h3>
        <p className={styles.text}>
          I&apos;m freshly whisking a few deep dives into things I&apos;ve built across frontend,
          backend and cloud. Coming soon — meanwhile, my code lives on GitHub.
        </p>
        <Button
          href={site.socials.github}
          variant="ghost"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.cta}
        >
          Browse my GitHub ↗
        </Button>
      </Card>

      {/* Decorative preview of the layout to come */}
      <div className={styles.ghosts} aria-hidden="true">
        <GhostCard>
          <div className={styles.pods}>
            {Array.from({ length: 18 }, (_, index) => (
              <i key={index} />
            ))}
          </div>
        </GhostCard>
        <GhostCard>
          <div className={styles.browser}>
            <div className={styles.browserBar}>
              <i />
              <i />
              <i />
            </div>
            <div className={styles.browserBody}>
              <b className={styles.accentBar} />
              <b style={{ width: "85%" }} />
              <b style={{ width: "60%" }} />
              <div className={styles.browserRow}>
                <b />
                <b />
                <b />
              </div>
            </div>
          </div>
        </GhostCard>
        <GhostCard>
          <div className={styles.bars}>
            {[45, 70, 55, 90, 65, 80, 50, 75].map((height, index) => (
              <i key={index} style={{ height: `${height}%` }} />
            ))}
          </div>
        </GhostCard>
      </div>
    </section>
  );
}

function GhostCard({ children }: { children: ReactNode }) {
  return (
    <div className={styles.ghost}>
      <div className={styles.cover}>{children}</div>
      <div className={styles.ghostBody}>
        <span className={styles.soon}>coming soon ✦</span>
        <b style={{ width: "70%" }} />
        <b style={{ width: "92%" }} />
        <b style={{ width: "55%" }} />
      </div>
    </div>
  );
}
