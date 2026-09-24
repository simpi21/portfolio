import Link from "next/link";
import { Button } from "@/components/ui/Button/Button";
import { site } from "@/content/site";
import { MobileMenu } from "./MobileMenu";
import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.wrap}>
      <nav className={styles.nav} aria-label="Primary">
        <Link href="/" className={styles.logo} aria-label={`${site.name}, home`}>
          <span aria-hidden="true">
            <span className={styles.bracket}>&lt;</span>simpi
            <span className={styles.bracket}>&nbsp;/&gt;</span>
            <span className={styles.star}>✦</span>
          </span>
        </Link>

        <ul className={styles.links}>
          {site.nav.map((item) => (
            <li key={item.href}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>

        {site.resume && (
          <Button
            href={site.resume.href}
            variant="ghost"
            size="sm"
            className={styles.resume}
            download={site.resume.fileName}
          >
            Résumé ↓
          </Button>
        )}

        <MobileMenu items={site.nav} resume={site.resume} />
      </nav>
    </header>
  );
}
