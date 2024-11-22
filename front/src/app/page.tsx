"use client";
import Image from "next/image";
import styles from "./page.module.scss";
import About from "@/app/_sections/About/about";
import Skills from "@/app/_sections/Skills/skills";
import { RefObject, useEffect, useRef, useState } from "react";
import { SectionType } from "@/type/Section/Section.type";

export default function Home() {
  const [scrollHeight, setScrollHeight] = useState(0);
  const [intersectingSection, setIntersectingSection] = useState<SectionType[]>(
    []
  );
  const sectionRefs: Record<SectionType, RefObject<HTMLDivElement>> = {
    About: useRef<HTMLDivElement>(null),
    Skills: useRef<HTMLDivElement>(null),
    Projects: useRef<HTMLDivElement>(null),
    Contact: useRef<HTMLDivElement>(null),
  };

  useEffect(() => {
    window.scrollTo({ top: 0 });

    const getScrollY = () => {
      if (typeof window != "undefined") {
        setScrollHeight(window.scrollY);
      }
    };
    window.addEventListener("scroll", getScrollY);
    return () => {
      window.removeEventListener("scroll", getScrollY);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const sectionName = entry.target.getAttribute(
            "section-name"
          ) as SectionType;
          if (entry.isIntersecting) {
            setIntersectingSection((prevSection) => [
              ...prevSection,
              sectionName,
            ]);
          }

          if (entry.boundingClientRect.top + scrollHeight < scrollHeight) {
            setIntersectingSection((prevSection) =>
              prevSection.filter((section) => {
                return section === sectionName;
              })
            );
          }
        });
      },
      { threshold: 0.5 }
    );
    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => {
      Object.values(sectionRefs).forEach((ref) => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, [scrollHeight]);

  return (
    <div className={styles.page_container}>
      {
        <>
          <div
            className={`${styles.section} ${
              intersectingSection.includes("About") ? styles.intersect : null
            }`}
            ref={sectionRefs["About"]}
            section-name="About"
          >
            <About />
          </div>
          <div
            className={`${styles.section} ${
              intersectingSection.includes("Skills") ? styles.intersect : null
            }`}
            ref={sectionRefs["Skills"]}
            section-name="Skills"
          >
            <Skills />
          </div>
        </>
      }
    </div>
  );
}
