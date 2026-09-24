import type { ComponentPropsWithoutRef } from "react";
import { cx } from "@/lib/cx";
import styles from "./Button.module.css";

type ButtonProps = ComponentPropsWithoutRef<"a"> & {
  variant?: "primary" | "ghost";
  size?: "sm" | "md";
};

/** A link styled as a neo-brutalist button: lifts on hover, presses on click. */
export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <a className={cx(styles.button, styles[variant], styles[size], className)} {...props}>
      {children}
    </a>
  );
}
