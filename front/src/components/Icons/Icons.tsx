import { IconsProps, IconsType } from "@/type/Icons/Icons.type";
import {
  FaGithub,
  FaGraduationCap,
  FaHouseChimney,
  FaPhone,
  FaRegCalendar,
  FaRegEnvelope,
  FaUser,
} from "react-icons/fa6";

import styles from "./Icons.module.scss";

export default function Icons({ src, size }: IconsProps) {
  const Icon = {
    FaUser: <FaUser size={size ? size : 10} />,
    FaRegCalendar: <FaRegCalendar size={size ? size : 10} />,
    FaHouseChimney: <FaHouseChimney size={size ? size : 10} />,
    FaPhone: <FaPhone size={size ? size : 10} />,
    FaRegEnvelope: <FaRegEnvelope size={size ? size : 10} />,
    FaGraduationCap: <FaGraduationCap size={size ? size : 10} />,
    FaGithub: <FaGithub size={size ? size : 10} />,
  };

  return <div className={styles.icon}>{Icon[src]}</div>;
}
