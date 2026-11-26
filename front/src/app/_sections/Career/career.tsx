"use client";
import styles from "./career.module.scss";
import sectionStyles from "@/components/Section/Section/section.module.scss";
import { careers } from "@/constants/contants.type";
import CareerItem from "@/components/Section/Career/CareerItem";

export default function Career() {
  return (
    <div className={styles.career}>
      <div className={styles.career_title}>
        <div className={styles.title_container}>
          <h1 className={sectionStyles.reveal}>Career</h1>
        </div>
      </div>

      <div className={styles.timeline}>
        {careers.map((item, idx) => (
          <CareerItem key={idx} item={item} index={idx} />
        ))}
      </div>
    </div>
  );
}
