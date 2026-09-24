"use client";

import { useState } from "react";
import { Card } from "@/components/ui/Card/Card";
import { ChipList } from "@/components/ui/Chip/ChipList";
import { cx } from "@/lib/cx";
import type { SkillGroup } from "@/types/content";
import styles from "./Skills.module.css";

type View = "chips" | "code";

type SkillsViewProps = {
  groups: SkillGroup[];
  superpower: string;
};

/** Skills as chip tiles or as a TypeScript object — same data, two views. */
export function SkillsView({ groups, superpower }: SkillsViewProps) {
  const [view, setView] = useState<View>("chips");

  return (
    <>
      <div className={styles.toolbar}>
        <div className={styles.toggle} role="group" aria-label="Skills view">
          <button type="button" aria-pressed={view === "chips"} onClick={() => setView("chips")}>
            ✦ chips
          </button>
          <button type="button" aria-pressed={view === "code"} onClick={() => setView("code")}>
            {"{ } code"}
          </button>
        </div>
      </div>

      <div className={styles.grid} hidden={view !== "chips"}>
        {groups.map((group, index) => (
          <Card key={group.key} className="reveal">
            <h3 className={cx(styles.groupLabel, index % 2 ? styles.rose : styles.matcha)}>
              {group.label}
            </h3>
            <ChipList items={group.items} />
          </Card>
        ))}
      </div>

      {/* One block per line: wrapped lines hang-indent under their property, like an editor */}
      <pre className={styles.code} hidden={view !== "code"}>
        <code>
          <span className={styles.line}>
            <span className={styles.keyword}>const</span> simpi = {"{"}
          </span>
          {groups.map((group) => (
            <span key={group.key} className={cx(styles.line, styles.indent)}>
              <span className={styles.property}>{group.key}</span>: [
              {group.items.map((item, index) => (
                <span key={item}>
                  <span className={styles.string}>&quot;{item}&quot;</span>
                  {index < group.items.length - 1 && ", "}
                </span>
              ))}
              ],
            </span>
          ))}
          <span className={cx(styles.line, styles.indent)}>
            <span className={styles.property}>superpower</span>:{" "}
            <span className={styles.string}>&quot;{superpower}&quot;</span>,
          </span>
          <span className={styles.line}>
            {"} "}
            <span className={styles.keyword}>satisfies</span> Engineer;{" "}
            <span className={styles.comment}>{"// ✦ type-safe and cute"}</span>
          </span>
        </code>
      </pre>
    </>
  );
}
