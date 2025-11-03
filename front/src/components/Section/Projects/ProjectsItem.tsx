import { ProjectsItemProps } from "@/type/Projects/ProjectsItem.type";
import styles from "./ProjectsItem.module.scss";
import Image from "next/image";
import Canvas from "@/components/Canvas/Canvas";
import { useEffect, useState } from "react";
import useDispatcher from "@/app/utils/Dispatcher";
import select from "@/app/utils/Selector";
import { getProjectName, projects } from "@/constants/contants.type";
import Item from "@/components/Item/Item";
import Chip from "@/components/Chip/Chip";
import { TechStackColor, TechStackEnum } from "@/type/Skills/SkillsItem.type";
import { ChipVariantEnum } from "@/type/Chip/Chip.type";
import { ModalType } from "@/type/Modal/Modal.type";
export default function ProjectsItem({ item }: { item: ProjectsItemProps }) {
  const dispatch = useDispatcher();
  const [active, setActive] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const [isClick, setIsClick] = useState(false);
  const onHover = (isHover: boolean) => {
    setIsHover(isHover);
  };
  const onClick = () => {
    const click = () => {
      setIsClick(false);
    };
    setIsClick(true);
    setTimeout(click, 60);
  };
  const onLink = (event: React.MouseEvent) => {
    event.stopPropagation();
  };
  const modalState = select("modalState");
  const openModal = () => {
    const setOpenModal = () => {
      dispatch("setModalContent", {
        type: ModalType.TIMELINE,
        content: projects,
      });
      dispatch("setOpenModal", true);
    };
    setOpenModal();
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
  return (
    <Item
      subtitle={item.name === "Bemo" ? getProjectName(item.name) : item.name}
      content={
        <div
          className={`${styles.item_content} ${
            isHover
              ? isClick
                ? styles.click
                : styles.hover
              : active
              ? styles.hover
              : styles.leave
          }`}
        >
          <div className={styles.project_preview}>
            <Image fill src={item.preview} alt={"preview"} />
          </div>
          <div className={styles.project_description}>
            {
              <>
                <div className={styles.title}>
                  {getProjectName(item.name)}
                  <div className={styles.tech}>
                    {item.tech.map((tech, idx) => {
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
                </div>

                <div className={styles.description}>
                  {item.description}
                  {item.links && (
                    <div className={styles.link}>
                      {Object.entries(item.links).map((entries, idx) => {
                        const [key, value] = entries;
                        return (
                          <div key={idx}>
                            {`${
                              key === "repository"
                                ? "레포지토리"
                                : key === "production"
                                ? "배포 링크"
                                : "포트폴리오"
                            } : `}
                            <a href={value} onClick={onLink}>
                              {value}
                            </a>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              </>
            }
          </div>
        </div>
      }
      onClick={() => {
        openModal();
        onClick();
      }}
      onHover={onHover}
    />
  );
}
