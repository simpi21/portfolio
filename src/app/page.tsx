import { Button } from "@/components/ui/Button/Button";
import { site } from "@/content/site";
import styles from "./page.module.css";

// Temporary page for Milestone 2: exercises the layout, type and buttons.
// Each section is replaced by its real component in Milestones 3–6.
export default function Home() {
  return (
    <>
      <section className={`container ${styles.intro}`}>
        <p className="eyebrow">hi there, i&apos;m</p>
        <h1 className={`display ${styles.title}`}>
          Simpi <em className="accent">Singh</em>
        </h1>
        <p className={styles.lead}>{site.role} — the full portfolio is on its way.</p>
        <div className={styles.actions}>
          <Button href="#about">See my work ✦</Button>
          <Button href={`mailto:${site.email}`} variant="ghost">
            Say hi
          </Button>
        </div>
      </section>

      {site.nav.map((item, index) => (
        <section key={item.href} id={item.href.slice(1)} className={`container ${styles.stub}`}>
          <p className="eyebrow">
            {"// "}
            {String(index + 1).padStart(2, "0")} · {item.label.toLowerCase()}
          </p>
          <h2 className={`display ${styles.heading}`}>
            {item.label} <em className="accent">coming soon</em>.
          </h2>
        </section>
      ))}
    </>
  );
}
