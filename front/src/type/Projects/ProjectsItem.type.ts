import { SkillsItemContent } from "@/type/Skills/SkillsItem.type";

export type ProjectsItemProps = {
  name: string;
  preview: string;
  description: string;
  tech: SkillsItemContent;
  links?: ProjectLink;
  time: string;
  type: string;
};

export type ProjectLink = {
  repository?: string;
  production?: string;
};
