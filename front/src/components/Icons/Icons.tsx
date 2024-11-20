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

export default function Icons({ src }: IconsProps) {
  const Icon = {
    FaUser: <FaUser width={10} height={10} />,
    FaRegCalendar: <FaRegCalendar width={10} height={10} />,
    FaHouseChimney: <FaHouseChimney width={10} height={10} />,
    FaPhone: <FaPhone width={10} height={10} />,
    FaRegEnvelope: <FaRegEnvelope width={10} height={10} />,
    FaGraduationCap: <FaGraduationCap width={10} height={10} />,
    FaGithub: <FaGithub width={10} height={10} />,
  };

  return <div className={styles.icon}>{Icon[src]}</div>;
}
