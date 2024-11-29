"use client";
import dispatch from "@/app/utils/Dispatcher";
import styles from "./GNB.module.scss";
import select from "@/app/utils/Selector";
import { SectionType } from "@/type/Section/Section.type";
import useDispatcher from "@/app/utils/Dispatcher";
import { useEffect, useState } from "react";
export default function GNB() {
  const navList: SectionType[] = ["About", "Skills", "Projects", "Contact"];
  const dispatch = useDispatcher();
  const currSection = select("currSection");
  const setSection = (nav: SectionType) => {
    dispatch("setScroll", nav);
  };

  return (
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
  );
}
