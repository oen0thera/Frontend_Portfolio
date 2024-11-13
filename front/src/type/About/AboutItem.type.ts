import { ReactElement } from "react";

export type AboutItemProps = {
  image?: string;
  content: AboutItemContent;
  type: AboutItemType;
};

export enum AboutItemType {
  PROFILE = "PROFILE",
}

export type AboutItemContent = AboutItemProfileContent;

export type AboutItemProfileContent = {
  name: string;
  birth: Date;
  residence: string;
  phone: string;
  email: string;
  education: ReactElement;
  github: ReactElement;
};

export enum AboutItemProfileEnum {
  name = "이름",
  birth = "생년월일",
  residence = "거주지",
  phone = "연락처",
  email = "이메일",
  education = "학력",
  github = "깃허브",
}
