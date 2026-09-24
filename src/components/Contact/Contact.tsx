import { Button } from "@/components/ui/Button/Button";
import { Card } from "@/components/ui/Card/Card";
import { site } from "@/content/site";
import { CopyEmail } from "./CopyEmail";
import styles from "./Contact.module.css";

export function Contact() {
  return (
    <section id="contact" className="container section" aria-labelledby="contact-title">
      <Card tone="rose" className={`reveal ${styles.card}`}>
        <span className={`${styles.sticker} ${styles.stickerLeft}`} aria-hidden="true">
          ✦ say hi
        </span>
        <span className={`${styles.sticker} ${styles.stickerRight}`} aria-hidden="true">
          inbox open ♡
        </span>

        <p className="eyebrow">{"// 05 · contact"}</p>
        <h2 id="contact-title" className={`display ${styles.title}`}>
          Let&apos;s build something <em className="accent">lovely</em>.
        </h2>
        <p className={styles.lead}>
          I&apos;m open to new opportunities. The quickest way to reach me is email.
        </p>

        <div className={styles.emailRow}>
          <a className={styles.email} href={`mailto:${site.email}`}>
            {site.email}
          </a>
          <CopyEmail email={site.email} />
        </div>

        <div className={styles.links}>
          <Button
            href={site.socials.linkedin}
            variant="ghost"
            size="sm"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn ↗
          </Button>
          <Button
            href={site.socials.github}
            variant="ghost"
            size="sm"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub ↗
          </Button>
          {site.resumeUrl && (
            <Button href={site.resumeUrl} size="sm" download>
              Résumé ↓
            </Button>
          )}
        </div>
      </Card>
    </section>
  );
}
