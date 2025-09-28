import {
  SkillsItemProps,
  TechStackColor,
  TechStackEnum,
} from "@/type/Skills/SkillsItem.type";
import styles from "./SkillsItem.module.scss";
import Chip from "@/components/Chip/Chip";
import Item from "@/components/Item/Item";
import { useState } from "react";
import { ChipVariantEnum } from "@/type/Chip/Chip.type";
import ProgressBar from "@/components/ProgressBar/ProgressBar";

export default function SkillsItem({ item }: { item: SkillsItemProps }) {
  const [isHover, setIsHover] = useState(false);
  const [isClick, setIsClick] = useState(false);
  const onHover = (isHover: boolean) => {
    setIsHover(isHover);
  };
  const onClick = () => {
    setIsClick(true);
  };
  function getEnumKey(value: TechStackEnum): keyof typeof TechStackEnum {
    const keys = Object.entries(TechStackEnum).find(
      ([_, val]) => val === value
    );
    return keys?.[0] as keyof typeof TechStackEnum;
  }
  return (
    <Item
      subtitle={item.type}
      content={
        <div className={styles.chip_wrapper}>
          <div
            className={`${styles.chip_container} ${
              isHover ? (isClick ? styles.click : styles.hover) : styles.leave
            }`}
          >
            {item.content.map((element, idx) => {
              return (
                <div className={styles.content} key={idx}>
                  <Chip
                    name={element.tech}
                    color={TechStackColor[getEnumKey(element.tech)]}
                    isDark={
                      element.tech === TechStackEnum.GITHUB ||
                      element.tech === TechStackEnum.ZUSTAND ||
                      element.tech === TechStackEnum.QUERY ||
                      element.tech === TechStackEnum.REDUX ||
                      element.tech === TechStackEnum.C_S ||
                      element.tech === TechStackEnum.TYPESCRIPT
                    }
                    variant={ChipVariantEnum.SMALL}
                  />
                  <ProgressBar progress={element.acquaint} />
                </div>
              );
            })}
          </div>
        </div>
      }
      onHover={onHover}
      onClick={onClick}
    />
  );
}
