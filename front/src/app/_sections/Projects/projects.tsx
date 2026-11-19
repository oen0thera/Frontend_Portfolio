"use client";
import styles from "./projects.module.scss";
import sectionStyles from "@/components/Section/Section/section.module.scss";
import { projects } from "@/constants/contants.type";
import ProjectsItem from "@/components/Section/Projects/ProjectsItem";

export default function Projects() {
  return (
    <div className={styles.projects}>
      <div className={styles.projects_title}>
        <div className={styles.title_container}>
          <h1 className={sectionStyles.reveal}>Projects</h1>
        </div>
      </div>

      <div className={styles.projects_container}>
        {projects.map((element, idx) => {
          return (
            <div key={idx} className={sectionStyles.reveal}>
              <ProjectsItem item={element} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
