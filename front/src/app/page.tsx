"use client";
import Image from "next/image";
import styles from "./page.module.scss";
import About from "@/app/_sections/About/about";
import Skills from "@/app/_sections/Skills/skills";
import { RefObject, useEffect, useRef, useState } from "react";
import { SectionType } from "@/type/Section/Section.type";
import select from "@/app/utils/Selector";
import Section from "@/components/Section/Section/Section";
import useDispatcher from "@/app/utils/Dispatcher";
import Projects from "@/app/_sections/Projects/projects";

export default function Home() {
  const [scrollHeight, setScrollHeight] = useState(0);
  const [scrolling, setScrolling] = useState(false);
  const [intersectingSection, setIntersectingSection] = useState<SectionType[]>(
    []
  );
  const section = select("selectedSection");
  const dispatch = useDispatcher();
  const sectionRefs: Record<SectionType, RefObject<HTMLDivElement>> = {
    About: useRef<HTMLDivElement>(null),
    Skills: useRef<HTMLDivElement>(null),
    Projects: useRef<HTMLDivElement>(null),
    Contact: useRef<HTMLDivElement>(null),
  };
  useEffect(() => {
    const getScrollY = () => {
      if (typeof window != "undefined") {
        setScrollHeight(window.scrollY);
      }
    };
    window.addEventListener("scroll", getScrollY);
    setIntersectingSection(["About"]);
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
            setIntersectingSection((prevSection) => {
              const setSection = new Set(prevSection);
              setSection.add(sectionName);
              return Array.from(setSection);
            });
            console.log(sectionName);

            dispatch("setCurrSection", sectionName);
          }
          // console.log(
          //   "(",
          //   entry.boundingClientRect.top,
          //   scrollHeight,
          //   150 * window.innerHeight,
          //   ")",
          //   "(",
          //   scrollHeight,
          //   window.innerHeight,
          //   ")",
          //   sectionName,
          //   entry.boundingClientRect.top +
          //     scrollHeight +
          //     (150 * window.innerHeight) / 1080,
          //   scrollHeight + window.innerHeight
          // );
          if (
            !scrolling &&
            entry.boundingClientRect.top + scrollHeight + 150 >
              scrollHeight + window.innerHeight
          ) {
            setScrolling(true);
            setIntersectingSection((prevSection) => {
              if (sectionName !== "About") {
                return prevSection.filter((section) => {
                  return section !== sectionName;
                });
              } else {
                return prevSection;
              }
            });
          }
        });
      },
      { threshold: 0.05 }
    );
    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => {
      Object.values(sectionRefs).forEach((ref) => {
        if (ref.current) observer.unobserve(ref.current);
        setScrolling(false);
      });
    };
  }, [scrollHeight]);

  return (
    <div className={styles.page_container}>
      {
        <>
          <Section
            sections={[<About />, <Skills />, <Projects />]}
            intersectingSections={intersectingSection}
            sectionRefs={sectionRefs}
          />
        </>
      }
    </div>
  );
}
