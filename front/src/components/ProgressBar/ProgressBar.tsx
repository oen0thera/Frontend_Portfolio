import { ProgressBarProps } from "@/type/ProgressBar/ProgressBar.type";
import styles from "./ProgressBar.module.scss";

export default function ProgressBar({ progress }: ProgressBarProps) {
  return (
    <div className={styles.progressBar_wrapper}>
      <div
        className={styles.progressBar}
        style={{ width: `${progress}%` }}
      >{`${progress}%`}</div>
    </div>
  );
}
