export type SkillsItemProps = {
  content: SkillsItemContent;
  type: SkillsItemType;
};

export type SkillsItemContent = SkillsItem[];
export type SkillsItem = { tech: TechStackEnum; acquaint: number };
export enum SkillsItemType {
  FAMILIAR = "FAMILIAR",
  EXPERIENCED = "EXPERIENCED",
}
export enum TechStackEnum {
  NEXT = "Next.js",
  REACT = "React",
  JAVASCRIPT = "Javascript",
  TYPESCRIPT = "Typescript",
  ZUSTAND = "Zustand",
  REDUX = "Redux",
  JENKINS = "Jenkins",
  GITHUB = "Github",
  GITHUB_ACTIONS = "Github Actions",
  HTML = "Html",
  CSS = "CSS",
  SASS = "SASS",
  UNITY = "Unity",
  C_S = "C#",
  QUERY = "React Query",
  WEBGL = "Web GL",
  VERCEL = "Vercel",
  TAILWIND = "Tailwind CSS",
  MYSQL = "MySQL",
  STYLED_COMPONENTS = "styled-components",
}

export enum TechStackColor {
  NEXT = "#00cc66",
  REACT = "#00ffff",
  JAVASCRIPT = "#ffff00",
  TYPESCRIPT = "#0000ff",
  ZUSTAND = "#660033",
  REDUX = "#6600cc",
  JENKINS = "#cc0000",
  GITHUB = "#000000",
  GITHUB_ACTIONS = "#cccccc",
  HTML = "#ff6600",
  CSS = "#3399cc",
  SASS = "#ff0099",
  UNITY = "#ffffff",
  C_S = "#9900ff",
  QUERY = "#000033",
  WEBGL = "#ff0033",
  VERCEL = "#ff3300",
  TAILWIND = "#00ffff",
  MYSQL = "#ffcc00",
  STYLED_COMPONENTS = "#ff99ff",
}
