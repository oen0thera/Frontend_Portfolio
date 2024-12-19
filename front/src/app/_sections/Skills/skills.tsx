import SkillsItem from "@/components/Section/Skills/SkillsItem";
import styles from "./skills.module.scss";
import {
  SkillsItemContent,
  SkillsItemType,
  TechStackEnum,
} from "@/type/Skills/SkillsItem.type";

export default function Skills() {
  const SkillsFamiliar: SkillsItemContent = [
    { tech: TechStackEnum.NEXT, acquaint: 80 },
    { tech: TechStackEnum.REACT, acquaint: 70 },
    { tech: TechStackEnum.HTML, acquaint: 75 },
    { tech: TechStackEnum.CSS, acquaint: 70 },
    { tech: TechStackEnum.SASS, acquaint: 60 },
    { tech: TechStackEnum.GITHUB, acquaint: 65 },
    { tech: TechStackEnum.GITHUB_ACTIONS, acquaint: 60 },
    { tech: TechStackEnum.JAVASCRIPT, acquaint: 65 },
    { tech: TechStackEnum.TYPESCRIPT, acquaint: 70 },
    { tech: TechStackEnum.ZUSTAND, acquaint: 60 },
  ];
  const SkillsExperienced: SkillsItemContent = [
    { tech: TechStackEnum.C_S, acquaint: 30 },
    { tech: TechStackEnum.JENKINS, acquaint: 20 },
    { tech: TechStackEnum.MYSQL, acquaint: 20 },
    { tech: TechStackEnum.QUERY, acquaint: 15 },
    { tech: TechStackEnum.REDUX, acquaint: 30 },
    { tech: TechStackEnum.STYLED_COMPONENTS, acquaint: 40 },
    { tech: TechStackEnum.TAILWIND, acquaint: 25 },
    { tech: TechStackEnum.UNITY, acquaint: 30 },
    { tech: TechStackEnum.VERCEL, acquaint: 30 },
    { tech: TechStackEnum.WEBGL, acquaint: 25 },
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
