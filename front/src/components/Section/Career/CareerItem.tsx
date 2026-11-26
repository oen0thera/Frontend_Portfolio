"use client";
import styles from "./CareerItem.module.scss";
import sectionStyles from "@/components/Section/Section/section.module.scss";
import { CareerItemProps } from "@/type/Career/CareerItem.type";

interface Props {
  item: CareerItemProps;
  index: number;
}

export default function CareerItem({ item, index }: Props) {
  const isLeft = index % 2 === 0;

  return (
    <div
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
          <span className={styles.card_period}>{item.period}</span>
          <h3 className={styles.company}>{item.company}</h3>
          <span className={styles.position}>{item.position}</span>
        </div>
        <p className={styles.description}>{item.description}</p>
      </div>
    </div>
  );
}
