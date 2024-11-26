import styles from "./projects.module.scss";

export default function Projects() {
  return (
    <div className={styles.projects}>
      <div className={styles.projects_title}>
        <div className={styles.title_container}>
          <h1>Projects</h1>
        </div>
      </div>

      <div className={styles.projects_container}></div>
    </div>
  );
}
