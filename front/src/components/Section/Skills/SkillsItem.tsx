import {
  SkillsItemProps,
  SkillsItemType,
} from "@/type/Skills/SkillsItem.type";
import styles from "./SkillsItem.module.scss";
import { useEffect, useState } from "react";
import select from "@/app/utils/Selector";

export default function SkillsItem({ item }: { item: SkillsItemProps }) {
  const currSection = select("currSection");
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    if (currSection === "Skills" && !animated) {
      setAnimated(true);
    }
  }, [currSection, animated]);

  const isFamiliar = item.type === SkillsItemType.FAMILIAR;

  return (
    <div className={styles.skills_group}>
      <h4
        className={`${styles.group_title} ${
          isFamiliar ? styles.familiar : styles.experienced
        }`}
      >
        {isFamiliar ? "FAMILIAR" : "EXPERIENCED"}
      </h4>
      <div className={styles.skills_list}>
        {item.content.map((element, idx) => {
          return (
            <div className={styles.skill_row} key={idx}>
              <span className={styles.skill_name}>{element.tech}</span>
              <div className={styles.progress_track}>
                <div
                  className={`${styles.progress_fill} ${
                    isFamiliar ? styles.fill_familiar : styles.fill_experienced
                  }`}
                  style={{ width: animated ? `${element.acquaint}%` : "0%" }}
                />
              </div>
              <span className={styles.skill_percent}>{element.acquaint}%</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
