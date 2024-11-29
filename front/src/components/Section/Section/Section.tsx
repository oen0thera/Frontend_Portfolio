"use client";
import {
  SectionList,
  SectionProps,
  SectionType,
} from "@/type/Section/Section.type";
import styles from "./section.module.scss";
import { useEffect } from "react";
import select from "@/app/utils/Selector";

export default function Section({
  sections,
  intersectingSections,
  sectionRefs,
}: SectionProps) {
  const section = select("selectedSection") as SectionType;

  useEffect(() => {
    const scrollTo = (target: SectionType | null) => {
      if (!target) {
        window.scrollTo({ top: 0 });
        return;
      }
      if (sectionRefs[target].current) {
        if (target === "About") {
          window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
          window.scrollTo({
            top: sectionRefs[target].current.offsetTop - 150,
            behavior: "smooth",
          });
        }
      }
    };
    scrollTo(section);
  }, [section]);
  return sections.map((section, idx) => {
    return (
      <div key={idx}>
        <div
          className={`${styles.section} ${
            intersectingSections.includes(SectionList[idx])
              ? styles.intersect
              : null
          }`}
          ref={sectionRefs[SectionList[idx]]}
          section-name={SectionList[idx]}
        >
          {section}
        </div>
      </div>
    );
  });
}
