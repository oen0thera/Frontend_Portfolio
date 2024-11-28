import Canvas from "@/components/Canvas/Canvas";
import styles from "./projects.module.scss";
import ProjectsItem from "@/components/Section/Projects/ProjectsItem";

export default function Projects() {
  return (
    <div className={styles.projects}>
      <div className={styles.projects_title}>
        <div className={styles.title_container}>
          <h1>Projects</h1>
        </div>
      </div>

      <div className={styles.projects_container}>
        <ProjectsItem item={{ type: "" }} />
      </div>
    </div>
  );
}
