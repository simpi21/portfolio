import type { ComponentPropsWithoutRef } from "react";
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
  const classes = [styles.button, styles[variant], styles[size], className]
    .filter(Boolean)
    .join(" ");

  return (
    <a className={classes} {...props}>
      {children}
    </a>
  );
}
