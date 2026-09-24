"use client";

import { useEffect, useRef, useState } from "react";
import type { NavItem, Resume } from "@/types/content";
import styles from "./MobileMenu.module.css";

type MobileMenuProps = {
  items: NavItem[];
  resume?: Resume;
};

export function MobileMenu({ items, resume }: MobileMenuProps) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  // While open: Escape closes (and returns focus), clicking outside closes.
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    const onPointerDown = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <div ref={rootRef} className={styles.root}>
      <button
        ref={toggleRef}
        type="button"
        className={styles.toggle}
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((value) => !value)}
      >
        <span className={styles.icon} data-open={open} aria-hidden="true" />
      </button>

      <ul id="mobile-menu" className={styles.panel} hidden={!open}>
        {items.map((item) => (
          <li key={item.href}>
            <a href={item.href} onClick={close}>
              {item.label}
            </a>
          </li>
        ))}
        {resume && (
          <li>
            <a href={resume.href} download={resume.fileName} onClick={close}>
              Résumé ↓
            </a>
          </li>
        )}
      </ul>
    </div>
  );
}
