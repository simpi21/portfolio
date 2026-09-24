import type { YearMonth } from "@/types/content";

const monthFormatter = new Intl.DateTimeFormat("en-US", {
  month: "short",
  year: "numeric",
  timeZone: "UTC",
});

function parse(value: YearMonth) {
  const [year, month] = value.split("-").map(Number);
  return { year, month };
}

/** "2025-05" → "May 2025" */
export function formatMonth(value: YearMonth) {
  const { year, month } = parse(value);
  return monthFormatter.format(Date.UTC(year, month - 1, 1));
}

/** The current month, used for roles without an end date. Evaluated at build time. */
export function currentMonth(): YearMonth {
  const now = new Date();
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}` as YearMonth;
}

/** Whole months from start to end, counting both ends (matches LinkedIn). */
export function monthsBetween(start: YearMonth, end: YearMonth) {
  const a = parse(start);
  const b = parse(end);
  return (b.year - a.year) * 12 + (b.month - a.month) + 1;
}

/** 17 → "1 yr 5 mos", 12 → "1 yr", 8 → "8 mos" */
export function formatDuration(months: number) {
  const years = Math.floor(months / 12);
  const rest = months % 12;
  const parts: string[] = [];
  if (years) parts.push(`${years} ${years === 1 ? "yr" : "yrs"}`);
  if (rest) parts.push(`${rest} ${rest === 1 ? "mo" : "mos"}`);
  return parts.join(" ");
}
