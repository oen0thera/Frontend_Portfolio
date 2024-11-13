import Image from "next/image";
import styles from "./page.module.scss";
import About from "@/app/_sections/About/about";

export default function Home() {
  return <div className={styles.page_container}>{<About />}</div>;
}
