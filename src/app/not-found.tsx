import { Button } from "@/components/ui/Button/Button";
import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <section className={`container ${styles.page}`}>
      <p className={styles.terminal} aria-hidden="true">
        <span className={styles.prompt}>❯</span> cd ~/this-page
        <br />
        <span className={styles.error}>cd: no such file or directory ✦</span>
      </p>

      <p className={`display ${styles.code}`} aria-hidden="true">
        4<em className="accent">0</em>4
      </p>
      <h1 className={`display ${styles.title}`}>
        This page <em className="accent">wandered off</em>.
      </h1>
      <p className={styles.text}>
        The link might be old, or the page never existed. Let&apos;s get you back somewhere cosy.
      </p>

      <div className={styles.actions}>
        <Button href="/">Back to home ✦</Button>
        <Button href="/#contact" variant="ghost">
          Contact me
        </Button>
      </div>
    </section>
  );
}
