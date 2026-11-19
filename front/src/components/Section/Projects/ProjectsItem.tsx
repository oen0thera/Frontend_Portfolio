import { ProjectsItemProps } from "@/type/Projects/ProjectsItem.type";
import styles from "./ProjectsItem.module.scss";
import Image from "next/image";
import { useEffect, useState } from "react";
import useDispatcher from "@/app/utils/Dispatcher";
import select from "@/app/utils/Selector";
import { getProjectName, projects } from "@/constants/contants.type";
import Chip from "@/components/Chip/Chip";
import { TechStackColor, TechStackEnum } from "@/type/Skills/SkillsItem.type";
import { ChipVariantEnum } from "@/type/Chip/Chip.type";
import { ModalType } from "@/type/Modal/Modal.type";

export default function ProjectsItem({ item }: { item: ProjectsItemProps }) {
  const dispatch = useDispatcher();
  const [active, setActive] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const onHover = (isHover: boolean) => {
    setIsHover(isHover);
  };
  const onLink = (event: React.MouseEvent) => {
    event.stopPropagation();
  };
  const modalState = select("modalState");
  const openModal = () => {
    dispatch("setModalContent", {
      type: ModalType.TIMELINE,
      content: projects,
    });
    dispatch("setOpenModal", true);
    setActive(true);
  };
  function getEnumKey(value: TechStackEnum): keyof typeof TechStackEnum {
    const keys = Object.entries(TechStackEnum).find(
      ([_, val]) => val === value
    );
    return keys?.[0] as keyof typeof TechStackEnum;
  }

  useEffect(() => {
    if (!modalState) {
      setActive(false);
    }
  }, [modalState]);

  const projectDate = new Date(item.time);
  const dateLabel = `${projectDate.getFullYear()}.${
    projectDate.getMonth() < 10
      ? `0${projectDate.getMonth()}`
      : projectDate.getMonth()
  }`;

  return (
    <div
      className={`${styles.project_card} ${isHover ? styles.hover : ""} ${
        active ? styles.active : ""
      }`}
      onClick={openModal}
      onMouseEnter={() => onHover(true)}
      onMouseLeave={() => onHover(false)}
    >
      <div className={styles.thumbnail}>
        <Image fill src={item.preview} alt={item.name} style={{ objectFit: "cover" }} />
      </div>
      <div className={styles.content}>
        <div className={styles.header}>
          <h3 className={styles.title}>{getProjectName(item.name)}</h3>
          <span className={styles.date}>{dateLabel}</span>
        </div>
        <div className={styles.tech}>
          {item.tech.slice(0, 6).map((tech, idx) => {
            return (
              <Chip
                key={idx}
                name={tech}
                color={TechStackColor[getEnumKey(tech)]}
                isDark={
                  tech === TechStackEnum.GITHUB ||
                  tech === TechStackEnum.ZUSTAND ||
                  tech === TechStackEnum.QUERY ||
                  tech === TechStackEnum.REDUX ||
                  tech === TechStackEnum.C_S ||
                  tech === TechStackEnum.TYPESCRIPT ||
                  tech === TechStackEnum.LANGCHAIN
                }
                variant={ChipVariantEnum.SMALL}
              />
            );
          })}
        </div>
        <p className={styles.description}>{item.description}</p>
        {item.links && (
          <div className={styles.links}>
            {Object.entries(item.links).map((entries, idx) => {
              const [key, value] = entries;
              return (
                <span key={idx} className={styles.link}>
                  <a href={value} onClick={onLink}>
                    {key === "repository"
                      ? "Repository"
                      : key === "production"
                      ? "Production"
                      : "Portfolio"}
                  </a>
                </span>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
