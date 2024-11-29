import { ProjectsItemProps } from "@/type/Projects/ProjectsItem.type";
import styles from "./ProjectsItem.module.scss";
import Image from "next/image";
import Canvas from "@/components/Canvas/Canvas";
import { useEffect, useState } from "react";
import useDispatcher from "@/app/utils/Dispatcher";
export default function ProjectsItem({ item }: { item: ProjectsItemProps }) {
  const dispatch = useDispatcher();
  const openModal = () => {
    dispatch("setOpenModal", true);
  };
  return (
    <div className={styles.item_container}>
      <h1 className={styles.item_subtitle}>{`${item.name}`}</h1>
      <div className={styles.item_content}>
        <div className={styles.project_preview}>
          <Image fill src={item.preview} alt={"preview"} />
        </div>
        <div className={styles.project_description} onClick={openModal}>
          {<div>{item.name}</div>}
        </div>
      </div>
    </div>
  );
}
