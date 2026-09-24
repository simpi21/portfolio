import { cx } from "@/lib/cx";
import styles from "./ChipList.module.css";

type ChipListProps = {
  items: string[];
  className?: string;
};

/** Pill tags; dot colours alternate matcha / rose. */
export function ChipList({ items, className }: ChipListProps) {
  return (
    <ul className={cx(styles.list, className)}>
      {items.map((item, index) => (
        <li key={item} className={cx(styles.chip, index % 2 ? styles.rose : styles.matcha)}>
          {item}
        </li>
      ))}
    </ul>
  );
}
