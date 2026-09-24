"use client";

import { useEffect, useState } from "react";
import styles from "./About.module.css";

const TIME_ZONE = "Asia/Kolkata";
const formatter = new Intl.DateTimeFormat("en-GB", {
  timeZone: TIME_ZONE,
  hour: "2-digit",
  minute: "2-digit",
  hourCycle: "h23",
});

function statusFor(hour: number) {
  if (hour >= 9 && hour < 19) return "probably shipping code ✦";
  if (hour >= 19) return "probably tinkering ✧";
  return "probably asleep ☾";
}

/** Live Bengaluru time. Rendered as a placeholder at build time, filled in on the client. */
export function LocalClock() {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    const tick = () => setNow(new Date());
    const first = setTimeout(tick, 0);
    const interval = setInterval(tick, 15_000);
    return () => {
      clearTimeout(first);
      clearInterval(interval);
    };
  }, []);

  const time = now ? formatter.format(now) : "--:--";
  const hour = Number(time.slice(0, 2));

  return (
    <>
      <p className={`display ${styles.clock}`}>{time}</p>
      <p className={styles.small}>IST{now ? ` · ${statusFor(hour)}` : " · UTC+5:30"}</p>
    </>
  );
}
