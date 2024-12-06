"use client";
import { useEffect, useState } from "react";
import styles from "./Timeline.module.scss";
import { TimelineProps } from "@/type/Timeline/Timeline.type";
import { ImInsertTemplate } from "react-icons/im";
import { projects } from "@/constants/contants.type";

export default function Timeline({ project }: { project: TimelineProps }) {
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

  const convertDate = (date: Date) => {
    console.log(date);
    return date.getMonth() < 1
      ? `${date.getFullYear() - 1}.${12}`
      : `${date.getFullYear()}.${
          date.getMonth() < 10 ? `0${date.getMonth()}` : date.getMonth()
        }`;
  };

  return (
    <div className={styles.timeline_container}>
      <div className={styles.timeline_head}></div>
      <div
        className={`${styles.timeline} ${separate ? styles.lengthen : null}`}
      >
        {projects.map((project, idx) => {
          if (idx % 2 === 0) {
            return (
              <div
                className={`${styles.branches_left} ${
                  growBranches ? styles.grow : null
                }`}
                key={idx}
              >
                <div className={styles.branch_point}>
                  <div className={styles.time}>
                    {convertDate(new Date(project.time))}
                  </div>
                </div>
                <div className={styles.branch_content}>{project.name}</div>
              </div>
            );
          } else {
            return (
              <div
                className={`${styles.branches_right} ${
                  growBranches ? styles.grow : null
                }`}
                key={idx}
              >
                <div>
                  <div className={styles.branch_content}>{project.name}</div>
                </div>
                <div className={styles.branch_point}>
                  <div className={styles.time}>
                    {convertDate(new Date(project.time))}
                  </div>
                </div>
              </div>
            );
          }
        })}
        {/* <div
          className={`${styles.branches_left} ${
            growBranches ? styles.grow : null
          }`}
        >
          <div className={styles.branch_point}>
            <div className={styles.time}>{}</div>
          </div>
          <div className={styles.branch_content}>(주)애드원 QA 작업</div>
        </div>
        <div
          className={`${styles.branches_right} ${
            growBranches ? styles.grow : null
          }`}
        >
          <div>
            <div className={styles.branch_content}>{`웹비즈크래프트`}</div>
            <div className={styles.branch_content}>{`(Webbizcraft)`}</div>
          </div>

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
        </div> */}
      </div>
      <div className={styles.timeline_head}></div>
    </div>
  );
}
