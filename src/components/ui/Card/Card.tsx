import type { ComponentPropsWithoutRef } from "react";
import { cx } from "@/lib/cx";
import styles from "./Card.module.css";

type CardProps = ComponentPropsWithoutRef<"article"> & {
  /** Colour of the flat offset shadow. */
  tone?: "matcha" | "rose";
};

/** Neo-brutalist surface: crisp border, flat offset shadow, lifts on hover. */
export function Card({ tone = "matcha", className, ...props }: CardProps) {
  return <article className={cx(styles.card, styles[tone], className)} {...props} />;
}
