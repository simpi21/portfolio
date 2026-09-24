import { Button } from "@/components/ui/Button/Button";
import { hero } from "@/content/hero";
import { site } from "@/content/site";
import { Terminal } from "./Terminal";
import styles from "./Hero.module.css";

export function Hero() {
  const [firstName, lastName] = site.name.split(" ");

  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <span className={styles.sparkle} style={{ top: "9%", left: "2.5%" }} aria-hidden="true">
        ✦
      </span>
      <span
        className={`${styles.sparkle} ${styles.rose}`}
        style={{ top: "22%", left: "52%", fontSize: 20 }}
        aria-hidden="true"
      >
        ✧
      </span>
      <span
        className={styles.sparkle}
        style={{ top: "88%", left: "3%", fontSize: 11 }}
        aria-hidden="true"
      >
        ✦
      </span>

      <div className={`container ${styles.grid}`}>
        <div>
          <p className={styles.badge}>
            <span className={styles.pulse} aria-hidden="true" />
            {hero.availability}
          </p>
          <p className={styles.greeting}>{hero.greeting}</p>
          <h1 id="hero-title" className={`display ${styles.title}`}>
            {firstName} <em className="accent">{lastName}</em>
          </h1>
          <p className={styles.lead}>
            {hero.tagline.before} <span className={styles.highlight}>{hero.tagline.highlight}</span>
            {hero.tagline.after}
          </p>

          <div className={styles.actions}>
            <Button href="#projects">See my work ✦</Button>
            {site.resume ? (
              <Button href={site.resume.href} variant="ghost" download={site.resume.fileName}>
                Download résumé ↓
              </Button>
            ) : (
              <Button href="#contact" variant="ghost">
                Get in touch
              </Button>
            )}
          </div>

          <dl className={styles.stats}>
            {hero.stats.map((stat) => (
              <div key={stat.label} className={styles.stat}>
                <dt>{stat.label}</dt>
                <dd className="display">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <Terminal lines={hero.terminal} stickers={hero.stickers} />
      </div>
    </section>
  );
}
