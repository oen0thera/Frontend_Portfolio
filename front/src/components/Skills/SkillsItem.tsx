import {
  SkillsItemProps,
  TechStackColor,
  TechStackEnum,
} from "@/type/Skills/SkillsItem.type";
import styles from "./SkillsItem.module.scss";
import Chip from "@/components/Chip/Chip";

export default function SkillsItem({ item }: { item: SkillsItemProps }) {
  function getEnumKey(value: TechStackEnum): keyof typeof TechStackEnum {
    const keys = Object.entries(TechStackEnum).find(
      ([_, val]) => val === value
    );
    return keys?.[0] as keyof typeof TechStackEnum;
  }
  return (
    <div className={styles.item_container}>
      <h1 className={styles.item_subtitle}>{`${item.type}`}</h1>
      <div className={styles.chip_wrapper}>
        <div className={styles.chip_container}>
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
    </div>
  );
}
