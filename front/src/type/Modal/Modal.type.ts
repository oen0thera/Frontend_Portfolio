import { ProjectsItemProps } from "@/type/Projects/ProjectsItem.type";

export enum ModalType {
  TIMELINE = "timeline",
  EMAIL = "e-mail",
}
export type ModalContent = {
  type: ModalType;
  content: ProjectsItemProps[] | null;
};
