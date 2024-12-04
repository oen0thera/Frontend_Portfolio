import { ProjectsItemProps } from "@/type/Projects/ProjectsItem.type";
import styles from "./ProjectsItem.module.scss";
import Image from "next/image";
import Canvas from "@/components/Canvas/Canvas";
import { useEffect, useState } from "react";
import useDispatcher from "@/app/utils/Dispatcher";
import select from "@/app/utils/Selector";
export default function ProjectsItem({ item }: { item: ProjectsItemProps }) {
  const dispatch = useDispatcher();
  const [active, setActive] = useState(false);
  const modalState = select("modalState");
  const openModal = () => {
    const setOpenModal = () => {
      dispatch("setOpenModal", true);
    };
    setOpenModal();
    setActive(true);
  };

  useEffect(() => {
    if (!modalState) {
      setActive(false);
    }
  }, [modalState]);
  return (
    <div className={styles.item_container} onClick={openModal}>
      <h1 className={styles.item_subtitle}>{`${item.name}`}</h1>
      <div
        className={`${styles.item_content} ${active ? styles.active : null}`}
      >
        <div className={styles.project_preview}>
          <Image fill src={item.preview} alt={"preview"} />
        </div>
        <div className={styles.project_description}>
          {<div>{item.name}</div>}
        </div>
      </div>
    </div>
  );
}
