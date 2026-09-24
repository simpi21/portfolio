import { site } from "@/content/site";
import styles from "./Footer.module.css";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.row}>
          <p>
            © {year} {site.name}
          </p>
          <ul className={styles.links}>
            <li>
              <a href={`mailto:${site.email}`}>Email</a>
            </li>
            <li>
              <a href={site.socials.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn ↗
              </a>
            </li>
            <li>
              <a href={site.socials.github} target="_blank" rel="noopener noreferrer">
                GitHub ↗
              </a>
            </li>
          </ul>
          <p>
            Designed &amp; built with{" "}
            <span className={styles.heart} aria-hidden="true">
              ♡
            </span>
            <span className="visually-hidden">love</span> + TypeScript
          </p>
        </div>
      </div>
    </footer>
  );
}
