import { Card } from "@/components/ui/Card/Card";
import { ChipList } from "@/components/ui/Chip/ChipList";
import { SectionHeading } from "@/components/ui/SectionHeading/SectionHeading";
import { about } from "@/content/about";
import { withEmphasis } from "@/lib/emphasis";
import { cx } from "@/lib/cx";
import { LocalClock } from "./LocalClock";
import styles from "./About.module.css";

export function About() {
  return (
    <section id="about" className="container section">
      <SectionHeading index={1} label="about me">
        Frontend at heart, <em className="accent">full-stack</em> by practice.
      </SectionHeading>

      <div className={styles.bento}>
        <Card className={cx("reveal", styles.readme)}>
          <p className={styles.label}>✦ readme.md</p>
          {about.paragraphs.map((paragraph, index) => (
            <p key={index} className={styles.text}>
              {withEmphasis(paragraph)}
            </p>
          ))}
        </Card>

        <Card className={cx("reveal", styles.side)}>
          <p className={styles.label}>
            <span className={styles.dot} aria-hidden="true" /> currently
          </p>
          <p className={`display ${styles.big}`}>
            Building at <span className={`accent ${styles.nowrap}`}>{about.current.company}</span>
          </p>
          <p className={styles.small}>{about.current.detail}</p>
        </Card>

        <Card className={cx("reveal", styles.side)}>
          <p className={styles.label}>⌖ bengaluru, in</p>
          <LocalClock />
        </Card>

        <Card className={cx("reveal", styles.half)}>
          <p className={styles.label}>⚙ what excites me</p>
          <ChipList items={about.interests} />
        </Card>

        <Card tone="rose" className={cx("reveal", styles.half, styles.motto)}>
          <p className={styles.label}>♡ motto</p>
          <p className={`display ${styles.big}`}>
            I care about the <em className="accent">pixels</em> and the{" "}
            <em className="accent">pods</em>{" "}
            <span className={styles.heart} aria-hidden="true">
              ♡
            </span>
          </p>
        </Card>
      </div>
    </section>
  );
}
