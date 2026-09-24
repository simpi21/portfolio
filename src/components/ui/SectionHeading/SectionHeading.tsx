import type { ReactNode } from "react";
import styles from "./SectionHeading.module.css";

type SectionHeadingProps = {
  /** Section number, e.g. 1 → "01". */
  index: number;
  label: string;
  children: ReactNode;
};

/** Mono "// 01 · label" eyebrow plus a large display heading. */
export function SectionHeading({ index, label, children }: SectionHeadingProps) {
  return (
    <div className={`reveal ${styles.heading}`}>
      <p className="eyebrow">
        {"// "}
        {String(index).padStart(2, "0")} · {label}
      </p>
      <h2 className={`display ${styles.title}`}>{children}</h2>
    </div>
  );
}
