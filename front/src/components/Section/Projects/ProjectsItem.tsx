import { ProjectsItemProps } from "@/type/Projects/ProjectsItem.type";
import styles from "./ProjectsItem.module.scss";
import Canvas from "@/components/Canvas/Canvas";
export default function ProjectsItem({ item }: { item: ProjectsItemProps }) {
  return (
    <div className={styles.item_container}>
      <h1 className={styles.item_subtitle}>{`${item.type}`}</h1>
      <div className={styles.item_content}>
        <div className={styles.project_preview}></div>
        <div className={styles.project_description}></div>
      </div>
    </div>
  );
}
