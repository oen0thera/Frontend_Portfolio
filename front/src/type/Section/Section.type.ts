import { RefObject } from "react";

export const SectionList = ["About", "Skills", "Projects", "Contact"] as const;
export type SectionType = (typeof SectionList)[number];

export type SectionProps = {
  intersectingSections: SectionType[];
  sections: React.ReactElement[];
  sectionRefs: Record<SectionType, RefObject<HTMLDivElement>>;
};
