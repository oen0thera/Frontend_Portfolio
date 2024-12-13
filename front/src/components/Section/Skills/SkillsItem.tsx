import {
  SkillsItemProps,
  TechStackColor,
  TechStackEnum,
} from "@/type/Skills/SkillsItem.type";
import styles from "./SkillsItem.module.scss";
import Chip from "@/components/Chip/Chip";
import Item from "@/components/Item/Item";
import { useState } from "react";

export default function SkillsItem({ item }: { item: SkillsItemProps }) {
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
                <Chip
                  key={idx}
                  name={element}
                  color={TechStackColor[getEnumKey(element)]}
                  isDark={
                    element === TechStackEnum.GITHUB ||
                    element === TechStackEnum.ZUSTAND ||
                    element === TechStackEnum.QUERY
                  }
                />
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
