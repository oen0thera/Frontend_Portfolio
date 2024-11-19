import SkillsItem from "@/components/Skills/SkillsItem";
import styles from "./skills.module.scss";
import {
  SkillsItemContent,
  SkillsItemType,
  TechStackEnum,
} from "@/type/Skills/SkillsItem.type";

export default function Skills() {
  const SkillsFamiliar: SkillsItemContent = [
    TechStackEnum.NEXT,
    TechStackEnum.REACT,
    TechStackEnum.HTML,
    TechStackEnum.CSS,
    TechStackEnum.SASS,
    TechStackEnum.GITHUB,
    TechStackEnum.GITHUB_ACTIONS,
    TechStackEnum.JAVASCRIPT,
    TechStackEnum.TYPESCRIPT,
    TechStackEnum.ZUSTAND,
  ];
  const SkillsExperienced: SkillsItemContent = [
    TechStackEnum.C_S,
    TechStackEnum.JENKINS,
    TechStackEnum.MYSQL,
    TechStackEnum.QUERY,
    TechStackEnum.REDUX,
    TechStackEnum.STYLED_COMPONENTS,
    TechStackEnum.TAILWIND,
    TechStackEnum.UNITY,
    TechStackEnum.VERCEL,
    TechStackEnum.WEBGL,
  ];

  return (
    <div className={styles.skills}>
      <div className={styles.skills_title}>
        <div className={styles.title_container}>
          <h1>Skills</h1>
        </div>
      </div>

      <div className={styles.skills_container}>
        <SkillsItem
          item={{ type: SkillsItemType.FAMILIAR, content: SkillsFamiliar }}
        />
        <SkillsItem
          item={{
            type: SkillsItemType.EXPERIENCED,
            content: SkillsExperienced,
          }}
        />
      </div>
    </div>
  );
}
