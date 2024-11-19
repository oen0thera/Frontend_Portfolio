import { ChipProps } from "@/type/Chip/Chip.type";
import styles from "./Chip.module.scss";

export default function Chip({ name, color, isDark }: ChipProps) {
  return (
    <div
      className={styles.chip}
      style={{ backgroundColor: color, color: isDark ? "white" : "black" }}
    >
      {name}
    </div>
  );
}
