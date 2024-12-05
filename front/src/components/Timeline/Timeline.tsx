"use client";
import { useEffect, useState } from "react";
import styles from "./Timeline.module.scss";

export default function Timeline() {
  const [separate, setSeparate] = useState(false);
  const [growBranches, setGrowBranches] = useState(false);
  useEffect(() => {
    const sepTime = () => {
      setSeparate(true);
    };

    setTimeout(sepTime, 1000);
  }, []);
  useEffect(() => {
    const growBranches = () => {
      setGrowBranches(true);
    };
    setTimeout(growBranches, 2000);
    console.log(growBranches);
  }, [separate]);
  return (
    <div className={styles.timeline_container}>
      <div className={styles.timeline_head}></div>
      <div
        className={`${styles.timeline} ${separate ? styles.lengthen : null}`}
      >
        <div
          className={`${styles.branches_left} ${
            growBranches ? styles.grow : null
          }`}
        >
          <div className={styles.branch_point}>
            <div className={styles.time}>{`2023.12`}</div>
          </div>
          <div className={styles.branch_content}>(주)애드원 QA 작업</div>
        </div>
        <div
          className={`${styles.branches_right} ${
            growBranches ? styles.grow : null
          }`}
        >
          <div className={styles.branch_content}>웹비즈크래프트</div>

          <div className={styles.branch_point}>
            <div className={styles.time}>{`2024.03`}</div>
          </div>
        </div>
        <div
          className={`${styles.branches_left} ${
            growBranches ? styles.grow : null
          }`}
        >
          <div className={styles.branch_point}>
            <div className={styles.time}>{`2024.06`}</div>
          </div>
          <div className={styles.branch_content}>커먼플러스</div>
        </div>
      </div>
      <div className={styles.timeline_head}></div>
    </div>
  );
}
