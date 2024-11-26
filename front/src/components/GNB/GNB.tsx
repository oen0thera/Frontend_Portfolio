"use client";
import dispatch from "@/app/utils/Dispatcher";
import styles from "./GNB.module.scss";
import select from "@/app/utils/Selector";
import { SectionType } from "@/type/Section/Section.type";
import useDispatcher from "@/app/utils/Dispatcher";
export default function GNB() {
  const navList: SectionType[] = ["About", "Skills", "Projects", "Contact"];
  const dispatch = useDispatcher();
  const selection = select("selectedSection");
  const scrollTo = (nav: SectionType) => {
    console.log(selection);
    dispatch("setScroll", nav);
  };

  return (
    <div className={styles.GNB}>
      <div className={styles.GNB_title}>
        <h1>{`Kim WonJin`}</h1>
        <h3>{`@oen0thera`}</h3>
      </div>
      <div className={styles.nav_container}>
        <ul>
          {navList.map((nav, idx) => {
            return <li key={idx} onClick={() => scrollTo(nav)}>{`${nav}`}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}
