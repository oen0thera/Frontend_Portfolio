import { ProgressBarProps } from "@/type/ProgressBar/ProgressBar.type";
import styles from "./ProgressBar.module.scss";
import { useEffect, useRef } from "react";
import select from "@/app/utils/Selector";

export default function ProgressBar({ progress }: ProgressBarProps) {
  const currSection = select("currSection");
  const progressRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (currSection === "Skills") {
      const startTime = performance.now();
      const updateProgress = (currTime: number) => {
        const elapsed = currTime - startTime;
        const progressed = Math.min(elapsed / 1000, 1);
        const currProgress = Math.floor(progressed * progress);
        console.log(currProgress);

        if (progressRef.current) {
          progressRef.current.style.width = `${currProgress}%`;
          progressRef.current.textContent = `${currProgress}%`;
        }
        if (progressed < 1) {
          requestAnimationFrame(updateProgress);
        }
      };
      requestAnimationFrame(updateProgress);
    }
  }, [currSection]);

  return (
    <div className={styles.progressBar_wrapper}>
      <div
        className={styles.progressBar}
        ref={progressRef}
      >{`${progress}%`}</div>
    </div>
  );
}
