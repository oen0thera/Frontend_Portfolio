import { TechStackEnum } from "@/type/Skills/SkillsItem.type";

export type ProjectsItemProps = {
  name: string;
  preview: string;
  description: string;
  tech: TechStackEnum[];
  links?: ProjectLink;
  time: string;
  type: string;
};

export type ProjectLink = {
  repository?: string;
  production?: string;
};
