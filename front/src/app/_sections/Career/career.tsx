"use client";
import styles from "./career.module.scss";
import sectionStyles from "@/components/Section/Section/section.module.scss";
import { careers } from "@/constants/contants.type";

export default function Career() {
  return (
    <div className={styles.career}>
      <div className={styles.career_title}>
        <div className={styles.title_container}>
          <h1 className={sectionStyles.reveal}>Career</h1>
        </div>
      </div>

      <div className={styles.timeline}>
        {careers.map((item, idx) => {
          const isLeft = idx % 2 === 0;
          return (
            <div
              key={idx}
              className={`${styles.timeline_item} ${
                isLeft ? styles.left : styles.right
              } ${sectionStyles.reveal}`}
            >
              <div className={styles.timeline_node}>
                <div className={styles.node_dot} />
                <span className={styles.node_period}>{item.period}</span>
              </div>
              <div className={styles.timeline_card}>
                <div className={styles.card_header}>
                  <h3 className={styles.company}>{item.company}</h3>
                  <span className={styles.position}>{item.position}</span>
                </div>
                <p className={styles.description}>{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
