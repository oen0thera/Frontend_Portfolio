import { ChipProps, ChipVariantEnum } from "@/type/Chip/Chip.type";
import styles from "./Chip.module.scss";

export default function Chip({ name, color, isDark, variant }: ChipProps) {
  return (
    <div
      className={`${styles.chip} ${
        variant === ChipVariantEnum.SMALL ? styles.small : null
      }`}
      style={{ backgroundColor: color, color: isDark ? "white" : "black" }}
    >
      {name}
    </div>
  );
}
