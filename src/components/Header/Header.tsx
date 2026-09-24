import { Button } from "@/components/ui/Button/Button";
import { site } from "@/content/site";
import { MobileMenu } from "./MobileMenu";
import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.wrap}>
      <nav className={styles.nav} aria-label="Primary">
        {/* "#top" always scrolls to the top of the document, no matching id needed */}
        <a href="#top" className={styles.logo} aria-label={`${site.name}, back to top`}>
          <span aria-hidden="true">
            <span className={styles.bracket}>&lt;</span>simpi
            <span className={styles.bracket}>&nbsp;/&gt;</span>
            <span className={styles.star}>✦</span>
          </span>
        </a>

        <ul className={styles.links}>
          {site.nav.map((item) => (
            <li key={item.href}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>

        {site.resumeUrl && (
          <Button
            href={site.resumeUrl}
            variant="ghost"
            size="sm"
            className={styles.resume}
            download
          >
            Résumé ↓
          </Button>
        )}

        <MobileMenu items={site.nav} resumeUrl={site.resumeUrl} />
      </nav>
    </header>
  );
}
