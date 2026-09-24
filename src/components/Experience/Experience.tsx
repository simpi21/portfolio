import { Card } from "@/components/ui/Card/Card";
import { ChipList } from "@/components/ui/Chip/ChipList";
import { SectionHeading } from "@/components/ui/SectionHeading/SectionHeading";
import { experience } from "@/content/experience";
import { currentMonth, formatDuration, formatMonth, monthsBetween } from "@/lib/dates";
import { withEmphasis } from "@/lib/emphasis";
import type { Role } from "@/types/content";
import styles from "./Experience.module.css";

/** Stable, git-looking 7-character hash for decoration (FNV-1a). */
function shortHash(input: string) {
  let hash = 0x811c9dc5;
  for (const char of input) {
    hash ^= char.charCodeAt(0);
    hash = Math.imul(hash, 0x01000193);
  }
  return (hash >>> 0).toString(16).padStart(8, "0").slice(0, 7);
}

export function Experience() {
  return (
    <section id="experience" className="container section">
      <SectionHeading index={2} label="git log --career">
        Where I&apos;ve <em className="accent">shipped</em>.
      </SectionHeading>

      <div className={styles.timeline}>
        <div className={styles.track} aria-hidden="true">
          <div className={styles.fill} />
        </div>
        <ol className={styles.list}>
          {experience.map((role: Role, index) => (
            <li key={`${role.company}-${role.start}`} className={`reveal ${styles.item}`}>
              <span className={styles.node} aria-hidden="true" />
              <RoleCard role={role} isCurrent={index === 0 && !role.end} />
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function RoleCard({ role, isCurrent }: { role: Role; isCurrent: boolean }) {
  const end = role.end ?? currentMonth();
  const duration = formatDuration(monthsBetween(role.start, end));

  return (
    <Card>
      <div className={styles.head}>
        <span className={styles.hash} aria-hidden="true">
          commit {shortHash(role.company + role.start)}
        </span>
        {isCurrent && (
          <span className={styles.ref} aria-hidden="true">
            HEAD → main
          </span>
        )}
        <span className={styles.date}>
          <time dateTime={role.start}>{formatMonth(role.start)}</time> —{" "}
          {role.end ? <time dateTime={role.end}>{formatMonth(role.end)}</time> : "Present"}
          <span className={styles.duration}> · {duration}</span>
        </span>
      </div>

      <h3 className={styles.title}>
        {role.title} <span className={`accent ${styles.company}`}>@ {role.company}</span>
      </h3>
      <p className={styles.sub}>{[role.focus, role.location].filter(Boolean).join(" · ")}</p>

      {role.message && <p className={styles.message}>git commit -m &quot;{role.message}&quot;</p>}
      {role.summary && <p className={styles.summary}>{withEmphasis(role.summary)}</p>}
      {role.highlights && (
        <ul className={styles.highlights}>
          {role.highlights.map((highlight) => (
            <li key={highlight}>{withEmphasis(highlight)}</li>
          ))}
        </ul>
      )}
      {role.stack && <ChipList items={role.stack} className={styles.stack} />}
    </Card>
  );
}
