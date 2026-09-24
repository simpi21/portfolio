"use client";

import { useEffect, useState } from "react";
import styles from "./Contact.module.css";

type Status = "idle" | "copied" | "failed";

/** Copies the email address; the result is announced to screen readers too. */
export function CopyEmail({ email }: { email: string }) {
  const [status, setStatus] = useState<Status>("idle");

  // Reset the label a couple of seconds after copying.
  useEffect(() => {
    if (status === "idle") return;
    const timer = setTimeout(() => setStatus("idle"), 2200);
    return () => clearTimeout(timer);
  }, [status]);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setStatus("copied");
    } catch {
      setStatus("failed");
    }
  };

  const label = { idle: "Copy ⧉", copied: "Copied ♡", failed: "Copy failed" }[status];

  return (
    <>
      <button type="button" className={styles.copy} onClick={copy} data-status={status}>
        {label}
        <span className="visually-hidden"> email address</span>
      </button>
      <span role="status" className="visually-hidden">
        {status === "copied" && "Email address copied to clipboard"}
        {status === "failed" && "Couldn't copy — please select the email address instead"}
      </span>
    </>
  );
}
