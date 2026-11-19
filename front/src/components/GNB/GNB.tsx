"use client";
import styles from "./GNB.module.scss";
import select from "@/app/utils/Selector";
import { SectionType } from "@/type/Section/Section.type";
import useDispatcher from "@/app/utils/Dispatcher";

const sectionMeta: Record<SectionType, { no: string; label: string }> = {
  About: { no: "01", label: "Hello" },
  Skills: { no: "02", label: "Capabilities" },
  Projects: { no: "03", label: "Works" },
  Contact: { no: "04", label: "Get in touch" },
};

export default function GNB() {
  const navList: SectionType[] = ["About", "Skills", "Projects", "Contact"];
  const dispatch = useDispatcher();
  const currSection = select("currSection") as SectionType | null;
  const setSection = (nav: SectionType) => {
    dispatch("setScroll", nav);
  };

  const activeMeta = currSection ? sectionMeta[currSection] : null;

  return (
    <>
      <div className={styles.GNB}>
        <div className={styles.GNB_title}>
          <h1>{`Kim WonJin`}</h1>
          <h3>{`@oen0thera`}</h3>
        </div>
        <div className={styles.nav_container}>
          <ul className={styles.nav_ul}>
            {navList.map((nav, idx) => {
              return (
                <li
                  key={idx}
                  className={`${styles.nav} ${
                    currSection === nav ? styles.active : null
                  }`}
                  onClick={() => setSection(nav)}
                >{`${nav}`}</li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className={styles.info_bar}>
        <div className={styles.info_left}>
          {activeMeta && (
            <span className={styles.info_section}>
              <b>{activeMeta.no}</b> {currSection}
            </span>
          )}
        </div>
        <div className={styles.info_center}>
          {activeMeta ? activeMeta.label : "Scroll to explore"}
        </div>
        <div className={styles.info_right}>2026</div>
      </div>
    </>
  );
}
