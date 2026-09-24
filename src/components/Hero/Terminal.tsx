"use client";

import { useEffect, useState } from "react";
import { cx } from "@/lib/cx";
import type { TerminalLine } from "@/types/content";
import styles from "./Terminal.module.css";

type TerminalProps = {
  lines: TerminalLine[];
  stickers: { top: string; bottom: string };
};

/** How far the typing has got: all lines before `line` are complete. */
type Progress = { line: number; chars: number };

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
const lineLength = (line: TerminalLine) =>
  line.parts.reduce((total, part) => total + part.text.length, 0);

/** Decorative terminal that types its lines once. The same facts live in the About section. */
export function Terminal({ lines, stickers }: TerminalProps) {
  const [progress, setProgress] = useState<Progress>({ line: 0, chars: 0 });

  useEffect(() => {
    let cancelled = false;

    (async () => {
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      await sleep(reduceMotion ? 0 : 500);

      for (let index = 0; index < lines.length && !reduceMotion; index++) {
        const line = lines[index];
        if (line.kind === "command") {
          for (let chars = 1; chars <= lineLength(line); chars++) {
            if (cancelled) return;
            setProgress({ line: index, chars });
            await sleep(28 + Math.random() * 30);
          }
          await sleep(300);
        } else {
          if (cancelled) return;
          setProgress({ line: index, chars: lineLength(line) });
          await sleep(70);
        }
      }

      if (!cancelled) setProgress({ line: lines.length, chars: 0 });
    })();

    return () => {
      cancelled = true;
    };
  }, [lines]);

  const done = progress.line >= lines.length;

  return (
    <div className={styles.wrap} aria-hidden="true">
      <span className={`${styles.sticker} ${styles.stickerTop}`}>{stickers.top}</span>
      <div className={styles.terminal}>
        <div className={styles.bar}>
          <i />
          <i />
          <i />
          <span>simpi@portfolio: ~</span>
        </div>
        {/* Every line is always rendered (untyped text is invisible), so the terminal
            has its final height from the first paint and never pushes the page down. */}
        <div className={styles.body}>
          {lines.map((line, index) => {
            const isCurrent = !done && index === progress.line;
            const typed = done || index < progress.line ? Infinity : isCurrent ? progress.chars : 0;
            return (
              <div key={index}>
                {line.kind === "command" && (
                  <span className={cx(styles.prompt, typed === 0 && !isCurrent && styles.pending)}>
                    ❯{" "}
                  </span>
                )}
                {renderLine(line, typed, isCurrent)}
              </div>
            );
          })}
          <div className={done ? undefined : styles.pending}>
            <span className={styles.prompt}>❯ </span>
            {done && <Caret />}
          </div>
        </div>
      </div>
      <span className={`${styles.sticker} ${styles.stickerBottom}`}>{stickers.bottom}</span>
    </div>
  );
}

const Caret = () => <span className={styles.caret} />;

/** Renders a line's coloured parts: the first `limit` characters visible, the rest
    invisible but still taking up space. The caret sits at the typing position. */
function renderLine(line: TerminalLine, limit: number, withCaret: boolean) {
  let remaining = limit;
  let caretPlaced = !withCaret;

  const parts = line.parts.map((part, index) => {
    const shown = part.text.slice(0, Math.max(0, remaining));
    const hidden = part.text.slice(shown.length);
    remaining -= part.text.length;
    const caretHere = !caretPlaced && hidden.length > 0;
    if (caretHere) caretPlaced = true;

    return (
      <span key={index} className={part.tone ? styles[part.tone] : undefined}>
        {shown}
        {caretHere && <Caret />}
        {hidden && <span className={styles.pending}>{hidden}</span>}
      </span>
    );
  });

  return (
    <>
      {parts}
      {!caretPlaced && <Caret />}
    </>
  );
}
